global.webpackJsonp([6],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3bc345b2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(119);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(117)
}
var normalizeComponent = __webpack_require__(6)
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

/***/ 117:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wux_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(17);
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
    DeviceList: function DeviceList() {
      return __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.DeviceList;
    }
  },
  data: function data() {
    return {
      serverUrl: "",
      form: "",
      img_url: ""
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
                _this.img_url = JSON.parse(res.data).content;
                _this.form.img_url = JSON.parse(res.data).content;
                _this.Toast("success", "上传图片成功");
              } else {
                _this.Toast("forbidden", "上传失败，请重新上传");
              }
            }
          });
        }
      });
    },
    GetData: function GetData() {
      console.log(this.$route.query);
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
      if (this.$route.query.gatewayId) {
        wx.setNavigationBarTitle({
          title: this.$route.query.gatewayId ? "设备修改" : "添加设备"
        });
      } else {
        wx.setNavigationBarTitle({
          title: id ? "设备修改" : "添加设备"
        });
      }
    },
    PostData: function PostData() {
      var _this2 = this;

      if (this.form.name == "") {
        this.Toast("forbidden", "位置名称不能为空");
        return;
      } else {
        this.ajax(this.$route.query.id ? "device/updateDevice" : "device/addDevice", this.form, "POST").then(function (res) {
          if (res.content == "success") {
            _this2.Toast("success", _this2.$route.query.id ? "修改成功" : "添加成功");
            setTimeout(function () {
              wx.navigateBack(1);
            }, 1500);
          } else {
            _this2.Toast("success", "操作失败");
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
            var _this3 = this;

            _this.ajax("device/deleteDevice", { id: _this.form.id }, "POST").then(function (res) {
              if (res.content == "success") {
                var list = _this.DeviceList;
                for (var i in list) {
                  if (list[i].id == _this.form.id) {
                    list.splice(i, 1);
                    _this3.Toast("success", "删除成功");
                    setTimeout(function () {
                      wx.switchTab({
                        url: "/pages/list/index"
                      });
                    }, 1500);
                    return;
                  }
                }
              } else {
                _this3.Toast("forbidden", "服务器错误");
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
    this.img_url = "";
    this.GetData();
  }
});

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "device-top"
  }, [(_vm.form) ? _c('wux-cell-group', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('wux-cell', {
    staticClass: "input",
    attrs: {
      "hover-class": "none",
      "mpcomid": '1'
    }
  }, [_c('wux-input', {
    attrs: {
      "label": _vm.form.gatewayId ? '网关位置：' : '设备位置：',
      "placeholder": _vm.form.gatewayId ? '请输入网关位置信息' : '请输入设备位置信息',
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
  })], 1), _vm._v(" "), (!_vm.form.gatewayId) ? _c('div', {
    staticClass: "upload-img",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.Upload
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("位置图片：")]), _vm._v(" "), (_vm.img_url) ? _c('div', {
    staticClass: "img"
  }, [_c('wux-image', {
    attrs: {
      "wux-class": "image",
      "src": _vm.serverUrl + _vm.img_url,
      "mpcomid": '2'
    }
  })], 1) : _c('div', {
    staticClass: "upload-ioc"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/12.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "txt"
  }, [_vm._v("点击上传图片")])])]) : _vm._e()], 1) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "footer-button"
  }, [_c('div', {
    staticClass: "positive color1 buttons",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.PostData
    }
  }, [_vm._v("保存")]), _vm._v(" "), (_vm.$route.query.id) ? _c('div', {
    staticClass: "calm buttons",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.Delete
    }
  }, [_vm._v("删除")]) : _vm._e()]), _vm._v(" "), _c('wux-toast', {
    attrs: {
      "id": "wux-toast",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('wux-dialog', {
    attrs: {
      "id": "wux-dialog",
      "mpcomid": '5'
    }
  }), _vm._v(" "), _c('wux-dialog', {
    attrs: {
      "id": "wux-dialog--alert",
      "mpcomid": '6'
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

},[146]);
//# sourceMappingURL=index.js.map