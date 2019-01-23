global.webpackJsonp([9],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5084825c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(150);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(148)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5084825c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
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

/***/ 148:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(34);
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
      list: "",
      icon: "../20.png"
    };
  },

  methods: {
    GetData: function GetData() {
      var _this2 = this;

      this.ajax("device/getGatewayList").then(function (res) {
        _this2.list = res.content;
      });
    },
    scanCode: function scanCode() {
      var _this = this;
      wx.scanCode({
        success: function success(res) {
          var code = Object(__WEBPACK_IMPORTED_MODULE_0__utils_index__["b" /* QRCode */])(res.result);
          if (code) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* ListCh */])(_this.searchData, code)) {
              wx.navigateTo({
                url: "/pages/device/index?" + code + "&name=&img_url="
              });
            } else {
              _this.Toast("forbidden", "您已添加该设备");
            }
          } else {
            _this.Toast("forbidden", "该二维码参数有误");
          }
        },
        fail: function fail(err) {
          _this.Toast("forbidden", "扫码失败");
        }
      });
    }
  },
  onShow: function onShow() {
    this.GetData();
  }
});

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [(_vm.list.length > '0') ? _c('div', {
    staticClass: "GatewayList"
  }, [_c('wux-cell-group', {
    attrs: {
      "mpcomid": '1'
    }
  }, _vm._l((_vm.list), function(item, index) {
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
    staticClass: "prompts"
  }, [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "ioc",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.scanCode
    }
  }, [_c('wux-icon', {
    staticClass: "iocs",
    attrs: {
      "type": "ios-add",
      "size": "42",
      "color": "#cccccc",
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("点击“+”添加设备")])])])])
}
var staticRenderFns = []
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

},[159]);
//# sourceMappingURL=index.js.map