<?php

namespace App\Services;

use App\Models\Model;
use App\Models\User;
use App\Models\Paylist;      //Paylist
use App\Models\Code;

//LoginIp

class Anylogs extends Model
{

    public function getNologinUser()
    {
        return User::where('ssrlink', '=', null)->count();
    }

    public function getDetectLog()
    {
        return $this->getConnection()->table('detect_log')->count();
    }
    
    public function getNodeInfoLog()
    {
        return $this->getConnection()->table('ss_node_info')->count();
    }
    
    public function getNodeOnlineLog()
    {
        return $this->getConnection()->table('ss_node_online_log')->count();
    }
    
    public function getPaylist()
    {
        return Paylist::where('status', 0)->count();
    }
    
    public function getCodelist()
    {
        return code::where('isused', 1)->count();
    }
    
    public function getLoginIp()
    {
        return $this->getConnection()->table('login_ip')->count();
    }
}	