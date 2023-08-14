<?php

namespace App\Services\Gateway;

use App\Services\View;
use App\Services\Auth;
use App\Services\Config;
use App\Models\Paylist;

class XgPay extends AbstractPayment
{

    private $payUrl;
    private $authKey;

    private $customerId;

    /**
     * @return mixed
     */
    public function getPayUrl(){
        return $this->payUrl;
    }

    /**
     * @param mixed $payUrl
     */
    public function setPayUrl($payUrl): void{
        $this->payUrl = $payUrl;
    }



    /**
     * @return mixed
     */
    public function getAuthKey(){
        return $this->authKey;
    }

    /**
     * @param mixed $authKey
     */
    public function setAuthKey($authKey): void{
        $this->authKey = $authKey;
    }

    /**
     * @return mixed
     */
    public function getCustomerId(){
        return $this->customerId;
    }

    /**
     * @param mixed $customerId
     */
    public function setCustomerId($customerId): void{
        $this->customerId = $customerId;
    }




    public function __construct(){
        $this->setCustomerId(Config::get("xgpay_customerid"));
        $this->setAuthKey(Config::get("xgpay_auth"));
        $this->setPayUrl(Config::get("xgpay_url"));
    }



    public function purchase($price, $buyshop, $paylist_id = 0){
        if ($paylist_id == 0 && $price <= 0) {
            return ['errcode' => -1, 'errmsg' => '非法的金额'];
        }
        $user = Auth::getUser();
        if ($paylist_id == 0) {
            $pl = new Paylist();
            $pl->userid = $user->id;
            $pl->total = $price;
            if ($buyshop['id'] != 0) $pl->shop = json_encode($buyshop);
            $pl->datetime = time();
            $pl->tradeno = self::generateGuid();
            $pl->save();
        } else {
            $pl = Paylist::find($paylist_id);
            if ($pl->status === 1){
                return ['errcode' => -1, 'errmsg' => "该订单已交易完成"];
            }
        }
        $payType = $this->isMobile() ? 'alipaywap': 'alipay';
        $params = [
            'version' => '1.0',
            'customerid' => $this->getCustomerId(),
            'total_fee' => sprintf("%.2f",$price),
            'sdorderno' => $pl->tradeno,
            'paytype' => $payType,
            'notifyurl' => Config::get('baseUrl') . '/payment/notify/mgate',
            'returnurl' => Config::get('baseUrl') . '/user/payment/return'
        ];
        $sign=md5('version=1.0&customerid='.$params['customerid'].'&total_fee='.$params['total_fee'].'&sdorderno='.$params['sdorderno'].'&notifyurl='.$params['notifyurl'].'&returnurl='.$params['returnurl'].'&'.$this->getAuthKey());
        $params['sign'] = $sign;
        return [
            'errcode' => 0, // 0:qrcode 1:url
            'pid' => $pl->tradeno,
            'paytype' => $payType,
            'url' => $this->getPayUrl() .'?' . http_build_query($params)
        ];
    }

    public function notify($request, $response, $args){
	    $status = +$request->getParam('status');
        if($status !== 1){
            echo 'FAIL';die();
        }
        $sign = $request->getParam('sign');
        $customerId =  $this->getCustomerId();
        $sdOrderNo = $request->getParam('sdorderno');
        $sdPayNo = $request->getParam('sdpayno');
        $totalFee =  $request->getParam('total_fee');
        $payType = $request->getParam('paytype');
        $sign1 = md5("customerid=$customerId&status=1&sdpayno=$sdPayNo&sdorderno=$sdOrderNo&total_fee=$totalFee&paytype=$payType&" .$this->getAuthKey());
        if ($sign !== $sign1) {
            echo 'FAIL';die();
        }
//        $pl = Paylist::where('tradeno', $sdOrderNo)->first();
//        $pl->status = 1;
//        $shopinfo = json_decode($pl->shop, true);
//        $shopinfo['status'] = 1;
//        $pl->shop = json_encode($shopinfo, JSON_UNESCAPED_UNICODE);
//        $pl->save();
        $this->postPayment($sdOrderNo,  '支付宝  ' .$payType . ' 订单号：' .$sdOrderNo);
        echo "success";
    }

    public function getPurchaseHTML()
    {
        return View::getSmarty()->fetch('user/mgate.tpl');
    }

    public function getReturnHTML($request, $response, $args)
    {
        return 0;
    }

    public function getStatus($request, $response, $args)
    {
        $return = [];
        $p = Paylist::where('tradeno', $_POST['pid'])->first();
        $return['ret'] = 1;
        $return['result'] = $p->status;
        return json_encode($return);
    }

    private function isMobile(){
        $_SERVER['ALL_HTTP'] = isset($_SERVER['ALL_HTTP']) ? $_SERVER['ALL_HTTP'] : '';
        $mobile_browser = '0';
        if (preg_match('/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|phone|iphone|ipad|ipod|android|xoom)/i', strtolower($_SERVER['HTTP_USER_AGENT'])))
            $mobile_browser++;
        if ((isset($_SERVER['HTTP_ACCEPT'])) and (strpos(strtolower($_SERVER['HTTP_ACCEPT']), 'application/vnd.wap.xhtml+xml') !== false))
            $mobile_browser++;
        if (isset($_SERVER['HTTP_X_WAP_PROFILE']))
            $mobile_browser++;
        if (isset($_SERVER['HTTP_PROFILE']))
            $mobile_browser++;
        $mobile_ua = strtolower(substr($_SERVER['HTTP_USER_AGENT'], 0, 4));
        $mobile_agents = array(
            'w3c ', 'acs-', 'alav', 'alca', 'amoi', 'audi', 'avan', 'benq', 'bird', 'blac',
            'blaz', 'brew', 'cell', 'cldc', 'cmd-', 'dang', 'doco', 'eric', 'hipt', 'inno',
            'ipaq', 'java', 'jigs', 'kddi', 'keji', 'leno', 'lg-c', 'lg-d', 'lg-g', 'lge-',
            'maui', 'maxo', 'midp', 'mits', 'mmef', 'mobi', 'mot-', 'moto', 'mwbp', 'nec-',
            'newt', 'noki', 'oper', 'palm', 'pana', 'pant', 'phil', 'play', 'port', 'prox',
            'qwap', 'sage', 'sams', 'sany', 'sch-', 'sec-', 'send', 'seri', 'sgh-', 'shar',
            'sie-', 'siem', 'smal', 'smar', 'sony', 'sph-', 'symb', 't-mo', 'teli', 'tim-',
            'tosh', 'tsm-', 'upg1', 'upsi', 'vk-v', 'voda', 'wap-', 'wapa', 'wapi', 'wapp',
            'wapr', 'webc', 'winw', 'winw', 'xda', 'xda-'
        );
        if (in_array($mobile_ua, $mobile_agents))
            $mobile_browser++;
        if (strpos(strtolower($_SERVER['ALL_HTTP']), 'operamini') !== false)
            $mobile_browser++;
        // Pre-final check to reset everything if the user is on Windows
        if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']), 'windows') !== false)
            $mobile_browser = 0;
        // But WP7 is also Windows, with a slightly different characteristic
        if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']), 'windows phone') !== false)
            $mobile_browser++;
        if ($mobile_browser > 0)
            return true;
        else
            return false;
    }
}
