global.webpackJsonp([3],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9390ebf0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(134);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9390ebf0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9390ebf0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\my\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9390ebf0", Component.options)
  } else {
    hotAPI.reload("data-v-9390ebf0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      user: ""
    };
  },

  methods: {
    UserInfo: function UserInfo() {
      var _this = this;
      if (wx.getStorageSync("UserInfo")) {
        _this.user = JSON.parse(wx.getStorageSync("UserInfo"));
      }
    }
  },
  onShow: function onShow() {
    this.UserInfo();
  }
});

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "my-top theme-back"
  }, [(_vm.user) ? _c('div', {
    staticClass: "avatar",
    style: ({
      backgroundImage: 'url(' + _vm.user.avatarUrl + ')'
    })
  }) : _vm._e(), _vm._v(" "), (_vm.user) ? _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.user.nickName ? _vm.user.nickName : '昵称'))]) : _vm._e(), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/img/13.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('div', {
    staticClass: "list-cell"
  }, [_c('wux-cell-group', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('wux-cell', {
    attrs: {
      "title": "网关管理",
      "isLink": "",
      "url": "/pages/GatewayList/index",
      "mpcomid": '0'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "list-cell"
  }, [_c('wux-cell-group', {
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('wux-cell', {
    attrs: {
      "title": "设置",
      "isLink": "",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('wux-cell', {
    attrs: {
      "title": "系统介绍",
      "isLink": "",
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('wux-cell', {
    attrs: {
      "title": "公司介绍",
      "isLink": "",
      "url": "/pages/UnitedData/index",
      "mpcomid": '4'
    }
  })], 1)], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9390ebf0", esExports)
  }
}

/***/ })

},[155]);
//# sourceMappingURL=index.js.map