{include file='admin/main.tpl'}
<style>
    table {
        width: 100%;
        display: table;
        border-collapse: collapse;
        border-spacing: 0;
    }
    table, th, td {
        border: none;
    }
    thead {
        color: rgba(0,0,0,0.6);
    }
    tr {
        border-bottom: 1px solid rgba(0,0,0,0.12);
    }
    td, th {
        padding: 15px 10px;
    }
    td, th {
        padding: 15px 5px;
        display: table-cell;
        text-align: left;
        vertical-align: middle;
        border-radius: 2px;
        font-weight: 500;
    }
    table, th, td {
        border: none;
    }
    tr {
        border-bottom: 1px solid rgba(0,0,0,0.12);
    }
</style>
<main class="content">
    <div class="content-header ui-content-header">
        <div class="container">
            <h1 class="content-heading">汇总</h1>
        </div>
    </div>
    <div class="container">
        <section class="content-inner margin-top-no">
            <div class="row">
                <div class="col-xx-12">
                    <div class="card margin-bottom-no">
                        <div class="card-main">
                            <div class="card-inner">
                                <p>下面是系统运行情况简报。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui-card-wrap">

                <div class="row">

                        <div class="col-xx-12">
                            <div class="card">
                                <div class="card-main">
                                    <div class="card-inner">
                                        <h5>快捷操作(不可逆,请等待页面刷新)</h5>
                                        <p>无关紧要的记录，请按时清理，尤其是实时流量记录增加的会很快，在超过页面消耗的最大内存时会报错</p>
                                        <p>可自行Google 修改宝塔面板PHP memory_limit数值解决。若嫌麻烦，可进入主题配置文件，关闭快捷操作</p>

                                        <button onclick="detect_log('detect_log','清理审计记录')" type="button" class="btn btn-primary">清理审计记录 {$sys->getDetectLog()}</button>&nbsp;
                                        <button onclick="login_ip('login_ip','清理登陆IP记录')" type="button" class="btn btn-primary">清理登陆IP记录 {$sys->getLoginIp()}</button>&nbsp;
                                        <button onclick="paylist('paylist','清理登陆IP记录')" type="button" class="btn btn-primary">清理未支付订单记录 {$sys->getPaylist()}</button>&nbsp;
                                        <button onclick="node_info('node_info','清理节点信息记录')" type="button" class="btn btn-primary">清理节点信息记录 {$sys->getNodeInfoLog()}</button>&nbsp;
                                        <button onclick="node_online_log('node_online_log','清理节点在线记录')" type="button" class="btn btn-primary">清理节点在线记录 {$sys->getNodeOnlineLog()}</button>&nbsp;
                                        <button onclick="codelist('codelist','清理所有流水记录')" type="button" class="btn btn-primary">清理所有流水记录 {$sys->getCodelist()}</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div class="col-xx-12 col-sm-3">
                        <div class="card">
                            <div class="card-main">
                                <div class="card-inner">
                                    <h5>收入情况</h5>
                                    <p id="income_text" style="margin-top: 10px;">loading</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xx-12 col-sm-3">
                        <div class="card">
                            <div class="card-main">
                                <div class="card-inner">
                                    <h5>注册新用户</h5>
                                    <p id="newusers_text" style="margin-top: 10px;">loading</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xx-12 col-sm-3">
                        <div class="card">
                            <div class="card-main">
                                <div class="card-inner">
                                    <h5>订单详细</h5>
                                    <p id="order_text" style="margin-top: 10px;">loading</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xx-12 col-sm-3">
                        <div class="card">
                            <div class="card-main">
                                <div class="card-inner">
                                    <h5>工单详细</h5>
                                    <p id="ticket_text" style="margin-top: 10px;">loading</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xx-12 col-sm-6">
                        <div class="card">
                            <div class="card-main">
                                <div class="card-inner">
                                    <h5>邀请人数</h5>
                                    <button class="mdl-button mdl-js-button mdl-button--raised" onclick="getRefUserCount('today')">今天</button>
                                    <button class="mdl-button mdl-js-button mdl-button--raised" onclick="getRefUserCount('yesterday')">昨天</button>
                                    <button class="mdl-button mdl-js-button mdl-button--raised" onclick="getRefUserCount('week')">本周</button>
                                    <button class="mdl-button mdl-js-button mdl-button--raised" onclick="getRefUserCount('month')">本月</button>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>用户ID</th>
                                            <th>用户名</th>
                                            <th>用户邮箱</th>
                                            <th>邀请人数</th>
                                        </tr>
                                        </thead>
                                        <tbody id="ref_user_count">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-main">
                                <div class="card-inner">
                                    <h5>72小时节点流量使用排名</h5>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>节点ID</th>
                                            <th>节点名称</th>
                                            <th>使用流量</th>
                                        </tr>
                                        </thead>
                                        <tbody id="node_traffic_text">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-main">
                                <div class="card-inner">

                                    <div id="check_chart" style="height: 300px; width: 100%;"></div>

                                    <script src="//cdn.jsdelivr.net/gh/SuicidalCat/canvasjs.js@v2.3.1/canvasjs.min.js"></script>
                                    <script>
                                        var chart = new CanvasJS.Chart("check_chart",
                                                {
                                                    title: {
                                                        text: "用户签到情况(总用户 {$sts->getTotalUser()}人)",
                                                        fontFamily: "Impact",
                                                        fontWeight: "normal"
                                                    },

                                                    legend: {
                                                        verticalAlign: "bottom",
                                                        horizontalAlign: "center"
                                                    },
                                                    data: [
                                                        {
                                                            //startAngle: 45,
                                                            indexLabelFontSize: 20,
                                                            indexLabelFontFamily: "Garamond",
                                                            indexLabelFontColor: "darkgrey",
                                                            indexLabelLineColor: "darkgrey",
                                                            indexLabelPlacement: "outside",
                                                            type: "doughnut",
                                                            showInLegend: true,
                                                            dataPoints: [
                                                                {
                                                                    y: {(1-($sts->getCheckinUser()/$sts->getTotalUser()))*100},
                                                                    legendText: "没有签到过的用户 {number_format((1-($sts->getCheckinUser()/$sts->getTotalUser()))*100,2)}% {$sts->getTotalUser()-$sts->getCheckinUser()}人",
                                                                    indexLabel: "没有签到过的用户 {number_format((1-($sts->getCheckinUser()/$sts->getTotalUser()))*100,2)}% {$sts->getTotalUser()-$sts->getCheckinUser()}人"
                                                                },
                                                                {
                                                                    y: {(($sts->getCheckinUser()-$sts->getTodayCheckinUser())/$sts->getTotalUser())*100},
                                                                    legendText: "曾经签到过的用户 {number_format((($sts->getCheckinUser()-$sts->getTodayCheckinUser())/$sts->getTotalUser())*100,2)}% {$sts->getCheckinUser()-$sts->getTodayCheckinUser()}人",
                                                                    indexLabel: "曾经签到过的用户 {number_format((($sts->getCheckinUser()-$sts->getTodayCheckinUser())/$sts->getTotalUser())*100,2)}% {$sts->getCheckinUser()-$sts->getTodayCheckinUser()}人"
                                                                },
                                                                {
                                                                    y: {$sts->getTodayCheckinUser()/$sts->getTotalUser()*100},
                                                                    legendText: "今日签到用户 {number_format($sts->getTodayCheckinUser()/$sts->getTotalUser()*100,2)}% {$sts->getTodayCheckinUser()}人",
                                                                    indexLabel: "今日签到用户 {number_format($sts->getTodayCheckinUser()/$sts->getTotalUser()*100,2)}% {$sts->getTodayCheckinUser()}人"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                });

                                        chart.render();

                                        function chartRender(chart) {
                                            chart.render();
                                            chart.ctx.shadowBlur = 8;
                                            chart.ctx.shadowOffsetX = 4;
                                            chart.ctx.shadowColor = "black";

                                            for (let i in chart.plotInfo.plotTypes) {
                                                let plotType = chart.plotInfo.plotTypes[i];
                                                for (let j in plotType.plotUnits) {
                                                    let plotUnit = plotType.plotUnits[j];
                                                    if (plotUnit.type === "doughnut") {
                                                        // For Column Chart
                                                        chart.renderDoughnut(plotUnit);
                                                    } else if (plotUnit.type === "bar") {
                                                        // For Bar Chart
                                                        chart.renderBar(plotUnit);
                                                    }
                                                }
                                            }
                                            chart.ctx.shadowBlur = 0;
                                            chart.ctx.shadowOffsetX = 0;
                                            chart.ctx.shadowColor = "transparent";
                                        }
                                    </script>

                                </div>

                            </div>
                        </div>
                        <div class="card">
                            <div class="card-main">
                                <div class="card-inner">

                                    <div id="alive_chart" style="height: 300px; width: 100%;"></div>

                                    <script src="//cdn.jsdelivr.net/gh/YihanH/canvasjs.js@v2.2/canvasjs.min.js"></script>
                                    <script type="text/javascript">
                                        var chart = new CanvasJS.Chart("alive_chart",
                                                {
                                                    title: {
                                                        text: "用户在线情况(总用户 {$sts->getTotalUser()}人)",
                                                        fontFamily: "Impact",
                                                        fontWeight: "normal"
                                                    },

                                                    legend: {
                                                        verticalAlign: "bottom",
                                                        horizontalAlign: "center"
                                                    },
                                                    data: [
                                                        {
                                                            //startAngle: 45,
                                                            indexLabelFontSize: 20,
                                                            indexLabelFontFamily: "Garamond",
                                                            indexLabelFontColor: "darkgrey",
                                                            indexLabelLineColor: "darkgrey",
                                                            indexLabelPlacement: "outside",
                                                            type: "doughnut",
                                                            showInLegend: true,
                                                            dataPoints: [
                                                                {
                                                                    y: {(($sts->getUnusedUser()/$sts->getTotalUser()))*100},
                                                                    legendText: "从未在线的用户 {number_format((($sts->getUnusedUser()/$sts->getTotalUser()))*100,2)}% {(($sts->getUnusedUser()))}人",
                                                                    indexLabel: "从未在线的用户 {number_format((($sts->getUnusedUser()/$sts->getTotalUser()))*100,2)}% {(($sts->getUnusedUser()))}人"
                                                                },
                                                                {
                                                                    y: {(($sts->getTotalUser()-$sts->getOnlineUser(86400)-$sts->getUnusedUser())/$sts->getTotalUser())*100},
                                                                    legendText: "一天以前在线的用户 {number_format((($sts->getTotalUser()-$sts->getOnlineUser(86400)-$sts->getUnusedUser())/$sts->getTotalUser())*100,2)}% {($sts->getTotalUser()-$sts->getOnlineUser(86400)-$sts->getUnusedUser())}人",
                                                                    indexLabel: "一天以前在线的用户 {number_format((($sts->getTotalUser()-$sts->getOnlineUser(86400)-$sts->getUnusedUser())/$sts->getTotalUser())*100,2)}% {($sts->getTotalUser()-$sts->getOnlineUser(86400)-$sts->getUnusedUser())}人"
                                                                },
                                                                {
                                                                    y: {($sts->getOnlineUser(86400)-$sts->getOnlineUser(3600))/$sts->getTotalUser()*100},
                                                                    legendText: "一天内在线的用户 {number_format(($sts->getOnlineUser(86400)-$sts->getOnlineUser(3600))/$sts->getTotalUser()*100,2)}% {($sts->getOnlineUser(86400)-$sts->getOnlineUser(3600))}人",
                                                                    indexLabel: "一天内在线的用户 {number_format(($sts->getOnlineUser(86400)-$sts->getOnlineUser(3600))/$sts->getTotalUser()*100,2)}% {($sts->getOnlineUser(86400)-$sts->getOnlineUser(3600))}人"
                                                                },
                                                                {
                                                                    y: {($sts->getOnlineUser(3600)-$sts->getOnlineUser(60))/$sts->getTotalUser()*100},
                                                                    legendText: "一小时内在线的用户 {number_format(($sts->getOnlineUser(3600)-$sts->getOnlineUser(60))/$sts->getTotalUser()*100,2)}% {($sts->getOnlineUser(3600)-$sts->getOnlineUser(60))}人",
                                                                    indexLabel: "一小时内在线的用户 {number_format(($sts->getOnlineUser(3600)-$sts->getOnlineUser(60))/$sts->getTotalUser()*100,2)}% {($sts->getOnlineUser(3600)-$sts->getOnlineUser(60))}人"
                                                                },
                                                                {
                                                                    y: {($sts->getOnlineUser(60))/$sts->getTotalUser()*100},
                                                                    legendText: "一分钟内在线的用户 {number_format(($sts->getOnlineUser(60))/$sts->getTotalUser()*100,2)}% {($sts->getOnlineUser(60))}人",
                                                                    indexLabel: "一分钟内在线的用户 {number_format(($sts->getOnlineUser(60))/$sts->getTotalUser()*100,2)}% {($sts->getOnlineUser(60))}人"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                });

                                        chart.render();
                                    </script>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xx-12 col-sm-6">

                        <div class="card">
                            <div class="card-main">
                                <div class="card-inner">
                                    <h5>邀请返利</h5>
                                    <button class="mdl-button mdl-js-button mdl-button--raised" onclick="getRefMoneyCount('today')">今天</button>
                                    <button class="mdl-button mdl-js-button mdl-button--raised" onclick="getRefMoneyCount('yesterday')">昨天</button>
                                    <button class="mdl-button mdl-js-button mdl-button--raised" onclick="getRefMoneyCount('week')">本周</button>
                                    <button class="mdl-button mdl-js-button mdl-button--raised" onclick="getRefMoneyCount('month')">本月</button>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>用户ID</th>
                                            <th>用户名</th>
                                            <th>用户邮箱</th>
                                            <th>返利金额</th>
                                        </tr>
                                        </thead>
                                        <tbody id="ref_money_count">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-main">
                                <div class="card-inner">
                                    <h5>72小时用户流量使用排名</h5>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>用户ID</th>
                                            <th>用户名</th>
                                            <th>邮箱</th>
                                            <th>使用流量</th>
                                        </tr>
                                        </thead>
                                        <tbody id="user_traffic_text">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-main">
                                <div class="card-inner">
                                    <div id="node_chart" style="height: 300px; width: 100%;"></div>
                                    <script src="//cdn.jsdelivr.net/gh/YihanH/canvasjs.js@v2.2/canvasjs.min.js"></script>
                                    <script type="text/javascript">
                                        var chart = new CanvasJS.Chart("node_chart",
                                                {
                                                    title: {
                                                        text: "节点在线情况(节点数 {$sts->getTotalNodes()}个)",
                                                        fontFamily: "Impact",
                                                        fontWeight: "normal"
                                                    },

                                                    legend: {
                                                        verticalAlign: "bottom",
                                                        horizontalAlign: "center"
                                                    },
                                                    data: [
                                                        {
                                                            //startAngle: 45,
                                                            indexLabelFontSize: 20,
                                                            indexLabelFontFamily: "Garamond",
                                                            indexLabelFontColor: "darkgrey",
                                                            indexLabelLineColor: "darkgrey",
                                                            indexLabelPlacement: "outside",
                                                            type: "doughnut",
                                                            showInLegend: true,
                                                            dataPoints: [
                                                                {if $sts->getTotalNodes()!=0}
                                                                {
                                                                    y: {(1-($sts->getAliveNodes()/$sts->getTotalNodes()))*100},
                                                                    legendText: "离线节点 {number_format((1-($sts->getAliveNodes()/$sts->getTotalNodes()))*100,2)}% {$sts->getTotalNodes()-$sts->getAliveNodes()}个",
                                                                    indexLabel: "离线节点 {number_format((1-($sts->getAliveNodes()/$sts->getTotalNodes()))*100,2)}% {$sts->getTotalNodes()-$sts->getAliveNodes()}个"
                                                                },
                                                                {
                                                                    y: {(($sts->getAliveNodes()/$sts->getTotalNodes()))*100},
                                                                    legendText: "在线节点 {number_format((($sts->getAliveNodes()/$sts->getTotalNodes()))*100,2)}% {$sts->getAliveNodes()}个",
                                                                    indexLabel: "在线节点 {number_format((($sts->getAliveNodes()/$sts->getTotalNodes()))*100,2)}% {$sts->getAliveNodes()}个"
                                                                }
                                                                {/if}
                                                            ]
                                                        }
                                                    ]
                                                });

                                        chart.render();
                                    </script>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-main">
                                <div class="card-inner">
                                    <div id="traffic_chart" style="height: 300px; width: 100%;"></div>
                                    <script src="//cdn.jsdelivr.net/gh/YihanH/canvasjs.js@v2.2/canvasjs.min.js"></script>
                                    <script type="text/javascript">
                                        var chart = new CanvasJS.Chart("traffic_chart",
                                                {
                                                    title: {
                                                        text: "流量使用情况(总分配流量 {$sts->getTotalTraffic()})",
                                                        fontFamily: "Impact",
                                                        fontWeight: "normal"
                                                    },

                                                    legend: {
                                                        verticalAlign: "bottom",
                                                        horizontalAlign: "center"
                                                    },
                                                    data: [
                                                        {
                                                            //startAngle: 45,
                                                            indexLabelFontSize: 20,
                                                            indexLabelFontFamily: "Garamond",
                                                            indexLabelFontColor: "darkgrey",
                                                            indexLabelLineColor: "darkgrey",
                                                            indexLabelPlacement: "outside",
                                                            type: "doughnut",
                                                            showInLegend: true,
                                                            dataPoints: [
                                                                {if $sts->getRawTotalTraffic()!=0}
                                                                {
                                                                    y: {(($sts->getRawUnusedTrafficUsage()/$sts->getRawTotalTraffic()))*100},
                                                                    label: "总剩余可用",
                                                                    legendText: "总剩余可用 {number_format((($sts->getRawUnusedTrafficUsage()/$sts->getRawTotalTraffic()))*100,2)}% {(($sts->getUnusedTrafficUsage()))}",
                                                                    indexLabel: "总剩余可用 {number_format((($sts->getRawUnusedTrafficUsage()/$sts->getRawTotalTraffic()))*100,2)}% {(($sts->getUnusedTrafficUsage()))}"
                                                                },
                                                                {
                                                                    y: {(($sts->getRawLastTrafficUsage()/$sts->getRawTotalTraffic()))*100},
                                                                    label: "总过去已用",
                                                                    legendText: "总过去已用 {number_format((($sts->getRawLastTrafficUsage()/$sts->getRawTotalTraffic()))*100,2)}% {(($sts->getLastTrafficUsage()))}",
                                                                    indexLabel: "总过去已用 {number_format((($sts->getRawLastTrafficUsage()/$sts->getRawTotalTraffic()))*100,2)}% {(($sts->getLastTrafficUsage()))}"
                                                                },
                                                                {
                                                                    y: {(($sts->getRawTodayTrafficUsage()/$sts->getRawTotalTraffic()))*100},
                                                                    label: "总今日已用",
                                                                    legendText: "总今日已用 {number_format((($sts->getRawTodayTrafficUsage()/$sts->getRawTotalTraffic()))*100,2)}% {(($sts->getTodayTrafficUsage()))}",
                                                                    indexLabel: "总今日已用 {number_format((($sts->getRawTodayTrafficUsage()/$sts->getRawTotalTraffic()))*100,2)}% {(($sts->getTodayTrafficUsage()))}"
                                                                }
                                                                {/if}
                                                            ]
                                                        }
                                                    ]
                                                });

                                        chart.render();
                                    </script>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>

<div aria-hidden="true" class="modal modal-va-middle fade" id="delete_modal" role="dialog"
     tabindex="-1">
    <div class="modal-dialog modal-xs">
        <div class="modal-content">
            <div class="modal-heading">
                <a class="modal-close" data-dismiss="modal">×</a>
                <h2 class="modal-title">确认要删除？</h2>
            </div>
            <div class="modal-inner">
                即将清理【<span id="del-msg" style="font-size: 16px;font-weight: 600"></span>】，此操作无法恢复，请您确认是否要进行删除。
            </div>
            <div class="modal-footer">
                <p class="text-right">
                    <button class="btn btn-flat btn-brand-accent waves-attach waves-effect"
                            data-dismiss="modal" type="button">取消
                    </button>
                    <button class="btn btn-flat btn-brand-accent waves-attach" data-dismiss="modal"
                            id="delete_input" type="button">确定
                    </button>
                </p>
            </div>
        </div>
    </div>
</div>

{include file='admin/footer.tpl'}

{literal}
<script>
    function getIncome(date) {
        $.ajax({
            type: "GET",
            url: "/admin/api/analytics/income",
            dataType: "json",
            data: {
                date: date,
            },
            success: function (data) {
                if (data.success) {
                    data = data.data;
                    var html_text = `今日收入：${data.todayIncome}<br>昨日收入：${data.yesterdayIncome}<br>本周收入：${data.thisWeekIncome}<br>上周收入：${data.lastWeekIncome}<br>本月收入：${data.thisMonthIncome}<br>上月收入：${data.lastMonthIncome}`;
                    $('#income_text').html(html_text);
                } else {
                    console.log(data.error)
                }
            }
        })
    }

    function getNodeTraffic(date) {
        $.ajax({
            type: "GET",
            url: "/admin/api/analytics/node",
            dataType: "json",
            data: {
                date: date,
            },
            success: function (data) {
                if (data.success) {
                    data = data.data;
                    var html_text = "";
                    data.forEach(function (item) {
                        html_text += `<tr><th>${item.node_id}</th><th>${item.node_name}</th><th>${item.traffic}</th></tr>`;
                    })
                    $('#node_traffic_text').html(html_text);
                } else {
                    console.log(data.error)
                }
            }
        })
    }

    function getUserTraffic(date) {
        $.ajax({
            type: "GET",
            url: "/admin/api/analytics/userTraffic",
            dataType: "json",
            data: {
                date: date,
            },
            success: function (data) {
                if (data.success) {
                    data = data.data;
                    var html_text = "";
                    data.forEach(function (item) {
                        html_text += `<tr><th>${item.user_id}</th><th>${item.user_name}</th><th>${item.email}</th><th>${item.traffic}</th></tr>`;
                    })
                    $('#user_traffic_text').html(html_text);
                } else {
                    console.log(data.error)
                }
            }
        })
    }

    function getNewUsers(date) {
        $.ajax({
            type: "GET",
            url: "/admin/api/analytics/new_users",
            dataType: "json",
            data: {
                date: date,
            },
            success: function (data) {
                console.log(data.ret);
                if (data.success) {
                    data = data.data;
                    var html_text = `今日新用户：${data.today}<br>昨日新用户：${data.yesterday}<br>本周新用户：${data.thisWeek}<br>上周新用户：${data.lastWeek}<br>本月新用户：${data.thisMonth}<br>上月新用户：${data.lastMonth}`;
                    $('#newusers_text').html(html_text);
                } else {
                    console.log(data.error)
                }
            }
        })
    }

    function getRefUserCount(type) {
        $.ajax({
            type: "GET",
            url: "/admin/api/analytics/ref_user_count",
            dataType: "json",
            data: {
                type: type,
            },
            success: function (data) {
                if (data.success) {
                    data = data.data;
                    var html_text = "";
                    data.forEach(function (item) {
                        html_text += `<tr><th>${item.user_id}</th><th>${item.user_name}</th><th>${item.email}</th><th>${item.ref_buy_count}人</th></tr>`;
                    })
                    $('#ref_user_count').html(html_text);
                } else {
                    console.log(data.error)
                }
            }
        })
    }

    function getRefMoneyCount(type) {
        $.ajax({
            type: "GET",
            url: "/admin/api/analytics/ref_money_count",
            dataType: "json",
            data: {
                type: type,
            },
            success: function (data) {
                if (data.success) {
                    data = data.data;
                    var html_text = "";
                    data.forEach(function (item) {
                        html_text += `<tr><th>${item.user_id}</th><th>${item.user_name}</th><th>${item.email}</th><th>￥${item.ref_get_count}</th></tr>`;
                    })
                    $('#ref_money_count').html(html_text);
                } else {
                    console.log(data.error)
                }
            }
        })
    }

    function getOrderDetail() {
        $.ajax({
            type: "GET",
            url: "/admin/api/analytics/get_order_detail",
            dataType: "json",
            success: function (data) {
                if (data.success) {
                    data = data.data;
                    var html_text = `今日总订单：${data.today_all}<br>今日成功订单：${data.today_success}<br>`+
                        `昨日成功订单：${data.yesterday_success}<br>本周成功订单：${data.week_success}<br>`+
                        `本月成功订单：${data.month_success}<br>上月成功订单：${data.last_month_success}`;
                    $('#order_text').html(html_text);
                } else {
                    console.log(data.error)
                }
            }
        })
    }
    function getTicketDetail() {
        $.ajax({
            type: "GET",
            url: "/admin/api/analytics/get_ticket_detail",
            dataType: "json",
            success: function (data) {
                if (data.success) {
                    data = data.data;
                    var html_text = `开启状态：${data.open}<br>今日工单：${data.today_success}<br>`+
                        `昨日工单：${data.yesterday_success}<br>本周工单：${data.week_success}<br>`+
                        `本月工单：${data.month_success}<br>上月工单：${data.last_month_success}`;
                    $('#ticket_text').html(html_text);
                } else {
                    console.log(data.error)
                }
            }
        })
    }

    String.prototype.replaceAll = function (stringToFind, stringToReplace) {
        if (stringToFind === stringToReplace) return this;
        var temp = this;
        var index = temp.indexOf(stringToFind);
        while (index != -1) {
            temp = temp.replace(stringToFind, stringToReplace);
            index = temp.indexOf(stringToFind);
        }
        return temp;
    };

    var date = new Date();
    date = date.toLocaleDateString();
    date = date.replaceAll('/','-');
    getIncome(date);
    getNewUsers(date);
    getNodeTraffic();
    getUserTraffic();
    getRefUserCount('today');
    getRefMoneyCount('today');
    getOrderDetail();
    getTicketDetail();
</script>
{/literal}
<script>
    function detect_log(log, msg){
        $("#del-msg").html(msg);
        $("#delete_modal").modal();
        $("#delete_modal").on('shown.bs.modal', function () {
            $("#delete_input").click(function (){
                $("#delete_input").html('正在删除...')
                document.getElementById('delete_input').disabled=true;
                delete_log(log);
            });
        });
    }

    function login_ip(log, msg){
        $("#del-msg").html(msg);
        $("#delete_modal").modal();
        $("#delete_modal").on('shown.bs.modal', function () {
            $("#delete_input").click(function (){
                $("#delete_input").html('正在删除...')
                document.getElementById('delete_input').disabled=true;
                delete_log(log);
            });
        });
    }

    function paylist(log, msg){
        $("#del-msg").html(msg);
        $("#delete_modal").modal();
        $("#delete_modal").on('shown.bs.modal', function () {
            $("#delete_input").click(function (){
                $("#delete_input").html('正在删除...')
                document.getElementById('delete_input').disabled=true;
                delete_log(log);
            });
        });
    }

    function node_info(log, msg){
        $("#del-msg").html(msg);
        $("#delete_modal").modal();
        $("#delete_modal").on('shown.bs.modal', function () {
            $("#delete_input").click(function (){
                $("#delete_input").html('正在删除...')
                document.getElementById('delete_input').disabled=true;
                delete_log(log);
            });
        });
    }

    function trafficlog(log, msg){
        $("#del-msg").html(msg);
        $("#delete_modal").modal();
        $("#delete_modal").on('shown.bs.modal', function () {
            $("#delete_input").click(function (){
                $("#delete_input").html('正在删除...')
                document.getElementById('delete_input').disabled=true;
                delete_log(log);
            });
        });
    }

    function codelist(log, msg){
        $("#del-msg").html(msg);
        $("#delete_modal").modal();
        $("#delete_modal").on('shown.bs.modal', function () {
            $("#delete_input").click(function (){
                $("#delete_input").html('正在删除...')
                document.getElementById('delete_input').disabled=true;
                delete_log(log);
            });
        });
    }

    function node_online_log(log, msg){
        $("#del-msg").html(msg);
        $("#delete_modal").modal();
        $("#delete_modal").on('shown.bs.modal', function () {
            $("#delete_input").click(function (){
                $("#delete_input").html('正在删除...')
                document.getElementById('delete_input').disabled=true;
                delete_log(log);
            });
        });
    }

    function delete_log(log) {
        $.ajax({
            type: "POST",
            url: "/admin/" + log,
            dataType: "json",
            success: function (data) {
                if (data.ret) {
                    $("#delete_modal").modal("hide");
                    $("#result").modal();
                    $("#msg").html("已清空记录!");
                    $('#nologin').attr("id","delete_input");
                    window.setTimeout("location.href=window.location.href", 1000);
                } else {
                    $("#delete_modal").modal('hide');
                    swal('Oops...',data.msg,'error');
                }
            },
            error: function (jqXHR) {
                $("#delete_modal").modal('hide');
                $("#result").modal();
                $("#msg").html("发生错误了: " + jqXHR.status);
            }
        });
    }
</script>
