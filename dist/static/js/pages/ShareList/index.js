global.webpackJsonp([13],{

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5b417712_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(203);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(201)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5b417712"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5b417712_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\ShareList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b417712", Component.options)
  } else {
    hotAPI.reload("data-v-5b417712", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 201:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_wux_index__ = __webpack_require__(0);
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



/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    DeviceList: function DeviceList() {
      return __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].state.Data.Device;
    },
    Loading: function Loading() {
      return __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].state.Loading;
    }
  },
  data: function data() {
    return {
      name: "",
      serverUrl: "",
      data: [],
      group: [],
      load: false
    };
  },
  onShow: function onShow() {
    this.serverUrl = this.$url;
    this.data = [];
    this.group = [];
    wx.hideShareMenu();
  },
  onShareAppMessage: function onShareAppMessage(options) {
    var that = this;
    var UserInfo = JSON.parse(wx.getStorageSync("UserInfo"));
    var shareObj = {
      title: UserInfo.nickName + "分享设备",
      path: "/pages/share/index?shareId=" + this.group.join(","),
      imageUrl: "/static/img/share-back.jpg",
      success: function success(res) {
        // 转发成功之后的回调
        if (res.errMsg == "shareAppMessage:ok") {}
      },
      fail: function fail() {
        // 转发失败之后的回调
        if (res.errMsg == "shareAppMessage:fail cancel") {
          // 用户取消转发
        } else if (res.errMsg == "shareAppMessage:fail") {
          // 转发失败，其中 detail message 为详细失败信息
        }
      }
    };
    return shareObj;
  },

  methods: {
    NoShare: function NoShare() {
      this.Toast("forbidden", "请选择设备");
    },
    onChange: function onChange(e) {
      var value = e.mp.detail.value;

      var data = this.group;
      var index = data.indexOf(value);
      var current = index === -1 ? [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(data), [value]) : data.filter(function (n) {
        return n !== value;
      });
      this.group = current;
    }
  },
  watch: {
    Loading: function Loading() {
      if (this.Loading) {
        this.load = false;
      } else {
        this.load = true;
      }
    },
    DeviceList: function DeviceList() {
      this.DeviceIndex = 0;
      for (var i in this.DeviceList) {
        this.DeviceIndex = this.DeviceIndex + this.DeviceList[i].device_list.length;
      }
    },
    group: function group() {
      if (this.group.length > "0") {
        wx.showShareMenu();
      } else {
        wx.hideShareMenu();
      }
    }
  }
});

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "list-tops"
  }, [_c('div', {
    staticClass: "ts"
  }, [_vm._v(_vm._s(_vm.group.length > '0' ? '已选择' + _vm.group.length + '个设备' : '未选择设备'))])]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('wux-checkbox-group', {
    attrs: {
      "value": _vm.group,
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.onChange
    }
  }, _vm._l((_vm.DeviceList), function(item, i) {
    return _c('div', {
      key: i,
      staticClass: "group-list"
    }, _vm._l((item.device_list), function(list, s) {
      return (!list.parent_device_id) ? _c('div', {
        key: s,
        staticClass: "box"
      }, [_c('div', {
        staticClass: "img"
      }, [(list.img_url) ? _c('img', {
        attrs: {
          "src": _vm.serverUrl + list.img_url
        }
      }) : _vm._e()]), _vm._v(" "), _c('div', {
        staticClass: "title wux-ellipsis"
      }, [_vm._v(_vm._s(list.name))]), _vm._v(" "), _c('div', {
        staticClass: "text"
      }, [_vm._v(_vm._s(item.group.name))]), _vm._v(" "), _c('wux-checkbox', {
        staticClass: "checkbox",
        attrs: {
          "color": "positive",
          "value": list.id,
          "mpcomid": '0-' + i + '-' + s
        }
      })], 1) : _vm._e()
    }))
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "list-button button2"
  }, [_c('div', {
    staticClass: "button"
  }, [(_vm.group.length > '0') ? _c('wux-button', {
    attrs: {
      "block": "",
      "type": "positive",
      "open-type": "share",
      "mpcomid": '3'
    }
  }, [_vm._v("分享")]) : _c('wux-button', {
    attrs: {
      "block": "",
      "type": "positive",
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "click": function($event) {
        _vm.NoShare()
      }
    }
  }, [_vm._v("分享")])], 1)]), _vm._v(" "), _c('wux-toast', {
    attrs: {
      "id": "wux-toast",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('wux-dialog', {
    attrs: {
      "id": "wux-dialog--alert",
      "mpcomid": '5'
    }
  }), _vm._v(" "), _c('wux-dialog', {
    attrs: {
      "id": "wux-dialog",
      "mpcomid": '6'
    }
  }), _vm._v(" "), _c('wux-loading', {
    attrs: {
      "id": "wux-loading",
      "mpcomid": '7'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5b417712", esExports)
  }
}

/***/ })

},[223]);
//# sourceMappingURL=index.js.map