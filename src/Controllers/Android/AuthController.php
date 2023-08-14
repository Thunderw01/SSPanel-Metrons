<?php

namespace App\Controllers\Android;

use App\Controllers\BaseController;
use Ramsey\Uuid\Uuid;
use App\Models\{
    User,
    LoginIp,
    InviteCode,
    EmailVerify
};
use App\Utils\{
    GA,
    Hash,
    Check,
    Tools,
    Radius,
    Geetest,
    TelegramSessionManager
};
use App\Services\{Auth, Mail, Config, MetronSetting, RedisClient};
use voku\helper\AntiXSS;
use Exception;
use function App\Controllers\random_int;

/**
 *  AuthController
 */
class AuthController extends BaseController
{

    public function getCode($request, $response){
        $phone = $request->getParam('phone');
        $api = $_ENV['sms']['url'];
        $user = $_ENV['sms']['user'];
        $pwd = md5($_ENV['sms']['pwd']);
        $code = rand(100000,999999);
        $content="【haitun】验证码为:{$code}，有效时间5分钟。";//要发送的短信内容
        $redis = RedisClient::getInstance();
        $redis->set('code_'. $phone, $code, 300);
        $sendurl = $api."sms?u=".$user."&p=".$pwd."&m=".$phone."&c=".urlencode($content);
        $result =file_get_contents($sendurl) ;
        $json = [
            'code' => 200,
            'data' => [],
            'msg' => '短信发送成功',
        ];

        if (+$result !== 0){
            $json = [
                'code' => 501,
                'data' => [],
                'msg' => '短信发送失败',
            ];
        }
        return $response->getBody()->write(json_encode($json));
    }

    public function register($request, $response, $next){
        if (Config::getconfig('Register.string.Mode') === 'close') {
            $res = [
                'code' => 502,
                'data' => [],
                'msg' => '未开发注册',
            ];
            return $response->getBody()->write(json_encode($res));
        }

        $name = $request->getParam('name') ?: $this->getRandModUsername();

        $passwd = $request->getParam('passwd');
        $phone = $request->getParam('phone');
        $code = $request->getParam('code');
        $code = trim($code);//邀请人code
        $verifyCode = $request->getParam('verifyCode');
        $redis = RedisClient::getInstance();

        $cacheCode = $redis->get('code_'.$phone);
        if (!$cacheCode){
            $res = [
                'code' => 500,
                'data' => [],
                'msg' => '验证码已过期',
            ];
            return $response->getBody()->write(json_encode($res));
        }

        if (+$cacheCode !== +$verifyCode){
            $res = [
                'code' => 500,
                'data' => [],
                'msg' => '验证码不正确',
            ];
            return $response->getBody()->write(json_encode($res));
        }

        // check phone
        $user = User::where('phone', $phone)->first();
        if ($user != null) {
            $res = [
                'code' => 500,
                'data' => [],
                'msg' => '该手机已被注册',
            ];
            return $response->getBody()->write(json_encode($res));
        }

        // check pwd length
        if (strlen($passwd) < 8) {
            $res = [
                'code' => 500,
                'data' => [],
                'msg' => '密码请大于8位',
            ];
            return $response->getBody()->write(json_encode($res));
        }

        $res = $this->register_helper($name, $phone, $passwd, $code);
        return $response->getBody()->write(json_encode($res));
    }

    private function getRandModUsername(){
        $user = '';
        $lchar = 0;
        $char = 0;
        for ($i = 0; $i < 10; $i++) {
            while ($char == $lchar) {
                $char = rand(48, 109);
                if ($char > 57) $char += 7;
                if ($char > 90) $char += 6;
            }
            $user .= chr($char);
            $lchar = $char;
        }
        return $user;
    }



    public function register_helper($name, $phone, $passwd, $code)
    {


        //if (User::where("reg_ip", $_SERVER['REMOTE_ADDR'])->count() >= 10){
        //    $res['ret'] = 0;
        //    $res['msg'] = '请不要频繁注册账号！';
        //    return $res;
        // }

        //dumplin：1、邀请人等级为0则邀请码不可用；2、邀请人invite_num为可邀请次数，填负数则为无限
        $c = InviteCode::where('code', $code)->first();
        if ($c == null) {
            if (Config::getconfig('Register.string.Mode') === 'invite' && MetronSetting::get('register_code') === true) {
                $res = [
                    'code' => 500,
                    'data' => [],
                    'msg' => '邀请码无效',
                ];
                return $res;
            }
        } elseif ($c->user_id != 0) {
            $gift_user = User::where('id', '=', $c->user_id)->first();
            if ($gift_user == null) {
                $res = [
                    'code' => 500,
                    'data' => [],
                    'msg' => '邀请人不存在',
                ];
                return $res;
            }

            if ($gift_user->invite_num == 0) {
                $res = [
                    'code' => 500,
                    'data' => [],
                    'msg' => '邀请人可用邀请次数为0',
                ];
                return $res;
            }
        }

        // do reg user
        $user                       = new User();
        $antiXss                    = new AntiXSS();
        $user->user_name            = $antiXss->xss_clean($name);
        $user->email                = '';
        $user->phone                = $phone;
        $user->pass                 = Hash::passwordHash($passwd);
        $user->passwd               = Tools::genRandomChar(16);
        $user->port                 = Tools::getAvPort();
        $user->t                    = 0;
        $user->u                    = 0;
        $user->d                    = 0;
        $user->method               = Config::getconfig('Register.string.defaultMethod');
        $user->protocol             = Config::getconfig('Register.string.defaultProtocol');
        $user->protocol_param       = Config::getconfig('Register.string.defaultProtocol_param');
        $user->obfs                 = Config::getconfig('Register.string.defaultObfs');
        $user->obfs_param           = Config::getconfig('Register.string.defaultObfs_param');
        $user->forbidden_ip         = $_ENV['reg_forbidden_ip'];
        $user->forbidden_port       = $_ENV['reg_forbidden_port'];
        $user->transfer_enable      = Tools::toGB((int) Config::getconfig('Register.string.defaultTraffic'));
        $user->invite_num           = (int) Config::getconfig('Register.string.defaultInviteNum');
        $user->auto_reset_day       = $_ENV['reg_auto_reset_day'];
        $user->auto_reset_bandwidth = $_ENV['reg_auto_reset_bandwidth'];
        $user->money                = 0;
        $user->sendDailyMail        = Config::getconfig('Register.bool.send_dailyEmail');

        //dumplin：填写邀请人，写入邀请奖励
        $user->ref_by = 0;
        if (($c != null) && $c->user_id != 0) {
            $gift_user = User::where('id', '=', $c->user_id)->first();
            $user->ref_by = $c->user_id;
            $user->money = (int) Config::getconfig('Register.string.defaultInvite_get_money');
            $gift_user->transfer_enable += $_ENV['invite_gift'] * 1024 * 1024 * 1024;
            --$gift_user->invite_num;
            $gift_user->save();
        }

        $user->class_expire     = date('Y-m-d H:i:s', time() + (int) Config::getconfig('Register.string.defaultClass_expire') * 3600);
        $user->class            = (int) Config::getconfig('Register.string.defaultClass');
        $user->node_connector   = (int) Config::getconfig('Register.string.defaultConn');
        $user->node_speedlimit  = (int) Config::getconfig('Register.string.defaultSpeedlimit');
        $user->expire_in        = date('Y-m-d H:i:s', time() + (int) Config::getconfig('Register.string.defaultExpire_in') * 86400);
        $user->reg_date         = date('Y-m-d H:i:s');
        $user->reg_ip           = $_SERVER['REMOTE_ADDR'];
        $user->plan             = 'A';
        $user->theme            = $_ENV['theme'];
        $user->uuid             = Uuid::uuid3(Uuid::NAMESPACE_DNS, ($user->passwd) . $_ENV['key'])->toString();
        $groups                 = explode(',', $_ENV['random_group']);

        $user->node_group       = $groups[array_rand($groups)];

        $ga = new GA();
        $secret = $ga->createSecret();

        $user->ga_token = $secret;
        $user->ga_enable = 0;
        if (MetronSetting::get('c_rebate') === true) {
            $user->c_rebate     = 1;
        }

        if ($user->save()) {
//
//            Auth::login($user->id, 3600);
            $this->logUserIp($user->id, $_SERVER['REMOTE_ADDR']);

            $res = [
                'code' => 200,
                'data' => [],
                'msg' => '注册成功',
            ];

            Radius::Add($user, $user->passwd);
        }
        return $res;
    }


    public function login($request, $response)
    {

        if ($this->user->isLogin){
            $user = Auth::getUser();
            $res = [
                'code' => 500,
                'data' => $user->getUserInfo(),
                'msg' => '已登录，请勿重复登录',
            ];
            return $response->getBody()->write(json_encode($res,JSON_UNESCAPED_UNICODE));
        }

        $phone = trim($request->getParam('phone'));
        $passwd = $request->getParam('passwd');
        // Handle Login
        $user = User::where('phone', '=', $phone)->first();
        if ($user == null) {
            $res = [
                'code' => 500,
                'data' => [],
                'msg' => '未注册',
            ];
            return $response->getBody()->write(json_encode($res,JSON_UNESCAPED_UNICODE));
        }
        if (!Hash::checkPassword($user->pass, $passwd)) {
            $res = [
                'code' => 500,
                'data' => [],
                'msg' => '手机号或者密码错误',
            ];
            $loginIP = new LoginIp();
            $loginIP->ip = $_SERVER['REMOTE_ADDR'];
            $loginIP->userid = $user->id;
            $loginIP->datetime = time();
            $loginIP->type = 1;
            $loginIP->save();
            return $response->getBody()->write(json_encode($res,JSON_UNESCAPED_UNICODE));
        }
        $time = 3600 * 24;

        Auth::login($user->id, $time);

        $loginIP = new LoginIp();
        $loginIP->ip = $_SERVER['REMOTE_ADDR'];
        $loginIP->userid = $user->id;
        $loginIP->datetime = time();
        $loginIP->type = 0;
        $loginIP->save();

        return $response->getBody()->write(json_encode([
            'code' => 200,
            'data' => $user->getUserInfo(),
            'msg' => '登录成功',
        ],JSON_UNESCAPED_UNICODE));

    }


    private function logUserIp($id, $ip)
    {
        $loginip = new LoginIp();
        $loginip->ip = $ip;
        $loginip->userid = $id;
        $loginip->datetime = time();
        $loginip->type = 0;
        $loginip->save();
    }


    public function logout($request, $response, $next){
        Auth::logout();
        return $response->getBody()->write(json_encode([
            'code' => 200,
            'data' => [],
            'msg' => '退出登录成功',
        ],JSON_UNESCAPED_UNICODE));
    }

}
