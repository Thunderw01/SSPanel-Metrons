/** * version: 3.0.0 */
'use strict';

var global = function () {
  var _0x25fd48 = function () {
    if (document.getElementById("theme_copyright")) {
      $("#theme_copyright").html("<a href=\"/staff\" target=\"_blank\" class=\"nav-link pr-3 pl-0\">SSPANEL</a><a href=\"https://t.me/metrontheme_bot\" target=\"_blank\" class=\"nav-link px-3\">Metron</a>");
    } else {
      Swal.fire({
        'icon': "error",
        'title': "请勿去除版权信息",
        'showConfirmButton': false
      });
    }
  };

  var _0x2e9aac = function (_0x2470e3) {
    switch (_0x2470e3.ret) {
      case 0:
      case '0':
      case -1:
      case '-1':
        swal.fire({
          'title': _0x2470e3.msg,
          'icon': "error",
          'confirmButtonText': '确定',
          'confirmButtonClass': "btn btn-primary"
        }).then(function () {
          window.location.reload();
        });
        throw new Error(_0x2470e3.msg);

      case 1:
      case '1':
        MRCookie.setCookie("mtauth", mthash, 1440);
        window.location.reload();
        break;

      default:
        break;
    }
  };

  var _0x4d0ec0 = function () {
    $.ajax({
      'async': false,
      'url': "/user/authcode",
      'dataType': "json",
      'type': "POST",
      'data': {},
      'success': function (_0x391659) {
        _0x2e9aac(_0x391659);
      },
      'error': function () {
        throw new Error("请尝试刷新页面重试");
      }
    });
  };

  return {
    'ver': function () {
      _0x4d0ec0();
    },
    'copyright': function () {
      _0x25fd48();
    }
  };
}();

jQuery(document).ready(function () {
  global.copyright();
});

if (MRCookie.getCookie("mtauth") == null || MRCookie.getCookie("mtauth") == '') {
  global.ver();
  throw new Error("Authorization failed: " + window.location.host);
} else {
  if (mthash != mtauth) {
    global.ver();
    throw new Error("Authorization failed: " + window.location.host);
  }
}

var mt = function () {
  var _0x235fca = function () {
    return md5(mtauth + "metronkey");
  };

  var _0x247d15 = function (_0x1322e0) {
    var _0x3fc630 = {
      'oYMIn': "success"
    };

    var _0x2715e2 = new KTDialog({
      'type': "loader",
      'placement': "top center",
      'message': "正在切换主题..."
    });

    _0x2715e2.show();

    $.ajax({
      'async': false,
      'url': "/user/changetheme",
      'dataType': "json",
      'type': "POST",
      'data': {
        'type': _0x1322e0
      },
      'success': function (_0x4cee70) {
        mt.mswal(_0x3fc630.oYMIn, _0x4cee70.msg, 're');
      },
      'error': function () {
        mt.mswal("error", "出现错误了~~");
      }
    });
  };

  var _0x2429ea = function (_0x5a1068) {
    var _0x3af7c6 = {
      'ouRpf': "success",
      'IyxPS': "已复制到剪切板"
    };

    if (_0x5a1068 == "modal") {
      $.fn.modal.Constructor.prototype._enforceFocus = function () {
        new ClipboardJS(".copy-modal");
      };

      $(".copy-modal").click(function () {
        Swal.fire({
          'icon': _0x3af7c6.ouRpf,
          'title': _0x3af7c6.IyxPS,
          'timer': 1500,
          'allowOutsideClick': true,
          'showConfirmButton': false
        });
      });
    }

    new ClipboardJS(".copy-text");
    $(".copy-text").click(function () {
      Swal.fire({
        'icon': _0x3af7c6.ouRpf,
        'title': _0x3af7c6.IyxPS,
        'timer': 1500,
        'allowOutsideClick': true,
        'showConfirmButton': false
      });
    });
  };

  var _0x438474 = function (_0x285865, _0x5e0604) {
    swal.fire({
      'title': _0x285865,
      'icon': _0x5e0604,
      'confirmButtonText': '确定'
    });
  };

  var _0x5caa83 = function (_0x3e7324, _0x133b9d) {
    if (_0x3e7324.ret === 1) {
      swal.fire({
        'title': _0x3e7324.msg,
        'icon': "success",
        'background': "#3a3b3c",
        'confirmButtonText': '确定',
        'confirmButtonClass': "btn btn-primary"
      }).then(function () {
        if (_0x133b9d) {
          window.location.href = _0x133b9d;
        } else {
          window.location.reload();
        }
      });
    } else {
      if (_0x3e7324.ret === 0) {
        Swal.fire({
          'icon': "error",
          'html': _0x3e7324.msg,
          'background': "#3a3b3c",
          'confirmButtonText': '确定',
          'confirmButtonClass': "btn btn-primary"
        });
      } else {
        window.location.reload();
      }
    }
  };

  return {
    'key': function () {
      return _0x235fca();
    },
    'changeTheme': function (_0x216684) {
      _0x247d15(_0x216684);
    },
    'copytext': function (_0x15741a) {
      _0x2429ea(_0x15741a);
    },
    'swal': function (_0x4507e7, _0x1f60ee) {
      _0x438474(_0x4507e7, _0x1f60ee);
    },
    'ajax_swal': function (_0x2e7a98, _0x3bc816) {
      _0x5caa83(_0x2e7a98, _0x3bc816);
    },
    'mswal': function (_0x470eb0, _0x139708, _0xc0afae, _0x3c5ee9) {
      if (!_0xc0afae) {
        Swal.fire({
          'toast': true,
          'position': "top-end",
          'showConfirmButton': false,
          'timer': !_0x3c5ee9 ? 3000 : _0x3c5ee9 == '' ? 3000 : _0x3c5ee9,
          'icon': !_0x470eb0 ? "success" : _0x470eb0 == '' ? "success" : _0x470eb0,
          'title': !_0x139708 ? "操作成功" : _0x139708 == '' ? "操作成功" : _0x139708
        });
      }

      if (_0xc0afae == 're') {
        Swal.fire({
          'toast': true,
          'position': "top-end",
          'showConfirmButton': false,
          'timer': 1500,
          'icon': _0x470eb0,
          'title': _0x139708,
          'onClose': () => {
            window.location.reload();
          }
        });
      }
    },
    'pop': function (_0x12edd9) {
      if (MRCookie.getCookie("pop") == '' || MRCookie.getCookie("pop") == null) {
        setTimeout(function () {
          $("#index-pop-modal").modal("show");
          MRCookie.setCookie("pop", "yes", _0x12edd9);
        }, 2500);
      }
    },
    'autopasswd': function (_0x32e7c1, _0x57fe98, _0x43fae7) {
      var _0x33842f = '',
          _0x202a43 = _0x57fe98,
          _0x4f20be = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

      if (_0x32e7c1) {
        _0x202a43 = Math.round(Math.random() * (_0x43fae7 - _0x57fe98)) + _0x57fe98;
      }

      var _0x1a149f;

      for (var _0x3942e8 = 0; _0x3942e8 < _0x202a43; _0x3942e8++) {
        _0x1a149f = Math.round(Math.random() * (_0x4f20be.length - 1));
        _0x33842f += _0x4f20be[_0x1a149f];
      }

      return _0x33842f;
    },
    'href': function (_0x247a31, _0x39579d) {
      if (_0x39579d) {
        window.open(_0x247a31);
      } else {
        window.location.href = _0x247a31;
      }
    },

    'getTimeForm'(_0x291124) {
      var _0x6e1db8 = new Date(_0x291124 * 1000);

      var _0x1867a5 = _0x6e1db8.getFullYear() + '-';

      var _0x562484 = (_0x6e1db8.getMonth() + 1 < 10 ? '0' + (_0x6e1db8.getMonth() + 1) : _0x6e1db8.getMonth() + 1) + '-';

      var _0x3a4920 = (_0x6e1db8.getDate() < 10 ? '0' + _0x6e1db8.getDate() : _0x6e1db8.getDate()) + " ";

      var _0x82cdb1 = (_0x6e1db8.getHours() < 10 ? '0' + _0x6e1db8.getHours() : _0x6e1db8.getHours()) + ':';

      var _0x469ca5 = (_0x6e1db8.getMinutes() < 10 ? '0' + _0x6e1db8.getMinutes() : _0x6e1db8.getMinutes()) + ':';

      var _0x4f3180 = _0x6e1db8.getSeconds() < 10 ? '0' + _0x6e1db8.getSeconds() : _0x6e1db8.getSeconds();

      return _0x1867a5 + _0x562484 + _0x3a4920 + _0x82cdb1 + _0x469ca5 + _0x4f3180;
    }

  };
}();

var urlPath = window.location.pathname;

if (urlPath.indexOf("/user") > -1 && urlPath.indexOf("/user/") < 0 || urlPath.indexOf("/tutorial") > -1) {
  var index = function () {
    var _0x28ea98 = function (_0x27ea7e) {
      var _0x529265 = document.getElementById("flowTiaoChart");

      var _0xff3d3d = parseInt(KTUtil.css(_0x529265, "height"));

      if (!_0x529265) {
        return;
      }

      var _0x221a7e = {
        'series': [_0x27ea7e],
        'chart': {
          'height': _0xff3d3d + 100,
          'type': "radialBar",
          'offsetY': 0
        },
        'plotOptions': {
          'radialBar': {
            'startAngle': -90,
            'endAngle': 90,
            'hollow': {
              'margin': 0,
              'size': "70%"
            },
            'dataLabels': {
              'showOn': "always",
              'name': {
                'show': true,
                'fontSize': "15px",
                'fontWeight': "700",
                'offsetY': 5,
                'color': ThemeStyle.global.gray["500"]
              },
              'value': {
                'show': true,
                'color': ThemeStyle.index.flowTiaoChart.text,
                'fontSize': "45px",
                'fontWeight': "700",
                'offsetY': -35
              }
            },
            'track': {
              'background': ThemeStyle.index.flowTiaoChart.light,
              'strokeWidth': "100%"
            }
          }
        },
        'colors': [ThemeStyle.index.flowTiaoChart.strip],
        'stroke': {
          'lineCap': "round"
        },
        'labels': ["剩余流量"]
      };

      var _0x2910f8 = new ApexCharts(_0x529265, _0x221a7e);

      _0x2910f8.render();
    };

    var _0x3d56a2 = function (_0x18d283, _0x731c3e) {
      if (_0x18d283 == "ssr") {
        var _0x3a4083 = window.btoa(_0x731c3e);

        Swal.fire({
          'title': '提示',
          'html': "<code>SSR</code>一键导入仅支持<code>Windows</code>端<code>SSR 5.1</code>以上版本",
          'icon': "info",
          'showCancelButton': true,
          'confirmButtonText': "继续导入",
          'cancelButtonText': '取消'
        }).then(_0xed9bb1 => {
          if (_0xed9bb1.value) {
            window.location.href = "sub://" + _0x3a4083;
          }
        });
      }

      if (_0x18d283 == "clash") {
        Swal.fire({
          'title': '提示',
          'html': "<code>Clash</code>一键导入仅支持<code>Windows</code>、<code>Mac OS</code>和<code>Android</code>",
          'icon': "info",
          'showCancelButton': true,
          'confirmButtonText': "继续导入",
          'cancelButtonText': '取消'
        }).then(_0x2140c2 => {
          if (_0x2140c2.value) {
            window.location.href = "clash://install-config?url=" + _0x731c3e;
          }
        });
      }

      if (_0x18d283 == "clashr") {
        Swal.fire({
          'title': '提示',
          'html': "<code>ClashR</code>一键导入仅支持<code>Windows</code>、<code>Mac OS</code>和<code>Android</code>",
          'icon': "info",
          'showCancelButton': true,
          'confirmButtonText': "继续导入",
          'cancelButtonText': '取消'
        }).then(_0x4464ad => {
          if (_0x4464ad.value) {
            window.location.href = "clash://install-config?url=" + _0x731c3e;
          }
        });
      }

      if (_0x18d283 == "shadowrocket") {
        var _0x3a4083 = window.btoa(_0x731c3e);

        Swal.fire({
          'title': '提示',
          'html': "<code>Shadowrocket</code>一键导入仅支持<code>Apple iOS</code>端设备",
          'icon': "info",
          'showCancelButton': true,
          'confirmButtonText': "继续导入",
          'cancelButtonText': '取消'
        }).then(_0x2707e7 => {
          if (_0x2707e7.value) {
            window.location.href = "sub://" + _0x3a4083;
          }
        });
      }

      if (_0x18d283 == "quantumult") {
        var _0x3a4083 = window.btoa(_0x731c3e);

        var _0x52e568 = _0x3a4083.replace(/=/g, '');

        Swal.fire({
          'title': '提示',
          'html': "<code>Quantumult</code>一键导入仅支持<code>Apple iOS</code>端设备",
          'icon': "warning",
          'showCancelButton': true,
          'confirmButtonText': "继续导入",
          'cancelButtonText': '取消'
        }).then(_0x12a6b8 => {
          if (_0x12a6b8.value) {
            window.location.href = "quantumult://configuration?server=" + _0x52e568;
          }
        });
      }

      if (_0x18d283 == "quantumult_v2") {
        var _0x3a4083 = window.btoa(_0x731c3e);

        var _0x52e568 = _0x3a4083.replace(/=/g, '');

        Swal.fire({
          'title': '提示',
          'html': "<code>Quantumult</code>一键导入仅支持<code>Apple iOS</code>端设备",
          'icon': "warning",
          'showCancelButton': true,
          'confirmButtonText': "继续导入",
          'cancelButtonText': '取消'
        }).then(_0x9a07c0 => {
          if (_0x9a07c0.value) {
            window.location.href = "quantumult://configuration?server=" + _0x52e568;
          }
        });
      }
    };

    var _0x540c23 = function (_0x3ae199, _0x8b5269) {
      var _0x1b99c7 = window.btoa(_0x8b5269);

      switch (_0x3ae199) {
        case "shadowrocket":
          $("#qrcode-sublink-content").html("<div class=\"text-center\"><p>使用 " + _0x3ae199 + " 客户端扫码</p><div align=\"center\" id=\"qrcode\" style=\"padding-top:10px;\"></div></div>");
          $("#qrcode").qrcode({
            'text': "sub://" + _0x1b99c7
          });
          $("#qrcode-sublink-modal").modal();
          break;
      }
    };

    var _0x32505b = function () {
      $("#checkin").text("请稍候...").attr("disabled", true);
      $.ajax({
        'type': "POST",
        'url': "/user/checkin",
        'dataType': "json",
        'success': function (_0x487617) {
          if (_0x487617.ret === 1) {
            setTimeout(function () {
              mt.mswal("success", _0x487617.msg);
              $("#checkin").text("已签到").removeClass("btn btn-white font-weight-bold py-3 px-6").addClass("btn btn-transparent-white font-weight-bold py-3 px-6 mr-2 disabled");
            }, 1000);
          } else {
            if (_0x487617.ret === 0) {
              mt.mswal("error", _0x487617.msg);
              $("#checkin").text("每日签到").attr("disabled", false);
            } else {
              window.location.reload();
            }
          }
        },
        'error': function (_0x32cc28) {
          setTimeout(function () {
            mt.mswal("error", _0x32cc28.status);
            $("#checkin").text("每日签到").attr("disabled", false);
          }, 1000);
        }
      });
    };

    var _0x1babbc = function (_0x50016e = "get") {
      if (_0x50016e == "get") {
        $("#advance_reset_flow_onclick").text("请稍候...");
        $.ajax({
          'type': "POST",
          'url': "/user/advance_feset_flow",
          'dataType': "json",
          'data': {
            'mode': _0x50016e
          },
          'success': function (_0x3b645f) {
            $("#advance_reset_flow_onclick").text("提前重置");

            if (_0x3b645f.ret === 1) {
              var _0x4e4e4d = "1|0|3|2|4".split('|'),
                  _0x36c809 = 0;

              $("#ResetFlow_day").html("距离下次重置时还有：<code>" + _0x3b645f.info.sub_time_day + "天</code> ");
              $("#ResetFlow_sub_time_day").html("扣除时长：" + _0x3b645f.info.sub_time_day + '天');
              $("#ResetFlow_add_flow_gib").html("添加流量：" + _0x3b645f.info.add_flow_gib + 'GB');
              $("#advanceResetFlow-modal").modal();
              swal.close();
            } else {
              Swal.fire({
                'icon': "error",
                'title': _0x3b645f.msg,
                'timer': 2500,
                'showConfirmButton': false
              });
            }
          },
          'error': function (_0x1fcdee) {
            $("#advance_reset_flow_onclick").text("提前重置");
            Swal.fire({
              'icon': "error",
              'title': "发生错误：" + _0x1fcdee.status
            });
          }
        });
      } else {
        if (_0x50016e == "set") {
          Swal.fire({
            'icon': "warning",
            'title': "是否重置流量?",
            'html': "将会扣除相应的会员时长, 提前获取流量",
            'showCancelButton': true,
            'confirmButtonText': '确定',
            'cancelButtonText': '取消'
          }).then(_0x3c8a4f => {
            var _0x218f64 = {
              'LJYEa': "error",
              'gUEyH': function (_0x2a531c, _0x597b99) {
                return _0x2a531c + _0x597b99;
              },
              'kuHTE': "发生错误："
            };

            if (_0x3c8a4f.value) {
              swal.fire({
                'title': "正在处理中",
                'text': "请耐心等候...",
                'onOpen': function () {
                  swal.showLoading();
                }
              });
              $.ajax({
                'type': "POST",
                'url': "/user/advance_feset_flow",
                'dataType': "json",
                'data': {
                  'mode': _0x50016e
                },
                'success': function (_0x242aaa) {
                  if (_0x242aaa.ret === 1) {
                    Swal.fire({
                      'icon': "success",
                      'title': "提前重置成功",
                      'html': _0x242aaa.msg,
                      'onClose': () => {
                        window.location.reload();
                      }
                    });
                  } else {
                    Swal.fire({
                      'icon': "error",
                      'title': _0x242aaa.msg,
                      'timer': 2500,
                      'showConfirmButton': false
                    });
                  }
                },
                'error': function (_0xfdbd98) {
                  Swal.fire({
                    'icon': "error",
                    'title': "发生错误：" + _0xfdbd98.status
                  });
                }
              });
            }
          });
        }
      }
    };

    var _0x8e2400 = function () {
      if (!document.getElementById("index-NodeTrafficChart-card")) {
        return;
      }

      KTApp.block("#index-NodeTrafficChart-card", {
        'overlayColor': "#FFFFFF",
        'state': "primary",
        'message': "加载中..."
      });
      $.ajax({
        'type': "GET",
        'url': "/user/ajax_data/chart/index_node_traffic",
        'dataType': "json",
        'data': {},
        'success': function (_0x178c9f) {
          if (_0x178c9f.ret === 1) {
            _0x4e7a83(_0x178c9f);
          } else {
            if (_0x178c9f.ret === 0) {
              $("#NodeTrafficChart_null").show();
            } else {
              window.location.reload();
            }
          }

          KTApp.unblock("#index-NodeTrafficChart-card");
        },
        'error': function (_0x3f7098) {
          Swal.fire({
            'icon': "error",
            'title': "发生错误：" + _0x3f7098.status
          });
        }
      });
    };

    var _0x4e7a83 = function (_0x40ab61) {
      var _0x1c93cb = document.getElementById("NodeTrafficChart");

      if (!_0x1c93cb) {
        return;
      }

      let _0x119bca = [],
          _0x42dac8 = [],
          _0xb569dd = [];

      for (let _0x206c7b in _0x40ab61.data) {
        _0x119bca.push(_0x40ab61.data[_0x206c7b].mb);

        _0x42dac8.push(_0x40ab61.data[_0x206c7b].node_name);

        _0xb569dd.push(_0x40ab61.data[_0x206c7b].traffic);
      }

      var _0x4567ba = {
        'series': [{
          'name': '流量',
          'data': _0x119bca
        }],
        'chart': {
          'type': "bar",
          'toolbar': {
            'show': false
          }
        },
        'plotOptions': {
          'bar': {
            'horizontal': true,
            'columnWidth': ["30%"],
            'endingShape': "rounded"
          }
        },
        'legend': {
          'show': false
        },
        'dataLabels': {
          'enabled': false
        },
        'stroke': {
          'show': true,
          'width': 2,
          'colors': ["transparent"]
        },
        'xaxis': {
          'categories': _0x42dac8,
          'axisBorder': {
            'show': false
          },
          'axisTicks': {
            'show': false
          },
          'labels': {
            'style': {
              'colors': KTApp.getSettings().colors.gray["gray-500"],
              'fontSize': "10px",
              'fontFamily': KTApp.getSettings()["font-family"]
            }
          }
        },
        'yaxis': {
          'labels': {
            'style': {
              'colors': KTApp.getSettings().colors.gray["gray-500"],
              'fontSize': "12px",
              'fontFamily': KTApp.getSettings()["font-family"]
            },
            'formatter': function (_0x5e8693) {
              return _0x5e8693 + " MB";
            }
          }
        },
        'fill': {
          'opacity': 1
        },
        'states': {
          'normal': {
            'filter': {
              'type': "none",
              'value': 0
            }
          },
          'hover': {
            'filter': {
              'type': "none",
              'value': 0
            }
          },
          'active': {
            'allowMultipleDataPointsSelection': false,
            'filter': {
              'type': "none",
              'value': 0
            }
          }
        },
        'tooltip': {
          'theme': "light",
          'style': {
            'fontSize': "12px",
            'fontFamily': KTApp.getSettings()["font-family"]
          },
          'y': {
            'formatter': function (_0x30fd8e) {
              return _0x30fd8e + " MB";
            }
          }
        },
        'colors': [KTApp.getSettings().colors.theme.base.primary, KTApp.getSettings().colors.gray["gray-300"]],
        'grid': {
          'borderColor': KTApp.getSettings().colors.gray["gray-200"],
          'strokeDashArray': 4,
          'yaxis': {
            'lines': {
              'show': true
            }
          }
        }
      };

      var _0x1c4338 = new ApexCharts(_0x1c93cb, _0x4567ba);

      _0x1c4338.render();
    };

    var _0xe44a94 = function (_0x532bec, _0x5ca58e) {
      switch (_0x532bec) {
        case "NodeTraffic":
          console.log(_0x5ca58e);

          _0x4e7a83(_0x5ca58e);

          break;

        default:
          return 0;
      }
    };

    return {
      'init': function () {
        mt.copytext();

        if (urlPath.indexOf("/tutorial") < 0) {
          _0x8e2400();
        }
      },
      'flowTiaoChart': function (_0xd6782c) {
        _0x28ea98(_0xd6782c);
      },
      'RealTimeNodeTrafficChat': function () {
        RealTimeNodeTrafficChat();
      },
      'oneclickImport': function (_0x111d0b, _0x4016e0) {
        _0x3d56a2(_0x111d0b, _0x4016e0);
      },
      'qrcodeImport': function (_0x1af473, _0x35db9e) {
        $.getScript(ASSETS_URL + "/plugins/jQuery-qrcode/jquery.qrcode.min.js", function () {
          _0x540c23(_0x1af473, _0x35db9e);
        });
      },
      'checkin': function () {
        _0x32505b();
      },
      'loadTraffic': function () {
        $("#trafficlog").load("/user/trafficlog#scatter-plot", function () {});
      },
      'advanceResetFlow': function (_0x3ab414 = "get") {
        _0x1babbc(_0x3ab414);
      }
    };
  }();

  jQuery(document).ready(function () {
    index.init();
  });
}

if (urlPath.indexOf("/code") >= 0) {
  var code = function () {
    var _0x524031 = function () {
      _0x5f4fa1();

      _0x38b470();

      _0x48c7ca();
    };

    var _0x35c079 = function (_0x434e05, _0xbca93c, _0x4ef4a6, _0xec9e1 = 0) {
      var _0x37773a = "nano";

      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        var _0x37773a = "wap";
      } else {
        var _0x37773a = "web";
      }

      var _0x543639 = _0xbca93c;

      var _0x43b591 = _0xec9e1 == 0 ? parseFloat($("#amount").val()) : 0;

      if (_0xec9e1 == 0) {
        if (isNaN(_0x43b591)) {
          Swal.fire({
            'icon': "error",
            'title': "非法的金额",
            'timer': 1500,
            'showConfirmButton': false
          });
          return false;
        }
      }

      KTApp.blockPage({
        'overlayColor': "#000000",
        'opacity': 0.3,
        'type': 'v2',
        'state': "primary",
        'message': "正在处理, 请稍候..."
      });
      $.ajax({
        'url': "/user/payment/purchase",
        'data': {
          'price': _0x43b591,
          'type': _0x543639,
          'shopid': _0x4ef4a6,
          'client': _0x37773a,
          'paylist_id': _0xec9e1
        },
        'dataType': "json",
        'type': "POST",
        'success': function (_0x12675b) {
          if (_0x12675b.ret === 1) {
            if (_0xec9e1 == 0 && document.getElementById("ajax_paylist_data")) {
              $("#ajax_paylist_data").KTDatatable("reload");
            }

            switch (_0x12675b.type) {
              case "qrcode":
                $("#metronpay-modal-body-url").hide();
                $("#to-pay").hide();
                $("#metronpay-modal-body-qrcode").html("<div class=\"text-center\"><p>扫描二维码支付</p><div class=\"pb-3\" align=\"center\" id=\"qrcode\"></div><p>支付完毕后会自动跳转</p></div>");
                $("#metronpay-modal-body-qrcode").show();
                $.getScript(ASSETS_URL + "/plugins/jQuery-qrcode/jquery.qrcode.min.js", function () {
                  $("#qrcode").qrcode({
                    'text': _0x12675b.url
                  });
                  KTApp.unblockPage();
                  $("#metronpay-modal").modal();
                  setTimeout(function () {
                    _0x162b1e(_0x12675b.tradeno);
                  }, 3000);
                });
                break;

              case "url":
                $("#metronpay-modal-body-qrcode").hide();
                $("#metronpay-modal-body-url").show();
                $("#to-pay").show();
                document.getElementById("to-pay").href = _0x12675b.url;
                KTApp.unblockPage();
                $("#metronpay-modal").modal();
                break;

              case "img":
                $("#metronpay-modal-body-url").hide();
                $("#to-pay").hide();
                $("#metronpay-modal-body-qrcode").html("<p id=\"loadqr\" >正在加载二维码<span class=\"kt-spinner kt-spinner--md kt-spinner--info\"></span></p><img id=\"wolfpay_qr\" src=\"+data.url+\"/>");
                $("#metronpay-modal-body-qrcode").show();

                wolfpay_qr.onload = function () {
                  $("#loadqr").hide();
                };

                KTApp.unblockPage();
                $("#metronpay-modal").modal();
                break;

              default:
                break;
            }
          } else {
            if (_0x12675b.ret === 0) {
              KTApp.unblockPage();
              Swal.fire({
                'icon': "error",
                'title': _0x12675b.msg,
                'confirmButtonText': '确定'
              });
            } else {
              window.location.reload();
            }
          }
        },
        'error': function (_0x38e479, _0xeaef65) {
          KTApp.unblockPage();
          Swal.fire({
            'icon': "error",
            'title': "发生错误 " + _0x38e479.status,
            'confirmButtonText': '确定'
          }).then(_0x344b4b => {
            window.location.reload();
          });
        }
      });
    };

    var _0x162b1e = function (_0x29c7a8) {
      $.ajax({
        'type': "POST",
        'url': "/payment/status",
        'dataType': "json",
        'data': {
          'tradeno': _0x29c7a8
        },
        'success': _0x4a233d => {
          if (_0x4a233d.result === 1) {
            Swal.fire({
              'icon': "success",
              'title': "充值成功!"
            }).then(_0x3f8090 => {
              window.location.reload();
            });
            return;
          } else {
            _0xdffa6c("metronPay_status", _0x29c7a8);
          }
        },
        'error': _0x5aca55 => {
          _0xdffa6c("metronPay_status", _0x29c7a8);
        }
      });
    };

    var _0xdffa6c = function (_0x517cb, _0x2a1c8f) {
      switch (_0x517cb) {
        case "metronPay_status":
          setTimeout(function () {
            _0x162b1e(_0x2a1c8f);
          }, 3000);
          break;
      }
    };

    var _0x1aa296 = function () {
      $("#pay_code_form .input-group").addClass("spinner spinner-primary spinner-right");
      $("#code-update").attr("disabled", true);
      setTimeout(function () {
        $.ajax({
          'type': "POST",
          'url': "code",
          'dataType': "json",
          'data': {
            'code': $("#pay_code").val()
          },
          'success': function (_0x374d64) {
            $("#pay_code_form .input-group").removeClass("spinner spinner-primary spinner-right");
            $("#code-update").attr("disabled", false);

            if (_0x374d64.ret) {
              Swal.fire({
                'icon': "success",
                'title': _0x374d64.msg,
                'confirmButtonText': '确定'
              }).then(_0x53637a => {
                window.location.reload();
              });
            } else {
              if (_0x374d64.ret === 0) {
                Swal.fire({
                  'icon': "error",
                  'title': _0x374d64.msg,
                  'confirmButtonText': '确定'
                });
              } else {
                window.location.reload();
              }
            }
          },
          'error': function (_0x3dcb5d) {
            $("#pay_code_form .input-group").removeClass("spinner spinner-primary spinner-right");
            $("#code-update").attr("disabled", false);
            Swal.fire({
              'icon': "error",
              'title': "发生错误：" + _0x3dcb5d.status,
              'confirmButtonText': '确定'
            });
          }
        });
      }, 1000);
    };

    var _0x334e5c = function (_0x2e21eb) {
      var _0x1b7591 = {
        'ZBjsp': function (_0x51953a, _0x33be3a) {
          return _0x51953a === _0x33be3a;
        },
        'rboOD': "1|2|5|6|8|0|7|4|3",
        'FuyGL': function (_0x58b2fe, _0x50de1e) {
          return _0x58b2fe(_0x50de1e);
        },
        'ZgBMu': "#zs_used",
        'MaHqT': function (_0x5f39dc, _0x29066b) {
          return _0x5f39dc + _0x29066b;
        },
        'MPrNJ': function (_0xf6a62c, _0x2c1442) {
          return _0xf6a62c + _0x2c1442;
        },
        'CqTsv': function (_0x584c0c, _0xfa7298) {
          return _0x584c0c + _0xfa7298;
        },
        'mspkv': "扣除时长：",
        'VfLaE': " 天 &nbsp;&nbsp;&nbsp; 扣除流量：",
        'Bcmha': " GB",
        'fmAUx': "#zs_name",
        'AFcHh': "商品名称：",
        'EsSEb': function (_0x537a2d, _0x4c26f7) {
          return _0x537a2d(_0x4c26f7);
        },
        'NENWD': "#PackageConversion-modal",
        'ZzcaD': function (_0x3068b8, _0x20cd41) {
          return _0x3068b8(_0x20cd41);
        },
        'IYKwl': "#zs_type",
        'fObBQ': "商品类型：",
        'LdAej': function (_0x702aa2, _0x337eff) {
          return _0x702aa2(_0x337eff);
        },
        'kQPGb': "#zs_the",
        'azFCO': "折算方式：",
        'ibrNb': function (_0xe8cac3, _0x1f22b0) {
          return _0xe8cac3(_0x1f22b0);
        },
        'yvewz': "#zs_money",
        'CAKXc': function (_0x3e9770, _0xbe42bd) {
          return _0x3e9770 + _0xbe42bd;
        },
        'QAkSG': function (_0xef99f9, _0x4f8d62) {
          return _0xef99f9 + _0x4f8d62;
        },
        'TOsop': function (_0xb50de4, _0x9c91fc) {
          return _0xb50de4 + _0x9c91fc;
        },
        'gaiQa': function (_0x18e480, _0x17d34f) {
          return _0x18e480 + _0x17d34f;
        },
        'QcACi': function (_0x5726fd, _0x59e70c) {
          return _0x5726fd + _0x59e70c;
        },
        'OnwRf': function (_0x383fa6, _0xb170f0) {
          return _0x383fa6 + _0xb170f0;
        },
        'tiHer': function (_0x5afd12, _0x2f72ac) {
          return _0x5afd12 + _0x2f72ac;
        },
        'TkAus': function (_0x4aea4e, _0x355bc3) {
          return _0x4aea4e + _0x355bc3;
        },
        'YqJts': "返还金额：",
        'ksNLP': " 元 &nbsp;&nbsp;&nbsp; 手续费",
        'WyChs': " 元 &nbsp;&nbsp;&nbsp; 实际返还：",
        'wqAnV': "#zs_ppt",
        'jtlds': "剩余比例：",
        'VpRSf': "error",
        'XQEIe': function (_0x334bc0, _0x58a8a9) {
          return _0x334bc0 + _0x58a8a9;
        },
        'hVhbj': "发生错误：",
        'FZeVG': "正在处理中",
        'YrIwy': "请耐心等候...",
        'dKMpM': "POST",
        'WRCym': "/user/packageconversion",
        'GajVW': "json"
      };
      Swal.fire({
        'icon': "warning",
        'title': "是否折算套餐?",
        'html': "扣除相应的手续费折算后, 按剩余价值退还相应的金额到钱包余额",
        'showCancelButton': true,
        'confirmButtonText': "确定折算",
        'cancelButtonText': '取消'
      }).then(_0x850752 => {
        if (_0x850752.value) {
          swal.fire({
            'title': "正在处理中",
            'text': "请耐心等候...",
            'onOpen': function () {
              swal.showLoading();
            }
          });
          $.ajax({
            'type': "POST",
            'url': "/user/packageconversion",
            'dataType': "json",
            'data': {
              'id': _0x2e21eb
            },
            'success': function (_0x17001c) {
              if (_0x17001c.ret === 1) {
                var _0x412123 = "1|2|5|6|8|0|7|4|3".split('|'),
                    _0x5b3561 = 0;

                window.conversionID = _0x2e21eb;
                $("#zs_name").html("商品名称：" + _0x17001c.name);
                $("#zs_type").html("商品类型：" + _0x17001c.ratio.name);
                $("#zs_the").html("折算方式：" + _0x17001c.ratio.type);
                $("#zs_ppt").html("剩余比例：" + _0x17001c.ratio.ppt + " %");
                $("#zs_used").html("扣除时长：" + _0x17001c.ratio.time.used_gs + " 天 &nbsp;&nbsp;&nbsp; 扣除流量：" + _0x17001c.ratio.flow.used_gb + " GB");
                $("#zs_money").html("返还金额：" + _0x17001c.money_a + " 元 &nbsp;&nbsp;&nbsp; 手续费" + _0x17001c.hdpr + '%：' + _0x17001c.hdfe + " 元 &nbsp;&nbsp;&nbsp; 实际返还：" + _0x17001c.money + " 元");
                $("#PackageConversion-modal").modal();
                swal.close();
              } else {
                Swal.fire({
                  'icon': "error",
                  'title': _0x17001c.msg,
                  'timer': 2500,
                  'showConfirmButton': false
                });
              }
            },
            'error': function (_0x29cffc) {
              Swal.fire({
                'icon': "error",
                'title': "发生错误：" + _0x29cffc.status
              });
            }
          });
        }
      });
    };

    var _0x59e72c = function () {
      $("#Conversion_ok").text("正在处理").addClass("kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light").attr("disabled", true);
      $.ajax({
        'type': "POST",
        'url': "/user/packageconversion",
        'dataType': "json",
        'data': {
          'id': conversionID,
          'ok': 'ok'
        },
        'success': function (_0xdcca57) {
          $("#Conversion_ok").text("确定折算").removeClass("kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light").attr("disabled", false);

          if (_0xdcca57.ret === 1) {
            Swal.fire({
              'icon': "success",
              'title': "折算成功",
              'html': _0xdcca57.msg,
              'onClose': () => {
                window.location.reload();
              }
            });
          } else {
            Swal.fire({
              'icon': "error",
              'title': _0xdcca57.msg,
              'timer': 2500,
              'showConfirmButton': false
            });
          }

          $("#PackageConversion-modal").modal("hide");
          $(".modal-backdrop").remove();
        },
        'error': function (_0x54d65e) {
          $("#Conversion_ok").text("确定折算").removeClass("kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light").attr("disabled", false);
          Swal.fire({
            'icon': "error",
            'title': "发生错误：" + _0x54d65e.status
          });
        }
      });
    };

    var _0x5f4fa1 = function () {
      var _0x2180b1 = $("#ajax_code_data").KTDatatable({
        'data': {
          'type': "remote",
          'source': {
            'read': {
              'method': "GET",
              'url': "/user/ajax_data/table/code",
              'map': function (_0x2ec1bc) {
                var _0x2c7aa4 = _0x2ec1bc;

                if (typeof _0x2ec1bc.data !== "undefined") {
                  _0x2c7aa4 = _0x2ec1bc.data;
                }

                return _0x2c7aa4;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'search': {
          'input': $("#generalSearch")
        },
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [5]
            }
          }
        },
        'translate': {
          'records': {
            'processing': "正在加载充值记录",
            'noRecords': "无充值记录"
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': "显示 {{start}} - {{end}} 共 {{total}} 项",
                'default': {
                  'first': "跳到第一页",
                  'prev': "上一页",
                  'next': "下一页",
                  'last': "跳到最后一页",
                  'more': "更多页面",
                  'input': "输入页数",
                  'select': "选择页面显示数量"
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': 'ID',
          'sortable': "desc",
          'width': 40,
          'type': "number",
          'selector': false,
          'autoHide': false,
          'textAlign': "center"
        }, {
          'field': "code",
          'title': "支付方式",
          'sortable': false
        }, {
          'field': "number",
          'title': "充值金额",
          'autoHide': false
        }, {
          'field': "usedatetime",
          'title': "充值时间",
          'autoHide': false
        }]
      });
    };

    var _0x48c7ca = function () {
      var _0x4c27e9 = {
        'zmgjo': function (_0x263412, _0x54b2b5) {
          return _0x263412 !== _0x54b2b5;
        },
        'CxVtQ': "undefined",
        'fpBqC': function (_0x58b571, _0x524a1b) {
          return _0x58b571(_0x524a1b);
        },
        'QOuXz': "status"
      };

      var _0x42ff93 = $("#ajax_paylist_data").KTDatatable({
        'data': {
          'type': "remote",
          'source': {
            'read': {
              'method': "GET",
              'url': "/user/ajax_data/table/paylist",
              'map': function (_0x45b9e3) {
                var _0x9655f0 = _0x45b9e3;

                if (_0x4c27e9.zmgjo(typeof _0x45b9e3.data, _0x4c27e9.CxVtQ)) {
                  _0x9655f0 = _0x45b9e3.data;
                }

                return _0x9655f0;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [-1, 5, 10, 20, 30, 50, 100]
            }
          }
        },
        'translate': {
          'records': {
            'processing': "正在加载记录",
            'noRecords': "无记录"
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': "显示 {{start}} - {{end}} 共 {{total}} 项",
                'default': {
                  'first': "跳到第一页",
                  'prev': "上一页",
                  'next': "下一页",
                  'last': "跳到最后一页",
                  'more': "更多页面",
                  'input': "输入页数",
                  'select': "选择页面显示数量"
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': 'ID',
          'sortable': "desc",
          'type': "number",
          'width': 50,
          'selector': false,
          'textAlign': "center"
        }, {
          'field': "total",
          'title': '金额',
          'width': 70
        }, {
          'field': "shop",
          'title': "支付用途",
          'sortable': false
        }, {
          'field': "tradeno",
          'title': "订单号",
          'sortable': false
        }, {
          'field': "datetime",
          'title': "创建时间"
        }, {
          'field': "status",
          'title': "金额状态",
          'autoHide': false,
          'template': function (_0x6e0f0f) {
            var _0x56b2a7 = {
              1: {
                'title': "已到账",
                'class': " label-light-success"
              },
              2: {
                'title': "Delivered",
                'class': " label-light-danger"
              },
              3: {
                'title': "Canceled",
                'class': " label-light-primary"
              },
              4: {
                'title': "Success",
                'class': " label-light-success"
              },
              5: {
                'title': "Info",
                'class': " label-light-info"
              },
              0: {
                'title': "未支付",
                'class': " label-light-danger"
              },
              7: {
                'title': "Warning",
                'class': " label-light-warning"
              }
            };
            return "<span class=\"label font-weight-bold label-lg " + _0x56b2a7[_0x6e0f0f.status].class + " label-inline\">" + _0x56b2a7[_0x6e0f0f.status].title + "</span>";
          }
        }, {
          'field': "shop_status",
          'title': "套餐状态",
          'sortable': false,
          'template': function (_0x177538) {
            var _0x99634c = {
              3: {
                'title': "购买失败",
                'state': "danger"
              },
              1: {
                'title': "钱包充值",
                'state': "success"
              },
              2: {
                'title': "购买成功",
                'state': "success"
              },
              0: {
                'title': "等待支付",
                'state': "primary"
              }
            };
            return "<span class=\"label label-" + _0x99634c[_0x177538.shop_status].state + " label-dot mr-2\"></span><span class=\"font-weight-bold text-" + _0x99634c[_0x177538.shop_status].state + "\">" + _0x99634c[_0x177538.shop_status].title + "</span>";
          }
        }, {
          'field': "caozuo",
          'title': '操作',
          'autoHide': false,
          'sortable': false
        }]
      });

      $("#kt_form_status").on("change", function () {
        _0x42ff93.search(_0x4c27e9.fpBqC($, this).val().toLowerCase(), _0x4c27e9.QOuXz);
      });
      $("#kt_form_status").selectpicker();
    };

    var _0x38b470 = function () {
      var _0x43c5ad = {
        'GdoAU': "已失效",
        'gXtBJ': " label-light-danger",
        'FPVjX': "生效中",
        'aDGkg': " label-light-success",
        'VbJcY': "已退还",
        'sBlOs': " label-light-warning",
        'Dnmwh': "Canceled",
        'yPZyK': " label-light-primary",
        'YfZsx': "Success",
        'OcOfC': "Info",
        'LxGgo': " label-light-info",
        'ouJoF': function (_0x229487, _0x32358a) {
          return _0x229487 + _0x32358a;
        },
        'WDWfp': "<span class=\"label font-weight-bold label-lg ",
        'mqTvO': " label-inline\">",
        'GWqsU': "</span>",
        'lEUQC': "不支持",
        'lxsRu': "danger",
        'pOyJS': "可折算",
        'wThHV': "success",
        'VmEeT': "primary",
        'bEnHs': function (_0x2bc96f, _0x37a488) {
          return _0x2bc96f + _0x37a488;
        },
        'puYSG': function (_0x4da3d9, _0x3a2876) {
          return _0x4da3d9 + _0x3a2876;
        },
        'AwgXi': "<span class=\"label label-",
        'DOosl': " label-dot mr-2\"></span><span class=\"font-weight-bold text-"
      };

      var _0x21814f = $("#ajax_shop_data").KTDatatable({
        'data': {
          'type': "remote",
          'source': {
            'read': {
              'method': "GET",
              'url': "/user/ajax_data/table/shop",
              'map': function (_0x578c2d) {
                var _0x5ba204 = _0x578c2d;

                if (typeof _0x578c2d.data !== "undefined") {
                  _0x5ba204 = _0x578c2d.data;
                }

                return _0x5ba204;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'search': {
          'input': $("#generalSearch")
        },
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [-1, 5, 10, 20, 30, 50, 100]
            }
          }
        },
        'translate': {
          'records': {
            'processing': "正在加载套餐记录",
            'noRecords': "无套餐记录"
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': "显示 {{start}} - {{end}} 共 {{total}} 项",
                'default': {
                  'first': "跳到第一页",
                  'prev': "上一页",
                  'next': "下一页",
                  'last': "跳到最后一页",
                  'more': "更多页面",
                  'input': "输入页数",
                  'select': "选择页面显示数量"
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': 'ID',
          'sortable': "desc",
          'width': 40,
          'type': "number",
          'selector': false,
          'textAlign': "center"
        }, {
          'field': "shopname",
          'title': "商品名称",
          'sortable': false
        }, {
          'field': "datetime",
          'title': "购买时间"
        }, {
          'field': "price",
          'title': '价格',
          'template': function (_0x45295d) {
            return _0x45295d.price + '元';
          }
        }, {
          'field': "renew",
          'title': "续费时间"
        }, {
          'field': "auto_reset",
          'title': "续费时重置流量",
          'sortable': false,
          'autoHide': true
        }, {
          'field': "usedd",
          'title': '状态',
          'autoHide': false,
          'template': function (_0x2d7266) {
            var _0x36955f = {
              0: {
                'title': _0x43c5ad.GdoAU,
                'class': _0x43c5ad.gXtBJ
              },
              1: {
                'title': _0x43c5ad.FPVjX,
                'class': _0x43c5ad.aDGkg
              },
              2: {
                'title': _0x43c5ad.VbJcY,
                'class': _0x43c5ad.sBlOs
              },
              3: {
                'title': _0x43c5ad.Dnmwh,
                'class': _0x43c5ad.yPZyK
              },
              4: {
                'title': _0x43c5ad.YfZsx,
                'class': _0x43c5ad.aDGkg
              },
              5: {
                'title': _0x43c5ad.OcOfC,
                'class': _0x43c5ad.LxGgo
              }
            };
            return _0x43c5ad.ouJoF(_0x43c5ad.ouJoF(_0x43c5ad.ouJoF(_0x43c5ad.ouJoF(_0x43c5ad.WDWfp, _0x36955f[_0x2d7266.usedd].class), _0x43c5ad.mqTvO), _0x36955f[_0x2d7266.usedd].title), _0x43c5ad.GWqsU);
          }
        }, {
          'field': "shop_pkcs",
          'title': "套餐折算",
          'autoHide': false,
          'sortable': false,
          'template': function (_0x5d5370) {
            var _0x58e0d9 = {
              0: {
                'title': _0x43c5ad.lEUQC,
                'state': _0x43c5ad.lxsRu
              },
              1: {
                'title': _0x43c5ad.pOyJS,
                'state': _0x43c5ad.wThHV
              },
              2: {
                'title': _0x43c5ad.VbJcY,
                'state': _0x43c5ad.VmEeT
              }
            };
            return _0x43c5ad.bEnHs(_0x43c5ad.bEnHs(_0x43c5ad.puYSG(_0x43c5ad.puYSG(_0x43c5ad.puYSG(_0x43c5ad.puYSG(_0x43c5ad.AwgXi, _0x58e0d9[_0x5d5370.shop_pkcs].state), _0x43c5ad.DOosl), _0x58e0d9[_0x5d5370.shop_pkcs].state), "\">"), _0x58e0d9[_0x5d5370.shop_pkcs].title), _0x43c5ad.GWqsU);
          }
        }, {
          'field': "caozuo",
          'title': '操作',
          'sortable': false,
          'overflow': "visible",
          'autoHide': false
        }]
      });

      $("#kt_form_usedd").on("change", function () {
        _0x21814f.search($(this).val().toLowerCase(), "usedd");
      });
      $("#kt_form_usedd").selectpicker();
    };

    return {
      'init': function () {
        _0x524031();
      },
      'payTab': function () {
        $("#code-getmoney, #code-setmoney").toggle();
      },
      'metronPay': function (_0x51866d, _0xd1866e, _0x536d7f, _0x88885d = 0) {
        if (_0x51866d == "modal") {
          if (isNaN(parseFloat($("#amount").val()))) {
            Swal.fire({
              'icon': "error",
              'title': "非法的金额",
              'confirmButtonText': '确定'
            });
            return false;
          }

          $("#metronPay_modal").modal();
        } else {
          if (_0xd1866e == '' && _0x88885d != 0) {
            $("#metronPay_restart_modal").modal();
          } else {
            if (_0x88885d != 0) {
              _0x35c079(_0x51866d, _0xd1866e, _0x536d7f, _0x88885d);
            } else {
              _0x35c079(_0x51866d, $("#pay_the li .active").attr("data-name"), _0x536d7f, _0x88885d);
            }
          }
        }
      },
      'metronPay_restart': function (_0x57d71c, _0x4607d6, _0x2967b8, _0x4fad5d = 0) {
        if (_0x4607d6 == '' && _0x4fad5d != 0) {
          window.$restart_paylist_id = _0x4fad5d;
          $("#metronPay_restart_modal").modal();
        } else {
          var _0x355516 = $("#reset_pay_the li .active").attr("data-name");

          _0x35c079(_0x57d71c, _0x355516, _0x2967b8, $restart_paylist_id);
        }
      },
      'update': function () {
        _0x1aa296();
      },
      'PackageConversion': function (_0x174b9f) {
        _0x334e5c(_0x174b9f);
      },
      'Conversion_ok': function () {
        _0x59e72c();
      }
    };
  }();

  jQuery(document).ready(function () {
    code.init();
  });
}

if (urlPath.indexOf("/shop") >= 0) {
  var shop = function () {
    var _0x59a68d = {
      'ngccS': "6|2|8|0|5|3|7|1|4",
      'JoiFX': "4|3|2|0|6|1|5",
      'TPTNz': "auto",
      'woIby': function (_0xd45763, _0x16b302) {
        return _0xd45763 == _0x16b302;
      },
      'QpIEt': function (_0x32f5e7, _0x34e490) {
        return _0x32f5e7(_0x34e490);
      },
      'iKTKz': "#coupon",
      'hPvlA': "#shop_credit",
      'ssIfX': "750",
      'pPmvi': "#use_coupon_code",
      'TmtsY': "使用优惠码",
      'llswT': function (_0xd86bdd, _0x455a3e) {
        return _0xd86bdd + _0x455a3e;
      },
      'ETJDT': "#buytext-",
      'NpoDj': "正在获取订单",
      'wxkvS': "kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light",
      'mniBn': "disabled",
      'sIeRP': function (_0x500b09, _0xc776f6) {
        return _0x500b09 === _0xc776f6;
      },
      'eeHue': "0|9|6|2|1|3|8|4|7|5",
      'ZBvVo': "total",
      'FSLuO': "need",
      'GDZYO': "user_money",
      'MxMSL': "#shop_name",
      'wSelO': function (_0x5b5834, _0x1b7a9d) {
        return _0x5b5834 + _0x1b7a9d;
      },
      'OaedW': "商品名称：",
      'PPRaO': "name",
      'ptEOx': function (_0x5aef3, _0x350af3) {
        return _0x5aef3 > _0x350af3;
      },
      'FSWrD': "#shop_stneed",
      'HYItR': "余额抵扣：",
      'qffhD': " 元&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
      'ymHBi': "还需支付：",
      'CmGgx': "#shop_payment",
      'OyWqM': "#order_input",
      'bBPZB': "在线支付",
      'gGOzv': function (_0x47ec8f, _0x275b4f) {
        return _0x47ec8f <= _0x275b4f;
      },
      'USBbK': function (_0x864b9f, _0x4bb6c6) {
        return _0x864b9f + _0x4bb6c6;
      },
      'fDylo': function (_0x1ed942, _0x439128) {
        return _0x1ed942(_0x439128);
      },
      'DIcWC': "余额支付",
      'kPZqG': function (_0x176eb8, _0x1a0f53) {
        return _0x176eb8(_0x1a0f53);
      },
      'MXCli': function (_0x2f87cc, _0x9c5550) {
        return _0x2f87cc(_0x9c5550);
      },
      'DDYSq': "#buy_modal",
      'vYXfy': function (_0x545912, _0x1e3761) {
        return _0x545912(_0x1e3761);
      },
      'URSkw': "#input_coupon_code",
      'mjfDF': "coupon",
      'tRFhf': "优惠额度：",
      'wiBXR': "&nbsp;&nbsp;|&nbsp;&nbsp;优惠码：",
      'SfcTb': "优惠码：",
      'QLUAp': "autor",
      'pmAQI': "none",
      'tPqUy': "#shop_total",
      'ztvph': function (_0x575f20, _0x3443ce) {
        return _0x575f20 + _0x3443ce;
      },
      'MNoFk': "套餐金额：",
      'DRrEI': function (_0x45706d, _0x36cef0) {
        return _0x45706d + _0x36cef0;
      },
      'HUInx': "error",
      'JXDXt': "发生错误",
      'zGrGz': "POST",
      'NJnLx': "/user/coupon_check",
      'zvifg': "json",
      'ACSLA': "0|4|1|3|2",
      'intuM': function (_0x156912, _0x3da708, _0x3f5184) {
        return _0x156912(_0x3da708, _0x3f5184);
      },
      'GYFls': "#metronpay-modal",
      'OqmXY': "#qrcode",
      'CXtpI': "#loadqr",
      'zKtXw': "qrcode",
      'LUSYR': function (_0x30ce2c, _0x27b0f9) {
        return _0x30ce2c(_0x27b0f9);
      },
      'ZXFmX': "#metronpay-modal-body-url",
      'jQFtb': "#to-pay",
      'eAHRw': "#metronpay-modal-body-qrcode",
      'OYgHE': "<div class=\"text-center\"><p>扫描二维码支付</p><div class=\"pb-3\" align=\"center\" id=\"qrcode\"></div><p>支付完毕后会自动跳转</p></div>",
      'zzdcK': function (_0x425b8e, _0x3617d1) {
        return _0x425b8e + _0x3617d1;
      },
      'VRdBS': "/plugins/jQuery-qrcode/jquery.qrcode.min.js",
      'EFuhv': "url",
      'OnMQg': "to-pay",
      'fbtWL': "img",
      'Uwpqn': "<p id=\"loadqr\" >正在加载二维码<span class=\"kt-spinner kt-spinner--md kt-spinner--info\"></span></p><img id=\"wolfpay_qr\" src=\"+data.url+\"/>",
      'RJTMJ': "发生错误 ",
      'TTccs': function (_0x1a161d, _0x18f9b3) {
        return _0x1a161d <= _0x18f9b3;
      },
      'JrJwE': "5|0|3|2|4|1",
      'GXjdN': "wap",
      'xQTCH': "web",
      'OUYTV': "/user/payment/purchase",
      'yTAtl': "#pay_the li .active",
      'dyWDt': "data-name",
      'ooOUP': "autorenew",
      'rbuCP': "#metronpay-content",
      'oEYZH': "<div class=\"text-center\"><p>充值已到账，正在为您购买套餐<span class=\"kt-spinner kt-spinner--md kt-spinner--info\"></span></p></div>",
      'qwnMr': "success",
      'ygJPk': "购买成功!",
      'WOTsN': "metronPay_status",
      'jEfwN': "/user",
      'TxAEY': "/payment/status",
      'LKKLQ': function (_0x2fd768, _0x2b6e27, _0xf2db9c) {
        return _0x2fd768(_0x2b6e27, _0xf2db9c);
      },
      'IFnJe': "购买成功",
      'OWJDh': "用户中心",
      'synrZ': "btn btn-primary",
      'SEipG': "warning",
      'PywMk': "购买失败",
      'PQnYR': "  发生了错误。",
      'RpqHo': "buy",
      'AYEdN': ".buyTrafficPackage",
      'OTgsk': "1|0|2|3|4",
      'QbowB': "#traffic-package li .active",
      'yRfrx': "出错啦",
      'qCzEC': "请选择流量包",
      'dMbKL': function (_0x491672, _0x5f4001) {
        return _0x491672(_0x5f4001);
      },
      'JeQXc': "购买中",
      'nctBp': "/user/buy_traffic_package",
      'zQtHK': "7|3|0|4|2|6|5|1",
      'WCEpG': function (_0x307b6b, _0x5edb71) {
        return _0x307b6b - _0x5edb71;
      },
      'xXBaY': function (_0x1ef731, _0x2768aa) {
        return _0x1ef731 >= _0x2768aa;
      },
      'gqnZe': "1|7|5|2|8|9|4|6|0|3|10",
      'tRlXp': function (_0x51fcff, _0x507fe9) {
        return _0x51fcff == _0x507fe9;
      },
      'IjMGU': function (_0x1686f6, _0x2c43a3) {
        return _0x1686f6 / _0x2c43a3;
      },
      'bxEFd': function (_0x56f587, _0x54345a) {
        return _0x56f587 % _0x54345a;
      },
      'UxzPn': function (_0x5920fb, _0x448661) {
        return _0x5920fb / _0x448661;
      },
      'RUUxI': function (_0x50e9d3, _0x4c6d3d) {
        return _0x50e9d3 == _0x4c6d3d;
      },
      'stWBt': function (_0x108fa1, _0x464bb8) {
        return _0x108fa1 < _0x464bb8;
      },
      'UNweU': function (_0x4c4261, _0x5a37d1) {
        return _0x4c4261 / _0x5a37d1;
      },
      'czZVn': function (_0x17d53c, _0x2a9bce) {
        return _0x17d53c % _0x2a9bce;
      },
      'vwycs': function (_0x55bbe7, _0x59bbde) {
        return _0x55bbe7 / _0x59bbde;
      },
      'MGxhu': "2|4|0|3|1",
      'OYWdu': "#buy_activity",
      'LiaiB': "活动已结束",
      'SVqcS': function (_0x591b46, _0x27f81e) {
        return _0x591b46(_0x27f81e);
      },
      'EkOss': "#shop_activity_no",
      'LmWer': "500",
      'uxVLs': "buy_activity",
      'ryQjX': function (_0x2353b9, _0x37f53c, _0x21aa86) {
        return _0x2353b9(_0x37f53c, _0x21aa86);
      },
      'raMHX': "clear",
      'tuuPG': function (_0x36c504, _0x5b5a22, _0x1d6e59, _0x1fe4c7) {
        return _0x36c504(_0x5b5a22, _0x1d6e59, _0x1fe4c7);
      },
      'CErNK': "#000000",
      'TmLbH': "primary",
      'ouxmX': "正在请求支付, 请稍候...",
      'tIBUm': function (_0x1f24fe) {
        return _0x1f24fe();
      },
      'AKLDe': function (_0x3693e3) {
        return _0x3693e3();
      }
    };

    var _0x59981b = "6|2|8|0|5|3|7|1|4".split('|'),
        _0x26c0b7 = 0;

    var _0x92f168 = {
      'dlWgi': "4|3|2|0|6|1|5",
      'bTmrN': "auto",
      'UVgNs': function (_0x5a5f16, _0x2f9a5d) {
        return _0x5a5f16 == _0x2f9a5d;
      },
      'IGwDi': function (_0x466404, _0x16cced) {
        return _0x466404(_0x16cced);
      },
      'SwgLH': "#coupon",
      'zogOU': "#shop_credit",
      'XLhSZ': "750",
      'jKHsm': function (_0x5e0558, _0x1140c6) {
        return _0x5e0558(_0x1140c6);
      },
      'SFJBG': "#use_coupon_code",
      'eLOnT': "使用优惠码",
      'SrXsA': function (_0xe9ecba, _0x261900) {
        return _0xe9ecba(_0x261900);
      },
      'ZUlDr': function (_0x292094, _0x5e4842) {
        return _0x292094 + _0x5e4842;
      },
      'OdTfo': "#buytext-",
      'ayyKe': "正在获取订单",
      'ldGAN': "kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light",
      'whDWq': "disabled",
      'uluxs': function (_0x43604a, _0x3f3ed9) {
        return _0x43604a === _0x3f3ed9;
      },
      'aixQj': "0|9|6|2|1|3|8|4|7|5",
      'gijxz': "total",
      'XeEJU': "need",
      'WXWTr': "user_money",
      'cnRWY': "#shop_name",
      'Vdizb': function (_0x26e14f, _0xef5de6) {
        return _0x26e14f + _0xef5de6;
      },
      'jCwwE': "商品名称：",
      'dZYvD': "name",
      'cqzAY': function (_0x53f797, _0x4a276c) {
        return _0x53f797 > _0x4a276c;
      },
      'UMXTe': "#shop_stneed",
      'YwqAV': function (_0x3f0bcb, _0x326ea4) {
        return _0x3f0bcb + _0x326ea4;
      },
      'wPBvL': "余额抵扣：",
      'CpmkR': " 元&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
      'ESZXc': "还需支付：",
      'eCOfC': "#shop_payment",
      'KVerX': "#order_input",
      'MtMtM': "在线支付",
      'eXSUy': function (_0x4ff934, _0x1036ea) {
        return _0x4ff934 <= _0x1036ea;
      },
      'hlbiq': function (_0x499470, _0x3fb8ea) {
        return _0x499470 + _0x3fb8ea;
      },
      'GdbHi': function (_0x3da815, _0x48b80d) {
        return _0x3da815 + _0x48b80d;
      },
      'lCUST': function (_0x3519ef, _0x11d637) {
        return _0x3519ef(_0x11d637);
      },
      'rreyT': "余额支付",
      'NQfhT': function (_0x5e4228, _0x517b06) {
        return _0x5e4228(_0x517b06);
      },
      'SOYUv': function (_0x3e2fcd, _0x12e057) {
        return _0x3e2fcd(_0x12e057);
      },
      'ktJAM': "#buy_modal",
      'SiYkQ': function (_0x249d04, _0x327b5d) {
        return _0x249d04(_0x327b5d);
      },
      'huLQA': "#input_coupon_code",
      'PVvfq': "coupon",
      'peFqI': "优惠额度：",
      'qBbsz': "&nbsp;&nbsp;|&nbsp;&nbsp;优惠码：",
      'ewAHA': "优惠码：",
      'Vwasc': function (_0x3395a4, _0xa15540) {
        return _0x3395a4 == _0xa15540;
      },
      'SaSFV': "autor",
      'oObyZ': "none",
      'FgXaF': "#shop_total",
      'gTvwD': function (_0xe1205d, _0x54d0b3) {
        return _0xe1205d + _0x54d0b3;
      },
      'dDhEb': "套餐金额：",
      'fSfLM': function (_0x5d3d1d, _0x358ab1) {
        return _0x5d3d1d + _0x358ab1;
      },
      'uSfEB': "error",
      'Ovziv': "发生错误",
      'bSznM': "POST",
      'rvili': "/user/coupon_check",
      'WQuKo': "json",
      'jZeey': function (_0x15ece0, _0x443dac) {
        return _0x15ece0(_0x443dac);
      },
      'WyaZO': "0|4|1|3|2",
      'XNgrQ': function (_0x1dfea7, _0x349da1, _0x5cf4c3) {
        return _0x1dfea7(_0x349da1, _0x5cf4c3);
      },
      'xYWaO': "#metronpay-modal",
      'sNYTV': "#qrcode",
      'kjjVB': "#loadqr",
      'fhntP': "qrcode",
      'IRWSo': function (_0x323856, _0x3b1171) {
        return _0x323856(_0x3b1171);
      },
      'ytFCq': "#metronpay-modal-body-url",
      'hWsgo': "#to-pay",
      'uqERH': "#metronpay-modal-body-qrcode",
      'zeubk': "<div class=\"text-center\"><p>扫描二维码支付</p><div class=\"pb-3\" align=\"center\" id=\"qrcode\"></div><p>支付完毕后会自动跳转</p></div>",
      'aUdoh': function (_0x5e4118, _0x307eff) {
        return _0x5e4118 + _0x307eff;
      },
      'UeCMt': "/plugins/jQuery-qrcode/jquery.qrcode.min.js",
      'aSYhA': "url",
      'igZyL': "to-pay",
      'KYkMs': "img",
      'Icxqq': function (_0xb239af, _0x4cf8a2) {
        return _0xb239af(_0x4cf8a2);
      },
      'owZiz': "<p id=\"loadqr\" >正在加载二维码<span class=\"kt-spinner kt-spinner--md kt-spinner--info\"></span></p><img id=\"wolfpay_qr\" src=\"+data.url+\"/>",
      'dCNjo': "发生错误 ",
      'VWKoN': function (_0x5e25ae, _0x2e6454) {
        return _0x5e25ae <= _0x2e6454;
      },
      'thFXo': "5|0|3|2|4|1",
      'xmCKg': "wap",
      'ByGvv': "web",
      'CYXJt': "/user/payment/purchase",
      'FQMLe': function (_0xbfdb38, _0x54c058) {
        return _0xbfdb38(_0x54c058);
      },
      'kMaRZ': "#pay_the li .active",
      'Oqpda': "data-name",
      'sFQLW': "autorenew",
      'DTMpZ': "#metronpay-content",
      'ldonr': "<div class=\"text-center\"><p>充值已到账，正在为您购买套餐<span class=\"kt-spinner kt-spinner--md kt-spinner--info\"></span></p></div>",
      'Ggcft': "success",
      'LYBsC': "购买成功!",
      'PtaND': function (_0x1cd910, _0x2203fb, _0x350a19) {
        return _0x1cd910(_0x2203fb, _0x350a19);
      },
      'wdJWl': "metronPay_status",
      'QHziE': "/user",
      'PjDmu': "/payment/status",
      'efcIC': function (_0x352e8e, _0x1932f7, _0x5968b8) {
        return _0x352e8e(_0x1932f7, _0x5968b8);
      },
      'NXRbt': "购买成功",
      'IIOVx': "用户中心",
      'tLgVm': "btn btn-primary",
      'YrVSh': "warning",
      'aMDMI': "购买失败",
      'PbOKx': function (_0x3158ed, _0x27006e) {
        return _0x3158ed + _0x27006e;
      },
      'lnhyo': "  发生了错误。",
      'vLRZw': "buy",
      'gLuVa': function (_0xe23d79, _0x3c4809) {
        return _0xe23d79(_0x3c4809);
      },
      'OdTIe': ".buyTrafficPackage",
      'coHyA': "1|0|2|3|4",
      'xlXsh': function (_0x875c8, _0x423851) {
        return _0x875c8(_0x423851);
      },
      'DASoB': "#traffic-package li .active",
      'tgPiY': "出错啦",
      'KVPMe': "请选择流量包",
      'JfnWW': function (_0x195920, _0x5303e7) {
        return _0x195920(_0x5303e7);
      },
      'UixxX': "购买中",
      'GcTtf': "/user/buy_traffic_package",
      'oNXXI': "7|3|0|4|2|6|5|1",
      'NjvhO': function (_0x5f54f4, _0x4abe90) {
        return _0x5f54f4 - _0x4abe90;
      },
      'XuDXB': function (_0x4996a0, _0x54d706) {
        return _0x4996a0 >= _0x54d706;
      },
      'xirOd': "1|7|5|2|8|9|4|6|0|3|10",
      'zmaRj': function (_0x21ed63, _0x4aec7e) {
        return _0x21ed63 == _0x4aec7e;
      },
      'xcGsw': function (_0x4c7dbc, _0x3af268) {
        return _0x4c7dbc == _0x3af268;
      },
      'ZPVCC': function (_0x420fd8, _0x58e190) {
        return _0x420fd8 / _0x58e190;
      },
      'DuvfY': function (_0x4b8791, _0x408b87) {
        return _0x4b8791 / _0x408b87;
      },
      'ZohXT': function (_0x273f8d, _0xf4c33b) {
        return _0x273f8d / _0xf4c33b;
      },
      'TSxMm': function (_0x510582, _0x26351c) {
        return _0x510582 % _0x26351c;
      },
      'hZCBn': function (_0x309b1a, _0x23dd98) {
        return _0x309b1a / _0x23dd98;
      },
      'LBkLT': function (_0x2405c9, _0x541903) {
        return _0x2405c9 == _0x541903;
      },
      'UTxlJ': function (_0x5d30aa, _0x7ee5f7) {
        return _0x5d30aa < _0x7ee5f7;
      },
      'WQrSs': function (_0x273b43, _0x19374c) {
        return _0x273b43 + _0x19374c;
      },
      'CrFZT': function (_0x1d59c5, _0x269530) {
        return _0x1d59c5 % _0x269530;
      },
      'jCndX': function (_0x544718, _0x1f62e5) {
        return _0x544718 / _0x1f62e5;
      },
      'ItOka': function (_0x58fe24, _0x155cf8) {
        return _0x58fe24 > _0x155cf8;
      },
      'jxgtB': function (_0x4b6945, _0x6950c0) {
        return _0x4b6945 % _0x6950c0;
      },
      'yJzYg': function (_0x20daac, _0x5b6502) {
        return _0x20daac / _0x5b6502;
      },
      'GkEEH': function (_0x4bc80b, _0x3b6466) {
        return _0x4bc80b < _0x3b6466;
      },
      'jeiCA': "2|4|0|3|1",
      'PQQTH': "#buy_activity",
      'vHjGw': "活动已结束",
      'SIWlh': function (_0x1be902, _0x34aff2) {
        return _0x1be902(_0x34aff2);
      },
      'SOrfl': "#shop_activity_no",
      'MyjCz': "500",
      'PPpjn': "buy_activity",
      'fMmDP': function (_0x4c1bb9, _0x360d2c, _0x124246) {
        return _0x4c1bb9(_0x360d2c, _0x124246);
      },
      'KbDwx': "clear",
      'zCSgA': function (_0x55cc3e, _0x3f36b4) {
        return _0x55cc3e(_0x3f36b4);
      },
      'ygSgb': function (_0x42c965, _0x455130, _0x4e3c0e, _0x2331c5) {
        return _0x42c965(_0x455130, _0x4e3c0e, _0x2331c5);
      },
      'NNQoh': "#000000",
      'zyAAn': "primary",
      'cyBBI': "正在请求支付, 请稍候...",
      'RcZfV': function (_0xef31d2) {
        return _0xef31d2();
      },
      'JFRCA': function (_0x575517) {
        return _0x575517();
      },
      'rlwxi': function (_0x4d062b) {
        return _0x4d062b();
      }
    };

    var _0x49369e = function (_0x533cdc, _0x34a615, _0x57b363) {
      var _0x51cc2e = "4|3|2|0|6|1|5".split('|'),
          _0x23e9a4 = 0;

      var _0x1159b7 = {
        'wBQmK': function (_0xbe9284, _0x18c9a2) {
          return _0xbe9284 === _0x18c9a2;
        },
        'PJuLz': "0|9|6|2|1|3|8|4|7|5",
        'mpuQN': "total",
        'xlEWK': function (_0x228982, _0x4c87a9) {
          return _0x228982(_0x4c87a9);
        },
        'LMplU': "need",
        'yKcmY': "user_money",
        'OOhXL': function (_0x38d9c2, _0x567e3f) {
          return _0x38d9c2(_0x567e3f);
        },
        'NLABT': "#shop_name",
        'OxcPn': function (_0x3f3c6a, _0x32df30) {
          return _0x3f3c6a + _0x32df30;
        },
        'ecCSC': "商品名称：",
        'zcCxU': "name",
        'Rgfli': function (_0x5687fb, _0x25af3d) {
          return _0x5687fb > _0x25af3d;
        },
        'XjCtl': "#shop_stneed",
        'ottDX': function (_0x7cd587, _0x265266) {
          return _0x7cd587 + _0x265266;
        },
        'CzvNq': function (_0xb01890, _0x5a5b71) {
          return _0xb01890 + _0x5a5b71;
        },
        'CWFkQ': "余额抵扣：",
        'eEpbC': " 元&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        'nMFuC': "还需支付：",
        'JzXNl': function (_0x6ec705, _0x28668c) {
          return _0x6ec705(_0x28668c);
        },
        'uxDgw': "#shop_payment",
        'dGIPa': "750",
        'DAZYk': "#order_input",
        'MMbIO': "在线支付",
        'HfApL': function (_0x33b130, _0x329e10) {
          return _0x33b130 <= _0x329e10;
        },
        'RPxWA': function (_0x3b8a27, _0x14063d) {
          return _0x3b8a27 + _0x14063d;
        },
        'WKXmx': function (_0x510208, _0x432272) {
          return _0x510208 + _0x432272;
        },
        'ASDWE': function (_0x34278a, _0x33e091) {
          return _0x34278a(_0x33e091);
        },
        'xZoQS': "余额支付",
        'IGFIF': function (_0x33fdc2, _0x35544b) {
          return _0x33fdc2(_0x35544b);
        },
        'FNlBQ': function (_0x446f4c, _0x5047c1) {
          return _0x446f4c + _0x5047c1;
        },
        'knyRP': "#buytext-",
        'jXexL': "kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light",
        'NatIW': "disabled",
        'ECUWn': function (_0x5bfd18, _0x5d287b) {
          return _0x5bfd18(_0x5d287b);
        },
        'sALRL': "#buy_modal",
        'NZoJb': function (_0x1f13fe, _0x8cb03d) {
          return _0x1f13fe(_0x8cb03d);
        },
        'hxtQG': "#input_coupon_code",
        'GTGLp': "coupon",
        'UgWeX': "#shop_credit",
        'NJKse': function (_0x1414c, _0x4e674e) {
          return _0x1414c + _0x4e674e;
        },
        'IYFqR': "优惠额度：",
        'dUbFq': "&nbsp;&nbsp;|&nbsp;&nbsp;优惠码：",
        'rCxjq': "#coupon",
        'zxXZV': function (_0x4b9930, _0xdd9bf0) {
          return _0x4b9930(_0xdd9bf0);
        },
        'qkmzO': "#use_coupon_code",
        'EfQPE': "优惠码：",
        'CPNws': "使用优惠码",
        'OdNBf': function (_0x2b2f34, _0x5da82d) {
          return _0x2b2f34 == _0x5da82d;
        },
        'QTpEp': "auto",
        'jJkwg': "autor",
        'NyNBV': "none",
        'qlIJF': function (_0x47295, _0x1bcc6f) {
          return _0x47295(_0x1bcc6f);
        },
        'HUivC': "#shop_total",
        'evxyX': function (_0xc81eba, _0x2e990f) {
          return _0xc81eba + _0x2e990f;
        },
        'gCKFS': "套餐金额：",
        'oovvC': function (_0x1129ee, _0x411483) {
          return _0x1129ee + _0x411483;
        },
        'izgnC': "error",
        'lpuaG': function (_0x32f621, _0x733420) {
          return _0x32f621(_0x733420);
        },
        'HEwQb': "发生错误"
      };

      if (!_0x57b363) {
        $("#buytext-" + _0x533cdc).text("正在获取订单").addClass("kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light").attr("disabled", true);
      }

      if ($("#coupon").val() == '') {
        $("#shop_credit").hide("750");
        $("#use_coupon_code").text("使用优惠码");
      }

      window.shopinfo = new Array();
      shopinfo.id = _0x533cdc;
      shopinfo.auto = _0x34a615;
      $.ajax({
        'type': "POST",
        'url': "/user/coupon_check",
        'dataType': "json",
        'data': {
          'coupon': $("#coupon").val(),
          'shop': shopinfo.id
        },
        'success': function (_0x470c2b) {
          if (_0x1159b7.wBQmK(_0x470c2b.ret, 1)) {
            var _0xff71d9 = _0x1159b7.PJuLz.split('|'),
                _0xf4fa87 = 0;

            while (true) {
              switch (_0xff71d9[_0xf4fa87++]) {
                case '0':
                  shopinfo[_0x1159b7.mpuQN] = _0x1159b7.xlEWK(parseFloat, _0x470c2b.total);
                  continue;

                case '1':
                  shopinfo[_0x1159b7.LMplU] = _0x470c2b.need;
                  continue;

                case '2':
                  shopinfo[_0x1159b7.yKcmY] = _0x1159b7.OOhXL(parseFloat, _0x470c2b.money);
                  continue;

                case '3':
                  _0x1159b7.OOhXL($, _0x1159b7.NLABT).html(_0x1159b7.OxcPn(_0x1159b7.ecCSC, shopinfo[_0x1159b7.zcCxU]));

                  continue;

                case '4':
                  if (_0x1159b7.Rgfli(shopinfo[_0x1159b7.LMplU], 0)) {
                    _0x1159b7.OOhXL($, _0x1159b7.XjCtl).html(_0x1159b7.ottDX(_0x1159b7.ottDX(_0x1159b7.ottDX(_0x1159b7.ottDX(_0x1159b7.CzvNq(_0x1159b7.CWFkQ, shopinfo[_0x1159b7.yKcmY]), _0x1159b7.eEpbC), _0x1159b7.nMFuC), shopinfo[_0x1159b7.LMplU]), " 元"));

                    _0x1159b7.JzXNl($, _0x1159b7.uxDgw).show(_0x1159b7.dGIPa);

                    _0x1159b7.JzXNl($, _0x1159b7.DAZYk).text(_0x1159b7.MMbIO).show(_0x1159b7.dGIPa);
                  } else {
                    if (_0x1159b7.HfApL(shopinfo[_0x1159b7.LMplU], 0)) {
                      _0x1159b7.JzXNl($, _0x1159b7.XjCtl).html(_0x1159b7.RPxWA(_0x1159b7.WKXmx(_0x1159b7.CWFkQ, shopinfo[_0x1159b7.mpuQN]), " 元"));

                      _0x1159b7.ASDWE($, _0x1159b7.uxDgw).hide(_0x1159b7.dGIPa);

                      _0x1159b7.ASDWE($, _0x1159b7.DAZYk).text(_0x1159b7.xZoQS).show(_0x1159b7.dGIPa);
                    }
                  }

                  continue;

                case '5':
                  if (!_0x57b363) {
                    _0x1159b7.IGFIF($, _0x1159b7.FNlBQ(_0x1159b7.knyRP, _0x533cdc)).text('购买').removeClass(_0x1159b7.jXexL).attr(_0x1159b7.NatIW, false);

                    _0x1159b7.ECUWn($, _0x1159b7.sALRL).modal();
                  } else {
                    _0x1159b7.NZoJb($, _0x1159b7.hxtQG).hide(_0x1159b7.dGIPa);

                    if (shopinfo[_0x1159b7.GTGLp]) {
                      _0x1159b7.NZoJb($, _0x1159b7.UgWeX).html(_0x1159b7.FNlBQ(_0x1159b7.NJKse(_0x1159b7.NJKse(_0x1159b7.IYFqR, _0x470c2b.credit), _0x1159b7.dUbFq), _0x1159b7.NZoJb($, _0x1159b7.rCxjq).val())).show(_0x1159b7.dGIPa);

                      _0x1159b7.zxXZV($, _0x1159b7.qkmzO).text(_0x1159b7.NJKse(_0x1159b7.EfQPE, shopinfo[_0x1159b7.GTGLp])).show(_0x1159b7.dGIPa);
                    } else {
                      _0x1159b7.zxXZV($, _0x1159b7.qkmzO).text(_0x1159b7.CPNws).show(_0x1159b7.dGIPa);
                    }
                  }

                  continue;

                case '6':
                  shopinfo[_0x1159b7.GTGLp] = _0x1159b7.zxXZV($, _0x1159b7.rCxjq).val();
                  continue;

                case '7':
                  if (_0x1159b7.OdNBf(shopinfo[_0x1159b7.QTpEp], 0)) {
                    document.getElementById(_0x1159b7.jJkwg).style.display = _0x1159b7.NyNBV;
                  } else {
                    document.getElementById(_0x1159b7.jJkwg).style.display = '';
                  }

                  continue;

                case '8':
                  _0x1159b7.qlIJF($, _0x1159b7.HUivC).html(_0x1159b7.evxyX(_0x1159b7.evxyX(_0x1159b7.gCKFS, shopinfo[_0x1159b7.mpuQN]), " 元"));

                  continue;

                case '9':
                  shopinfo[_0x1159b7.zcCxU] = _0x470c2b.name;
                  continue;
              }

              break;
            }
          } else {
            if (!_0x57b363) {
              _0x1159b7.qlIJF($, _0x1159b7.oovvC(_0x1159b7.knyRP, _0x533cdc)).text('购买').removeClass(_0x1159b7.jXexL).attr(_0x1159b7.NatIW, false);
            }

            Swal.fire({
              'icon': _0x1159b7.izgnC,
              'title': _0x470c2b.msg
            });
          }
        },
        'error': function (_0x1d1325) {
          if (!_0x57b363) {
            _0x1159b7.lpuaG($, _0x1159b7.oovvC(_0x1159b7.knyRP, id)).text('购买').removeClass(_0x1159b7.jXexL).attr(_0x1159b7.NatIW, false);
          }

          Swal.fire({
            'icon': _0x1159b7.izgnC,
            'title': _0x1159b7.HEwQb,
            'html': _0x1d1325.msg
          }).then(_0x3e2399 => {
            window.location.reload();
          });
        }
      });
    };

    var _0x4265fd = function () {
      var _0x40d02e = {
        'dEhLh': "0|4|1|3|2",
        'MikDd': function (_0x1a1d07, _0x41e8b7) {
          return _0x1a1d07(_0x41e8b7);
        },
        'zYkVV': function (_0x58f8ce, _0x5cc42d, _0x68b092) {
          return _0x58f8ce(_0x5cc42d, _0x68b092);
        },
        'gInnp': function (_0x28191b, _0x4c15e0) {
          return _0x28191b(_0x4c15e0);
        },
        'fdpmS': "#metronpay-modal",
        'pGFbY': "#qrcode",
        'dCflI': "#loadqr",
        'fxNuE': function (_0x340a37, _0xa2cd20) {
          return _0x340a37 == _0xa2cd20;
        },
        'eXLFj': "qrcode",
        'ZHQgy': function (_0x396b2f, _0xe30465) {
          return _0x396b2f(_0xe30465);
        },
        'fdaOf': "#metronpay-modal-body-url",
        'uRHkS': "#to-pay",
        'egiLG': "#metronpay-modal-body-qrcode",
        'lHNdJ': "<div class=\"text-center\"><p>扫描二维码支付</p><div class=\"pb-3\" align=\"center\" id=\"qrcode\"></div><p>支付完毕后会自动跳转</p></div>",
        'NuLvj': function (_0x30a8a8, _0x5b7e87) {
          return _0x30a8a8(_0x5b7e87);
        },
        'EytAf': function (_0x6aa655, _0xe309cb) {
          return _0x6aa655 + _0xe309cb;
        },
        'awpNR': "/plugins/jQuery-qrcode/jquery.qrcode.min.js",
        'qKAGH': "url",
        'JxEdM': function (_0xd1cfe7, _0x114436) {
          return _0xd1cfe7(_0x114436);
        },
        'owdFS': "to-pay",
        'jreOe': "img",
        'WkGer': function (_0x4fdeb2, _0x346a18) {
          return _0x4fdeb2(_0x346a18);
        },
        'Ljewb': function (_0xa6e03e, _0x256806) {
          return _0xa6e03e(_0x256806);
        },
        'lhQGU': "<p id=\"loadqr\" >正在加载二维码<span class=\"kt-spinner kt-spinner--md kt-spinner--info\"></span></p><img id=\"wolfpay_qr\" src=\"+data.url+\"/>",
        'YpdaO': function (_0x107087, _0x19c30a) {
          return _0x107087(_0x19c30a);
        },
        'iPpYN': function (_0x5c015e, _0x39efca) {
          return _0x5c015e == _0x39efca;
        },
        'hsZmY': "error",
        'Ufgui': "发生错误 "
      };

      if (shopinfo.need <= 0) {
        _0x38311c(shopinfo.id);
      } else {
        var _0x1f7d70 = "5|0|3|2|4|1".split('|'),
            _0x52c756 = 0;

        var _0x376b32 = "none";

        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
          var _0x376b32 = "wap";
        } else {
          var _0x376b32 = "web";
        }

        if (document.getElementById("autorenew").checked) {
          var _0x83b0ca = shopinfo.auto;
        } else {
          var _0x83b0ca = 0;
        }

        var _0x1f60c0 = $("#pay_the li .active").attr("data-name");

        var _0x726c3b = 0;
        $.ajax({
          'url': "/user/payment/purchase",
          'data': {
            'price': shopinfo.need,
            'type': _0x1f60c0,
            'client': _0x376b32,
            'shopid': shopinfo.id,
            'shopauto': _0x83b0ca,
            'shopcoupon': shopinfo.coupon
          },
          'dataType': "json",
          'type': "POST",
          'success': function (_0x59e870) {
            var _0x47d065 = {
              'zOfLt': function (_0x25d4a2, _0x3bb767) {
                return _0x25d4a2(_0x3bb767);
              },
              'dMKDr': "#loadqr"
            };

            if (_0x59e870.ret == 1) {
              switch (_0x59e870.type) {
                case "qrcode":
                  $("#metronpay-modal-body-url").hide();
                  $("#to-pay").hide();
                  $("#metronpay-modal-body-qrcode").html("<div class=\"text-center\"><p>扫描二维码支付</p><div class=\"pb-3\" align=\"center\" id=\"qrcode\"></div><p>支付完毕后会自动跳转</p></div>");
                  $("#metronpay-modal-body-qrcode").show();
                  $.getScript(ASSETS_URL + "/plugins/jQuery-qrcode/jquery.qrcode.min.js", function () {
                    var _0xb1b1bd = "0|4|1|3|2".split('|'),
                        _0x442605 = 0;

                    var _0x1cd7dd = {
                      'LhXdH': function (_0x3bd5b2, _0xb52d23) {
                        return _0x3bd5b2(_0xb52d23);
                      }
                    };
                    $("#qrcode").qrcode({
                      'text': _0x59e870.url
                    });
                    KTApp.unblockPage();
                    $("#metronpay-modal").modal();
                    setTimeout(function () {
                      _0x216a54(_0x59e870.tradeno);
                    }, 3000);
                  });
                  break;

                case "url":
                  $("#metronpay-modal-body-qrcode").hide();
                  $("#metronpay-modal-body-url").show();
                  $("#to-pay").show();
                  document.getElementById("to-pay").href = _0x59e870.url;
                  KTApp.unblockPage();
                  $("#metronpay-modal").modal();
                  break;

                case "img":
                  $("#metronpay-modal-body-url").hide();
                  $("#to-pay").hide();
                  $("#metronpay-modal-body-qrcode").html("<p id=\"loadqr\" >正在加载二维码<span class=\"kt-spinner kt-spinner--md kt-spinner--info\"></span></p><img id=\"wolfpay_qr\" src=\"+data.url+\"/>");
                  $("#metronpay-modal-body-qrcode").show();

                  wolfpay_qr.onload = function () {
                    $("#loadqr").hide();
                  };

                  KTApp.unblockPage();
                  $("#metronpay-modal").modal();
                  break;

                default:
                  break;
              }
            }

            if (_0x59e870.ret == 0) {
              KTApp.unblockPage();
              Swal.fire({
                'icon': "error",
                'title': _0x59e870.msg,
                'timer': 3000,
                'showConfirmButton': false
              });
            }
          },
          'error': function (_0x1b5e6c) {
            KTApp.unblockPage();
            Swal.fire({
              'icon': "error",
              'title': "发生错误 " + _0x1b5e6c.status
            }).then(_0x444e6a => {
              window.location.reload();
            });
          }
        });
      }
    };

    var _0x216a54 = function (_0x57637d) {
      var _0x25f988 = {
        'Ngmvw': "/user",
        'FQbCW': function (_0x4fddf7, _0x28d6ab, _0x2ddf12) {
          return _0x4fddf7(_0x28d6ab, _0x2ddf12);
        },
        'DFHSt': "metronPay_status"
      };
      $.ajax({
        'type': "POST",
        'url': "/payment/status",
        'dataType': "json",
        'data': {
          'tradeno': _0x57637d,
          'checkshop': 1
        },
        'success': _0x40129a => {
          if (_0x40129a.result === 1) {
            $("#metronpay-content").html("<div class=\"text-center\"><p>充值已到账，正在为您购买套餐<span class=\"kt-spinner kt-spinner--md kt-spinner--info\"></span></p></div>");

            if (_0x40129a.buyshop === 1) {
              Swal.fire({
                'icon': "success",
                'title': "购买成功!"
              }).then(_0x1d28c4 => {
                window.location.href = _0x25f988.Ngmvw;
              });
              return;
            } else {
              _0x120e97("metronPay_status", _0x57637d);
            }
          } else {
            _0x120e97("metronPay_status", _0x57637d);
          }
        },
        'error': _0x4c64a0 => {
          _0x25f988.FQbCW(_0x120e97, _0x25f988.DFHSt, _0x57637d);
        }
      });
    };

    var _0x120e97 = function (_0x532950, _0x3d086c) {
      switch (_0x532950) {
        case "metronPay_status":
          setTimeout(function () {
            _0x216a54(_0x3d086c);
          }, 3000);
          break;
      }
    };

    var _0x38311c = function (_0x1ad9cc) {
      var _0x3599c4 = {
        'lTBMl': "/user",
        'IEcVd': "success",
        'hKMXF': "购买成功",
        'vDDoB': "用户中心",
        'erQSp': "btn btn-primary",
        'LFmBn': "warning",
        'Vfjzk': "购买失败",
        'IhqJl': "error",
        'PpDeh': function (_0x52b34a, _0x363f53) {
          return _0x52b34a + _0x363f53;
        },
        'SHVbT': "  发生了错误。"
      };

      if (document.getElementById("autorenew").checked) {
        var _0x611bb2 = 1;
      } else {
        var _0x611bb2 = 0;
      }

      var _0x1e35c9 = 1;
      $.ajax({
        'type': "POST",
        'url': "buy",
        'dataType': "json",
        'data': {
          'coupon': $("#coupon").val(),
          'shop': _0x1ad9cc,
          'autorenew': _0x611bb2,
          'disableothers': _0x1e35c9
        },
        'success': function (_0x528ee8) {
          var _0x59be53 = {
            'VrTzn': _0x3599c4.lTBMl
          };
          KTApp.unblockPage();

          if (_0x528ee8.ret) {
            swal.fire({
              'icon': _0x3599c4.IEcVd,
              'title': _0x3599c4.hKMXF,
              'confirmButtonText': _0x3599c4.vDDoB,
              'confirmButtonClass': _0x3599c4.erQSp,
              'onClose': () => {
                window.location.href = _0x59be53.VrTzn;
              }
            });
          } else {
            Swal.fire({
              'icon': _0x3599c4.LFmBn,
              'title': _0x3599c4.Vfjzk,
              'html': _0x528ee8.msg
            });
          }
        },
        'error': function (_0x4a327f) {
          KTApp.unblockPage();
          Swal.fire({
            'typeicon': _0x3599c4.IhqJl,
            'title': _0x3599c4.PpDeh(_0x4a327f.status, _0x3599c4.SHVbT)
          });
        }
      });
    };

    var _0x1328ea = function () {
      var _0x1f8e32 = "1|0|2|3|4".split('|'),
          _0x19071d = 0;

      var _0x4af7b5 = {
        'XTHXo': "error",
        'NMSFU': "出错啦"
      };

      var _0x2e1f49 = $("#traffic-package li .active").attr("data-name");

      if (_0x2e1f49 == null) {
        Swal.fire({
          'icon': "error",
          'title': "请选择流量包",
          'timer': 1500,
          'showConfirmButton': false
        });
        return;
      }

      $(".buyTrafficPackage").text("购买中").addClass("kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light").attr("disabled", true);
      $.ajax({
        'type': "POST",
        'url': "/user/buy_traffic_package",
        'dataType': "json",
        'data': {
          'shop': _0x2e1f49
        },
        'success': _0x5774d5 => {
          $(".buyTrafficPackage").text('购买').removeClass("kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light").attr("disabled", false);
          mt.ajax_swal(_0x5774d5, "/user");
        },
        'error': function (_0x1298aa) {
          Swal.fire({
            'icon': "error",
            'title': "出错啦",
            'html': _0x1298aa.msg,
            'onClose': () => {
              window.location.reload();
            }
          });
        }
      });
    };

    var _0x3b8f8a = function () {
      var _0x3bb807 = "7|3|0|4|2|6|5|1".split('|'),
          _0x338561 = 0;

      var _0x6b816e = new Date();

      var _0x2b23d7 = _0x6b816e.getTime();

      var _0x4b7c77 = new Date(shop_activity_time);

      var _0x554e97 = _0x4b7c77.getTime();

      var _0x178489 = _0x554e97 - _0x2b23d7;

      var _0x17eda4, _0x48fc81, _0x4a19bb, _0x1add94;

      if (_0x178489 >= 0) {
        var _0x14e357 = "1|7|5|2|8|9|4|6|0|3|10".split('|'),
            _0x1043bf = 0;

        _0x17eda4 = Math.floor(_0x178489 / 1000 / 60 / 60 / 24);
        _0x48fc81 = Math.floor(_0x178489 / 1000 / 60 / 60 % 24);
        _0x4a19bb = Math.floor(_0x178489 / 1000 / 60 % 60);
        _0x1add94 = Math.floor(_0x178489 / 1000 % 60);

        if (_0x1add94 < 10) {
          _0x1add94 = '0' + _0x1add94;
        }

        if (_0x4a19bb < 10) {
          _0x4a19bb = '0' + _0x4a19bb;
        }

        if (_0x48fc81 < 10) {
          _0x48fc81 = '0' + _0x48fc81;
        }

        if (_0x17eda4 > 0) {
          document.getElementById('_d').innerHTML = _0x17eda4 + " 天";
        } else {
          document.getElementById('_d').innerHTML = '';
        }

        if (_0x17eda4 == 0 && _0x48fc81 == 0) {
          document.getElementById('_h').innerHTML = '';
        } else {
          document.getElementById('_h').innerHTML = _0x48fc81 + " 时";
        }

        if (_0x17eda4 == 0 && _0x48fc81 == 0 && _0x4a19bb == 0) {
          document.getElementById('_m').innerHTML = '';
        } else {
          document.getElementById('_m').innerHTML = _0x4a19bb + " 分";
        }

        document.getElementById('_s').innerHTML = _0x1add94 + " 秒";
      } else {
        var _0x26a953 = "2|4|0|3|1".split('|'),
            _0x374009 = 0;

        document.getElementById('_t').innerHTML = "活动已结束";
        document.getElementById("buy_activity").disabled = true;
        $("#buy_activity").text("活动已结束");
        $("#shop_activity_no").hide("500");
        return;
      }

      setTimeout(_0x3b8f8a, 50);
    };

    return {
      'metronBuy': function (_0xd084bb, _0x48755d) {
        _0x49369e(_0xd084bb, _0x48755d);
      },
      'coupon': function (_0x39396d) {
        if (_0x39396d == "clear") {
          $("#coupon").val('');
          shop.couponre();
          return;
        }

        $("#use_coupon_code").hide("750");
        $("#order_input").hide("750");
        $("#input_coupon_code").show("750");
      },
      'couponre': function () {
        _0x49369e(shopinfo.id, shopinfo.auto, true);
      },
      'buyok': function (_0x204821) {
        KTApp.blockPage({
          'overlayColor': "#000000",
          'opacity': 0.3,
          'type': 'v2',
          'state': "primary",
          'message': "正在请求支付, 请稍候..."
        });

        _0x4265fd();
      },
      'buy_traffic': function () {
        _0x1328ea();
      },
      'countTime': function () {
        _0x3b8f8a();
      }
    };
  }();

  if (typeof shop_activity_time != "undefined") {
    shop.countTime();
  }
}

if (urlPath.indexOf("/node") >= 0) {
  var node = function () {
    var _0x591a1d = {
      'qUuRe': "1|7|3|5|4|0|2|6",
      'mdKfm': "modal",
      'nyFgR': function (_0x1475c1) {
        return _0x1475c1();
      },
      'tMHCM': function (_0x3e4dfc, _0x2f4f60) {
        return _0x3e4dfc(_0x2f4f60);
      },
      'mXUQS': "option:selected",
      'KBzkV': "#filter_mode, #filter_sort, #filter_mininame",
      'IRNpp': "#filter_mode",
      'zJSWx': "changed.bs.select",
      'gcfcV': function (_0x2d9651, _0x196335, _0x23c3c2) {
        return _0x2d9651(_0x196335, _0x23c3c2);
      },
      'vlfXP': "#nodeinfo-ssr-modal .tab-pane a",
      'fjYPx': "href",
      'TsSsL': "#nodeinfo-ssr-qrcode",
      'ZCESS': "#nodeinfo-ssr-modal",
      'tHvPf': function (_0x50767e, _0x413b58) {
        return _0x50767e(_0x413b58);
      },
      'zKNuz': function (_0x5c9ed4, _0xa496d7) {
        return _0x5c9ed4 === _0xa496d7;
      },
      'yTUPp': function (_0x12f159, _0x19f80b) {
        return _0x12f159 + _0x19f80b;
      },
      'xbvIB': "#tab-ssr-modal-config-",
      'RYHzm': "/plugins/jQuery-qrcode/jquery.qrcode.min.js",
      'jhOoQ': function (_0x372a28, _0x1945df) {
        return _0x372a28(_0x1945df);
      },
      'TdjAp': "hide.bs.modal",
      'TiIQJ': "#nodeinfo-v2ray-modal-",
      'ggdND': function (_0x37c6eb, _0xd8915) {
        return _0x37c6eb == _0xd8915;
      },
      'dBYzL': "net",
      'RXqWV': "#nodeinfo-v2ray-modal-path",
      'iSlvG': "tcp",
      'JwKtT': function (_0x529659, _0x230890) {
        return _0x529659(_0x230890);
      },
      'wQoWO': "#nodeinfo-v2ray-modal-type",
      'fGnvW': "tls",
      'Uoieh': function (_0x189199, _0x34458d) {
        return _0x189199(_0x34458d);
      },
      'GdEHJ': "#nodeinfo-v2ray-modal-tls",
      'uBQVc': "#nodeinfo-v2ray-modal-url",
      'ILIGV': "data-clipboard-text",
      'Wiftz': function (_0xcb644, _0x1d2852) {
        return _0xcb644(_0x1d2852);
      },
      'POkZA': "#nodeinfo-v2ray-modal",
      'WiBgR': "#nodeinfo-v2rayPlug-modal-body",
      'QYlud': "<p>您的加密方式非 AEAD 系列，无法使用此节点.</p>",
      'hvIop': "#nodeinfo-v2rayPlug-modal-",
      'lnlLy': "#nodeinfo-v2rayPlug-modal",
      'ccVIf': "#nodeinfo-trojan-modal-",
      'CUGPu': "#nodeinfo-trojan-modal",
      'PQANc': "该节点暂不支持查看配置",
      'UgmQQ': "error",
      'oDefV': "发生错误：",
      'vlrOW': "正在获取节点配置",
      'XaoTV': "GET",
      'woZzM': "/user/nodeinfo/",
      'iRhzT': "json",
      'wTyKA': "nodes_class",
      'yKHaE': "value",
      'NRVav': "1|2|0|3|4",
      'RJOGA': "success",
      'hFLCW': "#node_filter_save_up_text,#node_filter_save_down_text",
      'pHJlQ': "保存更改",
      'XgpIG': "#node_filter_save_up,#node_filter_save_down",
      'oMDdr': "kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light",
      'YRXCS': "disabled",
      'OaMUi': function (_0x3fb7df, _0x2a08db) {
        return _0x3fb7df(_0x2a08db);
      },
      'ZBzPM': "发生错误 ",
      'lFLHe': "4|3|1|2|7|6|0|8|5",
      'DGins': "sort",
      'ywqgV': function (_0x42fd22, _0x227698) {
        return _0x42fd22(_0x227698);
      },
      'WLZtP': "#filter_sort",
      'MANkD': "正在保存",
      'puIKv': "nodes_id",
      'FOnDE': "/user/node_filter",
      'OKvfs': "mode",
      'Rglwm': "nodes_class-the",
      'JdAfj': "nodes_class-value",
      'GlUKm': "mininame",
      'mVDSQ': "POST",
      'iwzdR': "all",
      'ZyiSv': function (_0x569158, _0x1c6c15) {
        return _0x569158 !== _0x1c6c15;
      },
      'fLQCC': "input[name=\"radio-nodes_class-filter\"]:checked",
      'oRSzz': "undefined",
      'eMEMG': "the",
      'MoXGH': "input[name='checkbox-nodes_class-filter']:checked",
      'jhmLV': "input[name='nodes_id-filter']:checked",
      'ixpzq': function (_0x276207, _0x110cf6) {
        return _0x276207(_0x110cf6);
      },
      'ReDhj': "#filter_mininame",
      'mQecu': ":checked",
      'EKzOZ': "checked",
      'WwtZv': ":disabled",
      'xscuM': "input[name=",
      'LEenz': function (_0x5ac944, _0x16b953) {
        return _0x5ac944(_0x16b953);
      },
      'diUky': function (_0x32a7b2, _0x49b2b5) {
        return _0x32a7b2 + _0x49b2b5;
      },
      'RYKAL': "anti",
      'HKpil': function (_0x56ad73, _0x2246aa) {
        return _0x56ad73 + _0x2246aa;
      },
      'GDxty': "node_class",
      'OjAMh': ".node_class-",
      'gwLbN': "#filter_mode-all",
      'QnIpl': function (_0x13db1d, _0x39379f) {
        return _0x13db1d(_0x39379f);
      },
      'euBiA': "#filter_mode-nodes_class",
      'fBxlc': "#filter_mode-nodes_id",
      'sEGst': "#check-node_class, #check-all",
      'xwlpJ': function (_0x2fc4c4, _0x2b23b0) {
        return _0x2fc4c4(_0x2b23b0);
      },
      'ZuVtB': function (_0x3dd97f, _0x52df07) {
        return _0x3dd97f(_0x52df07);
      },
      'rXnuz': "等级不足",
      'VPSEP': "您当前的等级不能使用该节点",
      'NDPRS': "3|4|2|0|1",
      'ksHgE': function (_0x48cb7b, _0x1be379) {
        return _0x48cb7b(_0x1be379);
      },
      'ELJib': function (_0x34e4fb, _0x19e988) {
        return _0x34e4fb(_0x19e988);
      },
      'HVEIL': function (_0x526c2c, _0x5e9e15, _0x515892, _0x459bf9) {
        return _0x526c2c(_0x5e9e15, _0x515892, _0x459bf9);
      }
    };

    var _0x24cce4 = "1|7|3|5|4|0|2|6".split('|'),
        _0x2be268 = 0;

    var _0x1fbcba = {
      'mrFiU': "modal",
      'yEbPP': function (_0x187574) {
        return _0x187574();
      },
      'cpJsY': function (_0x14611a, _0x231ae5) {
        return _0x14611a(_0x231ae5);
      },
      'OmWxz': "option:selected",
      'Jhlyu': "#filter_mode, #filter_sort, #filter_mininame",
      'wMAkX': "#filter_mode",
      'dlErb': "changed.bs.select",
      'zewAu': function (_0x20f063, _0x49a974, _0x256a2c) {
        return _0x20f063(_0x49a974, _0x256a2c);
      },
      'ihzEC': "#nodeinfo-ssr-modal .tab-pane a",
      'faFjZ': "href",
      'YrPyD': "#nodeinfo-ssr-qrcode",
      'cEgWn': function (_0x3c1a0a, _0x421164) {
        return _0x3c1a0a(_0x421164);
      },
      'cdrzG': "#nodeinfo-ssr-modal",
      'TXSGH': function (_0x407699, _0x429611) {
        return _0x407699(_0x429611);
      },
      'nVFus': function (_0xaf4d60, _0x3f09cf) {
        return _0xaf4d60 === _0x3f09cf;
      },
      'qkuZA': function (_0x1ed6ac, _0x44a305) {
        return _0x1ed6ac + _0x44a305;
      },
      'rxPed': "#tab-ssr-modal-config-",
      'PrRwP': "/plugins/jQuery-qrcode/jquery.qrcode.min.js",
      'jsRhj': function (_0x54f2a8, _0x494038) {
        return _0x54f2a8(_0x494038);
      },
      'iVSvq': "hide.bs.modal",
      'FynGa': "#nodeinfo-v2ray-modal-",
      'tdjzd': function (_0x3eba96, _0x424819) {
        return _0x3eba96 == _0x424819;
      },
      'FCMyW': "net",
      'gOOOF': "#nodeinfo-v2ray-modal-path",
      'IdflY': function (_0x135282, _0x5e7943) {
        return _0x135282(_0x5e7943);
      },
      'PyIlw': "tcp",
      'BSnkq': function (_0x2b8c01, _0x4dd2d4) {
        return _0x2b8c01(_0x4dd2d4);
      },
      'nfaZS': "#nodeinfo-v2ray-modal-type",
      'XJDcM': function (_0x527d9a, _0x5860b3) {
        return _0x527d9a(_0x5860b3);
      },
      'RVFhi': "tls",
      'sgFVk': function (_0x41f734, _0x1aec3c) {
        return _0x41f734 == _0x1aec3c;
      },
      'YSaAC': function (_0x19d5eb, _0x390fc3) {
        return _0x19d5eb(_0x390fc3);
      },
      'ocmBj': "#nodeinfo-v2ray-modal-tls",
      'RNRjs': function (_0xf06438, _0x11a4dd) {
        return _0xf06438(_0x11a4dd);
      },
      'nYhra': "#nodeinfo-v2ray-modal-url",
      'dfqGn': "data-clipboard-text",
      'FzQme': function (_0x3b9615, _0x30a129) {
        return _0x3b9615(_0x30a129);
      },
      'gSOFo': "#nodeinfo-v2ray-modal",
      'xPLNu': "#nodeinfo-v2rayPlug-modal-body",
      'CQPSg': "<p>您的加密方式非 AEAD 系列，无法使用此节点.</p>",
      'FZLLn': "#nodeinfo-v2rayPlug-modal-",
      'PljRs': "#nodeinfo-v2rayPlug-modal",
      'qhMTH': "#nodeinfo-trojan-modal-",
      'gwVud': "#nodeinfo-trojan-modal",
      'YCkyr': "该节点暂不支持查看配置",
      'WUrAz': "error",
      'BUmAA': "发生错误：",
      'ARhzm': "正在获取节点配置",
      'nkDdc': "GET",
      'ZfArr': "/user/nodeinfo/",
      'uDTtC': "json",
      'qSPJB': "nodes_class",
      'BgwNb': "value",
      'wIWxd': "1|2|0|3|4",
      'nJJKe': "success",
      'VLslB': function (_0x510921, _0x8d3395) {
        return _0x510921(_0x8d3395);
      },
      'NgGLm': "#node_filter_save_up_text,#node_filter_save_down_text",
      'VQPwz': "保存更改",
      'bfFLm': "#node_filter_save_up,#node_filter_save_down",
      'pIoTM': "kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light",
      'KWXaM': "disabled",
      'eZfCx': function (_0xe5b1b0, _0x3c5a52) {
        return _0xe5b1b0 === _0x3c5a52;
      },
      'nKmfC': function (_0x3e55eb, _0xa3f414) {
        return _0x3e55eb(_0xa3f414);
      },
      'YVNqy': "发生错误 ",
      'uNpfj': "4|3|1|2|7|6|0|8|5",
      'HGHCy': "sort",
      'MgQkt': function (_0x496802, _0x2d0cc9) {
        return _0x496802(_0x2d0cc9);
      },
      'yXgOO': "#filter_sort",
      'Mnphk': function (_0x222450, _0x175988) {
        return _0x222450(_0x175988);
      },
      'ZzdAW': function (_0x2e72fa, _0x175c89) {
        return _0x2e72fa(_0x175c89);
      },
      'zPRcI': "正在保存",
      'nPIaA': "nodes_id",
      'llpAb': function (_0x4d3acb, _0x529a4b) {
        return _0x4d3acb(_0x529a4b);
      },
      'BpjhN': "/user/node_filter",
      'ZQCId': "mode",
      'NKrZp': "nodes_class-the",
      'swupF': "nodes_class-value",
      'IlMrN': "mininame",
      'xVaUB': "POST",
      'dIYml': "all",
      'KCavR': function (_0x212eaa, _0x3faee7) {
        return _0x212eaa !== _0x3faee7;
      },
      'bNeXy': "input[name=\"radio-nodes_class-filter\"]:checked",
      'qQerx': "undefined",
      'EWXNr': "the",
      'wluhQ': "input[name='checkbox-nodes_class-filter']:checked",
      'iwpAv': "input[name='nodes_id-filter']:checked",
      'pHPEs': function (_0x1970fc, _0x536568) {
        return _0x1970fc(_0x536568);
      },
      'EMQGk': "#filter_mininame",
      'vDQHx': ":checked",
      'YBbSK': function (_0x360177, _0x471756) {
        return _0x360177(_0x471756);
      },
      'scpsa': "checked",
      'fbzaX': ":disabled",
      'aAGtl': function (_0x3f9792, _0x18dd64) {
        return _0x3f9792 + _0x18dd64;
      },
      'xcgyW': function (_0x2335d2, _0x2df4e0) {
        return _0x2335d2 + _0x2df4e0;
      },
      'qdHQk': "input[name=",
      'Eoort': function (_0x57acdc, _0x151b21) {
        return _0x57acdc(_0x151b21);
      },
      'EsDAB': function (_0x2af55e, _0x203aa3) {
        return _0x2af55e + _0x203aa3;
      },
      'XPDHf': "anti",
      'WlNhQ': function (_0x1c0f83, _0x3967b3) {
        return _0x1c0f83 + _0x3967b3;
      },
      'sjNdh': "node_class",
      'YtENH': ".node_class-",
      'HzVWX': function (_0x486c6f, _0x1f0677) {
        return _0x486c6f(_0x1f0677);
      },
      'rnvUt': "#filter_mode-all",
      'qiaJr': function (_0x12c3bc, _0x512ce3) {
        return _0x12c3bc(_0x512ce3);
      },
      'dQXZA': "#filter_mode-nodes_class",
      'eOYnV': function (_0x390a57, _0x4d3a28) {
        return _0x390a57(_0x4d3a28);
      },
      'SaYay': "#filter_mode-nodes_id",
      'DJyjc': function (_0xfb4e5c, _0x337951) {
        return _0xfb4e5c(_0x337951);
      },
      'HGBgd': "#check-node_class, #check-all",
      'YnCqM': function (_0x197592, _0x4b03ac) {
        return _0x197592(_0x4b03ac);
      },
      'tLvyy': function (_0x377030, _0x7c7267) {
        return _0x377030(_0x7c7267);
      },
      'bIMNr': function (_0x5ca21d, _0x38d472) {
        return _0x5ca21d(_0x38d472);
      },
      'zGuXg': function (_0x5a96ac, _0x253934) {
        return _0x5a96ac(_0x253934);
      },
      'vwfEM': "等级不足",
      'jbPae': "您当前的等级不能使用该节点",
      'dPPvb': "3|4|2|0|1",
      'wCEbI': function (_0x23d4d0, _0x3d381d) {
        return _0x23d4d0(_0x3d381d);
      },
      'DJVsZ': function (_0x38a048, _0x36e539) {
        return _0x38a048(_0x36e539);
      },
      'pWGwl': function (_0x1c3676, _0x4896f1) {
        return _0x1c3676(_0x4896f1);
      },
      'mIFFw': function (_0x3cf955) {
        return _0x3cf955();
      },
      'YOmsw': function (_0xc6bacf, _0x30a8c1, _0x37fd3c, _0x3e1c1c) {
        return _0xc6bacf(_0x30a8c1, _0x37fd3c, _0x3e1c1c);
      }
    };

    var _0x4f11f5 = function () {
      mt.copytext("modal");

      _0x1b3a24();
    };

    var _0x1b3a24 = function () {
      var _0x36a119 = {
        'fAVar': function (_0x15ece7, _0x45632b) {
          return _0x15ece7(_0x45632b);
        },
        'aaqJQ': "option:selected"
      };
      $("#filter_mode, #filter_sort, #filter_mininame").selectpicker();
      $("#filter_mode").on("changed.bs.select", function (_0x12621f) {
        _0x5daf85($("option:selected").val());
      });
    };

    var _0x321c3d = function (_0x681dfd) {
      var _0x3b4f44 = {
        'nRyer': function (_0x583486, _0x392c11, _0x4a5902) {
          return _0x583486(_0x392c11, _0x4a5902);
        },
        'Zlygh': function (_0x1f2319, _0x4d755a) {
          return _0x1f2319(_0x4d755a);
        },
        'tagew': "#nodeinfo-ssr-modal .tab-pane a",
        'PGuxf': "href",
        'yKCTh': "#nodeinfo-ssr-qrcode",
        'YLMuF': function (_0x483503, _0x46dd29) {
          return _0x483503(_0x46dd29);
        },
        'zPnop': "#nodeinfo-ssr-modal",
        'OjXaa': function (_0x228482, _0x3b6c86) {
          return _0x228482(_0x3b6c86);
        },
        'UUekN': function (_0x2da090, _0x40ca8d) {
          return _0x2da090 === _0x40ca8d;
        },
        'sPLQA': function (_0x51f49d, _0x2f96b7) {
          return _0x51f49d + _0x2f96b7;
        },
        'AUEPX': "#tab-ssr-modal-config-",
        'lTTQO': function (_0x1f15f2, _0x875dc6) {
          return _0x1f15f2 + _0x875dc6;
        },
        'iWIky': "/plugins/jQuery-qrcode/jquery.qrcode.min.js",
        'xBEoG': function (_0x22e0c8, _0x554e14) {
          return _0x22e0c8(_0x554e14);
        },
        'SZZsQ': "hide.bs.modal",
        'NzzGS': function (_0x127156, _0x57990f) {
          return _0x127156(_0x57990f);
        },
        'POUqt': "#nodeinfo-v2ray-modal-",
        'oujrC': function (_0x4ed1c1, _0x3fd5ef) {
          return _0x4ed1c1 == _0x3fd5ef;
        },
        'GvDJX': "net",
        'GctFo': "#nodeinfo-v2ray-modal-path",
        'rNMaF': function (_0x438e98, _0x5ebd10) {
          return _0x438e98(_0x5ebd10);
        },
        'FQBdF': "tcp",
        'uSVGR': function (_0x3797da, _0x54a2db) {
          return _0x3797da(_0x54a2db);
        },
        'tTeDW': "#nodeinfo-v2ray-modal-type",
        'VrEXM': function (_0x40fda3, _0x44109c) {
          return _0x40fda3(_0x44109c);
        },
        'POUTc': function (_0x46224b, _0x28d18f) {
          return _0x46224b == _0x28d18f;
        },
        'GWPQL': "tls",
        'botRD': function (_0x32256a, _0x25cbb3) {
          return _0x32256a == _0x25cbb3;
        },
        'yCXXJ': function (_0x5a61ec, _0x3e4d5e) {
          return _0x5a61ec == _0x3e4d5e;
        },
        'ZsjUP': function (_0x3c9b5a, _0x41a73c) {
          return _0x3c9b5a(_0x41a73c);
        },
        'sjXbF': "#nodeinfo-v2ray-modal-tls",
        'zCDBy': function (_0x32f63a, _0x2ba0d0) {
          return _0x32f63a(_0x2ba0d0);
        },
        'LJyAB': "#nodeinfo-v2ray-modal-url",
        'RzOXP': "data-clipboard-text",
        'SiMxY': function (_0x24af7f, _0x39095a) {
          return _0x24af7f(_0x39095a);
        },
        'zdhkc': "#nodeinfo-v2ray-modal",
        'BqdXF': function (_0x39933c, _0x59ad91) {
          return _0x39933c == _0x59ad91;
        },
        'JxnTF': "#nodeinfo-v2rayPlug-modal-body",
        'rCRUE': "<p>您的加密方式非 AEAD 系列，无法使用此节点.</p>",
        'Mijqv': function (_0x4e0e52, _0x323c42) {
          return _0x4e0e52(_0x323c42);
        },
        'wNAsG': function (_0x5da032, _0x29dcc4) {
          return _0x5da032 + _0x29dcc4;
        },
        'xQUOK': "#nodeinfo-v2rayPlug-modal-",
        'nHsCp': "#nodeinfo-v2rayPlug-modal",
        'afgGb': function (_0x1ca763, _0x4b1c18) {
          return _0x1ca763 + _0x4b1c18;
        },
        'RJqjg': "#nodeinfo-trojan-modal-",
        'dfJeR': "#nodeinfo-trojan-modal",
        'LkIOE': "该节点暂不支持查看配置",
        'MAjkr': "error",
        'IxGCC': "发生错误："
      };
      swal.fire({
        'title': "正在获取节点配置",
        'onOpen': function () {
          swal.showLoading();
        }
      });
      $.ajax({
        'type': "GET",
        'url': "/user/nodeinfo/" + _0x681dfd,
        'dataType': "json",
        'data': {},
        'success': function (_0x389c38) {
          var _0x430f75 = {
            'XUCRj': function (_0x9d0f71, _0x43face) {
              return _0x9d0f71(_0x43face);
            },
            'sdess': "#nodeinfo-ssr-modal .tab-pane a",
            'xxBIg': "href",
            'hgkRe': "#nodeinfo-ssr-qrcode",
            'hINbK': function (_0x26096a, _0x4630a4) {
              return _0x26096a(_0x4630a4);
            },
            'KrckL': "#nodeinfo-ssr-modal",
            'dNIQF': function (_0x276208, _0x4f13fb) {
              return _0x276208(_0x4f13fb);
            }
          };

          if (_0x389c38.ret === 1) {
            var _0x559376 = _0x389c38.info;

            switch (_0x389c38.sort) {
              case 0:
              case 10:
                for (let _0xe8d926 in _0x559376) {
                  $("#tab-ssr-modal-config-" + _0xe8d926).html(_0x559376[_0xe8d926]);
                }

                $.getScript(ASSETS_URL + "/plugins/jQuery-qrcode/jquery.qrcode.min.js", function () {
                  $("#nodeinfo-ssr-modal .tab-pane a").attr("href", _0x389c38.url);
                  $("#nodeinfo-ssr-qrcode").qrcode({
                    'text': _0x389c38.url
                  });
                  $("#nodeinfo-ssr-modal").modal();
                });
                $("#nodeinfo-ssr-modal").on("hide.bs.modal", function () {
                  setTimeout(function () {
                    $("#nodeinfo-ssr-qrcode").empty();
                  }, 500);
                });
                break;

              case 11:
              case 12:
                for (let _0x2d657e in _0x559376) {
                  $("#nodeinfo-v2ray-modal-" + _0x2d657e).html(_0x559376[_0x2d657e]);
                }

                if (_0x559376.net == 'ws') {
                  $("#nodeinfo-v2ray-modal-path").parents('p').show();
                } else {
                  $("#nodeinfo-v2ray-modal-path").parents('p').hide();
                }

                if (_0x559376.net == "tcp") {
                  $("#nodeinfo-v2ray-modal-type").parents('p').show();
                } else {
                  $("#nodeinfo-v2ray-modal-type").parents('p').hide();
                }

                if (_0x559376.net == 'ws' && _0x559376.tls == "tls" || _0x559376.net == "tcp" && _0x559376.tls == "tls" || _0x559376.tls == "tls") {
                  $("#nodeinfo-v2ray-modal-tls").parents('p').show();
                } else {
                  $("#nodeinfo-v2ray-modal-tls").parents('p').hide();
                }

                $("#nodeinfo-v2ray-modal-url").attr("data-clipboard-text", _0x389c38.url);
                $("#nodeinfo-v2ray-modal").modal();
                break;

              case 13:
                if (_0x389c38.info == null) {
                  $("#nodeinfo-v2rayPlug-modal-body").html("<p>您的加密方式非 AEAD 系列，无法使用此节点.</p>");
                } else {
                  for (let _0x441108 in _0x559376) {
                    $("#nodeinfo-v2rayPlug-modal-" + _0x441108).html(_0x559376[_0x441108]);
                  }
                }

                $("#nodeinfo-v2rayPlug-modal").modal();
                break;

              case 14:
                for (let _0x1ebc04 in _0x559376) {
                  $("#nodeinfo-trojan-modal-" + _0x1ebc04).html(_0x559376[_0x1ebc04]);
                }

                $("#nodeinfo-trojan-modal").modal();
                break;

              default:
                mt.swal("该节点暂不支持查看配置", "error");
                break;
            }

            swal.close();
          } else {
            if (_0x389c38.ret === -1) {
              window.location.reload();
            } else {
              swal.close();
              mt.ajax_swal(_0x389c38);
            }
          }
        },
        'error': function (_0x3d73fc) {
          Swal.fire({
            'icon': "error",
            'title': "发生错误：" + _0x3d73fc.status
          });
          swal.close();
        }
      });
    };

    var _0x3792fb = function () {
      var _0x34813c = "4|3|1|2|7|6|0|8|5".split('|'),
          _0x5b084d = 0;

      var _0x2738bd = {
        'RwLuD': "nodes_id",
        'zPlid': function (_0x493aa7, _0x2d1654) {
          return _0x493aa7(_0x2d1654);
        }
      };
      $("#node_filter_save_up_text,#node_filter_save_down_text").text("正在保存");
      $("#node_filter_save_up,#node_filter_save_down").addClass("kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light").attr("disabled", true);

      var _0x513cf7 = $("#filter_mode").val();

      var _0x37b7e2 = [];

      switch (_0x513cf7) {
        case "all":
          _0x37b7e2.mode = "all";
          break;

        case "nodes_class":
          _0x37b7e2.mode = "nodes_class";
          _0x37b7e2.nodes_class = [];

          if (typeof $("input[name=\"radio-nodes_class-filter\"]:checked").val() !== "undefined") {
            _0x37b7e2["nodes_class-the"] = '>=';
            _0x37b7e2["nodes_class-value"] = $("input[name=\"radio-nodes_class-filter\"]:checked").val();
          } else {
            _0x37b7e2.nodes_class.the = '=';
            _0x37b7e2.nodes_class.value = [];
            $("input[name='checkbox-nodes_class-filter']:checked").each(function (_0x1633dc) {
              _0x37b7e2.nodes_class.value[_0x1633dc] = $(this).val();
            });
          }

          break;

        case "nodes_id":
          _0x37b7e2.mode = "nodes_id";
          _0x37b7e2.nodes_id = [];
          $("input[name='nodes_id-filter']:checked").each(function (_0x5a46e4) {
            _0x37b7e2.nodes_id[_0x5a46e4] = $(this).val();
          });
          break;
      }

      _0x37b7e2.sort = $("#filter_sort").val();
      _0x37b7e2.mininame = $("#filter_mininame").val();
      $.ajax({
        'url': "/user/node_filter",
        'data': {
          'filter_mode': _0x37b7e2.mode,
          'nodes_class_the': _0x37b7e2["nodes_class-the"],
          'nodes_class_value': _0x37b7e2["nodes_class-value"],
          'nodes_id': _0x37b7e2.nodes_id,
          'filter_sort': _0x37b7e2.sort,
          'filter_mininame': _0x37b7e2.mininame
        },
        'dataType': "json",
        'type': "POST",
        'success': function (_0x3aa1c3) {
          var _0x1ef7d8 = "1|2|0|3|4".split('|'),
              _0x7c8e4c = 0;

          $("#node_filter_save_up_text,#node_filter_save_down_text").text("保存更改");
          $("#node_filter_save_up,#node_filter_save_down").removeClass("kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light").attr("disabled", false);

          if (_0x3aa1c3.ret === 1) {
            Swal.fire({
              'icon': "success",
              'title': _0x3aa1c3.msg
            }).then(_0x52ce60 => {
              window.location.reload();
            });
          }

          if (_0x3aa1c3.ret === 0) {
            Swal.fire({
              'icon': "error",
              'title': _0x3aa1c3.msg
            });
          }

          if (_0x3aa1c3.ret === -1) {
            window.location.reload();
          }
        },
        'error': function (_0x5c675b) {
          $("#node_filter_save_up,#node_filter_save_down").text("保存更改").removeClass("kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light").attr("disabled", false);
          Swal.fire({
            'icon': "error",
            'title': "发生错误 " + _0x5c675b.status
          }).then(_0x87a44c => {
            window.location.reload();
          });
        }
      });
    };

    var _0x206700 = function (_0xa68ebf, _0x370970, _0x15ce20) {
      switch (_0x370970) {
        case true:
          $("input[name=" + _0xa68ebf + ']').not(":disabled").prop("checked", true);
          break;

        case false:
          $("input[name=" + _0xa68ebf + ']').prop("checked", false);
          break;

        case "anti":
          $("input[name=" + _0xa68ebf + ']').each(function () {
            if ($(this).is(":checked")) {
              $(this).prop("checked", false);
            } else {
              $(this).not(":disabled").prop("checked", true);
            }
          });
          break;

        case "node_class":
          $(".node_class-" + _0x15ce20).prop("checked", true);
          break;
      }
    };

    var _0x5daf85 = function (_0x3460dd) {
      switch (_0x3460dd) {
        case "all":
          $("#filter_mode-all").show();
          $("#filter_mode-nodes_class").hide();
          $("#filter_mode-nodes_id").hide();
          $("#check-node_class, #check-all").hide();
          break;

        case "nodes_class":
          $("#filter_mode-all").hide();
          $("#filter_mode-nodes_class").show();
          $("#filter_mode-nodes_id").hide();
          $("#check-node_class, #check-all").hide();
          break;

        case "nodes_id":
          $("#filter_mode-all").hide();
          $("#filter_mode-nodes_class").hide();
          $("#filter_mode-nodes_id").show();
          $("#check-node_class, #check-all").show();
          break;
      }
    };

    return {
      'init': function () {
        _0x4f11f5();
      },

      'NodeInfo'(_0x524f6d) {
        _0x321c3d(_0x524f6d);
      },

      'Classinsufficient': function () {
        Swal.fire({
          'icon': "error",
          'title': "等级不足",
          'html': "您当前的等级不能使用该节点"
        });
      },
      'nodeFilterInit': function () {
        var _0x1560a2 = "3|4|2|0|1".split('|'),
            _0x23c24c = 0;

        var _0x974912 = {
          'UuSRP': function (_0x47030a, _0x2c6418) {
            return _0x47030a(_0x2c6418);
          },
          'haJBR': function (_0x49d618, _0x12cc31) {
            return _0x49d618(_0x12cc31);
          },
          'yLWWT': "option:selected"
        };
        $("#filter_mode").selectpicker();
        $("#filter_sort").selectpicker();
        $("#filter_mininame").selectpicker();
        $("#filter_mode").on("changed.bs.select", function (_0x5a1d78) {
          _0x5daf85($("option:selected").val());
        });
      },
      'nodeFilterSave': function () {
        _0x3792fb();
      },
      'allCheck': function (_0x392528, _0x248ea0, _0x4cda0a) {
        _0x206700(_0x392528, _0x248ea0, _0x4cda0a);
      }
    };
  }();

  jQuery(document).ready(function () {
    node.init();
  });
}

if (urlPath.indexOf("/setting") > -1) {
  var setting = function () {
    var _0x23b46b = {
      'SWPNH': function (_0x282b98, _0x142fd2) {
        return _0x282b98 > _0x142fd2;
      },
      'zSzPF': function (_0x121a5a, _0xd345db) {
        return _0x121a5a(_0xd345db);
      },
      'UpKQD': "href",
      'dgIjC': "active",
      'gIThe': function (_0x2c4791, _0x1808ca) {
        return _0x2c4791(_0x1808ca);
      },
      'hRaAT': "#source_node",
      'EeISn': "#dist_node",
      'geYhA': "#port",
      'fhCQC': "#take_account_type",
      'BriCS': "4|8|1|3|0|2|10|6|5|7|9",
      'BKGkc': function (_0x3cd0ef, _0x1a9c4a) {
        return _0x3cd0ef > _0x1a9c4a;
      },
      'JkYdN': "/setting/profile",
      'gxaTE': function (_0x2a2813, _0x5d3514) {
        return _0x2a2813(_0x5d3514);
      },
      'sGlHU': "init",
      'hMIEj': function (_0xdd6a5c, _0xac2ce) {
        return _0xdd6a5c > _0xac2ce;
      },
      'qDsfU': "/setting/logs",
      'Bukvo': function (_0x3cb17d) {
        return _0x3cb17d();
      },
      'YKcmq': function (_0x233983) {
        return _0x233983();
      },
      'VrXkw': function (_0x44645c, _0x2cd850) {
        return _0x44645c > _0x2cd850;
      },
      'wmrkY': "/setting/safe",
      'weRhd': function (_0x2ce1b) {
        return _0x2ce1b();
      },
      'lkDlY': "/setting/traffic_log",
      'YfQfC': function (_0x3cf7ff) {
        return _0x3cf7ff();
      },
      'BmvFd': "user_profile_list",
      'ZLIcB': "offcanvas-mobile",
      'qrckZ': "user_profile_mobile_toggle",
      'LZogm': "/setting/sublink",
      'hWjFG': function (_0x5513a4, _0x5ed0b2) {
        return _0x5513a4(_0x5ed0b2);
      },
      'YlVlm': function (_0x2255d8, _0x8f2b3a) {
        return _0x2255d8 > _0x8f2b3a;
      },
      'rZtzC': "/setting/telegram",
      'XNRGF': function (_0x45ebf4) {
        return _0x45ebf4();
      },
      'vDBwe': function (_0x27fc95, _0x1bc0a5) {
        return _0x27fc95 > _0x1bc0a5;
      },
      'iNrMm': "/setting/relay",
      'fXhoz': function (_0x5e3d9e) {
        return _0x5e3d9e();
      },
      'iqtlU': "#add-relay-modal",
      'vRNIf': "show.bs.modal",
      'Bdoas': function (_0x3330dc, _0x183162) {
        return _0x3330dc(_0x183162);
      },
      'uKBhZ': "#user_profile_list a",
      'bINLh': function (_0x5a99ba, _0x3d41cd) {
        return _0x5a99ba > _0x3d41cd;
      },
      'kDYAQ': "/setting/invite",
      'bvuCc': function (_0xf7a0c8) {
        return _0xf7a0c8();
      },
      'mWVnp': "#agent_setting_modal",
      'kYPgG': "/setting/detect",
      'MFubY': function (_0x47ce85) {
        return _0x47ce85();
      },
      'iScyv': function (_0x35c662, _0x184768) {
        return _0x35c662 !== _0x184768;
      },
      'cBjgA': "undefined",
      'NQTVZ': "#ajax_login_log_data",
      'eMOoC': "remote",
      'qCltk': "GET",
      'DjslZ': "/user/ajax_data/table/login_log",
      'dBnDT': "default",
      'ftCWn': "正在加载记录",
      'pijsF': "暂无记录",
      'HhjbK': "显示 {{start}} - {{end}} 共 {{total}} 项",
      'XWNcM': "跳到第一页",
      'tPSqc': "上一页",
      'EkbrS': "下一页",
      'WZkzJ': "跳到最后一页",
      'TKEFf': "更多页面",
      'QWmoF': "输入页数",
      'qmNpB': "选择页面显示数量",
      'iOeWT': "IP地址",
      'qbzXP': "location",
      'TpiJv': "归属地",
      'XCJCK': function (_0x11d995, _0x5752a6) {
        return _0x11d995(_0x5752a6);
      },
      'bpydK': "#ajax_use_log_data",
      'mUJdX': "/user/ajax_data/table/use_log",
      'jAMHA': function (_0x9dc806, _0x1925f5) {
        return _0x9dc806 !== _0x1925f5;
      },
      'jNGfa': function (_0x2a1deb, _0x458492) {
        return _0x2a1deb(_0x458492);
      },
      'oxKtw': "subscribe_type",
      'oXmNj': "#ajax_subscribe_log_data",
      'bxsWs': "/user/ajax_data/table/subscribe_log",
      'VCCXM': function (_0x12d2fc, _0x305d0a) {
        return _0x12d2fc(_0x305d0a);
      },
      'MFJsq': "#generalSearch",
      'taStK': "正在加载订阅记录",
      'hUXZt': "无订阅记录",
      'yAEFU': "desc",
      'AMplp': "number",
      'YEmgM': "center",
      'TaqHQ': "订阅类型",
      'zWVWD': "request_ip",
      'VOpMU': "request_time",
      'PqXWl': "订阅时间",
      'wnWSS': "request_user_agent",
      'lEiUA': "User-Agent",
      'uwWrt': "caozuo",
      'WnhJB': "#subscribe_log_type",
      'bjzfD': "change",
      'Vfpaw': function (_0x820ac2, _0x38db13) {
        return _0x820ac2(_0x38db13);
      },
      'euJVF': "#ajax_traffic_log_data",
      'jXSKd': "reload",
      'YUECJ': function (_0x52942b, _0x4312d1) {
        return _0x52942b !== _0x4312d1;
      },
      'zYsxR': function (_0x5921ee, _0xbe8b5d) {
        return _0x5921ee(_0xbe8b5d);
      },
      'OpRCl': "/user/ajax_data/table/traffic_log",
      'sIvWy': function (_0x2c790f, _0x1d26b5) {
        return _0x2c790f(_0x1d26b5);
      },
      'ZWQaj': "正在加载...",
      'RwDNA': "记录ID",
      'ZHKyJ': "node_id",
      'kZsmN': "节点ID",
      'xtYjk': "node_name",
      'kUJgJ': "节点名称",
      'uVraE': "rate",
      'WvsUB': "节点倍率",
      'rnull': "traffic",
      'DrQfq': "消耗流量",
      'iUwJo': "log_time",
      'skUIg': "记录时间",
      'RRxYA': "#ajax_traffic_log_data_reload",
      'xHgBZ': "click ",
      'AGHKR': "#ajax_detect_log_data",
      'GMZnj': "/user/ajax_data/table/detect_log",
      'CWMWf': function (_0x4e1b8b, _0x1243d4) {
        return _0x4e1b8b(_0x1243d4);
      },
      'KHRul': "暂无记录, 请保持",
      'XtEAR': "list_id",
      'MoVNS': "规则ID",
      'iAHMs': "rule_name",
      'bXjRf': "规则名称",
      'diYef': "rule_text",
      'nRgTE': "规则描述",
      'ueEdD': "rule_regex",
      'pZnNF': "正则表达式",
      'TszPM': "rule_type",
      'LFFBy': "规则类型",
      'lERse': "datetime",
      'bXPlE': "#ajax_detect_rule_data",
      'UXQZM': "/user/ajax_data/table/detect_rule",
      'pqLhH': "暂无规则",
      'TpnGB': "name",
      'bFFot': "text",
      'oAhaW': "regex",
      'ZqwmG': "type",
      'Ivxti': function (_0x2b3ead, _0x46fbb9) {
        return _0x2b3ead !== _0x46fbb9;
      },
      'pKUqP': function (_0x53f629, _0x58b05f) {
        return _0x53f629 === _0x58b05f;
      },
      'rBZrt': "无权操作",
      'EVdpJ': function (_0x800fa7, _0x48b733) {
        return _0x800fa7 + _0x48b733;
      },
      'jUmyz': function (_0x17b23c, _0x4a9bfd) {
        return _0x17b23c + _0x4a9bfd;
      },
      'egxBR': " <div class=\"card-toolbar\"> <div class=\"dropdown dropdown-inline mr-2\"> <button type=\"button\" class=\"btn btn-primary font-weight-bolder dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">操作</button> <div class=\"dropdown-menu dropdown-menu-sm dropdown-menu-right\"> <ul class=\"navi flex-column navi-hover py-2\"> <li class=\"navi-header font-weight-bolder text-uppercase font-size-sm text-primary pb-2\">选择操作:</li> <li class=\"navi-item\"> <a href=\"JavaScript:;\" class=\"navi-link\" onclick=\"setting.edit_relay(",
      'ZZhni': ", 'get');\"> <span class=\"navi-icon\"> <i class=\"la la-edit\"></i> </span> <span class=\"navi-text\">编辑</span> </a> </li> <li class=\"navi-item\"> <a href=\"JavaScript:;\" class=\"navi-link\" onclick=\"setting.del_relay(",
      'YUnXq': ");\"> <span class=\"navi-icon\"> <i class=\"la la-window-close\"></i> </span> <span class=\"navi-text\">删除</span> </a> </li> </ul> </div> </div> </div>",
      'neFCP': function (_0x51109a, _0x324ec3) {
        return _0x51109a(_0x324ec3);
      },
      'ouhXE': "#ajax_relay_rule_data",
      'epNOc': "/user/ajax_data/table/relay_rule",
      'nsDtS': "起源节点",
      'mjknt': "dist_name",
      'YGMji': "目标节点",
      'tVhHx': "port",
      'LaBNY': "priority",
      'mKgtP': "优先级",
      'MVGDj': "success",
      'UudvF': "danger",
      'XdXnQ': function (_0x1ee2e5, _0x38c7c3) {
        return _0x1ee2e5 + _0x38c7c3;
      },
      'lFBdn': function (_0x42ec0d, _0x2fb42f) {
        return _0x42ec0d + _0x2fb42f;
      },
      'SVepA': "<span class=\"label label-",
      'eVwBk': " label-dot mr-2\"></span><span class=\"font-weight-bold text-",
      'QnVPH': "</span>",
      'PsIOU': function (_0x358bf4, _0x5d75a7) {
        return _0x358bf4 !== _0x5d75a7;
      },
      'BvPSX': "#ajax_relay_link_data",
      'MePvh': "/user/ajax_data/table/relay_link",
      'bfqhx': "begin_node",
      'MEXsC': "始发节点",
      'MDipY': "end_node",
      'tDwsX': "终点节点",
      'UzlpR': "path",
      'EGhKB': "途径节点",
      'KBTSW': "status",
      'irFEL': function (_0x18bb50, _0x20e83e) {
        return _0x18bb50 !== _0x20e83e;
      },
      'WATfc': function (_0x41a5dd, _0xc6739c) {
        return _0x41a5dd + _0xc6739c;
      },
      'crmkQ': function (_0x1333b5, _0x203672) {
        return _0x1333b5(_0x203672);
      },
      'OWBRS': "#ajax_invite_back_data",
      'eROmx': "/user/ajax_data/table/invite_back",
      'JqDdQ': "当前显示 {{start}} - {{end}} 共 {{total}} 项",
      'sPyoj': "userid",
      'lPaWC': "被邀ID",
      'UFrCT': "ref_get",
      'leYWy': "获得返利",
      'FBBjn': function (_0x56c75c, _0x357df0) {
        return _0x56c75c !== _0x357df0;
      },
      'XvhnJ': function (_0x32d576, _0x400f57) {
        return _0x32d576(_0x400f57);
      },
      'RHqBE': "invite_user_status",
      'uHFQe': "#ajax_invite_user_data",
      'QPAej': "/user/ajax_data/table/invite_user",
      'bjdZS': function (_0x6cbdb1, _0x14bd4b) {
        return _0x6cbdb1(_0x14bd4b);
      },
      'Wizug': "用户ID",
      'SWpfF': "user_name",
      'ocjXA': "用户昵称",
      'CYIEY': "reg_date",
      'rKYGn': "注册日期",
      'erKWQ': "accumulated_recharge",
      'umLXo': "累计消费",
      'pZJtj': "get_rebates",
      'YKWeh': "累计返利",
      'ZizLq': function (_0x145710, _0x3f1c80) {
        return _0x145710(_0x3f1c80);
      },
      'aNsTA': "#invite_user_status",
      'fwKTR': "error",
      'vLFBv': function (_0x2a5a35, _0x4f4317) {
        return _0x2a5a35 + _0x4f4317;
      },
      'VTVBp': "发生错误 ",
      'cSeaH': function (_0x1e15b6, _0x229476) {
        return _0x1e15b6 == _0x229476;
      },
      'flIgo': "Valid",
      'JLczP': "POST",
      'vQhnZ': "/user/setting/profile",
      'JKdFC': "json",
      'uRrOp': "input[name='user_name']",
      'uFSvA': "input[name='email']",
      'kJERA': "input[name='email_name']",
      'qQMFo': "#email_suffix",
      'UPqAY': "option:selected",
      'tzRHI': function (_0xea325d, _0x3668fa) {
        return _0xea325d(_0x3668fa);
      },
      'TQsfH': "input[name='email_code']",
      'CJtRD': "请检查表单",
      'gGgOG': "5|2|1|3|6|4|0",
      'ShPvS': function (_0x4281d7, _0x421920) {
        return _0x4281d7(_0x421920);
      },
      'mRHFn': "oldvalue",
      'Ravzl': function (_0xe78aa1, _0x36df27) {
        return _0xe78aa1(_0x36df27);
      },
      'NDrZU': function (_0x48acad, _0x3e8232) {
        return _0x48acad + _0x3e8232;
      },
      'WVlwC': function (_0x331e9c, _0x379c41) {
        return _0x331e9c(_0x379c41);
      },
      'PHnrR': "您没有做任何更改",
      'yESWL': "info",
      'Pvdtu': "每日邮件状态已更新",
      'zOKlv': "/user/mail",
      'jZhzY': function (_0x3326a3, _0x14b5fe) {
        return _0x3326a3(_0x14b5fe);
      },
      'sBudZ': "input[id=\"sendDailyMail\"]:checked",
      'yPZkr': function (_0x3273c6, _0x1c7a92, _0x405ca6) {
        return _0x3273c6(_0x1c7a92, _0x405ca6);
      },
      'CEfXv': "#send_email_code",
      'KPdcI': "profile_form",
      'kBaub': "表名称验证失败",
      'RQkRJ': "用户昵称为必填项",
      'QAwDT': "用户名仅支中文、数字、字母和下划线的组合",
      'LDoBz': "不能超过 8 个字符",
      'HhRDw': "#profile_save_submit",
      'tosvH': "click",
      'gaLCn': "#sendDailyMail",
      'kiYKD': "send_email_code",
      'gJnMU': function (_0x1e7393, _0x284e04) {
        return _0x1e7393(_0x284e04);
      },
      'ryrmZ': function (_0x1a311e, _0x57a107) {
        return _0x1a311e(_0x57a107);
      },
      'IsZdD': function (_0x11c24a, _0x3e8b45) {
        return _0x11c24a(_0x3e8b45);
      },
      'FLKQP': function (_0x3dc199, _0x1aa670) {
        return _0x3dc199(_0x1aa670);
      },
      'LVsDU': function (_0x315c30, _0x2fe8ae) {
        return _0x315c30(_0x2fe8ae);
      },
      'CnJjO': function (_0xdb77f8, _0x199606) {
        return _0xdb77f8(_0x199606);
      },
      'yOgvi': function (_0x1a5264, _0x57f2b6) {
        return _0x1a5264(_0x57f2b6);
      },
      'nsyPY': function (_0x52f3f8, _0x498638) {
        return _0x52f3f8 == _0x498638;
      },
      'thllx': "无需验证码",
      'CzFnN': "没有修改邮箱无需验证码",
      'EEQKM': "/user/setting/send_email_code",
      'eUWpJ': "uid",
      'fvawx': "[name=\"new_passwd\"]",
      'RSULI': "ret_passwd",
      'HyHkN': "#ga-qr",
      'AqVaC': "safe-url",
      'BUDlp': "/plugins/jQuery-qrcode/jquery.qrcode.min.js",
      'DfFEO': function (_0x472616, _0x20e452, _0x1edb2d) {
        return _0x472616(_0x20e452, _0x1edb2d);
      },
      'DWNjY': "4|0|2|1|6|5|3",
      'lCUAg': "safe_form",
      'HbXxk': "input",
      'BMKAi': "旧密码不能为空",
      'NHxhU': "/user/formcheck/old_passwd",
      'TAVbS': "旧密码错误",
      'tIsuW': "get",
      'fXXUg': "新密码不能为空",
      'UrVLo': "新密码必须在8位以上",
      'QavpV': "新密码不能与旧密码一致",
      'VFoOc': "两次输入密码不一致",
      'ngrpa': function (_0x261928, _0x14fa9f) {
        return _0x261928(_0x14fa9f);
      },
      'XgvjX': "#step2-modal",
      'WhPrk': "hide.bs.modal",
      'oFudj': "[name=\"old_passwd\"]",
      'UiQDk': function (_0x33eb54, _0x33118c) {
        return _0x33eb54 === _0x33118c;
      },
      'bBZxV': function (_0x2e756a, _0x33165e) {
        return _0x2e756a + _0x33165e;
      },
      'ldAco': "/user/setting/safe",
      'JLGvo': "[name=\"ret_passwd\"]",
      'DGJYN': "没有修改密码无需保存",
      'evXKv': function (_0x2b5797, _0x5d4910) {
        return _0x2b5797(_0x5d4910);
      },
      'HGvjZ': "#safe_save_submit",
      'SfzUX': "input[name='node_passwd']",
      'CHrZi': function (_0x4309e0, _0x238ec8) {
        return _0x4309e0 === _0x238ec8;
      },
      'bWDBC': "请回到主页重新获取新的订阅链接",
      'upBnF': function (_0x77c73e, _0x1ccdac) {
        return _0x77c73e + _0x1ccdac;
      },
      'cryuw': "更新成功",
      'FGKLz': function (_0x1bdc63, _0x3e4237) {
        return _0x1bdc63 == _0x3e4237;
      },
      'LAQKR': "/user/sspwd",
      'RygGK': function (_0x1c1baa, _0x2542d9) {
        return _0x1c1baa == _0x2542d9;
      },
      'RjKyp': "sublink_form",
      'vsIfj': "连接密码仅允许数字、字母的组合",
      'HdEZV': "请设置 6 位以上连接密码",
      'XJFcD': function (_0x4adb3d, _0xe79850) {
        return _0x4adb3d(_0xe79850);
      },
      'WsNWE': "#sublink_save_submit",
      'wGprL': "reset",
      'ynXBu': "/user/setting/sublink",
      'ojjJU': "出现错误",
      'qpcgD': "请刷新页面后重试",
      'GncBP': "btn btn-primary",
      'xQIEk': "#000000",
      'GbSFI': "primary",
      'kxUnJ': "请稍候...",
      'nRYYY': "/user/relay",
      'OoQgr': function (_0xa36afa, _0x45f90a) {
        return _0xa36afa(_0x45f90a);
      },
      'ERbzX': "input[name='priority']",
      'mNbnH': "#relay-card",
      'Ccyzn': "DELETE",
      'GCrwH': "#edit-relay-modal",
      'eKyJn': "1|2|4|0|10|6|7|9|3|8|5",
      'FwwlV': function (_0x46450e, _0x2f48f0) {
        return _0x46450e(_0x2f48f0);
      },
      'nKTRI': "#edit-relay-modal #edit_port",
      'MhOeM': function (_0x56fd1d, _0x253330) {
        return _0x56fd1d + _0x253330;
      },
      'OaaCp': "option[value='",
      'UzYDT': "selected",
      'dUPBX': function (_0x136cb5, _0x3ea196) {
        return _0x136cb5(_0x3ea196);
      },
      'WemFP': "#edit-relay-modal .modal-title strong",
      'qGbZF': "编辑中转规则 #",
      'CIqxQ': "#edit-relay-modal #edit_source_node",
      'bvnfM': function (_0xc797e4, _0x5aab58) {
        return _0xc797e4 + _0x5aab58;
      },
      'mXRCz': "#edit_port",
      'NRDGs': "#edit-relay-modal #edit_dist_node",
      'iszyH': "#edit-relay-modal #edit_relay",
      'EySEX': "onclick",
      'fGUoV': function (_0x41090a, _0x5c8e75) {
        return _0x41090a + _0x5c8e75;
      },
      'nuVGL': "setting.edit_relay(",
      'wwgyn': ", 'set');",
      'dSUwr': "#edit_source_node",
      'eyUSv': "#edit_dist_node",
      'Fxehy': function (_0x4b2b63, _0x4fbe05) {
        return _0x4b2b63(_0x4fbe05);
      },
      'VfTEk': "#edit-relay-modal input[name='edit_priority']",
      'bEkom': function (_0xb73224, _0x4ce780) {
        return _0xb73224 === _0x4ce780;
      },
      'mMmCe': "/user/relay/",
      'sAwHs': "/edit",
      'DIaXc': "set",
      'lgsEt': "PUT",
      'IiNfv': function (_0x36577d, _0x33fad5) {
        return _0x36577d(_0x33fad5);
      },
      'jckjI': function (_0x3ad385, _0x16b446) {
        return _0x3ad385(_0x16b446);
      },
      'dGxTh': "input[name='edit_priority']",
      'jUwXF': "重置成功",
      'BLKOO': "location.href='/user/inviteurl_reset'",
      'gScMt': "出现了一些错误",
      'WNMXE': "请注意！",
      'eHWSH': "重置邀请链接后，原邀请码和邀请链接将失效，并随机生成新的邀请码和邀请链接",
      'UTCpy': "buynum",
      'OtTtO': "/user/buy_invite",
      'eYViz': "#buy-invite-num",
      'LrbiN': "custom",
      'EzpCj': "/user/custom_invite",
      'nrIva': "#custom-invite-link",
      'ncjYv': "modal",
      'NeoRA': "#take_money_modal",
      'FfABY': "/user/agent/take_total",
      'FZJQZ': "#take_money_modal li .active",
      'xkXSf': "data-metron",
      'ykByW': function (_0x1104c1, _0x25ddec) {
        return _0x1104c1(_0x25ddec);
      },
      'tysSr': " input[ name='take_money' ] ",
      'wNcMO': "/user/agent/take_account_setting",
      'CHmzG': function (_0x5e4d1d, _0x2b9e59) {
        return _0x5e4d1d(_0x2b9e59);
      },
      'UgCxy': " input[ name='take_account_value' ] ",
      'UoHzs': function (_0xf46871, _0x5365c7, _0x3b0e1b) {
        return _0xf46871(_0x5365c7, _0x3b0e1b);
      },
      'amobI': function (_0x517d57, _0x524d7d) {
        return _0x517d57 == _0x524d7d;
      },
      'OcjqE': "获取验证码",
      'tevkM': "disabled",
      'LIvoU': function (_0x1560f0, _0x1eafd0) {
        return _0x1560f0 + _0x1eafd0;
      },
      'BjMro': "重新发送(",
      'iSCwP': function (_0x13058e) {
        return _0x13058e();
      },
      'TAfbP': function (_0x417c1a, _0x43baf3) {
        return _0x417c1a(_0x43baf3);
      },
      'tFMRc': function (_0x19dfa6, _0x6a9a8e) {
        return _0x19dfa6 === _0x6a9a8e;
      },
      'tSzSA': function (_0x4a7164, _0x32a359) {
        return _0x4a7164 + _0x32a359;
      },
      'ziYKP': function (_0xe846dd, _0x2e0678) {
        return _0xe846dd + _0x2e0678;
      },
      'lBnbr': "step2",
      'obEZC': function (_0xfc5583, _0x3e2467) {
        return _0xfc5583 == _0x3e2467;
      },
      'ElZpQ': "#ga-code",
      'OigbO': "请输入动态码",
      'wpwOJ': "/user/gacheck",
      'OIRfc': function (_0x2ead5b, _0x12ec18) {
        return _0x2ead5b(_0x12ec18);
      },
      'FljSX': "#ga-passwd",
      'npASE': "请输入密码",
      'jtryZ': "/user/gaset",
      'SOnHv': "kill",
      'wsVvc': function (_0x587377, _0x3a1135) {
        return _0x587377 == _0x3a1135;
      },
      'JqElt': function (_0x482689, _0x86d45c) {
        return _0x482689(_0x86d45c);
      },
      'PMHhe': "#delete_passwd",
      'pojle': "/user/kill",
      'vHeNR': function (_0x22fc69, _0x224d7a) {
        return _0x22fc69(_0x224d7a);
      },
      'MBAjG': function (_0xfb36d3) {
        return _0xfb36d3();
      },
      'sfnBv': function (_0x2fd61f, _0x1863f9) {
        return _0x2fd61f(_0x1863f9);
      },
      'dwzfN': function (_0x3f93aa, _0x3f9da3, _0x231526) {
        return _0x3f93aa(_0x3f9da3, _0x231526);
      },
      'OugvS': function (_0x3bd346, _0x3913be) {
        return _0x3bd346 === _0x3913be;
      },
      'DZuVa': "unbind",
      'mtbXB': "/user/setting/telegram",
      'SMxAj': function (_0x259a5c) {
        return _0x259a5c();
      }
    };

    var _0x57629c = function () {
      var _0x29936a = "4|8|1|3|0|2|10|6|5|7|9".split('|'),
          _0x3db2bf = 0;

      var _0x380114 = new KTOffcanvas("user_profile_list", {
        'overlay': true,
        'baseClass': "offcanvas-mobile",
        'toggleBy': "user_profile_mobile_toggle"
      });

      $("#user_profile_list a").each(function () {
        if (urlPath.indexOf($(this).attr("href")) > -1) {
          $(this).addClass("active");
        }
      });

      if (urlPath.indexOf("/setting/logs") > -1) {
        _0x1c829b();

        _0x41b411();

        _0xf51ef0();
      }

      if (urlPath.indexOf("/setting/traffic_log") > -1) {
        _0x300634();
      }

      if (urlPath.indexOf("/setting/profile") > -1) {
        _0x41ee95("init");
      }

      if (urlPath.indexOf("/setting/safe") > -1) {
        _0x90386b();
      }

      if (urlPath.indexOf("/setting/detect") > -1) {
        _0x3eb3c0();
      }

      if (urlPath.indexOf("/setting/telegram") > -1) {
        _0xaf9baa();
      }

      if (urlPath.indexOf("/setting/sublink") > -1) {
        _0x3a5769("init");
      }

      if (urlPath.indexOf("/setting/relay") > -1) {
        _0x6ef967();

        _0x12ca36();

        $("#add-relay-modal").on("show.bs.modal", function () {
          $("#source_node").selectpicker();
          $("#dist_node").selectpicker();
          $("#port").selectpicker();
        });
      }

      if (urlPath.indexOf("/setting/invite") > -1) {
        _0x5c5904();

        _0x3092a8();

        mt.copytext();
        $("#agent_setting_modal").on("show.bs.modal", function () {
          $("#take_account_type").selectpicker();
        });
      }
    };

    var _0x1c829b = function () {
      var _0x555a41 = $("#ajax_login_log_data").KTDatatable({
        'data': {
          'type': "remote",
          'source': {
            'read': {
              'method': "GET",
              'url': "/user/ajax_data/table/login_log",
              'map': function (_0x34b811) {
                var _0x9278b7 = _0x34b811;

                if (typeof _0x34b811.data !== "undefined") {
                  _0x9278b7 = _0x34b811.data;
                }

                return _0x9278b7;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'theme': "default",
          'scroll': false,
          'footer': false
        },
        'sortable': false,
        'pagination': false,
        'toolbar': {
          'items': {
            'info': false,
            'pagination': {
              'pageSizeSelect': [5, 10],
              'navigation': {
                'prev': true,
                'next': true,
                'first': true,
                'last': true
              }
            }
          }
        },
        'translate': {
          'records': {
            'processing': "正在加载记录",
            'noRecords': "暂无记录"
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': "显示 {{start}} - {{end}} 共 {{total}} 项",
                'default': {
                  'first': "跳到第一页",
                  'prev': "上一页",
                  'next': "下一页",
                  'last': "跳到最后一页",
                  'more': "更多页面",
                  'input': "输入页数",
                  'select': "选择页面显示数量"
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'ip',
          'title': "IP地址"
        }, {
          'field': "location",
          'title': "归属地"
        }]
      });
    };

    var _0x41b411 = function () {
      var _0x53e871 = {
        'mMSlO': function (_0x493b94, _0x2984f6) {
          return _0x493b94 !== _0x2984f6;
        },
        'kRwQM': "undefined"
      };

      var _0x38235a = $("#ajax_use_log_data").KTDatatable({
        'data': {
          'type': "remote",
          'source': {
            'read': {
              'method': "GET",
              'url': "/user/ajax_data/table/use_log",
              'map': function (_0x5bc90f) {
                var _0x17b9f9 = _0x5bc90f;

                if (typeof _0x5bc90f.data !== "undefined") {
                  _0x17b9f9 = _0x5bc90f.data;
                }

                return _0x17b9f9;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'theme': "default",
          'scroll': false,
          'footer': false
        },
        'sortable': false,
        'pagination': false,
        'toolbar': {
          'items': {
            'info': false,
            'pagination': {
              'pageSizeSelect': [5, 10],
              'navigation': {
                'prev': true,
                'next': true,
                'first': true,
                'last': true
              }
            }
          }
        },
        'translate': {
          'records': {
            'processing': "正在加载记录",
            'noRecords': "暂无记录"
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': "显示 {{start}} - {{end}} 共 {{total}} 项",
                'default': {
                  'first': "跳到第一页",
                  'prev': "上一页",
                  'next': "下一页",
                  'last': "跳到最后一页",
                  'more': "更多页面",
                  'input': "输入页数",
                  'select': "选择页面显示数量"
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'ip',
          'title': "IP地址"
        }, {
          'field': "location",
          'title': "归属地"
        }]
      });
    };

    var _0xf51ef0 = function () {
      var _0x18cc2c = {
        'cqvwT': function (_0x5eca2a, _0xc5952d) {
          return _0x5eca2a(_0xc5952d);
        },
        'jzJWG': "subscribe_type"
      };

      var _0x399c11 = $("#ajax_subscribe_log_data").KTDatatable({
        'data': {
          'type': "remote",
          'source': {
            'read': {
              'method': "GET",
              'url': "/user/ajax_data/table/subscribe_log",
              'map': function (_0x2072e4) {
                var _0x29d5d8 = _0x2072e4;

                if (typeof _0x2072e4.data !== "undefined") {
                  _0x29d5d8 = _0x2072e4.data;
                }

                return _0x29d5d8;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'search': {
          'input': $("#generalSearch")
        },
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [-1, 5, 10, 20, 30, 50, 100]
            }
          }
        },
        'translate': {
          'records': {
            'processing': "正在加载订阅记录",
            'noRecords': "无订阅记录"
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': "显示 {{start}} - {{end}} 共 {{total}} 项",
                'default': {
                  'first': "跳到第一页",
                  'prev': "上一页",
                  'next': "下一页",
                  'last': "跳到最后一页",
                  'more': "更多页面",
                  'input': "输入页数",
                  'select': "选择页面显示数量"
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': 'ID',
          'sortable': "desc",
          'width': 80,
          'type': "number",
          'selector': false,
          'textAlign': "center"
        }, {
          'field': "subscribe_type",
          'title': "订阅类型"
        }, {
          'field': "request_ip",
          'title': "IP地址"
        }, {
          'field': "location",
          'title': "归属地",
          'sortable': false
        }, {
          'field': "request_time",
          'title': "订阅时间"
        }, {
          'field': "request_user_agent",
          'title': "User-Agent",
          'sortable': false,
          'autoHide': true
        }, {
          'field': "caozuo",
          'title': '操作',
          'autoHide': false,
          'sortable': false
        }]
      });

      $("#subscribe_log_type").on("change", function () {
        _0x399c11.search($(this).val().toLowerCase(), "subscribe_type");
      });
      $("#subscribe_log_type").selectpicker();
    };

    var _0x300634 = function () {
      var _0x13af12 = {
        'GUvde': function (_0x51fc60, _0x2b756f) {
          return _0x51fc60 !== _0x2b756f;
        },
        'jQgpM': "undefined"
      };

      var _0x1a1a60 = $("#ajax_traffic_log_data").KTDatatable({
        'data': {
          'type': "remote",
          'source': {
            'read': {
              'method': "GET",
              'url': "/user/ajax_data/table/traffic_log",
              'map': function (_0x296778) {
                var _0x44e832 = _0x296778;

                if (typeof _0x296778.data !== "undefined") {
                  _0x44e832 = _0x296778.data;
                }

                return _0x44e832;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 10,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': false,
        'pagination': true,
        'search': {
          'input': $("#generalSearch")
        },
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [5, 10, 20, 30, 50, 100]
            }
          }
        },
        'translate': {
          'records': {
            'processing': "正在加载...",
            'noRecords': "暂无记录"
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': "显示 {{start}} - {{end}} 共 {{total}} 项",
                'default': {
                  'first': "跳到第一页",
                  'prev': "上一页",
                  'next': "下一页",
                  'last': "跳到最后一页",
                  'more': "更多页面",
                  'input': "输入页数",
                  'select': "选择页面显示数量"
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': "记录ID",
          'sortable': "desc",
          'width': 80,
          'type': "number",
          'selector': false,
          'textAlign': "center"
        }, {
          'field': "node_id",
          'title': "节点ID",
          'autoHide': true
        }, {
          'field': "node_name",
          'title': "节点名称",
          'autoHide': false
        }, {
          'field': "rate",
          'title': "节点倍率",
          'autoHide': true
        }, {
          'field': "traffic",
          'title': "消耗流量",
          'autoHide': false
        }, {
          'field': "log_time",
          'title': "记录时间",
          'autoHide': false,
          'template': function (_0x29c7ed) {
            return mt.getTimeForm(_0x29c7ed.log_time);
          }
        }]
      });

      $("#ajax_traffic_log_data_reload").on("click ", function () {
        $("#ajax_traffic_log_data").KTDatatable("reload");
      });
    };

    var _0x3eb3c0 = function () {
      var _0x3289b8 = {
        'rzeBQ': function (_0x53ffb1, _0x130704) {
          return _0x53ffb1 !== _0x130704;
        },
        'ptArX': "undefined"
      };

      var _0x4ca8dd = $("#ajax_detect_log_data").KTDatatable({
        'data': {
          'type': "remote",
          'source': {
            'read': {
              'method': "GET",
              'url': "/user/ajax_data/table/detect_log",
              'map': function (_0x30ea2d) {
                var _0x1ca863 = _0x30ea2d;

                if (typeof _0x30ea2d.data !== "undefined") {
                  _0x1ca863 = _0x30ea2d.data;
                }

                return _0x1ca863;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': false,
        'pagination': true,
        'search': {
          'input': $("#generalSearch")
        },
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [5, 10, 20, 30, 50, 100]
            }
          }
        },
        'translate': {
          'records': {
            'processing': "正在加载...",
            'noRecords': "暂无记录, 请保持"
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': "显示 {{start}} - {{end}} 共 {{total}} 项",
                'default': {
                  'first': "跳到第一页",
                  'prev': "上一页",
                  'next': "下一页",
                  'last': "跳到最后一页",
                  'more': "更多页面",
                  'input': "输入页数",
                  'select': "选择页面显示数量"
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': "记录ID",
          'sortable': "desc",
          'width': 80,
          'type': "number",
          'selector': false,
          'textAlign': "center"
        }, {
          'field': "node_id",
          'title': "节点ID",
          'autoHide': true
        }, {
          'field': "node_name",
          'title': "节点名称",
          'autoHide': false
        }, {
          'field': "list_id",
          'title': "规则ID",
          'autoHide': true
        }, {
          'field': "rule_name",
          'title': "规则名称",
          'autoHide': false
        }, {
          'field': "rule_text",
          'title': "规则描述",
          'sortable': false
        }, {
          'field': "rule_regex",
          'title': "正则表达式",
          'autoHide': true
        }, {
          'field': "rule_type",
          'title': "规则类型",
          'autoHide': true
        }, {
          'field': "datetime",
          'title': "记录时间",
          'autoHide': false,
          'template': function (_0x557bc2) {
            return mt.getTimeForm(_0x557bc2.datetime);
          }
        }]
      });

      var _0x1dede6 = $("#ajax_detect_rule_data").KTDatatable({
        'data': {
          'type': "remote",
          'source': {
            'read': {
              'method': "GET",
              'url': "/user/ajax_data/table/detect_rule",
              'map': function (_0x159f32) {
                var _0x2358bc = _0x159f32;

                if (typeof _0x159f32.data !== "undefined") {
                  _0x2358bc = _0x159f32.data;
                }

                return _0x2358bc;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'search': {
          'input': $("#generalSearch")
        },
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [5, 10, 20, 30, 50, 100]
            }
          }
        },
        'translate': {
          'records': {
            'processing': "正在加载...",
            'noRecords': "暂无规则"
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': "显示 {{start}} - {{end}} 共 {{total}} 项",
                'default': {
                  'first': "跳到第一页",
                  'prev': "上一页",
                  'next': "下一页",
                  'last': "跳到最后一页",
                  'more': "更多页面",
                  'input': "输入页数",
                  'select': "选择页面显示数量"
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': "规则ID",
          'sortable': "desc",
          'width': 80,
          'type': "number",
          'selector': false,
          'textAlign': "center"
        }, {
          'field': "name",
          'title': "规则名称",
          'autoHide': false
        }, {
          'field': "text",
          'title': "规则描述",
          'autoHide': false
        }, {
          'field': "regex",
          'title': "正则表达式",
          'autoHide': true
        }, {
          'field': "type",
          'title': "规则类型",
          'autoHide': true
        }]
      });
    };

    var _0x6ef967 = function () {
      var _0xa409b9 = $("#ajax_relay_rule_data").KTDatatable({
        'data': {
          'type': "remote",
          'source': {
            'read': {
              'method': "GET",
              'url': "/user/ajax_data/table/relay_rule",
              'map': function (_0x3bce3d) {
                var _0x2af15a = _0x3bce3d;

                if (typeof _0x3bce3d.data !== "undefined") {
                  _0x2af15a = _0x3bce3d.data;
                }

                return _0x2af15a;
              }
            }
          },
          'saveState': true,
          'pageSize': 5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'theme': "default",
          'scroll': false,
          'footer': false
        },
        'sortable': false,
        'pagination': true,
        'toolbar': {
          'items': {
            'info': false,
            'pagination': {
              'pageSizeSelect': [5, 10],
              'navigation': {
                'prev': true,
                'next': true,
                'first': true,
                'last': true
              }
            }
          }
        },
        'translate': {
          'records': {
            'processing': "正在加载...",
            'noRecords': "暂无记录"
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': "显示 {{start}} - {{end}} 共 {{total}} 项",
                'default': {
                  'first': "跳到第一页",
                  'prev': "上一页",
                  'next': "下一页",
                  'last': "跳到最后一页",
                  'more': "更多页面",
                  'input': "输入页数",
                  'select': "选择页面显示数量"
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': 'ID',
          'sortable': "desc",
          'width': 70,
          'type': "number",
          'selector': false,
          'textAlign': "center"
        }, {
          'field': "name",
          'title': "起源节点"
        }, {
          'field': "dist_name",
          'title': "目标节点"
        }, {
          'field': "port",
          'title': '端口'
        }, {
          'field': "priority",
          'title': "优先级"
        }, {
          'field': "caozuo",
          'title': '操作',
          'sortable': false,
          'autoHide': false,
          'template': function (_0xd9a140) {
            if (_0xd9a140.user_id === 0) {
              return "无权操作";
            } else {
              return " <div class=\"card-toolbar\"> <div class=\"dropdown dropdown-inline mr-2\"> <button type=\"button\" class=\"btn btn-primary font-weight-bolder dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">操作</button> <div class=\"dropdown-menu dropdown-menu-sm dropdown-menu-right\"> <ul class=\"navi flex-column navi-hover py-2\"> <li class=\"navi-header font-weight-bolder text-uppercase font-size-sm text-primary pb-2\">选择操作:</li> <li class=\"navi-item\"> <a href=\"JavaScript:;\" class=\"navi-link\" onclick=\"setting.edit_relay(" + _0xd9a140.id + ", 'get');\"> <span class=\"navi-icon\"> <i class=\"la la-edit\"></i> </span> <span class=\"navi-text\">编辑</span> </a> </li> <li class=\"navi-item\"> <a href=\"JavaScript:;\" class=\"navi-link\" onclick=\"setting.del_relay(" + _0xd9a140.id + ");\"> <span class=\"navi-icon\"> <i class=\"la la-window-close\"></i> </span> <span class=\"navi-text\">删除</span> </a> </li> </ul> </div> </div> </div>";
            }
          }
        }]
      });
    };

    var _0x12ca36 = function () {
      var _0x1bd851 = {
        'SMuoM': function (_0xb7f398, _0x3b3975) {
          return _0xb7f398 !== _0x3b3975;
        },
        'oqIKG': "undefined"
      };

      let _0x97e1cf = $("#ajax_relay_link_data").KTDatatable({
        'data': {
          'type': "remote",
          'source': {
            'read': {
              'method': "GET",
              'url': "/user/ajax_data/table/relay_link",
              'map': function (_0x330509) {
                var _0x289371 = _0x330509;

                if (typeof _0x330509.data !== "undefined") {
                  _0x289371 = _0x330509.data;
                }

                return _0x289371;
              }
            }
          },
          'pageSize': -1,
          'saveState': true,
          'serverPaging': false,
          'serverFiltering': false,
          'serverSorting': false
        },
        'layout': {
          'theme': "default",
          'scroll': false,
          'footer': false
        },
        'sortable': false,
        'pagination': false,
        'toolbar': {
          'items': {
            'info': false,
            'pagination': {
              'pageSizeSelect': [5, 10],
              'navigation': {
                'prev': true,
                'next': true,
                'first': true,
                'last': true
              }
            }
          }
        },
        'translate': {
          'records': {
            'processing': "正在加载...",
            'noRecords': "暂无记录"
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': "显示 {{start}} - {{end}} 共 {{total}} 项",
                'default': {
                  'first': "跳到第一页",
                  'prev': "上一页",
                  'next': "下一页",
                  'last': "跳到最后一页",
                  'more': "更多页面",
                  'input': "输入页数",
                  'select': "选择页面显示数量"
                }
              }
            }
          }
        },
        'columns': [{
          'field': "port",
          'title': '端口',
          'width': 60,
          'textAlign': "center"
        }, {
          'field': "begin_node",
          'title': "始发节点"
        }, {
          'field': "end_node",
          'title': "终点节点"
        }, {
          'field': "path",
          'title': "途径节点"
        }, {
          'field': "status",
          'title': '状态',
          'template': function (_0x3f9233) {
            let _0x125f58 = {
              '通畅': {
                'title': '通畅',
                'state': "success"
              },
              '阻断': {
                'title': '阻断',
                'state': "danger"
              }
            };
            return "<span class=\"label label-" + _0x125f58[_0x3f9233.status].state + " label-dot mr-2\"></span><span class=\"font-weight-bold text-" + _0x125f58[_0x3f9233.status].state + "\">" + _0x125f58[_0x3f9233.status].title + "</span>";
          }
        }]
      });
    };

    var _0x5c5904 = function () {
      var _0xc07a8f = $("#ajax_invite_back_data").KTDatatable({
        'data': {
          'type': "remote",
          'source': {
            'read': {
              'method': "GET",
              'url': "/user/ajax_data/table/invite_back",
              'map': function (_0xeac513) {
                var _0x86cff8 = _0xeac513;

                if (typeof _0xeac513.data !== "undefined") {
                  _0x86cff8 = _0xeac513.data;
                }

                return _0x86cff8;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 11,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'search': {
          'input': $("#generalSearch")
        },
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [5, 10, 15, 20, 30, 50, 100]
            }
          }
        },
        'translate': {
          'records': {
            'processing': "正在加载...",
            'noRecords': "暂无记录"
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': "当前显示 {{start}} - {{end}} 共 {{total}} 项",
                'default': {
                  'first': "跳到第一页",
                  'prev': "上一页",
                  'next': "下一页",
                  'last': "跳到最后一页",
                  'more': "更多页面",
                  'input': "输入页数",
                  'select': "选择页面显示数量"
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': 'ID',
          'sortable': "desc",
          'width': 80,
          'type': "number",
          'selector': false,
          'textAlign': "center"
        }, {
          'field': "userid",
          'title': "被邀ID",
          'width': 60,
          'autoHide': false
        }, {
          'field': "ref_get",
          'title': "获得返利",
          'width': 60,
          'template': function (_0x7bc5cd) {
            return _0x7bc5cd.ref_get + '元';
          }
        }, {
          'field': "datetime",
          'title': '时间',
          'width': 150,
          'template': function (_0x3d12d0) {
            return mt.getTimeForm(_0x3d12d0.datetime);
          }
        }]
      });
    };

    var _0x3092a8 = function () {
      var _0x55bc99 = $("#ajax_invite_user_data").KTDatatable({
        'data': {
          'type': "remote",
          'source': {
            'read': {
              'method': "GET",
              'url': "/user/ajax_data/table/invite_user",
              'map': function (_0x2590f4) {
                var _0x348804 = _0x2590f4;

                if (typeof _0x2590f4.data !== "undefined") {
                  _0x348804 = _0x2590f4.data;
                }

                return _0x348804;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'search': {
          'input': $("#generalSearch")
        },
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [5, 10, 15, 20, 30, 50, 100]
            }
          }
        },
        'translate': {
          'records': {
            'processing': "正在加载...",
            'noRecords': "暂无记录"
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': "当前显示 {{start}} - {{end}} 共 {{total}} 项",
                'default': {
                  'first': "跳到第一页",
                  'prev': "上一页",
                  'next': "下一页",
                  'last': "跳到最后一页",
                  'more': "更多页面",
                  'input': "输入页数",
                  'select': "选择页面显示数量"
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': "用户ID",
          'sortable': "desc",
          'width': 80,
          'type': "number",
          'selector': false,
          'textAlign': "center"
        }, {
          'field': "user_name",
          'title': "用户昵称",
          'autoHide': false
        }, {
          'field': "reg_date",
          'title': "注册日期"
        }, {
          'field': "accumulated_recharge",
          'title': "累计消费",
          'sortable': false
        }, {
          'field': "get_rebates",
          'title': "累计返利",
          'sortable': false
        }]
      });

      $("#invite_user_status").on("change", function () {
        _0x55bc99.search($(this).val().toLowerCase(), "invite_user_status");
      });
      $("#invite_user_status").selectpicker();
    };

    var _0x41ee95 = function (_0x2ea684) {
      switch (_0x2ea684) {
        case "init":
          var _0x776937 = FormValidation.formValidation(KTUtil.getById("profile_form"), {
            'fields': {
              'user_name': {
                'message': "表名称验证失败",
                'validators': {
                  'notEmpty': {
                    'message': "用户昵称为必填项"
                  },
                  'regexp': {
                    'regexp': /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
                    'message': "用户名仅支中文、数字、字母和下划线的组合"
                  },
                  'stringLength': {
                    'max': 8,
                    'message': "不能超过 8 个字符"
                  }
                }
              }
            },
            'plugins': {
              'trigger': new FormValidation.plugins.Trigger(),
              'bootstrap': new FormValidation.plugins.Bootstrap()
            }
          });

          $("#profile_save_submit").on("click", function (_0x376107) {
            var _0x5a27c6 = $("input[name='email']").val() ? $("input[name='email']").val() : $("input[name='email_name']").val() + $("#email_suffix").find("option:selected").text();

            var _0x3eebee = $("input[name='email']").attr("oldvalue") ? $("input[name='email']").attr("oldvalue") : $("input[name='email_name']").attr("oldvalue") + $("#email_suffix").attr("oldvalue");

            var _0x34d6d0 = $("input[name='user_name']").val();

            var _0x5ad44f = $("input[name='user_name']").attr("oldvalue");

            if (_0x34d6d0 == _0x5ad44f && _0x5a27c6 == _0x3eebee) {
              swal.fire({
                'title': "您没有做任何更改",
                'icon': "info",
                'confirmButtonText': '确定'
              });
              return;
            }

            _0x376107.preventDefault();

            _0x776937.validate().then(function (_0x5e36d3) {
              if (_0x5e36d3 == "Valid") {
                $.ajax({
                  'type': "POST",
                  'url': "/user/setting/profile",
                  'dataType': "json",
                  'data': {
                    'user_name': $("input[name='user_name']").val(),
                    'email': $("input[name='email']").val() ? $("input[name='email']").val() : $("input[name='email_name']").val() + $("#email_suffix").find("option:selected").text(),
                    'email_code': $("input[name='email_code']").val()
                  },
                  'success': function (_0x557978) {
                    if (_0x557978.ret === 1) {
                      swal.fire({
                        'title': _0x557978.msg,
                        'icon': "success",
                        'confirmButtonText': '确定'
                      }).then(function () {
                        window.location.reload();
                      });
                    } else {
                      if (_0x557978.ret === 0) {
                        swal.fire({
                          'title': _0x557978.msg,
                          'icon': "error",
                          'confirmButtonText': '确定'
                        });
                      } else {
                        window.location.reload();
                      }
                    }
                  },
                  'error': function (_0x595922) {
                    Swal.fire({
                      'icon': "error",
                      'title': "发生错误 " + _0x595922.status,
                      'confirmButtonText': '确定'
                    });
                  }
                });
              } else {
                swal.fire({
                  'title': "请检查表单",
                  'icon': "error",
                  'confirmButtonText': '确定'
                });
              }
            });
          });
          $("#sendDailyMail").on("click", function (_0x6db001) {
            $.ajax({
              'type': "POST",
              'url': "/user/mail",
              'dataType': "json",
              'data': {
                'mail': $("input[id=\"sendDailyMail\"]:checked").val() ? 1 : 0
              },
              'success': function (_0x1f91fb) {
                if (_0x1f91fb.ret === 1) {
                  swal.fire({
                    'title': _0x1f91fb.msg,
                    'text': "每日邮件状态已更新",
                    'icon': "success",
                    'confirmButtonText': '确定'
                  });
                } else {
                  if (_0x1f91fb.ret === 0) {
                    swal.fire({
                      'title': _0x1f91fb.msg,
                      'icon': "error",
                      'confirmButtonText': '确定'
                    });
                  } else {
                    window.location.reload();
                  }
                }
              },
              'error': function (_0x129fff) {
                Swal.fire({
                  'icon': "error",
                  'title': "发生错误 " + _0x129fff.status,
                  'confirmButtonText': '确定'
                });
              }
            });
          });
          break;

        case "send_email_code":
          var _0x219c9d = $("input[name='email']").val() ? $("input[name='email']").val() : $("input[name='email_name']").val() + $("#email_suffix").find("option:selected").text();

          var _0x3d295d = $("input[name='email']").attr("oldvalue") ? $("input[name='email']").attr("oldvalue") : $("input[name='email_name']").attr("oldvalue") + $("#email_suffix").attr("oldvalue");

          if (_0x219c9d == _0x3d295d) {
            swal.fire({
              'title': "无需验证码",
              'text': "没有修改邮箱无需验证码",
              'icon': "info",
              'confirmButtonText': '确定'
            });
          } else {
            $.ajax({
              'type': "POST",
              'url': "/user/setting/send_email_code",
              'dataType': "json",
              'data': {
                'email': _0x219c9d
              },
              'success': function (_0x37d59c) {
                if (_0x37d59c.ret === 1) {
                  swal.fire({
                    'title': _0x37d59c.msg,
                    'icon': "success",
                    'confirmButtonText': '确定'
                  });

                  _0x26770e($("#send_email_code"), 60);
                } else {
                  if (_0x37d59c.ret === 0) {
                    swal.fire({
                      'title': _0x37d59c.msg,
                      'icon': "error",
                      'confirmButtonText': '确定'
                    });
                  } else {
                    window.location.reload();
                  }
                }
              },
              'error': function (_0x4a674c) {
                Swal.fire({
                  'icon': "error",
                  'title': "发生错误 " + _0x4a674c.status,
                  'confirmButtonText': '确定'
                });
              }
            });
          }

          break;
      }
    };

    var _0x90386b = function () {
      var _0x16a2bb = KTUtil.getById("safe_form");

      var _0x330177 = FormValidation.formValidation(_0x16a2bb, {
        'fields': {
          'old_passwd': {
            'validators': {
              'notEmpty': {
                'message': "旧密码不能为空"
              },
              'remote': {
                'url': "/user/formcheck/old_passwd",
                'message': "旧密码错误",
                'type': "get",
                'data': function () {
                  return {
                    'id': MRCookie.getCookie("uid")
                  };
                }
              }
            }
          },
          'new_passwd': {
            'validators': {
              'notEmpty': {
                'message': "新密码不能为空"
              },
              'stringLength': {
                'min': 8,
                'message': "新密码必须在8位以上"
              },
              'different': {
                'compare': function () {
                  return _0x16a2bb.querySelector("[name=\"old_passwd\"]").value;
                },
                'message': "新密码不能与旧密码一致"
              }
            }
          },
          'ret_passwd': {
            'validators': {
              'identical': {
                'compare': function () {
                  return _0x16a2bb.querySelector("[name=\"new_passwd\"]").value;
                },
                'message': "两次输入密码不一致"
              }
            }
          }
        },
        'plugins': {
          'trigger': new FormValidation.plugins.Trigger(),
          'bootstrap': new FormValidation.plugins.Bootstrap(),
          'submitButton': new FormValidation.plugins.SubmitButton()
        }
      });

      _0x16a2bb.querySelector("[name=\"new_passwd\"]").addEventListener("input", function () {
        _0x330177.revalidateField("ret_passwd");
      });

      $("#safe_save_submit").on("click", function (_0x33e548) {
        if (_0x16a2bb.querySelector("[name=\"old_passwd\"]").value == '') {
          swal.fire({
            'text': "没有修改密码无需保存",
            'icon': "info",
            'confirmButtonText': '确定'
          });
          return;
        }

        _0x33e548.preventDefault();

        _0x330177.validate().then(function (_0x9646f4) {
          if (_0x9646f4 == "Valid") {
            $.ajax({
              'type': "POST",
              'url': "/user/setting/safe",
              'dataType': "json",
              'data': {
                'old_passwd': _0x16a2bb.querySelector("[name=\"old_passwd\"]").value,
                'new_passwd': _0x16a2bb.querySelector("[name=\"new_passwd\"]").value,
                'ret_passwd': _0x16a2bb.querySelector("[name=\"ret_passwd\"]").value
              },
              'success': function (_0x8627f) {
                if (_0x8627f.ret === 1) {
                  swal.fire({
                    'title': _0x8627f.msg,
                    'icon': "success",
                    'confirmButtonText': '确定'
                  }).then(function () {
                    window.location.reload();
                  });
                } else {
                  if (_0x8627f.ret === 0) {
                    swal.fire({
                      'title': _0x8627f.msg,
                      'icon': "error",
                      'confirmButtonText': '确定'
                    });
                  } else {
                    window.location.reload();
                  }
                }
              },
              'error': function (_0x2b7924) {
                Swal.fire({
                  'icon': "error",
                  'title': "发生错误 " + _0x2b7924.status,
                  'confirmButtonText': '确定'
                });
              }
            });
          } else {
            swal.fire({
              'text': "请检查表单",
              'icon': "error",
              'confirmButtonText': '确定'
            }).then(function () {
              KTUtil.scrollTop();
            });
          }
        });
      });
      $("#step2-modal").on("show.bs.modal", function () {
        $.getScript(ASSETS_URL + "/plugins/jQuery-qrcode/jquery.qrcode.min.js", function () {
          $("#ga-qr").qrcode({
            'text': $("#ga-qr").attr("safe-url")
          });
        });
      });
      $("#step2-modal").on("hide.bs.modal", function () {
        setTimeout(function () {
          $("#ga-qr").empty();
        }, 500);
      });
    };

    var _0x3a5769 = function (_0x88f3ba) {
      if (_0x88f3ba == "init") {
        var _0x136659 = KTUtil.getById("sublink_form");

        var _0x459018 = FormValidation.formValidation(_0x136659, {
          'fields': {
            'node_passwd': {
              'validators': {
                'regexp': {
                  'regexp': /^[a-zA-Z0-9]+$/,
                  'message': "连接密码仅允许数字、字母的组合"
                },
                'stringLength': {
                  'min': 6,
                  'message': "请设置 6 位以上连接密码"
                }
              }
            }
          },
          'plugins': {
            'trigger': new FormValidation.plugins.Trigger(),
            'bootstrap': new FormValidation.plugins.Bootstrap(),
            'submitButton': new FormValidation.plugins.SubmitButton()
          }
        });

        $("#sublink_save_submit").on("click", function (_0x18266b) {
          var _0x3abb58 = $("input[name='node_passwd']").val();

          if (_0x3abb58 == '') {
            swal.fire({
              'title': "您没有做任何更改",
              'icon': "info",
              'confirmButtonText': '确定'
            });
            return;
          }

          _0x18266b.preventDefault();

          _0x459018.validate().then(function (_0x166ce8) {
            if (_0x166ce8 == "Valid") {
              $.ajax({
                'type': "POST",
                'url': "/user/sspwd",
                'dataType': "json",
                'data': {
                  'sspwd': _0x3abb58
                },
                'success': function (_0x4b41ab) {
                  if (_0x4b41ab.ret === 1) {
                    swal.fire({
                      'title': "更新成功",
                      'icon': "success",
                      'confirmButtonText': '确定'
                    }).then(function () {
                      window.location.reload();
                    });
                  } else {
                    if (_0x4b41ab.ret === 0) {
                      swal.fire({
                        'title': _0x4b41ab.msg,
                        'icon': "error",
                        'confirmButtonText': '确定'
                      });
                    } else {
                      window.location.reload();
                    }
                  }
                },
                'error': function (_0x72f030) {
                  Swal.fire({
                    'icon': "error",
                    'title': "发生错误 " + _0x72f030.status,
                    'confirmButtonText': '确定'
                  });
                }
              });
            } else {
              swal.fire({
                'title': "请检查表单",
                'icon': "error",
                'confirmButtonText': '确定'
              });
            }
          });
        });
      } else {
        if (_0x88f3ba == "reset") {
          $.ajax({
            'type': "POST",
            'url': "/user/setting/sublink",
            'dataType': "json",
            'data': {},
            'success': function (_0x1abd54) {
              if (_0x1abd54.ret === 1) {
                swal.fire({
                  'title': _0x1abd54.msg,
                  'text': "请回到主页重新获取新的订阅链接",
                  'icon': "success",
                  'confirmButtonText': '确定'
                }).then(function () {
                  window.location.reload();
                });
              } else {
                if (_0x1abd54.ret === 0) {
                  swal.fire({
                    'title': _0x1abd54.msg,
                    'icon': "error",
                    'confirmButtonText': '确定'
                  });
                } else {
                  window.location.reload();
                }
              }
            },
            'error': function (_0x18fbc5) {
              Swal.fire({
                'icon': "error",
                'title': "发生错误 " + _0x18fbc5.status,
                'confirmButtonText': '确定'
              });
            }
          });
        }
      }
    };

    var _0x1fcaba = function () {
      KTApp.block("#add-relay-modal", {
        'overlayColor': "#000000",
        'state': "primary",
        'message': "请稍候..."
      });
      $.ajax({
        'type': "POST",
        'url': "/user/relay",
        'dataType': "json",
        'data': {
          'source_node': $("#source_node").val(),
          'dist_node': $("#dist_node").val(),
          'port': $("#port").val(),
          'priority': $("input[name='priority']").val()
        },
        'success': function (_0x5c974e) {
          mt.ajax_swal(_0x5c974e);
          KTApp.unblock("#add-relay-modal");
        },
        'error': function (_0x5134e4) {
          Swal.fire({
            'icon': "error",
            'title': "出现错误",
            'html': "请刷新页面后重试",
            'confirmButtonText': '确定',
            'confirmButtonClass': "btn btn-primary"
          }).then(_0x96889 => {
            window.location.reload();
          });
          KTApp.unblock("#add-relay-modal");
        }
      });
    };

    var _0x4816b7 = function (_0x4ff11c) {
      KTApp.block("#relay-card", {
        'overlayColor': "#000000",
        'state': "primary",
        'message': "请稍候..."
      });
      $.ajax({
        'type': "DELETE",
        'url': "/user/relay",
        'dataType': "json",
        'data': {
          'id': _0x4ff11c
        },
        'success': function (_0x2f7551) {
          mt.ajax_swal(_0x2f7551);
          KTApp.unblock("#relay-card");
        },
        'error': function (_0x454ed8) {
          Swal.fire({
            'icon': "error",
            'title': "出现错误",
            'html': "请刷新页面后重试",
            'confirmButtonText': '确定',
            'confirmButtonClass': "btn btn-primary"
          }).then(_0x3166fd => {
            window.location.reload();
          });
        }
      });
    };

    var _0x4d47fb = function (_0x5222ed, _0x33136e) {
      if (_0x33136e === "get") {
        KTApp.block("#relay-card", {
          'overlayColor': "#000000",
          'state': "primary",
          'message': "请稍候..."
        });
        $.ajax({
          'type': "GET",
          'url': "/user/relay/" + _0x5222ed + "/edit",
          'dataType': "json",
          'data': {
            'json': 1
          },
          'success': function (_0x16fbe1) {
            $("#edit-relay-modal .modal-title strong").text("编辑中转规则 #" + _0x16fbe1.rule.id);
            $("#edit-relay-modal #edit_source_node").find("option[value='" + _0x16fbe1.rule.source_node_id + "']").attr("selected", true);
            $("#edit-relay-modal #edit_dist_node").find("option[value='" + _0x16fbe1.rule.dist_node_id + "']").attr("selected", true);
            $("#edit-relay-modal #edit_port").find("option[value='" + _0x16fbe1.rule.port + "']").attr("selected", true);
            $("#edit-relay-modal input[name='edit_priority']").val(_0x16fbe1.rule.priority);
            $("#edit-relay-modal #edit_relay").attr("onclick", "setting.edit_relay(" + _0x16fbe1.rule.id + ", 'set');");
            $("#edit_source_node").selectpicker();
            $("#edit_dist_node").selectpicker();
            $("#edit_port").selectpicker();
            $("#edit-relay-modal").modal();
            KTApp.unblock("#relay-card");
          },
          'error': function (_0xe86ab6) {
            Swal.fire({
              'icon': "error",
              'title': "出现错误",
              'html': "请刷新页面后重试",
              'confirmButtonText': '确定',
              'confirmButtonClass': "btn btn-primary"
            }).then(_0x2e94c3 => {
              window.location.reload();
            });
          }
        });
      } else {
        if (_0x33136e === "set") {
          KTApp.block("#edit-relay-modal", {
            'overlayColor': "#000000",
            'state': "primary",
            'message': "请稍候..."
          });
          $.ajax({
            'type': "PUT",
            'url': "/user/relay/" + _0x5222ed,
            'dataType': "json",
            'data': {
              'source_node': $("#edit_source_node").val(),
              'dist_node': $("#edit_dist_node").val(),
              'port': $("#edit_port").val(),
              'priority': $("input[name='edit_priority']").val()
            },
            'success': function (_0x38c105) {
              mt.ajax_swal(_0x38c105);
              KTApp.unblock("#edit-relay-modal");
            },
            'error': function (_0x16e8d2) {
              Swal.fire({
                'icon': "error",
                'title': "出现错误",
                'html': "请刷新页面后重试",
                'confirmButtonText': '确定',
                'confirmButtonClass': "btn btn-primary"
              }).then(_0x363953 => {
                window.location.reload();
              });
            }
          });
        }
      }
    };

    var _0x24c026 = function (_0x44de30) {
      switch (_0x44de30) {
        case "reset":
          Swal.fire({
            'icon': "info",
            'title': "请注意！",
            'html': "重置邀请链接后，原邀请码和邀请链接将失效，并随机生成新的邀请码和邀请链接",
            'showCancelButton': true,
            'confirmButtonText': '确定',
            'cancelButtonText': '取消'
          }).then(_0x50151b => {
            if (_0x50151b.value) {
              Swal.fire({
                'icon': "success",
                'title': "重置成功",
                'showConfirmButton': false
              });
              window.setTimeout("location.href='/user/inviteurl_reset'", 1500);
            }
          });
          break;

        case "buynum":
          $.ajax({
            'type': "POST",
            'url': "/user/buy_invite",
            'dataType': "json",
            'data': {
              'num': $("#buy-invite-num").val()
            },
            'success': function (_0x26b2ff) {
              mt.ajax_swal(_0x26b2ff);
            },
            'error': function (_0x5d0bc1) {
              Swal.fire({
                'icon': "error",
                'title': data.msg,
                'html': "出现了一些错误"
              });
            }
          });
          break;

        case "custom":
          $.ajax({
            'type': "POST",
            'url': "/user/custom_invite",
            'dataType': "json",
            'data': {
              'customcode': $("#custom-invite-link").val()
            },
            'success': _0x2cad10 => {
              mt.ajax_swal(_0x2cad10);
            },
            'error': _0x2050ae => {
              Swal.fire({
                'icon': "error",
                'title': data.msg,
                'html': "出现了一些错误"
              });
            }
          });
          break;
      }
    };

    var _0xaf9baa = function () {
      mt.copytext("modal");
    };

    var _0xbfde4c = function () {
      KTApp.block("#take_money_modal", {
        'overlayColor': "#000000",
        'state': "primary",
        'message': "请稍候..."
      });
      $.ajax({
        'type': "POST",
        'url': "/user/agent/take_total",
        'dataType': "json",
        'data': {
          'type': $("#take_money_modal li .active").attr("data-metron"),
          'total': $(" input[ name='take_money' ] ").val()
        },
        'success': function (_0x4f1d8b) {
          mt.ajax_swal(_0x4f1d8b);
          KTApp.unblock("#take_money_modal");
        },
        'error': function (_0x3d461a) {
          Swal.fire({
            'icon': "error",
            'title': "出现错误",
            'html': "请刷新页面后重试",
            'confirmButtonText': '确定',
            'confirmButtonClass': "btn btn-primary"
          }).then(_0x1e5902 => {
            window.location.reload();
          });
          KTApp.unblock("#take_money_modal");
        }
      });
    };

    var _0x2a36a1 = function () {
      KTApp.block("#agent_setting_modal", {
        'overlayColor': "#000000",
        'state': "primary",
        'message': "请稍候..."
      });
      $.ajax({
        'type': "POST",
        'url': "/user/agent/take_account_setting",
        'dataType': "json",
        'data': {
          'type': $("#take_account_type").val(),
          'acc': $(" input[ name='take_account_value' ] ").val()
        },
        'success': function (_0x7255e6) {
          mt.ajax_swal(_0x7255e6);
          KTApp.unblock("#agent_setting_modal");
        },
        'error': function (_0x13c65e) {
          Swal.fire({
            'icon': "error",
            'title': "出现错误",
            'html': "请刷新页面后重试",
            'confirmButtonText': '确定',
            'confirmButtonClass': "btn btn-primary"
          }).then(_0x276961 => {
            window.location.reload();
          });
          KTApp.unblock("#agent_setting_modal");
        }
      });
    };

    var _0x26770e = function (_0x14ae20, _0x336074 = 0) {
      if (_0x336074 == 0) {
        _0x14ae20.text("获取验证码").attr("disabled", false);
      } else {
        _0x14ae20.text("重新发送(" + _0x336074 + ')').attr("disabled", true);

        setTimeout(function () {
          _0x26770e(_0x14ae20, --_0x336074);
        }, 1000);
      }
    };

    return {
      'init': function (_0x48c91b) {
        _0x57629c();
      },
      'profile': function (_0x2df4c3) {
        _0x41ee95(_0x2df4c3);
      },
      'safe': function (_0x2d75b1, _0x2d0b66) {
        switch (_0x2d75b1) {
          case "step2":
            if (_0x2d0b66) {
              if ($("#ga-code").val() == '') {
                Swal.fire({
                  'icon': "error",
                  'title': "请输入动态码",
                  'timer': 1500,
                  'allowOutsideClick': true,
                  'showConfirmButton': false
                });
                return;
              }

              $.ajax({
                'type': "POST",
                'url': "/user/gacheck",
                'dataType': "json",
                'data': {
                  'code': $("#ga-code").val()
                },
                'success': _0x4bac9e => {
                  if (_0x4bac9e.ret === 1) {
                    swal.fire({
                      'title': _0x4bac9e.msg,
                      'icon': "success",
                      'confirmButtonText': '确定'
                    }).then(function () {
                      window.location.reload();
                    });
                  } else {
                    if (_0x4bac9e.ret === 0) {
                      swal.fire({
                        'title': _0x4bac9e.msg,
                        'icon': "error",
                        'confirmButtonText': '确定'
                      });
                    } else {
                      window.location.reload();
                    }
                  }
                },
                'error': _0x2c54bf => {
                  Swal.fire({
                    'icon': "error",
                    'title': "发生错误 " + _0x2c54bf.status,
                    'confirmButtonText': '确定'
                  });
                }
              });
            } else {
              if ($("#ga-passwd").val() == '') {
                Swal.fire({
                  'icon': "error",
                  'title': "请输入密码",
                  'timer': 1500,
                  'allowOutsideClick': true,
                  'showConfirmButton': false
                });
                return 0;
              }

              $.ajax({
                'type': "POST",
                'url': "/user/gaset",
                'dataType': "json",
                'data': {
                  'enable': 0,
                  'passwd': $("#ga-passwd").val()
                },
                'success': _0x1f2ebe => {
                  if (_0x1f2ebe.ret === 1) {
                    swal.fire({
                      'title': _0x1f2ebe.msg,
                      'icon': "success",
                      'confirmButtonText': '确定'
                    }).then(function () {
                      window.location.reload();
                    });
                  } else {
                    if (_0x1f2ebe.ret === 0) {
                      swal.fire({
                        'title': _0x1f2ebe.msg,
                        'icon': "error",
                        'confirmButtonText': '确定'
                      });
                    } else {
                      window.location.reload();
                    }
                  }
                },
                'error': _0x34dd11 => {
                  Swal.fire({
                    'icon': "error",
                    'title': "发生错误 " + _0x34dd11.status,
                    'confirmButtonText': '确定'
                  });
                }
              });
            }

            break;

          case "kill":
            if ($("#delete_passwd").val() == '') {
              Swal.fire({
                'icon': "error",
                'title': "请输入密码",
                'timer': 1500,
                'allowOutsideClick': true,
                'showConfirmButton': false
              });
              return 0;
            }

            $.ajax({
              'type': "POST",
              'url': "/user/kill",
              'dataType': "json",
              'data': {
                'passwd': $("#delete_passwd").val()
              },
              'success': function (_0x300a74) {
                if (_0x300a74.ret === 1) {
                  swal.fire({
                    'title': _0x300a74.msg,
                    'icon': "success",
                    'confirmButtonText': '确定'
                  }).then(function () {
                    window.location.reload();
                  });
                } else {
                  if (_0x300a74.ret === 0) {
                    swal.fire({
                      'title': _0x300a74.msg,
                      'icon': "error",
                      'confirmButtonText': '确定'
                    });
                  } else {
                    window.location.reload();
                  }
                }
              },
              'error': function (_0x761a6e) {
                Swal.fire({
                  'icon': "error",
                  'title': "发生错误 " + _0x761a6e.status,
                  'confirmButtonText': '确定'
                });
              }
            });
            break;
        }
      },
      'sublink': function () {
        _0x3a5769("reset");
      },
      'invite': function (_0x50466d) {
        _0x24c026(_0x50466d);
      },
      'add_relay': function () {
        _0x1fcaba();
      },
      'del_relay': function (_0xd1c122) {
        _0x4816b7(_0xd1c122);
      },
      'edit_relay': function (_0x1a0078, _0x6f7a1f) {
        _0x4d47fb(_0x1a0078, _0x6f7a1f);
      },
      'telegram': function (_0x5cb0d2) {
        if (_0x5cb0d2 == "unbind") {
          $.ajax({
            'type': "POST",
            'url': "/user/setting/telegram",
            'dataType': "json",
            'data': {
              'type': "unbind"
            },
            'success': function (_0x119a5d) {
              if (_0x119a5d.ret === 1) {
                swal.fire({
                  'title': _0x119a5d.msg,
                  'icon': "success",
                  'confirmButtonText': '确定'
                }).then(function () {
                  window.location.reload();
                });
              } else {
                if (_0x119a5d.ret === 0) {
                  swal.fire({
                    'title': _0x119a5d.msg,
                    'icon': "error",
                    'confirmButtonText': '确定'
                  });
                } else {
                  window.location.reload();
                }
              }
            },
            'error': function (_0x52e630) {
              Swal.fire({
                'icon': "error",
                'title': "发生错误 " + _0x52e630.status,
                'confirmButtonText': '确定'
              });
            }
          });
        }
      },
      'take_total': function () {
        _0xbfde4c();
      },
      'take_account_setting': function () {
        _0x2a36a1();
      }
    };
  }();

  jQuery(document).ready(function () {
    setting.init();
  });
}

if (urlPath.indexOf("/ticket") >= 0) {
  var ticket = function () {
    var _0x3aedb8 = function () {
      _0x17d3a8();

      var _0x4a5159 = KTUtil.getById("ticket-create-modal");

      if (urlPath.indexOf("/view") > -1) {
        _0x1c3bab();

        var _0x4a5159 = KTUtil.getById("ticket_reply");
      }

      _0x27bcdc(_0x4a5159, "ticket_reply_editor");
    };

    var _0x3abe3d;

    var _0xe53eba = function () {
      var _0x2a730d = $("#ticket-create-title-text").val();

      if (_0x2a730d == '' || _0x3abe3d == "<p><br></p>") {
        return mt.swal("标题和内容不能为空", "error");
      }

      KTApp.block("#ticket-create-modal .modal-content", {
        'overlayColor': "#000000",
        'state': "primary",
        'message': "请稍候..."
      });
      $.ajax({
        'type': "POST",
        'url': "/user/ticket",
        'dataType': "json",
        'data': {
          'content': _0x3abe3d,
          'title': _0x2a730d
        },
        'success': function (_0x437c91) {
          KTApp.unblock("#ticket-create-modal .modal-content");
          mt.ajax_swal(_0x437c91, "/user/ticket/" + _0x437c91.tid + "/view");
        },
        'error': function (_0x7b968a) {
          KTApp.unblock("#ticket-create-modal .modal-content");
          Swal.fire({
            'icon': "error",
            'title': _0x7b968a.msg,
            'timer': 1500,
            'showConfirmButton': false
          });
        }
      });
    };

    var _0x4aea15 = function (_0x174541, _0x23c6df) {
      KTApp.blockPage({
        'overlayColor': "#000000",
        'type': 'v2',
        'state': "primary",
        'message': "请稍候..."
      });
      $.ajax({
        'type': "PUT",
        'url': "/user/ticket/" + _0x174541,
        'dataType': "json",
        'data': {
          'content': "这条工单已被关闭",
          'status': _0x23c6df
        },
        'success': function (_0x296d3f) {
          KTApp.unblockPage();

          if (_0x296d3f.ret) {
            Swal.fire({
              'icon': "success",
              'title': _0x296d3f.msg,
              'timer': 1500,
              'showConfirmButton': false
            });
          } else {
            Swal.fire({
              'icon': "error",
              'title': _0x296d3f.msg,
              'timer': 1500,
              'showConfirmButton': false
            });
          }

          $("#ajax_ticket_data").KTDatatable("reload");
        },
        'error': function (_0x9bc8f3) {
          KTApp.unblockPage();
          Swal.fire({
            'icon': "error",
            'title': "出现错误",
            'html': "请刷新页面后重试",
            'timer': 1500,
            'showConfirmButton': false
          }).then(_0x3ae2dc => {
            window.location.reload();
          });
        }
      });
    };

    var _0xcf79f9 = function () {
      if (_0x3abe3d == "<p><br></p>") {
        return mt.swal("内容不能为空", "error");
      }

      KTApp.block("#ticket_reply", {
        'overlayColor': "#000000",
        'state': "primary",
        'message': "请稍候..."
      });
      var _0x47bf38 = 1;
      $.ajax({
        'type': "PUT",
        'url': "/user/ticket/" + $("#ticket_view").attr("data-ticketid"),
        'dataType': "json",
        'data': {
          'content': _0x3abe3d,
          'status': _0x47bf38
        },
        'success': function (_0xbdb0f4) {
          mt.ajax_swal(_0xbdb0f4);
          KTApp.unblock("#ticket_reply");
        },
        'error': function (_0x22bbde) {
          Swal.fire({
            'icon': "error",
            'title': "出现错误",
            'html': "请刷新页面后重试",
            'timer': 1500,
            'showConfirmButton': false
          }).then(_0xf65851 => {
            window.location.reload();
          });
          KTApp.unblock("#ticket_reply");
        }
      });
    };

    var _0x17d3a8 = function () {
      var _0x385708 = $("#ajax_ticket_data").KTDatatable({
        'data': {
          'type': "remote",
          'source': {
            'read': {
              'method': "GET",
              'url': "/user/ajax_data/table/ticket",
              'map': function (_0x30b765) {
                var _0x21ca9c = _0x30b765;

                if (typeof _0x30b765.data !== "undefined") {
                  _0x21ca9c = _0x30b765.data;
                }

                return _0x21ca9c;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 10,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'theme': "default",
          'scroll': false,
          'footer': false
        },
        'sortable': false,
        'pagination': true,
        'toolbar': {
          'items': {
            'pagination': {
              'pageSizeSelect': [5, 10, 20, 30, 50, 100]
            }
          }
        },
        'translate': {
          'records': {
            'processing': "正在加载...",
            'noRecords': "暂无工单"
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': "当前显示 {{start}} - {{end}} 共 {{total}} 项",
                'default': {
                  'first': "跳到第一页",
                  'prev': "上一页",
                  'next': "下一页",
                  'last': "跳到最后一页",
                  'more': "更多页面",
                  'input': "输入页数",
                  'select': "选择页面显示数量"
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': 'ID',
          'sortable': "desc",
          'type': "number",
          'width': 60,
          'selector': false,
          'textAlign': "center"
        }, {
          'field': "title",
          'title': '标题',
          'autoHide': false
        }, {
          'field': "datetime",
          'title': "创建时间",
          'template': function (_0x2c2a54) {
            return mt.getTimeForm(_0x2c2a54.datetime);
          }
        }, {
          'field': "replyuser",
          'title': "最后回复",
          'template': function (_0x38284a) {
            return "<div class=\"d-flex align-items-center\" data-toggle=\"view\"> <span class=\"symbol symbol-35 mr-3\"> <span class=\"symbol-label\" style=\"background-image: url(" + _0x38284a.user_pic + ")\"></span> </span> <a href=\"#\" class=\"font-weight-bold text-dark-50 text-hover-primary\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">" + _0x38284a.user_name + "</font></font></a> </div>";
          }
        }, {
          'field': "status",
          'title': "工单状态",
          'template': function (_0x53e65c) {
            var _0x3252fa = {
              0: {
                'title': "已完成",
                'class': " label-light-success"
              },
              1: {
                'title': "处理中",
                'class': " label-light-primary"
              }
            };
            return "<span class=\"label font-weight-bold label-lg " + _0x3252fa[_0x53e65c.status].class + " label-inline\">" + _0x3252fa[_0x53e65c.status].title + "</span>";
          }
        }, {
          'field': "caozuo",
          'title': '操作',
          'sortable': false,
          'autoHide': false,
          'template': function (_0x4d0fa1) {
            var _0x50036b = {
              3: {
                'title': "等待支付",
                'state': "danger"
              },
              2: {
                'title': "购买成功",
                'state': "success"
              },
              1: {
                'title': "钱包充值",
                'state': "primary"
              },
              0: {
                'title': "购买失败",
                'state': "warning"
              }
            };
            return "<div class=\"card-toolbar\"> <div class=\"dropdown dropdown-inline mr-2\"> <button type=\"button\" class=\"btn btn-primary font-weight-bolder dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">操作</button> <div class=\"dropdown-menu dropdown-menu-sm dropdown-menu-right\"> <ul class=\"navi flex-column navi-hover py-2\"> <li class=\"navi-header font-weight-bolder text-uppercase font-size-sm text-primary pb-2\">选择操作:</li> <li class=\"navi-item\"> <a href=\"/user/ticket/" + _0x4d0fa1.id + "/view\" class=\"navi-link\"> <span class=\"navi-icon\"> <i class=\"la la-edit\"></i> </span> <span class=\"navi-text\">回复工单</span> </a> </li>" + (_0x4d0fa1.status === 1 ? "<li class=\"navi-item\"> <a href=\"#\" class=\"navi-link\"> <span class=\"navi-icon\"> <i class=\"la la-window-close\"></i> </span> <span class=\"navi-text\" onclick=\"ticket.off(" + _0x4d0fa1.id + ", 0);\">关闭工单</span> </a> </li>" : '') + "</ul> </div> </div> </div>";
          }
        }]
      });

      $("#ticket_status").on("change", function () {
        _0x385708.search($(this).val().toLowerCase(), "status");
      });
      $("#ticket_status").selectpicker();
    };

    var _0x1c3bab = function () {
      var _0x67c1f7 = KTUtil.getById("ticket_view");

      KTUtil.on(_0x67c1f7, "[data-inbox=\"back\"]", "click", function () {
        var _0x3bb2b1 = new KTDialog({
          'type': "loader",
          'placement': "top center",
          'message': "请稍候 ..."
        });

        _0x3bb2b1.show();
      });
      KTUtil.on(_0x67c1f7, "[data-inbox=\"message\"]", "click", function (_0x33e477) {
        var _0x5afc69 = this.closest("[data-inbox=\"message\"]");

        var _0x239e65 = KTUtil.find(this, "[data-toggle=\"dropdown\"]");

        var _0x4683bc = KTUtil.find(this, "[data-inbox=\"toolbar\"]");

        if (_0x33e477.target === _0x239e65 || _0x239e65 && _0x239e65.contains(_0x33e477.target) === true) {
          return false;
        }

        if (_0x33e477.target === _0x4683bc || _0x4683bc && _0x4683bc.contains(_0x33e477.target) === true) {
          return false;
        }

        if (KTUtil.hasClass(_0x5afc69, "toggle-on")) {
          KTUtil.addClass(_0x5afc69, "toggle-off");
          KTUtil.removeClass(_0x5afc69, "toggle-on");
        } else {
          KTUtil.removeClass(_0x5afc69, "toggle-off");
          KTUtil.addClass(_0x5afc69, "toggle-on");
        }
      });
    };

    var _0x27bcdc = function (_0x2b5e7c, _0x3192ef) {
      var _0x55c4fc = {
        'modules': {
          'toolbar': [[{
            'header': [1, 2, 3]
          }], ["bold", "italic", "underline"]]
        },
        'placeholder': "请输入内容...",
        'theme': "snow"
      };

      var _0x4e3118 = new Quill('#' + _0x3192ef, _0x55c4fc);

      var _0x443ecc = KTUtil.find(_0x2b5e7c, ".ql-toolbar");

      var _0x851e5f = KTUtil.find(_0x2b5e7c, ".ql-editor");

      if (_0x443ecc) {
        KTUtil.addClass(_0x443ecc, "px-5 border-top-0 border-left-0 border-right-0");
      }

      if (_0x851e5f) {
        KTUtil.addClass(_0x851e5f, "px-8");
      }

      _0x3abe3d = _0x851e5f.innerHTML;

      _0x4e3118.on("text-change", function (_0x5a00a8, _0x5e7235, _0x2e0b98) {
        if (!(_0x2e0b98 == "api")) {
          if (_0x2e0b98 == "user") {
            _0x3abe3d = _0x851e5f.innerHTML;
          }
        }
      });
    };

    var _0x449d0d = function (_0x19459e) {
      var _0x416c2e = '#' + _0x19459e;

      var _0x2c0076 = $(_0x416c2e + " .dropzone-item");

      _0x2c0076.id = '';

      var _0x94d21d = _0x2c0076.parent(".dropzone-items").html();

      _0x2c0076.remove();

      var _0x55a5d9 = new Dropzone(_0x416c2e, {
        'url': "/user/ticket" + $("#ticket_view").attr("data-ticketid"),
        'method': "put",
        'parallelUploads': 20,
        'maxFilesize': 2,
        'maxFiles': 3,
        'dictInvalidInputType': "不支持的文件类型",
        'dictFileTooBig': "文件大小不允许超过2MB",
        'dictMaxFilesExceeded': "附件数量超过最大限制",
        'previewTemplate': _0x94d21d,
        'previewsContainer': _0x416c2e + " .dropzone-items",
        'clickable': _0x416c2e + "_select"
      });

      _0x55a5d9.on("addedfile", function (_0x10c239) {
        $(document).find(_0x416c2e + " .dropzone-item").css("display", '');
      });

      _0x55a5d9.on("removedfile", function (_0x4f0e98) {
        $(document).find(_0x416c2e + " .dropzone-item").css("display", '');
      });

      _0x55a5d9.on("sending", function (_0x5358c1) {
        document.querySelector(_0x416c2e + " .progress-bar").style.opacity = '1';
      });

      _0x55a5d9.on("complete", function (_0x34762a) {
        var _0x5ef1df = _0x416c2e + " .dz-complete";

        setTimeout(function () {
          $(_0x5ef1df + " .progress-bar, " + _0x5ef1df + " .progress").css("opacity", '0');
        }, 300);
      });
    };

    return {
      'init': function () {
        _0x3aedb8();
      },
      'create': function () {
        _0xe53eba();
      },
      'off': function (_0x55bf36, _0x294f97) {
        _0x4aea15(_0x55bf36, _0x294f97);
      },
      'reply': function () {
        _0xcf79f9();
      }
    };
  }();

  jQuery(document).ready(function () {
    ticket.init();
  });
}

if (urlPath.indexOf("/help") >= 0) {
  var help = function () {
    var _0x460c07 = function () {
      $("#search").addClass("kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light");
    };

    return {
      'search': function () {
        _0x460c07();
      }
    };
  }();
}

if (urlPath.indexOf("/shared_account") >= 0) {
  var shared_account = function () {
    return {
      'check': function (_0x3775ab, _0x1669fa) {
        swal.fire({
          'title': "正在测试",
          'onOpen': function () {
            swal.showLoading();
          }
        });
        $.ajax({
          'type': "post",
          'url': "/user/account_check",
          'dataType': "json",
          'data': {
            'type': _0x3775ab,
            'key': _0x1669fa
          },
          'success': function (_0x4aa54d) {
            if (_0x4aa54d.ret) {
              Swal.fire({
                'icon': "success",
                'title': _0x4aa54d.msg
              });
            } else {
              Swal.fire({
                'icon': "error",
                'title': _0x4aa54d.msg,
                'timer': 2500,
                'showConfirmButton': false
              });
            }
          },
          'error': function (_0x40d8a3) {
            Swal.fire({
              'icon': "error",
              'title': "发生错误：" + _0x40d8a3.status
            });
          }
        });
      }
    };
  }();

  jQuery(document).ready(function () {
    mt.copytext();
  });
}

if (urlPath.indexOf("/user/agent") > -1) {
  var agent = function () {
    var _0x5498bf = function () {
      if (urlPath.indexOf("/user/agent/") < 0) {
        _0x455e23();

        _0x69619a();

        _0x664b86();

        $("#agent_setting_modal").on("show.bs.modal", function () {
          $("#take_account_type").selectpicker();
        });
      }

      if (urlPath.indexOf("/user/agent/adduser") > -1) {
        $("#add_user_shop").selectpicker();
      }

      if (urlPath.indexOf("/user/agent/view/") > -1) {
        mt.copytext();
        $("#edit_user_shop").selectpicker();
      }
    };

    var _0x69619a = function () {
      var _0x302666 = $("#ajax_agent_user_data").KTDatatable({
        'data': {
          'type': "remote",
          'source': {
            'read': {
              'method': "GET",
              'url': "/user/agent_data/table/agent_user",
              'map': function (_0x987d53) {
                var _0x470349 = _0x987d53;

                if (typeof _0x987d53.data !== "undefined") {
                  _0x470349 = _0x987d53.data;
                }

                return _0x470349;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 10,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'search': {
          'onEnter': false,
          'delay': 1000,
          'input': $("#agent_user_search_query")
        },
        'toolbar': {
          'placement': ["top", "bottom"],
          'items': {
            'pagination': {
              'pageSizeSelect': [5, 10, 15, 20, 30, 50, 100]
            }
          }
        },
        'translate': {
          'records': {
            'processing': "正在加载...",
            'noRecords': "暂无记录"
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': "当前显示 {{start}} - {{end}} 共 {{total}} 项",
                'default': {
                  'first': "跳到第一页",
                  'prev': "上一页",
                  'next': "下一页",
                  'last': "跳到最后一页",
                  'more': "更多页面",
                  'input': "输入页数",
                  'select': "选择页面显示数量"
                }
              }
            }
          }
        },
        'columns': [{
          'field': "caozuo",
          'title': '操作',
          'width': 65,
          'template': function (_0xd37859) {
            return "<div class=\"card-toolbar\"> <div class=\"dropdown dropdown-inline\"> <button type=\"button\" class=\"btn btn-primary btn-sm font-weight-bolder dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">操作</button> <div class=\"dropdown-menu dropdown-menu-sm dropdown-menu-right\"> <ul class=\"navi flex-column navi-hover py-2\"> <li class=\"navi-header font-weight-bolder text-uppercase font-size-sm text-primary pb-2\">选择操作:</li> <li class=\"navi-item\"> <a href=\"/user/agent/view/" + _0xd37859.id + "\" class=\"navi-link\"> <span class=\"navi-icon\"> <i class=\"la la-edit\"></i> </span> <span class=\"navi-text\">编辑用户</span> </a> </li> <li class=\"navi-item\"> <a href=\"JavaScript:;\" class=\"navi-link\" onclick=\"agent.del_user(" + _0xd37859.id + ");\" > <span class=\"navi-icon\"> <i class=\"la la-trash-o\"></i> </span> <span class=\"navi-text\">删除用户</span> </a> </li> </ul> </div> </div> </div>";
          }
        }, {
          'field': 'id',
          'title': "用户ID",
          'sortable': "desc",
          'type': "number",
          'selector': false,
          'textAlign': "center"
        }, {
          'field': "user_name",
          'title': '昵称'
        }, {
          'field': "email",
          'title': '邮箱'
        }, {
          'field': "money",
          'title': '余额',
          'template': function (_0x4eacb3) {
            return _0x4eacb3.money + " 元";
          }
        }, {
          'field': "unusedTraffic",
          'title': "剩余流量"
        }, {
          'field': "class",
          'title': '等级'
        }, {
          'field': "class_expire",
          'title': "等级到期"
        }]
      });

      $("#agent_user_query_class").on("change", function () {
        _0x302666.search($(this).val().toLowerCase(), "class");
      });
      $("#agent_user_query_class").selectpicker();
    };

    var _0x455e23 = function () {
      var _0x162d89 = $("#ajax_agent_take_log_data").KTDatatable({
        'data': {
          'type': "remote",
          'source': {
            'read': {
              'method': "GET",
              'url': "/user/agent_data/table/agent_take_log",
              'map': function (_0x1987ea) {
                var _0x188141 = _0x1987ea;

                if (typeof _0x1987ea.data !== "undefined") {
                  _0x188141 = _0x1987ea.data;
                }

                return _0x188141;
              }
            }
          },
          'saveState': {
            'cookie': true,
            'webstorage': true
          },
          'pageSize': 5,
          'serverPaging': true,
          'serverFiltering': true,
          'serverSorting': true
        },
        'layout': {
          'scroll': false,
          'footer': false
        },
        'sortable': true,
        'pagination': true,
        'toolbar': {
          'placement': ["bottom"],
          'items': {
            'pagination': {
              'pageSizeSelect': [5, 10, 15, 20, 30, 50, 100]
            }
          }
        },
        'translate': {
          'records': {
            'processing': "正在加载...",
            'noRecords': "暂无记录"
          },
          'toolbar': {
            'pagination': {
              'items': {
                'info': "当前显示 {{start}} - {{end}} 共 {{total}} 项",
                'default': {
                  'first': "跳到第一页",
                  'prev': "上一页",
                  'next': "下一页",
                  'last': "跳到最后一页",
                  'more': "更多页面",
                  'input': "输入页数",
                  'select': "选择页面显示数量"
                }
              }
            }
          }
        },
        'columns': [{
          'field': 'id',
          'title': "记录ID",
          'sortable': "desc",
          'type': "number",
          'width': 70,
          'selector': false,
          'textAlign': "center"
        }, {
          'field': "total",
          'title': '金额',
          'template': function (_0x12c99c) {
            return _0x12c99c.total + " 元";
          }
        }, {
          'field': "type",
          'title': "提现方式",
          'template': function (_0x4153c9) {
            var _0x46f47a = {
              1: "转至钱包余额",
              2: "转账提现"
            };
            return _0x46f47a[_0x4153c9.type];
          }
        }, {
          'field': "datetime",
          'title': "申请时间",
          'template': function (_0x22099d) {
            return mt.getTimeForm(_0x22099d.datetime);
          }
        }, {
          'field': "status",
          'title': '状态',
          'template': function (_0x12aee7) {
            var _0x2b452e = {
              '-1': {
                'title': "已退回",
                'state': "danger"
              },
              0: {
                'title': "处理中",
                'state': "primary"
              },
              1: {
                'title': "已处理",
                'state': "success"
              }
            };
            return "<span class=\"label label-" + _0x2b452e[_0x12aee7.status].state + " label-dot mr-2\"></span><span class=\"font-weight-bold text-" + _0x2b452e[_0x12aee7.status].state + "\">" + _0x2b452e[_0x12aee7.status].title + "</span>";
          }
        }]
      });

      $("#agent_take_log_query_status").on("change", function () {
        _0x162d89.search($(this).val().toLowerCase(), "status");
      });
      $("#agent_take_log_query_status").selectpicker();
    };

    var _0x664b86 = function () {
      $.ajax({
        'type': "get",
        'url': "/user/agent_data/table/amount_records",
        'dataType': "json",
        'data': {},
        'success': function (_0xeed1c9) {
          _0x18cb3c(_0xeed1c9);
        },
        'error': function (_0x3e9756) {
          mt.swal("发生错误：" + _0x3e9756.status, "error");
        }
      });
    };

    var _0x18cb3c = function (_0x449ade) {
      var _0x33b21e = document.getElementById("kt_tiles_widget_1_chart");

      var _0x432d9a = KTUtil.hasAttr(_0x33b21e, "data-color") ? KTUtil.attr(_0x33b21e, "data-color") : "primary";

      var _0x5b65a2 = parseInt(KTUtil.css(_0x33b21e, "height"));

      if (!_0x33b21e) {
        return;
      }

      let _0x40b70d = [];
      let _0x2fd7d4 = [];

      for (let _0x413c0b in _0x449ade) {
        _0x40b70d.push(_0x449ade[_0x413c0b].total);

        _0x2fd7d4.push(_0x449ade[_0x413c0b].time);
      }

      if (ThemeStyle.theme === "dark") {
        var _0x2bd072 = {
          'mode': "dark"
        };
      } else {
        var _0x2bd072 = {};
      }

      var _0x2b6ff8 = {
        'series': [{
          'name': "返利收入",
          'data': _0x40b70d
        }],
        'chart': {
          'type': "area",
          'height': _0x5b65a2,
          'toolbar': {
            'show': false
          },
          'zoom': {
            'enabled': false
          },
          'sparkline': {
            'enabled': true
          }
        },
        'plotOptions': {},
        'legend': {
          'show': false
        },
        'dataLabels': {
          'enabled': false
        },
        'theme': _0x2bd072,
        'fill': {
          'type': "gradient",
          'opacity': 1,
          'gradient': {
            'type': "vertical",
            'shadeIntensity': 0.55,
            'gradientToColors': undefined,
            'inverseColors': true,
            'opacityFrom': 1,
            'opacityTo': 0.9,
            'stops': [25, 50, 100],
            'colorStops': []
          }
        },
        'stroke': {
          'curve': "smooth",
          'show': true,
          'width': 3,
          'colors': [KTApp.getSettings().colors.theme.base[_0x432d9a]]
        },
        'xaxis': {
          'categories': _0x2fd7d4,
          'axisBorder': {
            'show': false
          },
          'axisTicks': {
            'show': false
          },
          'labels': {
            'show': false,
            'style': {
              'colors': KTApp.getSettings().colors.gray["gray-500"],
              'fontSize': "12px",
              'fontFamily': "Poppins"
            }
          },
          'crosshairs': {
            'show': false,
            'position': "front",
            'stroke': {
              'color': KTApp.getSettings().colors.gray["gray-300"],
              'width': 1,
              'dashArray': 3
            }
          },
          'tooltip': {
            'enabled': true,
            'formatter': undefined,
            'offsetY': 0,
            'style': {
              'fontSize': "12px",
              'fontFamily': "Poppins"
            }
          }
        },
        'yaxis': {
          'min': 0,
          'max': Math.max.apply(null, _0x40b70d) + 2,
          'labels': {
            'show': false,
            'style': {
              'colors': KTApp.getSettings().colors.gray["gray-500"],
              'fontSize': "12px",
              'fontFamily': "Poppins"
            }
          }
        },
        'states': {
          'normal': {
            'filter': {
              'type': "none",
              'value': 0
            }
          },
          'hover': {
            'filter': {
              'type': "none",
              'value': 0
            }
          },
          'active': {
            'allowMultipleDataPointsSelection': false,
            'filter': {
              'type': "none",
              'value': 0
            }
          }
        },
        'tooltip': {
          'style': {
            'fontSize': "12px",
            'fontFamily': "Poppins"
          },
          'y': {
            'formatter': function (_0x2091b1) {
              return '¥' + _0x2091b1;
            }
          }
        },
        'colors': [KTApp.getSettings().colors.theme.light[_0x432d9a]],
        'markers': {
          'colors': [KTApp.getSettings().colors.theme.light[_0x432d9a]],
          'strokeColor': [KTApp.getSettings().colors.theme.base[_0x432d9a]],
          'strokeWidth': 3
        },
        'padding': {
          'top': 0,
          'bottom': 0
        }
      };

      var _0x2a1eeb = new ApexCharts(_0x33b21e, _0x2b6ff8);

      _0x2a1eeb.render();
    };

    var _0x54a653 = function () {
      $("#add_user_save").text("请稍候...").attr("disabled", true);
      let _0x17e85b = {
        'email': $(" input[ name='email' ] ").val()
      };

      if ($("#email_suffix").length > 0) {
        _0x17e85b.email_suffix = $("#email_suffix").val();
      }

      $.ajax({
        'type': "POST",
        'url': "/user/agent/adduser",
        'dataType': "json",
        'data': _0x17e85b,
        'success': function (_0x4a7f62) {
          mt.ajax_swal(_0x4a7f62, "/user/agent");
          $("#add_user_save").text('保存').attr("disabled", false);
        },
        'error': function (_0x286335) {
          Swal.fire({
            'icon': "error",
            'title': "出现错误",
            'html': "请刷新页面后重试",
            'confirmButtonText': '确定',
            'confirmButtonClass': "btn btn-primary"
          }).then(_0x4a105c => {
            window.location.reload();
          });
          $("#add_user_save").text('保存').attr("disabled", false);
        }
      });
    };

    var _0x4178ab = function (_0x35d0b1) {
      switch (_0x35d0b1) {
        case "edit_user":
          $("#edit_user_save").text("请稍候...").attr("disabled", true);
          let _0x2de220 = {
            'mode': "edit_user",
            'name': $(" input[ name='user_name' ] ").val(),
            'email': $(" input[ name='email' ] ").val(),
            'password': $(" input[ name='password' ] ").val(),
            'enable': $("input[name=\"enable\"]:checked").val() ? 1 : 0
          };

          if ($("#email_suffix").length > 0) {
            _0x2de220.email_suffix = $("#email_suffix").val();
          }

          $.ajax({
            'type': "POST",
            'url': urlPath,
            'dataType': "json",
            'data': _0x2de220,
            'success': function (_0x26eda6) {
              mt.ajax_swal(_0x26eda6);
              $("#edit_user_save").text('保存').attr("disabled", false);
            },
            'error': function (_0x2b71ab) {
              Swal.fire({
                'icon': "error",
                'title': "出现错误",
                'html': "请刷新页面后重试",
                'confirmButtonText': '确定',
                'confirmButtonClass': "btn btn-primary"
              }).then(_0x55d0e6 => {
                window.location.reload();
              });
              $("#edit_user_save").text('保存').attr("disabled", false);
            }
          });
          break;

        case "buy_shop":
          $("#edit_user_buy_shop").text("请稍候...").attr("disabled", true);
          $.ajax({
            'type': "POST",
            'url': urlPath,
            'dataType': "json",
            'data': {
              'mode': "buy_shop",
              'shopid': $("#edit_user_shop").val()
            },
            'success': function (_0x22490f) {
              mt.ajax_swal(_0x22490f);
              $("#edit_user_buy_shop").text('保存').attr("disabled", false);
            },
            'error': function (_0x517db1) {
              Swal.fire({
                'icon': "error",
                'title': "出现错误",
                'html': "请刷新页面后重试",
                'confirmButtonText': '确定',
                'confirmButtonClass': "btn btn-primary"
              }).then(_0x1ba76c => {
                window.location.reload();
              });
              $("#edit_user_buy_shop").text('保存').attr("disabled", false);
            }
          });
          break;

        case "reset_link":
          $("#edit_user_reset_link").text("请稍候...").attr("disabled", true);
          $.ajax({
            'type': "POST",
            'url': urlPath,
            'dataType': "json",
            'data': {
              'mode': "reset_link"
            },
            'success': function (_0x5d17a8) {
              mt.ajax_swal(_0x5d17a8);
              $("#edit_user_reset_link").text('重置').attr("disabled", false);
            },
            'error': function (_0x2eef53) {
              Swal.fire({
                'icon': "error",
                'title': "出现错误",
                'html': "请刷新页面后重试",
                'confirmButtonText': '确定',
                'confirmButtonClass': "btn btn-primary"
              }).then(_0x134684 => {
                window.location.reload();
              });
              $("#edit_user_reset_link").text('重置').attr("disabled", false);
            }
          });
          break;
      }
    };

    var _0x8b0f16 = function (_0xe4e9a7) {
      Swal.fire({
        'icon': "warning",
        'title': "删除确认",
        'html': "删除用户无法恢复数据!",
        'showCancelButton': true,
        'confirmButtonText': '确定',
        'cancelButtonText': '取消'
      }).then(_0x506f4d => {
        if (_0x506f4d.value) {
          swal.fire({
            'title': "正在处理...",
            'onOpen': function () {
              swal.showLoading();
            }
          });
          $.ajax({
            'type': "DELETE",
            'url': "/user/agent_data/delete",
            'dataType': "json",
            'data': {
              'id': _0xe4e9a7
            },
            'success': function (_0x5ae66c) {
              if (_0x5ae66c.ret === 1) {
                Swal.fire({
                  'icon': "success",
                  'title': _0x5ae66c.msg,
                  'onClose': () => {
                    $("#ajax_agent_user_data").KTDatatable("reload");
                  }
                });
              } else {
                if (_0x5ae66c.ret === 0) {
                  mt.swal(_0x5ae66c.msg, "error");
                }
              }
            },
            'error': function (_0x294347) {
              mt.swal("发生错误：" + _0x294347.status, "error");
            }
          });
        }
      });
    };

    var _0x3709b3 = function () {
      KTApp.block("#take_money_modal", {
        'overlayColor': "#000000",
        'state': "primary",
        'message': "请稍候..."
      });
      $.ajax({
        'type': "POST",
        'url': "/user/agent/take_total",
        'dataType': "json",
        'data': {
          'type': $("#take_money_modal li .active").attr("data-metron"),
          'total': $(" input[ name='take_money' ] ").val()
        },
        'success': function (_0xb5f37e) {
          mt.ajax_swal(_0xb5f37e);
          KTApp.unblock("#take_money_modal");
        },
        'error': function (_0x462d0d) {
          Swal.fire({
            'icon': "error",
            'title': "出现错误",
            'html': "请刷新页面后重试",
            'confirmButtonText': '确定',
            'confirmButtonClass': "btn btn-primary"
          }).then(_0x4007d6 => {
            window.location.reload();
          });
          KTApp.unblock("#take_money_modal");
        }
      });
    };

    var _0x2fd4b7 = function () {
      KTApp.block("#agent_setting_modal", {
        'overlayColor': "#000000",
        'state': "primary",
        'message': "请稍候..."
      });
      $.ajax({
        'type': "POST",
        'url': "/user/agent/take_account_setting",
        'dataType': "json",
        'data': {
          'type': $("#take_account_type").val(),
          'acc': $(" input[ name='take_account_value' ] ").val()
        },
        'success': function (_0x3cb62d) {
          mt.ajax_swal(_0x3cb62d);
          KTApp.unblock("#agent_setting_modal");
        },
        'error': function (_0xc82bec) {
          Swal.fire({
            'icon': "error",
            'title': "出现错误",
            'html': "请刷新页面后重试",
            'confirmButtonText': '确定',
            'confirmButtonClass': "btn btn-primary"
          }).then(_0x2b6391 => {
            window.location.reload();
          });
          KTApp.unblock("#agent_setting_modal");
        }
      });
    };

    return {
      'init': function () {
        _0x5498bf();
      },
      'take_total': function () {
        _0x3709b3();
      },
      'take_account_setting': function () {
        _0x2fd4b7();
      },
      'add_user': function () {
        _0x54a653();
      },
      'edit_user': function (_0x50a0b2) {
        _0x4178ab(_0x50a0b2);
      },
      'del_user': function (_0x4dc6e9) {
        _0x8b0f16(_0x4dc6e9);
      }
    };
  }();

  jQuery(document).ready(function () {
    agent.init();
  });
}

if (urlPath.indexOf("/code") > -1 || urlPath.indexOf("/setting/logs") > -1) {
  var table = function () {
    return {
      'ajax_data_del': function (_0x2e5742, _0x2b148d, _0x38f802) {
        Swal.fire({
          'icon': "warning",
          'title': "确定删除?",
          'html': "删除后不可恢复",
          'showCancelButton': true,
          'confirmButtonText': "确定删除",
          'cancelButtonText': '取消'
        }).then(_0x4a864a => {
          if (_0x4a864a.value) {
            swal.fire({
              'title': "正在删除中...",
              'onOpen': function () {
                swal.showLoading();
              }
            });
            $.ajax({
              'type': "DELETE",
              'url': "/user/ajax_data/delete",
              'dataType': "json",
              'data': {
                'mode': _0x38f802,
                'name': _0x2e5742,
                'id': _0x2b148d
              },
              'success': function (_0x313e05) {
                if (_0x313e05.ret) {
                  Swal.fire({
                    'icon': "success",
                    'title': _0x313e05.msg,
                    'confirmButtonText': '确定',
                    'onClose': () => {
                      $("#ajax_" + _0x2e5742 + "_data").KTDatatable("reload");
                    }
                  });
                } else {
                  if (_0x313e05.ret === 0) {
                    Swal.fire({
                      'icon': "error",
                      'title': _0x313e05.msg,
                      'confirmButtonText': '确定'
                    });
                  } else {
                    window.location.reload();
                  }
                }
              },
              'error': function (_0x417656) {
                Swal.fire({
                  'icon': "error",
                  'title': "发生错误：" + _0x417656.status,
                  'confirmButtonText': '确定'
                });
              }
            });
          }
        });
      }
    };
  }();
}