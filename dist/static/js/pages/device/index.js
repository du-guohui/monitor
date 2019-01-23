global.webpackJsonp([1],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3bc345b2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(126);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(119)
}
var normalizeComponent = __webpack_require__(2)
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

/***/ 119:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wux_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mpvue_cropper__ = __webpack_require__(121);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var wecropper = void 0;

var device = wx.getSystemInfoSync();
var width = device.windowWidth;
var height = device.windowHeight;

/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    DeviceList: function DeviceList() {
      return __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.DeviceList;
    }
  },
  data: function data() {
    return {
      cropper: false,
      edit: false,
      serverUrl: "",
      form: "",
      img_url: "",
      cropperOpt: {
        id: "cropper",
        targetId: "targetCropper",
        pixelRatio: device.pixelRatio,
        width: width,
        height: height,
        scale: 2.5,
        zoom: 8,
        cut: {
          x: (width - 320) / 2,
          y: (height - 180) / 2,
          width: 320,
          height: 180
        }
      }
    };
  },

  components: {
    MpvueCropper: __WEBPACK_IMPORTED_MODULE_2_mpvue_cropper__["a" /* default */]
  },
  methods: {
    cropperReady: function cropperReady() {
      console.log("cropper ready!");
    },
    cropperBeforeImageLoad: function cropperBeforeImageLoad() {
      console.log("before image load");
    },
    cropperLoad: function cropperLoad() {
      console.log("image loaded");
    },
    cropperBeforeDraw: function cropperBeforeDraw() {
      // Todo: 绘制水印等等
    },
    uploadTap: function uploadTap() {
      var _this = this;
      wx.chooseImage({
        count: 2, // 默认9
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          var src = res.tempFilePaths[0];
          //  获取裁剪图片资源后，给data添加src属性及其值
          wecropper.pushOrigin(src);
          _this.cropper = true;
        }
      });
    },
    getCropperImage: function getCropperImage() {
      var _this = this;
      wecropper.getCropperImage().then(function (src) {
        wx.uploadFile({
          url: _this.$url + "/device/addEnvImg",
          filePath: src,
          name: "img",
          header: { Authorization: wx.getStorageSync("Authorization") },
          success: function success(res) {
            _this.cropper = false;
            if (res.statusCode == 200) {
              _this.img_url = JSON.parse(res.data).content;
              _this.form.img_url = JSON.parse(res.data).content;
              _this.Toast("success", "上传图片成功");
            } else {
              _this.Toast("forbidden", "上传失败，请重新上传");
            }
          }
        });
      }).catch(function (e) {
        console.error("获取图片失败");
      });
    },
    GetData: function GetData() {
      console.log(this.$route.query);
      // 请求包含id为修改，否则为添加
      var id = this.$route.query.id;
      var editId = this.$route.query.editId;
      this.serverUrl = this.$url;
      if (id) {
        this.edit = true;
        for (var i in this.DeviceList) {
          if (this.DeviceList[i].id == id) {
            this.form = this.DeviceList[i];
          }
        }
      } else if (editId) {
        this.edit = true;
        this.form = this.$route.query;
      } else {
        this.edit = false;
        this.form = this.$route.query;
      }
      if (this.$route.query.gatewayId) {
        wx.setNavigationBarTitle({
          title: this.$route.query.name == "" ? "添加网关" : "网关修改"
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
        this.Toast("forbidden", this.form.gatewayId ? "网关位置信息" : "位置名称不能为空");
        return;
      }
      if (this.form.gatewayId) {
        this.ajax(this.$route.query.editId ? "device/updateGateway" : "device/addGateway", {
          name: this.form.name,
          mac: this.form.gatewayId,
          id: this.form.editId
        }, "POST").then(function (res) {
          if (res.content == "success") {
            _this2.Toast("success", _this2.$route.query.editId ? "修改成功" : "添加成功");
            setTimeout(function () {
              wx.navigateBack(1);
            }, 1500);
          } else {
            _this2.Toast("success", "操作失败");
          }
        });
      } else {
        this.ajax(this.$route.query.id ? "device/updateDevice" : "device/addDevice", this.form, "POST").then(function (res) {
          if (res.content == "success") {
            _this2.Toast("success", _this2.$route.query.id ? "修改成功" : "添加成功");
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].commit("ChangeList");
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
            _this.ajax(_this.form.gatewayId ? "device/deleteGateway" : "device/deleteDevice", {
              id: _this.form.gatewayId ? _this.form.editId : _this.form.id
            }, "POST").then(function (res) {
              if (res.content == "success") {
                _this.Toast("success", "删除成功");
                if (_this.form.gatewayId) {
                  setTimeout(function () {
                    wx.navigateBack(1);
                  }, 1500);
                } else {
                  __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].commit("ChangeList");
                  setTimeout(function () {
                    wx.switchTab({
                      url: "/pages/list/index"
                    });
                  }, 1500);
                }
              } else {
                _this.Toast("forbidden", "服务器错误");
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
    this.cropper = false;
    this.img_url = "";
    this.GetData();
    if (this.$route.query.img_url) {
      this.img_url = this.$route.query.img_url;
      this.form.img_url = this.$route.query.img_url;
    }
  },
  mounted: function mounted() {
    wecropper = this.$refs.cropper;
  }
});

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_mpvue_cropper_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_3467e155_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_mpvue_cropper_vue__ = __webpack_require__(125);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(122)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_mpvue_cropper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_3467e155_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_mpvue_cropper_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-cropper\\mpvue-cropper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mpvue-cropper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3467e155", Component.options)
  } else {
    hotAPI.reload("data-v-3467e155", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 122:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_we_cropper__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_we_cropper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_we_cropper__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'mpvue-cropper',
  props: {
    option: {
      type: Object
    }
  },
  data: function data() {
    return {
      _wecropper: null
    };
  },

  computed: {
    _canvasId: function _canvasId() {
      return this.option.id;
    },
    _targetId: function _targetId() {
      return this.option.targetId;
    },
    _width: function _width() {
      return this.option.width;
    },
    _height: function _height() {
      return this.option.height;
    },
    _pixelRatio: function _pixelRatio() {
      return this.option.pixelRatio;
    }
  },
  methods: {
    touchstart: function touchstart($event) {
      this._wecropper.touchStart($event.mp);
    },
    touchmove: function touchmove($event) {
      this._wecropper.touchMove($event.mp);
    },
    touchend: function touchend($event) {
      this._wecropper.touchEnd($event.mp);
    },
    pushOrigin: function pushOrigin(src) {
      this._wecropper.pushOrign(src);
    },
    updateCanvas: function updateCanvas() {
      this._wecropper.updateCanvas();
    },
    getCropperBase64: function getCropperBase64() {
      var _this = this;

      return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        _this._wecropper.getCropperImage(function (src) {
          src ? resolve(src) : reject();
        });
      });
    },
    getCropperImage: function getCropperImage() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        _this2._wecropper.getCropperImage(function (src) {
          src ? resolve(src) : reject();
        });
      });
    },
    init: function init() {
      var _this3 = this;

      this._wecropper = new __WEBPACK_IMPORTED_MODULE_2_we_cropper___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.option, {
        id: this._canvasId,
        targetId: this._targetId,
        pixelRatio: this._pixelRatio
      })).on('ready', function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this3.$emit.apply(_this3, ['ready'].concat(args));
      }).on('beforeImageLoad', function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _this3.$emit.apply(_this3, ['beforeImageLoad'].concat(args));
      }).on('imageLoad', function () {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        _this3.$emit.apply(_this3, ['imageLoad'].concat(args));
      }).on('beforeDraw', function () {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        _this3.$emit.apply(_this3, ['beforeDraw'].concat(args));
      });
    }
  },
  onLoad: function onLoad() {
    if (!this.option) {
      return console.warn('[mpvue-cropper] 请传入option参数\n参数配置见文档：https://we-plugin.github.io/we-cropper/#/api');
    }
    this.init();
  }
});

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm._canvasId) ? _c('canvas', {
    style: ({
      width: _vm._width + 'px',
      height: _vm._height + 'px',
      background: 'rgba(0, 0, 0, .8)'
    }),
    attrs: {
      "canvasId": _vm._canvasId,
      "disable-scroll": "",
      "eventid": '0'
    },
    on: {
      "touchstart": _vm.touchstart,
      "touchmove": _vm.touchmove,
      "touchend": _vm.touchend
    }
  }) : _vm._e(), _vm._v(" "), (_vm._targetId) ? _c('canvas', {
    style: ({
      position: 'fixed',
      top: -_vm._width * _vm._pixelRatio + 'px',
      left: -_vm._height * _vm._pixelRatio + 'px',
      width: _vm._width * _vm._pixelRatio + 'px',
      height: _vm._height * _vm._pixelRatio + 'px'
    }),
    attrs: {
      "canvas-id": _vm._targetId,
      "disable-scroll": ""
    }
  }) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3467e155", esExports)
  }
}

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.cropper),
      expression: "!cropper"
    }],
    staticClass: "device-top"
  }, [(_vm.form) ? _c('wux-cell-group', {
    attrs: {
      "mpcomid": '2'
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
      "click": function($event) {
        _vm.uploadTap()
      }
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("位置图片：")]), _vm._v(" "), _c('div', {
    staticClass: "upload-ioc"
  }, [(!_vm.img_url) ? _c('img', {
    staticClass: "no-img",
    attrs: {
      "src": "/static/img/12.png",
      "alt": ""
    }
  }) : _c('img', {
    staticClass: "imgs",
    attrs: {
      "src": _vm.serverUrl + _vm.img_url
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "txt"
  }, [_vm._v("点击上传图片")])])]) : _vm._e()], 1) : _vm._e()], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.cropper),
      expression: "!cropper"
    }],
    staticClass: "footer-button"
  }, [_c('div', {
    staticClass: "positive color1 buttons",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.PostData
    }
  }, [_vm._v("保存")]), _vm._v(" "), (_vm.edit) ? _c('div', {
    staticClass: "calm buttons",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.Delete
    }
  }, [_vm._v("删除")]) : _vm._e()]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.cropper),
      expression: "cropper"
    }],
    staticClass: "test"
  }, [_c('div', {
    staticClass: "mpvue-cropper"
  }, [_c('mpvue-cropper', {
    ref: "cropper",
    attrs: {
      "option": _vm.cropperOpt,
      "eventid": '4',
      "mpcomid": '3'
    },
    on: {
      "ready": _vm.cropperReady,
      "beforeDraw": _vm.cropperBeforeDraw,
      "beforeImageLoad": _vm.cropperBeforeImageLoad,
      "beforeLoad": _vm.cropperLoad
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "cropper-buttons"
  }, [_c('div', {
    staticClass: "upload btn",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.cropper = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('div', {
    staticClass: "getCropperImage btn",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.getCropperImage
    }
  }, [_vm._v("保存")])])]), _vm._v(" "), _c('wux-toast', {
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

},[153]);
//# sourceMappingURL=index.js.map