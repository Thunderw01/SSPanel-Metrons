<?php

namespace App\Controllers\Android;

use App\Controllers\BaseController;
use App\Metron\Metron;
use App\Models\Node;
use App\Models\Relay;
use App\Models\Shop;
use App\Models\StreamMedia;
use App\Models\User;
use App\Services\MetronSetting;
use App\Utils\DatatablesHelper;
use App\Utils\Tools;
use App\Utils\URL;


/**
 *  AuthController
 */
class NodeController extends BaseController
{

    public function getNode($request, $response){
        $user        = $this->user;
        $nodes       = Node::where('type', 1)->orderBy('node_class')->orderBy('name')->get();

        $db = new DatatablesHelper();
        $infoLogs = $db->query('SELECT * FROM ( SELECT * FROM `ss_node_info` WHERE log_time > ' . (time() - 300) . ' ORDER BY id DESC LIMIT 999999999999 ) t GROUP BY node_id ORDER BY id DESC');
        $onlineLogs = $db->query('SELECT * FROM ( SELECT * FROM `ss_node_online_log` WHERE log_time > ' . (time() - 300) . ' ORDER BY id DESC LIMIT 999999999999 ) t GROUP BY node_id ORDER BY id DESC');

        $array_nodes = [];
        $nodes_muport = [];

        foreach ($nodes as $node) {
            if ($user->is_admin == 0 && $node->node_group != $user->node_group && $node->node_group != 0) {
                continue;
            }

            if ($node->sort == 9) {
                $mu_user             = User::where('port', '=', $node->server)->first();
                $mu_user->obfs_param = $this->user->getMuMd5();
                $nodes_muport[]      = ['server' => $node, 'user' => $mu_user];
                continue;
            }

            $array_node               = [];
            $array_node['raw_node']   = $node;
            $array_node['id']         = $node->id;
            $array_node['class']      = $node->node_class;
            $server = explode(';',$node->server);
//            $array_node['ping'] = $this->ping($server[0]);
            $array_node['name']       = $node->name;
            $array_node['sort']       = $node->sort;
            $array_node['info']       = $node->info;
            $array_node['mu_only']    = $node->mu_only;
            $array_node['group']      = $node->node_group;

            $array_node['unlock'] = [];
            if (MetronSetting::get('show_stream_media')) {
                $unlock = StreamMedia::where('node_id', $node->id)
                    ->orderBy('id', 'desc')
                    ->where('created_at', '>', time() - 86460) // 只获取最近一天零一分钟内上报的数据
                    ->first();
                if ($unlock != null) {
                    $details = json_decode($unlock->result, true);
                    $details = str_replace('Originals Only', '仅限自制', $details);
                    $details = str_replace('Oversea Only', '仅限海外', $details);
                    $array_node['unlock'] = [
                        'node_name' => $node->name,
                        'created_at' => $unlock->created_at,
                        'unlock_item' => $details
                    ];
                }

                if (MetronSetting::get('streaming_media_unlock_multiplexing') != null ) {
                    $value = MetronSetting::get('streaming_media_unlock_multiplexing');
                    $array_keys = array_keys($value);
                    if (in_array($node->id, $array_keys)){
                        $key_node = Node::where('id', $node->id)->first();
                        $value_node = StreamMedia::where('node_id', $value[$node->id])
                            ->orderBy('id', 'desc')
                            ->where('created_at', '>', time() - 86460) // 只获取最近一天零一分钟内上报的数据
                            ->first();

                        if ($value_node != null) {
                            $details = json_decode($value_node->result, true);
                            $details = str_replace('Originals Only', '仅限自制', $details);
                            $details = str_replace('Oversea Only', '仅限海外', $details);

                            $array_node['unlock'] = [
                                'node_name' => $key_node->name,
                                'created_at' => $value_node->created_at,
                                'unlock_item' => $details
                            ];
                        }
                    }
                }
            }

            if ($node->sort == 13) {
                $server = Tools::ssv2Array($node->server);
                $array_node['server'] = $server['add'];
            } else {
                $array_node['server'] = $node->getServer();
            }

            $regex = $_ENV['flag_regex'];
            $matches = [];
            preg_match($regex, $node->name, $matches);
            if (isset($matches[0])) {
                $array_node['flag'] = $matches[0];
            } else {
                $array_node['flag'] = 'un';
            }

            $array_node['online_user'] = 0;

            foreach ($onlineLogs as $log) {
                if ($log['node_id'] != $node->id) {
                    continue;
                }
                if (in_array($node->sort, array(0, 7, 8, 10, 11, 12, 13, 14, 15))) {
                    $array_node['online_user'] = $log['online_user'];
                } else {
                    $array_node['online_user'] = -1;
                }
                break;
            }

            // check node status
            // 0: new node; -1: offline; 1: online
            $node_heartbeat = $node->node_heartbeat + 300;
            $array_node['online'] = -1;
            if (!in_array($node->sort, array(0, 7, 8, 10, 11, 12, 13, 14, 15)) || $node_heartbeat == 300) {
                $array_node['online'] = 0;
            } elseif ($node_heartbeat > time()) {
                $array_node['online'] = 1;
            }

            $array_node['latest_load'] = -1;
            foreach ($infoLogs as $log) {
                if ($log['node_id'] == $node->id) {
                    $array_node['latest_load'] = (explode(' ', $log['load']))[0] * 100;
                    break;
                }
            }

            $array_node['traffic_used'] = (int) Tools::flowToGB($node->node_bandwidth);
            $array_node['traffic_limit'] = (int) Tools::flowToGB($node->node_bandwidth_limit);
            if ($node->node_speedlimit == 0.0) {
                $array_node['bandwidth'] = 0;
            } elseif ($node->node_speedlimit >= 1024.00) {
                $array_node['bandwidth'] = round($node->node_speedlimit / 1024.00, 1) . 'Gbps';
            } else {
                $array_node['bandwidth'] = $node->node_speedlimit . 'Mbps';
            }

            $array_node['traffic_rate'] = $node->traffic_rate;
            $array_node['status']       = $node->status;

            $array_nodes[] = $array_node;
        }

        $res = [
            'code' => 200,
            'data' => $array_nodes,
            'msg' => '密码请大于8位',
        ];
        return $response->getBody()->write(json_encode($res));

    }

    private function ping($ip) {
        if (PATH_SEPARATOR==':'){
            $ping_cmd = "ping -c 3 -w 5 " . $ip;
        }else{
            $ping_cmd = "ping -n 3 -w 5 " . $ip;
        }
        exec($ping_cmd, $info);

        $ping_time_line = end($info);
        $ping_time = explode("=", $ping_time_line)[1];
        $ping_time_min = explode("/", $ping_time)[0] / 1000.0;
        $ping_time_avg = explode("/", $ping_time)[1] / 1000.0;
        $ping_time_max = explode("/", $ping_time)[2] / 1000.0;

//        $result = array();
//        $result['ping_min'] = $ping_time_min;
//        $result['ping_avg'] = $ping_time_avg;
//        $result['ping_max'] = $ping_time_max;
        return $ping_time_min;
    }



    public function getProduct($request, $response){
        $shops = Shop::where('status', 1)->orderBy('name')->get();
        $lists = [];
        /** @var Shop $shop */
        foreach ($shops as $shop){
            $item = [
                'id' => $shop['id'],
                'price' => $shop['price'],
                'class' => $shop->user_class(),
                'class_expire' => $shop->user_class(),
                'bandwidth' => $shop->bandwidth(),
                'connect' => $shop->connector(),
                'speedlimit' => $shop->speedlimit(),
                'reset' => $shop->reset(),
            ];
            $lists[] = $item;
        }
        $res = [
            'code' => 200,
            'data' => $lists,
            'msg' => '获取成功',
        ];
        return $response->getBody()->write(json_encode($res,JSON_UNESCAPED_UNICODE));
    }



}
