global.webpackJsonp([7],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3bc345b2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(113);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3bc345b2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3bc345b2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\device\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3bc345b2", Component.options)
  } else {
    hotAPI.reload("data-v-3bc345b2", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wux_index__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(16);
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
      return __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.DeviceList;
    }
  },
  data: function data() {
    return {
      serverUrl: "",
      form: ""
    };
  },

  methods: {
    Upload: function Upload() {
      var _this = this;
      wx.chooseImage({
        success: function success(res) {
          var tempFilePaths = res.tempFilePaths;
          wx.uploadFile({
            url: _this.$url + "/device/addEnvImg",
            filePath: tempFilePaths[0],
            name: "img",
            header: { Authorization: wx.getStorageSync("Authorization") },
            success: function success(res) {
              if (res.statusCode == 200) {
                _this.form.img_url = JSON.parse(res.data).content;
                Object(__WEBPACK_IMPORTED_MODULE_0__wux_index__["b" /* $wuxToast */])().show({
                  type: "success",
                  duration: 1500,
                  color: "#fff",
                  text: "上传图片成功"
                });
              } else {
                Object(__WEBPACK_IMPORTED_MODULE_0__wux_index__["b" /* $wuxToast */])().show({
                  type: "forbidden",
                  duration: 1500,
                  color: "#fff",
                  text: "上传失败，请重新上传"
                });
              }
            }
          });
        }
      });
    },
    GetData: function GetData() {
      // 请求包含id为修改，否则为添加
      var id = this.$route.query.id;
      this.serverUrl = this.$url;
      if (id) {
        for (var i in this.DeviceList) {
          if (this.DeviceList[i].id == id) {
            this.form = this.DeviceList[i];
          }
        }
      } else {
        this.form = this.$route.query;
      }
      wx.setNavigationBarTitle({
        title: id ? "设备修改" : "添加设备"
      });
    },
    PostData: function PostData() {
      var _this2 = this;

      if (this.form.name == "") {
        Object(__WEBPACK_IMPORTED_MODULE_0__wux_index__["b" /* $wuxToast */])().show({
          type: "forbidden",
          duration: 1500,
          color: "#fff",
          text: "位置名称不能为空"
        });
        return;
      } else {
        this.ajax(this.$route.query.id ? "device/updateDevice" : "device/addDevice", this.form, "POST").then(function (res) {
          if (res.content == "success") {
            Object(__WEBPACK_IMPORTED_MODULE_0__wux_index__["b" /* $wuxToast */])().show({
              type: "success",
              duration: 1500,
              color: "#fff",
              text: _this2.$route.query.id ? "修改成功" : "添加成功"
            });
            setTimeout(function () {
              wx.navigateBack(1);
            }, 1500);
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_0__wux_index__["b" /* $wuxToast */])().show({
              type: "forbidden",
              duration: 1500,
              color: "#fff",
              text: "操作失败"
            });
          }
        });
      }
    },
    Delete: function Delete() {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_0__wux_index__["a" /* $wuxDialog */])().alert({
        resetOnClose: true,
        title: "删除确认",
        content: "是否删除该设备？",
        buttons: [{
          text: "取消"
        }, {
          text: "确定",
          type: "primary",
          onTap: function onTap(e) {
            _this.ajax("device/deleteDevice", { id: _this.form.id }, "POST").then(function (res) {
              if (res.content == "success") {
                var list = _this.DeviceList;
                for (var i in list) {
                  if (list[i].id == _this.form.id) {
                    list.splice(i, 1);
                    Object(__WEBPACK_IMPORTED_MODULE_0__wux_index__["b" /* $wuxToast */])().show({
                      type: "success",
                      duration: 1500,
                      color: "#fff",
                      text: "删除成功"
                    });
                    setTimeout(function () {
                      wx.switchTab({
                        url: "/pages/list/index"
                      });
                    }, 1500);
                    return;
                  }
                }
              } else {
                Object(__WEBPACK_IMPORTED_MODULE_0__wux_index__["b" /* $wuxToast */])().show({
                  type: "forbidden",
                  duration: 1500,
                  color: "#fff",
                  text: "服务器错误"
                });
              }
            });
          }
        }]
      });
    },
    onChange: function onChange(e) {
      this.form[e.mp.currentTarget.id] = e.mp.detail.value;
    }
  },
  onShow: function onShow() {
    this.GetData();
  }
});

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', [(_vm.form) ? _c('wux-cell-group', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('wux-cell', {
    attrs: {
      "hover-class": "none",
      "mpcomid": '1'
    }
  }, [_c('wux-input', {
    attrs: {
      "label": "位置名称",
      "placeholder": "请输入位置名称",
      "id": "name",
      "value": _vm.form.name,
      "controlled": "",
      "type": "text",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.onChange
    }
  })], 1), _vm._v(" "), (_vm.form.img_url) ? _c('wux-image', {
    attrs: {
      "wux-class": "image",
      "src": _vm.serverUrl + _vm.form.img_url,
      "lazyLoad": "",
      "mpcomid": '2'
    }
  }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('wux-button', {
    attrs: {
      "block": "",
      "type": "positive",
      "eventid": '1',
      "mpcomid": '4'
    },
    on: {
      "click": _vm.Upload
    }
  }, [_vm._v(_vm._s(_vm.form.img_url ? '修改图片' : '上传图片'))])], 1), _vm._v(" "), _c('div', {
    staticClass: "bottom-button"
  }, [_c('wux-button', {
    attrs: {
      "block": "",
      "type": "positive",
      "eventid": '2',
      "mpcomid": '5'
    },
    on: {
      "click": _vm.PostData
    }
  }, [_vm._v("保存")]), _vm._v(" "), (_vm.form.id) ? _c('wux-button', {
    attrs: {
      "block": "",
      "type": "assertive",
      "eventid": '3',
      "mpcomid": '6'
    },
    on: {
      "click": _vm.Delete
    }
  }, [_vm._v("删除")]) : _vm._e()], 1), _vm._v(" "), _c('wux-toast', {
    attrs: {
      "id": "wux-toast",
      "mpcomid": '7'
    }
  }), _vm._v(" "), _c('wux-dialog', {
    attrs: {
      "id": "wux-dialog",
      "mpcomid": '8'
    }
  }), _vm._v(" "), _c('wux-dialog', {
    attrs: {
      "id": "wux-dialog--alert",
      "mpcomid": '9'
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
     require("vue-hot-reload-api").rerender("data-v-3bc345b2", esExports)
  }
}

/***/ })

},[142]);
//# sourceMappingURL=index.js.map