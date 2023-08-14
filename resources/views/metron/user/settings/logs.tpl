<!DOCTYPE html>
<html lang="en">
    <head>
        <title>记录查看 &mdash; {$config["appName"]}</title>
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
                                        <h2 class="text-white font-weight-bold my-2 mr-5">记录查看</h2>
                                    </div>
                                </div>
                                {include file='include/settings/menu.tpl'}

                                    <div class="flex-row-fluid ml-lg-8">
                                        
                                        <div class="row">
                                            <div class="col-lg-12">
                                                
                                                <div class="card card-custom gutter-b card-stretch {$metron['style_shadow']}">
                                                    <div class="card-header flex-wrap border-0 pt-6">
                                                        <div class="card-title">
                                                            <h3 class="card-label text-primary"><strong>登录记录</strong>
                                                            <span class="d-block text-muted pt-2 font-size-sm">记录账号下登录网站的IP</span></h3>
                                                        </div>
                                                    </div>
                                                    <div class="card-body pt-0">
                                                        <div class="datatable datatable-bordered datatable-head-custom" id="ajax_login_log_data"></div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="col-lg-12">
                                                
                                                <div class="card card-custom gutter-b card-stretch {$metron['style_shadow']}">
                                                    <div class="card-header flex-wrap border-0 pt-6">
                                                        <div class="card-title">
                                                            <h3 class="card-label text-primary"><strong>使用记录</strong>
                                                            <span class="d-block text-muted pt-2 font-size-sm">记录客户端使用节点的IP</span></h3>
                                                        </div>
                                                    </div>
                                                    <div class="card-body pt-0">
                                                        <div class="datatable datatable-bordered datatable-head-custom" id="ajax_use_log_data"></div>
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
    </body>
</html>