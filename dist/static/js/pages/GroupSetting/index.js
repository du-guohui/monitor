global.webpackJsonp([14],{

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_59f55866_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(187);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(185)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-59f55866"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_59f55866_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\GroupSetting\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59f55866", Component.options)
  } else {
    hotAPI.reload("data-v-59f55866", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 185:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
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
    Loading: function Loading() {
      return __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].state.Loading;
    },
    DeviceList: function DeviceList() {
      return __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].state.Data.Device;
    },
    NewList: function NewList() {
      var NewList = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.DeviceList));
      return NewList.reverse();
    }
  },
  data: function data() {
    return { visible: false, form: { name: "", desc: "" }, load: true };
  },

  methods: {
    Add: function Add() {
      // GroupList2
    },
    Delete: function Delete(i) {
      var _this = this;
      Object(__WEBPACK_IMPORTED_MODULE_1__static_wux_index__["b" /* $wuxDialog */])().alert({
        resetOnClose: true,
        title: "删除确认",
        content: '删除区域后,该区域的设备将转移到"未设置区域"下',
        buttons: [{
          text: "取消"
        }, {
          text: "确定",
          type: "primary",
          onTap: function onTap(e) {
            _this.ajax("device/deleteDeviceGroup", {
              id: _this.NewList[i].group.id
            }, "POST").then(function (res) {
              _this.Toast("success", "操作成功");
              setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].commit("DeviceList", _this);
              }, 800);
            });
          }
        }]
      });
    },
    onClose: function onClose() {
      this.visible = false;
    },
    onChange: function onChange(e) {
      this.form[e.mp.currentTarget.id] = e.mp.detail.value;
    }
  },
  onShow: function onShow() {
    this.form = {
      name: "",
      desc: "",
      img_url: ""
    };
  },

  watch: {
    Loading: function Loading() {
      var _this2 = this;

      var _this = this;
      if (this.$route) {
        this.$wuxLoading = Object(__WEBPACK_IMPORTED_MODULE_1__static_wux_index__["c" /* $wuxLoading */])();
        if (this.Loading) {
          this.$wuxLoading.show({
            text: "数据加载中"
          });
        } else {
          setTimeout(function () {
            _this2.$wuxLoading.hide();
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

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [(!_vm.load) ? _c('div', {
    staticClass: "groups"
  }, [_c('a', {
    staticClass: "add-button",
    attrs: {
      "href": "/pages/GroupList2/index"
    }
  }, [_c('wux-icon', {
    attrs: {
      "type": "ios-add",
      "size": "23",
      "color": "#ffffff",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('wux-cell-group', {
    attrs: {
      "title": "区域列表",
      "mpcomid": '4'
    }
  }, [_vm._l((_vm.NewList), function(item, i) {
    return (!item.group.is_default) ? _c('van-swipe-cell', {
      key: i,
      attrs: {
        "right-width": "65",
        "mpcomid": '2-' + i
      }
    }, [_c('wux-cell', {
      attrs: {
        "title": item.group.name,
        "isLink": "",
        "label": item.device_list.length + '个设备',
        "url": '/pages/GroupList/index?id=' + item.group.id,
        "mpcomid": '1-' + i
      }
    }), _vm._v(" "), _c('view', {
      slot: "right"
    }, [_c('div', {
      staticClass: "del",
      attrs: {
        "eventid": '0-' + i
      },
      on: {
        "click": function($event) {
          _vm.Delete(i)
        }
      }
    }, [_vm._v("删除")])])], 1) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.NewList), function(item, i) {
    return (item.group.is_default) ? _c('wux-cell', {
      key: i,
      attrs: {
        "title": item.group.name,
        "isLink": "",
        "label": item.device_list.length + '个设备',
        "url": '/pages/GroupList/index?id=' + item.group.id,
        "mpcomid": '3-' + i
      }
    }) : _vm._e()
  })], 2)], 1) : _vm._e(), _vm._v(" "), _c('wux-popup', {
    staticClass: "group-box",
    attrs: {
      "position": "bottom",
      "visible": _vm.visible,
      "eventid": '3',
      "mpcomid": '10'
    },
    on: {
      "close": _vm.onClose
    }
  }, [_c('wux-cell-group', {
    attrs: {
      "title": "新建区域",
      "mpcomid": '9'
    }
  }, [_c('wux-cell', {
    attrs: {
      "hover-class": "none",
      "mpcomid": '6'
    }
  }, [_c('wux-input', {
    attrs: {
      "label": "区域名称",
      "placeholder": "请输入区域名称",
      "id": "name",
      "value": _vm.form.name,
      "controlled": "",
      "type": "text",
      "eventid": '1',
      "mpcomid": '5'
    },
    on: {
      "change": _vm.onChange
    }
  })], 1), _vm._v(" "), _c('wux-cell', {
    attrs: {
      "hover-class": "none",
      "mpcomid": '8'
    }
  }, [_c('wux-button', {
    attrs: {
      "block": "",
      "type": "positive",
      "eventid": '2',
      "mpcomid": '7'
    },
    on: {
      "click": _vm.PostData
    }
  }, [_vm._v("保存")])], 1)], 1)], 1), _vm._v(" "), _c('wux-toast', {
    attrs: {
      "id": "wux-toast",
      "mpcomid": '11'
    }
  }), _vm._v(" "), _c('wux-dialog', {
    attrs: {
      "id": "wux-dialog",
      "mpcomid": '12'
    }
  }), _vm._v(" "), _c('wux-dialog', {
    attrs: {
      "id": "wux-dialog--alert",
      "mpcomid": '13'
    }
  }), _vm._v(" "), _c('wux-loading', {
    attrs: {
      "id": "wux-loading",
      "mpcomid": '14'
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
     require("vue-hot-reload-api").rerender("data-v-59f55866", esExports)
  }
}

/***/ })

},[220]);
//# sourceMappingURL=index.js.map