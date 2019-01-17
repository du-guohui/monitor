global.webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7b2e018c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(107);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(101)
}
var normalizeComponent = __webpack_require__(6)
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

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mpvue_echarts__ = __webpack_require__(50);
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
  components: {
    mpvueEcharts: __WEBPACK_IMPORTED_MODULE_1_mpvue_echarts__["a" /* default */]
  },
  data: function data() {
    return {
      echarts: __WEBPACK_IMPORTED_MODULE_0_echarts_dist_echarts_min__,
      option: null
    };
  },

  methods: {
    initChart: function initChart() {
      this.option = {
        tooltip: {
          formatter: "{a} {c} {b}°C"
        },
        toolbox: {
          show: true,
          feature: {}
        },
        series: [{
          name: "平均温度",
          center: ["68%", "55%"],
          type: "gauge",
          z: 3,
          min: "-10",
          max: "100",
          splitNumber: 11,
          radius: "65%",
          axisLine: {
            // 坐标轴线
            lineStyle: {
              // 属性lineStyle控制线条样式
              width: 5
            }
          },
          axisTick: {
            // 坐标轴小标记
            length: 15, // 属性length控制线长
            lineStyle: {
              // 属性lineStyle控制线条样式
              color: "auto"
            }
          },
          splitLine: {
            // 分隔线
            length: 10, // 属性length控制线长
            lineStyle: {
              // 属性lineStyle（详见lineStyle）控制线条样式
              color: "auto"
            }
          },
          axisLabel: {
            backgroundColor: "auto",
            borderRadius: 2,
            color: "#eee",
            padding: 3,
            textShadowBlur: 2,
            textShadowOffsetX: 1,
            textShadowOffsetY: 1,
            textShadowColor: "#222"
          },
          title: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: "bolder",
            fontSize: 20,
            fontStyle: "italic"
          },
          data: [{ value: 26, name: "" }]
        }, {
          name: "最高温度",
          type: "gauge",
          center: ["20%", "35%"],
          radius: "30%",
          min: "-10",
          max: "100",
          splitNumber: 11,
          axisLine: {
            // 坐标轴线
            lineStyle: {
              // 属性lineStyle控制线条样式
              width: 2
            }
          },
          axisTick: {
            // 坐标轴小标记
            length: 5, // 属性length控制线长
            lineStyle: {
              // 属性lineStyle控制线条样式
              color: "auto"
            }
          },
          splitLine: {
            // 分隔线
            length: 10, // 属性length控制线长
            lineStyle: {
              // 属性lineStyle（详见lineStyle）控制线条样式
              color: "auto"
            }
          },
          pointer: {
            width: 2
          },
          title: {
            offsetCenter: [0, "-30%"] // x, y，单位px
          },
          data: [{ value: "30", name: "" }]
        }, {
          name: "最低温度",
          type: "gauge",
          center: ["20%", "70%"],
          radius: "30%",
          min: "-10",
          max: "100",
          splitNumber: 11,
          axisLine: {
            // 坐标轴线
            lineStyle: {
              // 属性lineStyle控制线条样式
              width: 2
            }
          },
          axisTick: {
            // 坐标轴小标记
            length: 5, // 属性length控制线长
            lineStyle: {
              // 属性lineStyle控制线条样式
              color: "auto"
            }
          },
          splitLine: {
            // 分隔线
            length: 10, // 属性length控制线长
            lineStyle: {
              // 属性lineStyle（详见lineStyle）控制线条样式
              color: "auto"
            }
          },
          pointer: {
            width: 2
          },
          title: {
            offsetCenter: [0, "-30%"]
          },
          detail: {
            fontWeight: "bolder"
          },
          data: [{ value: "20", name: "" }]
        }]
      };
      this.$refs.echarts.init();
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
  mounted: function mounted() {
    this.initChart();
  }
});

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "echarts-wrap"
  }, [_c('mpvue-echarts', {
    ref: "echarts",
    attrs: {
      "echarts": _vm.echarts,
      "onInit": _vm.handleInit,
      "mpcomid": '0'
    }
  })], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index-weather"
  }, [_c('div', {
    staticClass: "city"
  }, [_vm._v("广州")]), _vm._v(" "), _c('div', {
    staticClass: "temperature"
  }, [_vm._v("25°C")]), _vm._v(" "), _c('div', {
    staticClass: "humidity"
  }, [_vm._v("68%")])])
}]
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

},[144]);
//# sourceMappingURL=index.js.map