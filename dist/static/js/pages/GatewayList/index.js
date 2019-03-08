global.webpackJsonp([17],{

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5084825c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(183);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(181)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5084825c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5084825c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\GatewayList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5084825c", Component.options)
  } else {
    hotAPI.reload("data-v-5084825c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 181:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(8);
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




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      load: true
    };
  },

  computed: {
    Loading: function Loading() {
      return __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].state.Loading;
    },
    GatewayList: function GatewayList() {
      return __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].state.Data.Gateway;
    },
    GatewayLength: function GatewayLength() {
      return __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].state.Data.Gateway.length;
    }
  },
  methods: {
    scanCode: function scanCode() {
      var _this = this;
      wx.scanCode({
        success: function success(res) {
          if (res.scanType == "WX_CODE") {
            var key = res.path.split("?");
            _this.Code(key[1]);
          } else {
            _this.Code(res.result);
          }
        },
        fail: function fail(err) {
          _this.Toast("forbidden", "扫码失败");
        }
      });
    },
    Code: function Code(res) {
      var _this2 = this;

      if (!this.load) {
        var code = Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["d" /* QRCode */])(res);
        if (code) {
          if (code.indexOf("gatewayId=") != -1) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["b" /* GatewayCh */])(this.GatewayList, code)) {
              wx.navigateTo({
                url: "/pages/device/index?" + code + "&name=&img_url="
              });
            } else {
              this.Toast("forbidden", "您已添加该网关");
            }
          } else if (code.indexOf("devEui=") != -1) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["c" /* ListCh */])(this.DeviceList, code)) {
              wx.navigateTo({
                url: "/pages/device/index?" + code + "&name=&img_url="
              });
            } else {
              this.Toast("forbidden", "您已添加该设备");
            }
          }
        } else {
          this.Toast("forbidden", "该二维码参数有误");
        }
      } else {
        setTimeout(function () {
          return _this2.Code();
        }, 200);
      }
    }
  },
  watch: {
    Loading: function Loading() {
      var _this3 = this;

      var _this = this;
      if (this.$route) {
        this.$wuxLoading = Object(__WEBPACK_IMPORTED_MODULE_0__static_wux_index__["c" /* $wuxLoading */])();
        if (this.Loading) {
          this.$wuxLoading.show({
            text: "数据加载中"
          });
        } else {
          setTimeout(function () {
            _this3.$wuxLoading.hide();
          }, 800);
        }
      }
      if (this.Loading) {
        _this.load = true;
      } else {
        setTimeout(function () {
          _this.load = false;
        }, 800);
      }
    }
  }
});

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [(!_vm.load) ? _c('div', [(_vm.GatewayLength > '0') ? _c('div', {
    staticClass: "prompts"
  }, [_vm._m(0)]) : _vm._e(), _vm._v(" "), (_vm.GatewayLength > '0') ? _c('div', {
    staticClass: "GatewayList"
  }, [_c('wux-cell-group', {
    attrs: {
      "mpcomid": '1'
    }
  }, _vm._l((_vm.GatewayList), function(item, index) {
    return _c('wux-cell', {
      key: index,
      attrs: {
        "title": item.name,
        "isLink": "",
        "url": '/pages/device/index?gatewayId=' + item.mac + '&name=' + item.name + '&editId=' + item.id,
        "mpcomid": '0-' + index
      }
    })
  }))], 1) : _c('div', {
    staticClass: "prompt"
  }, [_c('div', {
    staticClass: "box"
  }, [(_vm.GatewayLength == '0') ? _c('div', {
    staticClass: "title"
  }, [_vm._v("您还没有网关，请到设备列表页面添加")]) : _vm._e()])])]) : _vm._e(), _vm._v(" "), _c('wux-toast', {
    attrs: {
      "id": "wux-toast",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('wux-loading', {
    attrs: {
      "id": "wux-loading",
      "mpcomid": '3'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("我的网关")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5084825c", esExports)
  }
}

/***/ })

},[219]);
//# sourceMappingURL=index.js.map