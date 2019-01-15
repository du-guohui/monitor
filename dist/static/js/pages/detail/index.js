global.webpackJsonp([1],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_445a41ed_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(119);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-445a41ed"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_445a41ed_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-445a41ed", Component.options)
  } else {
    hotAPI.reload("data-v-445a41ed", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mpvue_echarts__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(20);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var chart = null;

/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    DeviceList: function DeviceList() {
      return __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].state.DeviceList;
    }
  },
  components: {
    mpvueEcharts: __WEBPACK_IMPORTED_MODULE_1_mpvue_echarts__["a" /* default */]
  },
  data: function data() {
    return {
      echarts: __WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min__,
      option: null,
      tabKey: "",
      tabList: [],
      devEui: ""
    };
  },

  methods: {
    Upload: function Upload() {
      wx.chooseImage({
        success: function success(res) {
          var tempFilePaths = res.tempFilePaths;
          wx.uploadFile({
            url: "http://172.16.1.117:5000/device/addEnvImg",
            filePath: tempFilePaths[0],
            name: "img",
            header: {
              Authorization: wx.getStorageSync("Authorization")
            },
            success: function success(res) {
              console.log(res);
              //const data = res.data;
              // do something
            }
          });
        }
      });
    },
    onChange: function onChange(e) {
      this.current = e.mp.detail.key;
    },
    formatDate: function formatDate(time) {
      console.log(Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["b" /* formatDate */])(new Date(time)));
      // formatDate(new Date(time))
      // formatDate()
    },
    initChart: function initChart() {
      var _this2 = this;

      this.option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        dataZoom: [{
          type: "slider", //图表下方的伸缩条
          show: true, //是否显示
          realtime: true, //拖动时，是否实时更新系列的视图
          start: 0, //伸缩条开始位置（1-100），可以随时更改
          end: 100 //伸缩条结束位置（1-100），可以随时更改
        }],
        xAxis: [{
          type: "category",
          boundaryGap: false,
          data: []
        }],
        yAxis: [{
          type: "value"
        }],
        series: [{
          name: "",
          type: "line",
          data: []
        }]
      };
      // 1547544427000
      // console.log(formatDate(new Date(1547544427000)));
      function Chart(data, i, _this) {
        _this.option.series.name = data[i].tags.prop;
        for (var s in data[i].dps) {
          //console.log(formatDate(new Date(s)));
          //console.log(formatDate(new Date(s)));

          console.log(Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["b" /* formatDate */])(new Date(s)));

          //console.log(formatDate(new Date(time)));

          _this.option.xAxis[0].data.push(s);
          _this.option.series[0].data.push(data[i].dps[s].toFixed(2));
        }
        _this.$refs.echarts.init();
      }

      this.ajax("device/getDeviceHistoryData?", {
        devEui: this.$route.query.devEui,
        start: Number(new Date().getTime() - 60 * 60 * 1000),
        end: Number(new Date().getTime())
      }).then(function (res) {
        var chart = res.content.data;
        if (_this2.tabList.length == "0") {
          for (var list in chart) {
            var key = chart[list].tags.prop;
            if (key == "sht30" || key == "temperature" || key == "humidity" || key == "pm25" || key == "formaldehyde" || key == "light") {
              _this2.tabList.push(key);
            }
          }
          Chart(chart, 0, _this2);
        } else {
          for (var i in _this2.tabList) {
            if (_this2.tabList[i] == _this2.tabKey) {
              Chart(chart, i, _this2);
            }
          }
        }
      });
    },
    handleInit: function handleInit(canvas, width, height) {
      chart = __WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min__["init"](canvas, null, {
        width: width,
        height: height
      });
      canvas.setChart(chart);
      chart.setOption(this.option);
      return chart;
    }
  },
  onShow: function onShow() {
    var _this = this;
    _this.tabList = [];
    _this.devEui = this.$route.query.devEui;
  },

  watch: {
    devEui: function devEui() {
      this.initChart();
    },
    tabKey: function tabKey() {
      this.initChart();
    }
  }
});

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_echarts_vue__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_20d07a4e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_echarts_vue__ = __webpack_require__(118);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(115)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-20d07a4e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_echarts_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_20d07a4e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_echarts_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-echarts\\src\\echarts.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] echarts.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20d07a4e", Component.options)
  } else {
    hotAPI.reload("data-v-20d07a4e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wx_canvas__ = __webpack_require__(117);

//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    echarts: {
      required: true,
      type: Object,
      default: function _default() {
        return null;
      }
    },
    onInit: {
      required: true,
      type: Function,
      default: null
    },
    canvasId: {
      type: String,
      default: 'ec-canvas'
    },
    lazyLoad: {
      type: Boolean,
      default: false
    },
    disableTouch: {
      type: Boolean,
      default: false
    },
    throttleTouch: {
      type: Boolean,
      default: false
    }
  },
  onReady: function onReady() {
    if (!this.echarts) {
      console.warn('组件需绑定 echarts 变量，例：<ec-canvas id="mychart-dom-bar" ' + 'canvas-id="mychart-bar" :echarts="echarts"></ec-canvas>');
      return;
    }

    if (!this.lazyLoad) this.init();
  },

  methods: {
    init: function init() {
      var _this = this;

      var version = wx.version.version.split('.').map(function (n) {
        return parseInt(n, 10);
      });
      var isValid = version[0] > 1 || version[0] === 1 && version[1] > 9 || version[0] === 1 && version[1] === 9 && version[2] >= 91;
      if (!isValid) {
        console.error('微信基础库版本过低，需大于等于 1.9.91。' + '参见：https://github.com/ecomfe/echarts-for-weixin' + '#%E5%BE%AE%E4%BF%A1%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82');
        return;
      }

      if (!this.onInit) {
        console.warn('请传入 onInit 函数进行初始化');
        return;
      }

      var canvasId = this.canvasId;

      this.ctx = wx.createCanvasContext(canvasId);

      var canvas = new __WEBPACK_IMPORTED_MODULE_1__wx_canvas__["a" /* default */](this.ctx, canvasId);

      this.echarts.setCanvasCreator(function () {
        return canvas;
      });

      var query = wx.createSelectorQuery();
      query.select('#' + canvasId).boundingClientRect(function (res) {
        if (!res) {
          setTimeout(function () {
            return _this.init();
          }, 50);
          return;
        }
        _this.chart = _this.onInit(canvas, res.width, res.height);
      }).exec();
    },
    canvasToTempFilePath: function canvasToTempFilePath(opt) {
      var canvasId = this.canvasId;

      this.ctx.draw(true, function () {
        wx.canvasToTempFilePath(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          canvasId: canvasId
        }, opt));
      });
    },
    touchStart: function touchStart(e) {
      var disableTouch = this.disableTouch,
          chart = this.chart;

      if (disableTouch || !chart || !e.mp.touches.length) return;
      var touch = e.mp.touches[0];
      chart._zr.handler.dispatch('mousedown', {
        zrX: touch.x,
        zrY: touch.y
      });
      chart._zr.handler.dispatch('mousemove', {
        zrX: touch.x,
        zrY: touch.y
      });
    },
    touchMove: function touchMove(e) {
      var disableTouch = this.disableTouch,
          throttleTouch = this.throttleTouch,
          chart = this.chart,
          lastMoveTime = this.lastMoveTime;

      if (disableTouch || !chart || !e.mp.touches.length) return;

      if (throttleTouch) {
        var currMoveTime = Date.now();
        if (currMoveTime - lastMoveTime < 240) return;
        this.lastMoveTime = currMoveTime;
      }

      var touch = e.mp.touches[0];
      chart._zr.handler.dispatch('mousemove', {
        zrX: touch.x,
        zrY: touch.y
      });
    },
    touchEnd: function touchEnd(e) {
      var disableTouch = this.disableTouch,
          chart = this.chart;

      if (disableTouch || !chart) return;
      var touch = e.mp.changedTouches ? e.mp.changedTouches[0] : {};
      chart._zr.handler.dispatch('mouseup', {
        zrX: touch.x,
        zrY: touch.y
      });
      chart._zr.handler.dispatch('click', {
        zrX: touch.x,
        zrY: touch.y
      });
    }
  }
});

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.canvasId) ? _c('canvas', {
    staticClass: "ec-canvas",
    attrs: {
      "id": _vm.canvasId,
      "canvasId": _vm.canvasId,
      "eventid": '0'
    },
    on: {
      "touchstart": _vm.touchStart,
      "touchmove": _vm.touchMove,
      "touchend": _vm.touchEnd,
      "error": _vm.error
    }
  }) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-20d07a4e", esExports)
  }
}

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [(_vm.devEui) ? _c('div', _vm._l((_vm.DeviceList), function(item, index) {
    return _c('div', {
      key: index
    }, [(_vm.devEui == item.devEui) ? _c('div', {
      staticClass: "box"
    }, [_c('div', {
      attrs: {
        "clsss": "name"
      }
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": item.img_url
      }
    })])]) : _vm._e()])
  })) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.Upload
    }
  }, [_vm._v("Upload")]), _vm._v(" "), (_vm.tabList) ? _c('div', {
    staticClass: "parameter"
  }, _vm._l((_vm.tabList), function(item, index) {
    return _c('div', {
      key: item,
      staticClass: "parameter-button",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.tabKey = item
        }
      }
    }, [_vm._v(_vm._s(item))])
  })) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "echarts-wrap"
  }, [_c('mpvue-echarts', {
    ref: "echarts",
    attrs: {
      "lazyLoad": "",
      "echarts": _vm.echarts,
      "onInit": _vm.handleInit,
      "mpcomid": '0'
    }
  })], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-445a41ed", esExports)
  }
}

/***/ })

},[139]);
//# sourceMappingURL=index.js.map