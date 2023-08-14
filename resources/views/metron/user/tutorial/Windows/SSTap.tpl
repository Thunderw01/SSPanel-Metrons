<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Windows 使用教程 &mdash; {$config["appName"]}</title>
        <link href="{$metron['assets_url']}/css/client/metron-icon.css" rel="stylesheet" type="text/css" />
        <link href="{$metron['assets_url']}/plugins/tutorial/lightbox/lightbox.min.css" rel="stylesheet" >
        {include file='include/global/head.tpl'}
        <div class="d-flex flex-column flex-root">
            <div class="d-flex flex-row flex-column-fluid page">
                <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                    {include file='include/global/menu.tpl'}
                    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
                        <div class="subheader min-h-lg-175px pt-5 pb-7 subheader-transparent" id="kt_subheader">
                            <div class="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                                <div class="d-flex align-items-center flex-wrap mr-2">
                                    <div class="d-flex flex-column">
                                        <h2 class="text-white font-weight-bold my-2 mr-5">Windows 使用教程</h2>
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
                                                    <h2 class="font-weight-bold">SSR客户端：</h2>
                                                </div>
                                            </div>
                                            <div class="card-body">

                                                <div class="row pl-5 pr-5">
                                                    <div class="row">
                                                        <a href="https://wwi.lanzoui.com/iPZrfipd20d" class="btn btn-pill btn-ssr  mr-4" target="_blank">&nbsp;&nbsp;<i class="metron-ssr text-white"></i>下载地址</a>
                                                        <a href="/user/tutorial?os=Windows&client=SSR" class="btn btn-pill btn-alipay " >&nbsp;&nbsp;<i class="metron-quantumultx text-white"></i>使用教程</a>
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
                                                        <a href="https://github.com/Fndroid/clash_for_windows_pkg/releases/download/0.20.28/Clash.for.Windows.Setup.0.20.28.arm64.exe" class="btn btn-pill btn-v2ray  mr-4" target="_blank">&nbsp;&nbsp;<i class="metron-clash text-white"></i>下载地址</a>
                                                        <a href="/user/tutorial?os=Windows&client=Clash" class="btn btn-pill btn-alipay " >&nbsp;&nbsp;<i class="metron-quantumultx text-white"></i>使用教程</a>
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
                                                        <a href="https://wwi.lanzoui.com/icv7Idzymkj" class="btn btn-pill btn-v2ray  mr-4" target="_blank">&nbsp;&nbsp;<i class="metron-v2rayng text-white"></i>下载地址</a>
{*                                                        <a href="http://down.suying666.org/j/Win-V2Ray.mp4" class="btn btn-pill btn-alipay " target="_blank">&nbsp;&nbsp;<i class="metron-quantumultx text-white"></i>视频教程</a>*}
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