<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Windows 使用教程 &mdash; {$config["appName"]}</title>
        <link href="{$metron['assets_url']}/css/client/metron-icon.css" rel="stylesheet" type="text/css" />
        <link href="{$metron['assets_url']}/plugins/tutorial/lightbox/lightbox.min.css" rel="stylesheet" >
        {include file='include/global/head.tpl'}
        <style>
            .btn-pill{
                background: linear-gradient(to right, #71ba35, #2ba255) !important;
                box-shadow: 0 2px 6px #71ba3579;
            }
        </style>
        <div class="d-flex flex-column flex-root">
            <div class="d-flex flex-row flex-column-fluid page">
                <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                    {include file='include/global/menu.tpl'}
                    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
                        <div class="subheader min-h-lg-175px pt-5 pb-7 subheader-transparent" id="kt_subheader">
                            <div class="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                                <div class="d-flex align-items-center flex-wrap mr-2">
                                    <div class="d-flex flex-column">
                                        <h2 class="text-white font-weight-bold my-2 mr-5">Mac 使用教程</h2>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                </div>
                            </div>
                        </div>

                        <div class="d-flex flex-column-fluid">
                            <div class="container">

                                <div class="row">
                                    <div class="col-12">
                                        <div class="card card-custom gutter-b {$metron['style_shadow']}">
                                            <div class="card-header">
                                                <div class="card-title">
                                                    <h2 class="font-weight-bold step-no">SSR客户端：</h2>
                                                </div>
                                            </div>
                                            <div class="card-body">

                                                <div class="row pl-5 pr-5">
                                                    <div class="row">
                                                        <a href="https://wwi.lanzoui.com/iEDcjdzypbi" class="btn btn-pill btn-ssr  mr-4" target="_blank">&nbsp;&nbsp;<i class="metron-ssr text-white"></i>下载地址</a>
                                                        <a href="http://down.suying666.org/sr-mac.dmg" class="btn btn-pill btn-ssr  mr-4" target="_blank">&nbsp;&nbsp;<i class="metron-ssr text-white"></i>备用下载地址</a>
                                                     </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card card-custom gutter-b {$metron['style_shadow']}">
                                            <div class="card-header">
                                                <div class="card-title">
                                                    <h2 class="font-weight-bold">V2ray客户端：</h2>
                                                </div>
                                            </div>
                                            <div class="card-body">

                                                <div class="row pl-5 pr-5">
                                                    <div class="row">
                                                        <a href="https://wwi.lanzoui.com/iMzCQdzyq6j" class="btn btn-pill btn-v2ray  mr-4" target="_blank">&nbsp;&nbsp;<i class="metron-v2rayng text-white"></i>下载地址</a>
                                                        <a href="http://down.suying666.org/v2.dmg" class="btn btn-pill btn-ssr  mr-4" target="_blank">&nbsp;&nbsp;<i class="metron-ssr text-white"></i>备用下载地址</a>
                                                        <a href="http://haituncloud.xyz/assets/v2r-mac.mov" class="btn btn-pill btn-alipay " target="_blank">&nbsp;&nbsp;<i class="metron-quantumultx text-white"></i>视频教程</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card card-custom gutter-b {$metron['style_shadow']}">
                                            <div class="card-header">
                                                <div class="card-title">
                                                    <h2 class="font-weight-bold">Clash客户端：</h2>
                                                </div>
                                            </div>
                                            <div class="card-body">

                                                <div class="row pl-5 pr-5">
                                                    <div class="row">
                                                        <a href="https://github.com/yichengchen/clashX/releases/download/1.116.3/ClashX.app.dSYM.zip" class="btn btn-pill btn-ClashR  mr-4" target="_blank">&nbsp;&nbsp;<i class="metron-clash text-white"></i>下载地址</a>
                                                        <a href="/user/tutorial?os=MacOS&client=Clash" class="btn btn-pill btn-alipay mr-4" >&nbsp;&nbsp;<i class="metron-quantumultx text-white"></i>使用教程&nbsp;&nbsp;</a>

 <a href="http://haituncloud.xyz/assets/ssr-mac.mp4" class="btn btn-pill btn-alipay " target="_blank">&nbsp;&nbsp;<i class="metron-quantumultx text-white"></i>视频教程</a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card card-custom gutter-b {$metron['style_shadow']}">
                                            <div class="card-header">
                                                <div class="card-title">
                                                    <h2 class="font-weight-bold">订阅链接：</h2>
                                                </div>
                                            </div>
                                            <div class="card-body">

                                                <div class="row pl-5 pr-5">
                                                    <div class="row">
                                                        <a href="javascript:;" class="btn btn-pill btn-v2ray mb-4 mr-4  copy-text"  data-clipboard-text="{$subInfo["ssr"]}">&nbsp;&nbsp;<i class="metron-ssr text-white"></i>复制 SSR 订阅链接</a>
                                                        <a href="javascript:;" style="height: 40px" class="btn btn-pill btn-v2ray copy-text" data-clipboard-text="{$subInfo["v2ray"]}" >&nbsp;&nbsp;<i class="metron-v2rayng text-white"></i>复制 V2Ray订阅链接</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
							</div>
						</div>
					</div>
                    {include file='include/global/footer.tpl'}
				</div>
			</div>
		</div>

        {include file='include/global/scripts.tpl'}
        <script src="{$metron['assets_url']}/plugins/tutorial/lightbox/lightbox.min.js" type="text/javascript"></script>
    </body>
</html>
