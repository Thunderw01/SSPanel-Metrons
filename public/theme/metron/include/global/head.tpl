<meta charset="UTF-8" />
<meta name="renderer" content="webkit" />
<meta name="description" content="顷刻加载，快如闪电。专为中国用户优化加速的优质网络中继服务商。">
<meta name="keywords" content="网络加速,网络中继,访问github慢,优化访问github">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="format-detection" content="telephone=no,email=no" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<link href="{$metron['assets_url']}/css/fonts.css?family=Poppins:300,400,500,600,700" rel="stylesheet" />
{if $theme_style === 'dark'}
    <link href="{$metron['assets_url']}/css/style/dark/plugins.dark.css" rel="stylesheet" type="text/css" />
    <link href="{$metron['assets_url']}/css/style/dark/giatun.dark.css" rel="stylesheet" type="text/css" />
    <link href="{$metron['assets_url']}/css/style/dark/style.dark.css" rel="stylesheet" type="text/css" />
{else}
    <link href="{$metron['assets_url']}/css/style/white/plugins.white.css" rel="stylesheet" type="text/css" />
    <link href="{$metron['assets_url']}/css/style/white/giatun.white.css" rel="stylesheet" type="text/css" />
    <link href="{$metron['assets_url']}/css/style/white/style.white.css" rel="stylesheet" type="text/css" />
{/if}
<style>
.header-logo-mobile{
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 60px;
    line-height: 60px;
    display:none;
}
.header-logo-mobile a{
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 60px;
    line-height: 60px;
    color:#000;
}
.header-logo-mobile a h2{
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 700;
    color: #000;
}
.menu-nav{
    padding-top:0 !important
}
.menu-nav li.menu-header{
    padding: 3px 15px;
    color: #a1a8ae;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-weight: 600;
    display: none;
}
.menu-link{
    position: relative;
    display: flex;
    align-items: center !important;
    height: 50px;
    padding: 0 20px;
    width: 100%;
    letter-spacing: .3px;
    color: #78828a;
    text-decoration: none;
}
.menu-text{
    margin-top: 3px;
    font-size: 14px;
}
.menu-text strong{
    font-weight: unset;
}
.menu-link i{
   display:none;
    width: 28px;
    margin-right: 20px;
    text-align: center;
    font-size: 13px;
}
.header-menu .menu-nav > .menu-item .menu-link .menu-icon{
   display:none
}
@media screen and (max-width:600px){
  .menu-link i{
    display:inline-block;
  }
  .header-menu .menu-nav > .menu-item .menu-link .menu-icon{
   display: flex
  }
  .header-logo-mobile{
    display:block
  }
    .menu-nav li.menu-header{
        display: block;
    }
}

</style>
<link href="/favicon.ico" rel="shortcut icon" />
</head>
<body id="kt_body" {if $theme_style !== 'dark'}style="background-image: url({$metron['user_background_top']})"{/if} class="quick-panel-right demo-panel-right offcanvas-right header-fixed subheader-enabled page-loading">
<div id="kt_header_mobile" class="header-mobile">
    <!--开始::手机端Logo
    <a href="/user">
        <img alt="Logo" src="logo-letter-1.png" class="logo-default max-h-30px" />
    </a>-->
        <h1 class="logo-default title-3d">
            <button class="btn p-0 burger-icon burger-icon-left ml-4" id="kt_header_mobile_toggle">
                <span></span>
            </button>
        </h1>
    <div class="d-flex align-items-center">
        <div class="dropdown" style="align-items: center">
            <ul class="navbar-nav navbar-right">

                <li class="dropdown" style="align-items: center">
                    <a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg nav-link-user text-white" aria-expanded="false">
                        <img alt="image" src="{$user->gravatar}" class="rounded-circle mr-1" width="30">

                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a href="/user/setting/safe" class="dropdown-item has-icon">
                            <i class="fas fa-user mr-4" style="color: #000000"></i> 我的账号
                        </a>
                        <a href="/user/code" class="dropdown-item has-icon">
                            <i class="fas fa-wallet mr-4" style="color: #000000"></i> 我的钱包
                        </a>
                        <a href="/user/setting/invite" class="dropdown-item has-icon">
                            <i class="fas fa-laugh-squint mr-4" style="color: #000000"></i> 邀请注册
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="/user/logout" class="dropdown-item has-icon text-danger">
                            <i class="fas fa-sign-out-alt mr-4" style="color: #000000"></i> 退出登录
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>

        <!--结束::手机端Logo-->
{*        <div class="d-flex align-items-center">*}

{*            <button class="btn btn-icon btn-hover-transparent-white p-0 ml-3" id="kt_header_mobile_topbar_toggle">*}
{*                    <span class="svg-icon svg-icon-xl">*}
{*                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">*}
{*                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*}
{*                                <polygon points="0 0 24 0 24 24 0 24" />*}
{*                                <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />*}
{*                                <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fill-rule="nonzero" />*}
{*                            </g>*}
{*                        </svg>*}
{*                    </span>*}
{*            </button>*}
{*        </div>*}
</div>
