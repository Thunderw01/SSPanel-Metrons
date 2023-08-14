<meta charset="UTF-8"/>
<meta name="renderer" content="webkit"/>
<meta name="description" content="顷刻加载，快如闪电。专为中国用户优化加速的优质网络中继服务商。">
<meta name="keywords" content="网络加速,网络中继,访问github慢,优化访问github">
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="format-detection" content="telephone=no,email=no"/>
<meta name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"/>
<meta http-equiv="Cache-Control" content="no-siteapp"/>
<link href="{$metron['assets_url']}/css/fonts.css?family=Poppins:300,400,500,600,700" rel="stylesheet"/>
<link href="{$metron['assets_url']}/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css"/>
<link href="{$metron['assets_url']}/css/style.bundle.css" rel="stylesheet" type="text/css"/>
<link href="{$metron['assets_url']}/css/pages/auth/style-1.css" rel="stylesheet" type="text/css"/>
<link rel="shortcut icon" href="/favicon.ico"/>
<style>
    .background-walk-y {
        background-repeat: no-repeat;
        background-position: 0 0%;
        -webkit-animation-name: backgroundWalkY;
        animation-name: backgroundWalkY;
        -webkit-animation-duration: 70s;
        animation-duration: 70s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-direction: alternate;
        animation-direction: alternate;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        background-size: 100%;
    }

    @media (max-width: 1199.98px) {
        .background-walk-y {
            background-size: cover;
        }
    }

    .background-walk-x {
        background-repeat: no-repeat;
        background-position: 0 0%;
        -webkit-animation-name: backgroundWalkX;
        animation-name: backgroundWalkX;
        -webkit-animation-duration: 70s;
        animation-duration: 70s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-direction: alternate;
        animation-direction: alternate;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
    }

    @-webkit-keyframes backgroundWalkY {
        0% {
            background-position: 0 0%;
        }
        100% {
            background-position: 0 100%;
        }
    }

    @keyframes backgroundWalkY {
        0% {
            background-position: 0 0%;
        }
        100% {
            background-position: 0 100%;
        }
    }

    @-webkit-keyframes backgroundWalkX {
        0% {
            background-position: 0 0%;
        }
        100% {
            background-position: 100% 0;
        }
    }

    @keyframes backgroundWalkX {
        0% {
            background-position: 0 0%;
        }
        100% {
            background-position: 100% 0;
        }
    }

    @media screen and (max-width: 600px) {
        .overlay-gradient-bottom {
            display: none
        }
    }

    .index-1 {
        z-index: 1 !important;
    }

    .index-2 {
        z-index: 2 !important;
    }

    .index-3 {
        z-index: 3 !important;
    }

    .index-4 {
        z-index: 4 !important;
    }

    .index-5 {
        z-index: 5 !important;
    }

    .absolute-bottom-left {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .fv-plugins-message-container .fv-help-block {
        color: red !important;
    }

    input:-webkit-autofill {
        -webkit-text-fill-color: #000 !important
    }
    .font-weight-bold{
        font-weight: 700!important;
    }
    

    .embed-captcha .geetest_holder.geetest_wind .geetest_radar_tip, .geetest_holder.geetest_wind .geetest_success_radar_tip{
        color: #000000;
    }
</style>

</head>

<body id="kt_body"
      class="quick-panel-right demo-panel-right offcanvas-right header-fixed subheader-enabled page-loading">

<div class="d-flex flex-column flex-root">

    <div style="overflow:hidden" class="login login-1 login-signin-on d-flex flex-row-fluid" id="kt_login">
        <div class="d-flex flex-center bgi-size-cover bgi-no-repeat flex-row-fluid row"
             style="1background-image: url('{$metron['index_background_image']}');">

            <div class="col-lg-8 col-12 min-vh-100 background-walk-y position-relative overlay-gradient-bottom"
                 style="background-image: url('{$metron['index_background_image']}');">
                <div class="absolute-bottom-left index-2" style="left:10px">
                    <div class="text-light p-8 pb-2">
                        <div class="mb-5 pb-3">
                            <h1 class="mb-2 display-4 font-weight-bold message"></h1>
                            <h5 class="font-weight-normal text-muted-transparent">Bali, Indonesia</h5>
                        </div>
                        Photo by <a class="text-light" target="_blank" href="https://unsplash.com">Justin Kauffman</a> on <a class="text-light" target="_blank"
                               href="https://unsplash.com">Unsplash</a>
                    </div>
                </div>
            </div>


            <div class="col-lg-4 col-md-6 col-12 order-lg-1 min-vh-100 bg-white">
                <div class="p-4 m-3">

                    <div class="d-flex flex-center mb-15">
                        <a href="/">
                            <img src="{$metron['index_background_logo']}"
                                 class="max-h-100px bg-white shadow-light rounded-circle shadow" alt=""/>
                        </a>
                    </div>
