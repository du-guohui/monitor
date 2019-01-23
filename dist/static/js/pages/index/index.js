global.webpackJsonp([6],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7b2e018c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(109);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(103)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7b2e018c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7b2e018c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b2e018c", Component.options)
  } else {
    hotAPI.reload("data-v-7b2e018c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 103:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mpvue_echarts__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(14);
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
//
//
//




var barChart = void 0,
    barChart2 = void 0,
    scatterChart = void 0;

function getBarOption() {
  return {
    tooltip: {
      trigger: "axis",
      confine: true,
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    legend: {
      data: ["工程院", "茶室1", "茶室2", "大会议室"]
    },
    toolbox: {},
    grid: {
      left: "3%",
      right: "7%",
      bottom: "5%",
      containLabel: true
    },
    xAxis: [{
      type: "category",
      boundaryGap: false,
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    }],
    yAxis: [{
      type: "value",
      axisLabel: {
        formatter: "{value} °C"
      }
    }],
    series: [{
      name: "工程院",
      type: "line",
      data: [24, 22, 23, 22, 20, 22, 23]
    }, {
      name: "茶室1",
      type: "line",
      data: [23, 24, 24, 25, 26, 25, 24]
    }, {
      name: "茶室2",
      type: "line",
      data: [24, 23, 25, 22, 23, 25, 24]
    }, {
      name: "大会议室",
      type: "line",
      data: [23, 23, 22, 24, 25, 25, 26]
    }]
  };
}
function getBarOption2() {
  return {
    tooltip: {
      trigger: "axis",
      confine: true,
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    legend: {
      data: ["工程院", "茶室1", "茶室2", "大会议室"]
    },
    toolbox: {},
    grid: {
      left: "3%",
      right: "7%",
      bottom: "5%",
      containLabel: true
    },
    xAxis: [{
      type: "category",
      boundaryGap: false,
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    }],
    yAxis: [{
      type: "value",
      axisLabel: {
        formatter: "{value} %"
      }
    }],
    series: [{
      name: "工程院",
      type: "line",
      data: [34, 35, 35, 38, 36, 32, 33]
    }, {
      name: "茶室1",
      type: "line",
      data: [36, 38, 38, 40, 37, 39, 40]
    }, {
      name: "茶室2",
      type: "line",
      data: [37, 37, 34, 35, 35, 35, 37]
    }, {
      name: "大会议室",
      type: "line",
      data: [39, 36, 36, 39, 37, 35, 36]
    }]
  };
}
function getScatterOption() {
  return {
    tooltip: {
      trigger: "item",
      formatter: "{a} {b}: {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      x: "left",
      data: ["广州", "北京"]
    },
    series: [{
      name: "设备分布",
      type: "pie",
      radius: "55%",
      center: ["50%", "50%"],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      },
      data: [{ value: 6, name: "广州" }, { value: 1, name: "北京" }]
    }]
  };
}
/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    DeviceList: function DeviceList() {
      return __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].state.DeviceList;
    }
  },
  components: {
    mpvueEcharts: __WEBPACK_IMPORTED_MODULE_1_mpvue_echarts__["a" /* default */]
  },
  data: function data() {
    return {
      weatherData: "",
      echarts: __WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min__,
      ecBarInit: function ecBarInit(canvas, width, height) {
        barChart = __WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min__["init"](canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(barChart);
        barChart.setOption(getBarOption());
        return barChart;
      },
      ecBarInit2: function ecBarInit2(canvas, width, height) {
        barChart2 = __WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min__["init"](canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(barChart2);
        barChart2.setOption(getBarOption2());
        return barChart2;
      },
      ecScatterInit: function ecScatterInit(canvas, width, height) {
        scatterChart = __WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min__["init"](canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(scatterChart);
        scatterChart.setOption(getScatterOption());
        return scatterChart;
      }
    };
  },

  methods: {
    Weather: function Weather() {
      var _this = this;
      wx.getLocation({
        type: "wgs84",
        success: function success(res) {
          var latitude = res.latitude;
          var longitude = res.longitude;
          wx.request({
            url: "https://api.seniverse.com/v3/weather/now.json?key=wwpa95zfxriub8db&language=zh-Hans&unit=c",
            data: {
              location: latitude + ":" + longitude
            },
            success: function success(res) {
              _this.weatherData = res.data.results[0];
              // console.log(res.data.results[0]);
            }
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.Weather();
  }
});

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container mtt"
  }, [_c('div', {
    staticClass: "index-weather"
  }, [(_vm.weatherData) ? _c('div', {
    staticClass: "city"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/15.png",
      "alt": ""
    }
  }), _vm._v("\n      " + _vm._s(_vm.weatherData.location.name) + "\n    ")]) : _vm._e(), _vm._v(" "), (_vm.weatherData) ? _c('div', {
    staticClass: "temperature"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/17.png",
      "alt": ""
    }
  }), _vm._v("\n      " + _vm._s(_vm.weatherData.now.temperature) + "°C\n    ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "index-shebei"
  }, [_c('div', {
    staticClass: "title color1"
  }, [_vm._v("设备概览")]), _vm._v(" "), _c('wux-row', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('wux-col', {
    attrs: {
      "span": "4",
      "mpcomid": '0'
    }
  }, [_c('div', {
    staticClass: "li"
  }, [_c('div', {
    staticClass: "txt"
  }, [_vm._v("7")]), _vm._v(" "), _c('div', {
    staticClass: "txt2"
  }, [_vm._v("设备数")])])]), _vm._v(" "), _c('wux-col', {
    attrs: {
      "span": "4",
      "mpcomid": '1'
    }
  }, [_c('div', {
    staticClass: "li"
  }, [_c('div', {
    staticClass: "txt"
  }, [_vm._v("7")]), _vm._v(" "), _c('div', {
    staticClass: "txt2"
  }, [_vm._v("在线设备")])])]), _vm._v(" "), _c('wux-col', {
    attrs: {
      "span": "4",
      "mpcomid": '2'
    }
  }, [_c('div', {
    staticClass: "li"
  }, [_c('div', {
    staticClass: "txt"
  }, [_vm._v("0")]), _vm._v(" "), _c('div', {
    staticClass: "txt2"
  }, [_vm._v("提示")])])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "echarts-li"
  }, [_c('div', {
    staticClass: "title color1"
  }, [_vm._v("设备分布")]), _vm._v(" "), _c('div', {
    staticClass: "echarts-wrap"
  }, [_c('mpvue-echarts', {
    attrs: {
      "echarts": _vm.echarts,
      "onInit": _vm.ecScatterInit,
      "canvasId": "scatter",
      "mpcomid": '4'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "echarts-li"
  }, [_c('div', {
    staticClass: "title color1"
  }, [_vm._v("珠江城一周温度")]), _vm._v(" "), _c('div', {
    staticClass: "echarts-wrap"
  }, [_c('mpvue-echarts', {
    attrs: {
      "echarts": _vm.echarts,
      "onInit": _vm.ecBarInit,
      "canvasId": "bar",
      "mpcomid": '5'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "echarts-li"
  }, [_c('div', {
    staticClass: "title color1"
  }, [_vm._v("珠江城一周湿度")]), _vm._v(" "), _c('div', {
    staticClass: "echarts-wrap"
  }, [_c('mpvue-echarts', {
    attrs: {
      "echarts": _vm.echarts,
      "onInit": _vm.ecBarInit2,
      "canvasId": "bar2",
      "mpcomid": '6'
    }
  })], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7b2e018c", esExports)
  }
}

/***/ })

},[151]);
//# sourceMappingURL=index.js.map