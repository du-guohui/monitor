global.webpackJsonp([16],{

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_47f76451_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(199);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(197)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-47f76451"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_47f76451_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\GroupList2\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47f76451", Component.options)
  } else {
    hotAPI.reload("data-v-47f76451", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 197:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_cropper__ = __webpack_require__(46);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var height = device.windowHeight - 50;
/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    DeviceList: function DeviceList() {
      return __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].state.Data.Device;
    },
    Loading: function Loading() {
      return __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].state.Loading;
    }
  },
  data: function data() {
    return {
      name: "",
      nChange: false,
      DeviceIndex: 0,
      show: false,
      serverUrl: "",
      data: [],
      group: [],
      temperature: [],
      humidity: [],
      id: [],
      threshold_group_id: [],
      load: false,
      img_url: "",
      cropper: false,
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
    MpvueCropper: __WEBPACK_IMPORTED_MODULE_4_mpvue_cropper__["a" /* default */]
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
      _this.up = true;
      wecropper.getCropperImage().then(function (src) {
        var uploadTask = wx.uploadFile({
          url: _this.$url + "/device/addEnvImg",
          filePath: src,
          name: "img",
          header: { Authorization: wx.getStorageSync("Authorization") },
          success: function success(res) {
            _this.cropper = false;
            if (res.statusCode == 200) {
              _this.img_url = JSON.parse(res.data).content;
              _this.Toast("success", "上传图片成功");
            } else {
              _this.Toast("forbidden", "上传失败，请重新上传");
            }
            _this.nChange = true;
          }
        });
        uploadTask.onProgressUpdate(function (res) {
          console.log("上传进度", res.progress);
          console.log("已经上传的数据长度", res.totalBytesSent);
          console.log("预期需要上传的数据总长度", res.totalBytesExpectedToSend);
        });
        _this.up = false;
      }).catch(function (e) {
        console.error("获取图片失败");
      });
    },
    NameChange: function NameChange(e) {
      this.name = e.mp.detail.value;
      this.nChange = true;
    },
    Switch: function Switch(e) {
      this.show = e.mp.detail.value;
    },
    TemperatureCh: function TemperatureCh(e) {
      this.temperature = e.mp.detail.value;
    },
    HumidityCh: function HumidityCh(e) {
      this.humidity = e.mp.detail.value;
    },
    Delete: function Delete() {
      var _this = this;
      Object(__WEBPACK_IMPORTED_MODULE_2__static_wux_index__["b" /* $wuxDialog */])().alert({
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
              id: _this.$route.query.id
            }, "POST").then(function (res) {
              _this.Toast("success", "操作成功");
              setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].commit("DeviceList", _this);
                wx.navigateBack(1);
              }, 800);
            });
          }
        }]
      });
    },
    PostData2: function PostData2(id) {
      var _this2 = this;

      this.ajax("device/moveDeviceListToGroup", {
        group_id: id,
        device_id_list: this.group
      }, "POST").then(function (res) {
        if (res == "success") {
          _this2.Toast("success", "操作成功");
          setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].commit("DeviceList", _this2);
            wx.navigateBack(1);
          }, 800);
        } else {
          _this2.Toast("forbidden", res.msg);
        }
      });
    },
    PostData: function PostData() {
      var _this = this;
      Object(__WEBPACK_IMPORTED_MODULE_2__static_wux_index__["b" /* $wuxDialog */])().alert({
        resetOnClose: true,
        title: "修改确认",
        content: "是否保存该区域？",
        buttons: [{
          text: "取消"
        }, {
          text: "确定",
          type: "primary",
          onTap: function onTap(e) {
            _this.PostName();
          }
        }]
      });
    },
    PostName: function PostName() {
      var _this3 = this;

      if (this.name == "") {
        this.Toast("forbidden", "区域名称不能为空");
      } else {
        this.ajax("device/device_group/", { name: this.name, img_url: this.img_url }, "POST").then(function (res) {
          if (res.id) {
            if (_this3.change) {
              _this3.ajax("alarm/threshold_value/multiple_create/", {
                level: "group",
                id: res.id,
                data: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()([{
                  param: "temperature",
                  max: _this3.temperature[1],
                  min: _this3.temperature[0]
                }, {
                  param: "humidity",
                  max: _this3.humidity[1],
                  min: _this3.humidity[0]
                }])
              }, "POST").then(function (res2) {
                if (res2 == "success") {
                  _this3.PostData2(res.id);
                } else {
                  _this3.Toast("forbidden", res2.msg);
                }
              });
            } else {
              _this3.PostData2(res.id);
            }
          } else {
            _this3.Toast("forbidden", res.msg);
          }
        });
      }
    },
    GetData: function GetData() {
      this.temperature = [10, 30];
      this.humidity = [30, 70];
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
  mounted: function mounted() {
    this.img_url = "";
    this.show = false;
    this.nChange = false;
    this.serverUrl = this.$url;
    this.data = [];
    this.group = [];
    this.cropper = false;
    this.edit = false;
    wecropper = this.$refs.cropper;
    this.GetData();
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
    }
  }
});

/***/ }),

/***/ 199:
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
    }]
  }, [_c('div', {
    staticClass: "list-tops"
  }, [_c('wux-cell-group', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('wux-cell', {
    staticClass: "GroupName",
    attrs: {
      "hover-class": "none",
      "mpcomid": '1'
    }
  }, [_c('wux-input', {
    attrs: {
      "label": "区域名称：",
      "value": _vm.name,
      "placeholder": "请输入区域名称",
      "controlled": "",
      "type": "text",
      "id": "name",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.NameChange
    }
  })], 1), _vm._v(" "), _c('div', {
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
  }, [(!_vm.img_url || _vm.img_url == 'null' || _vm.img_url == '') ? _c('img', {
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
  }, [_vm._v("点击上传图片")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "fazhi"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("告警阈值：\n          "), (_vm.show) ? _c('div', {
    staticClass: "tt"
  }, [_vm._v("温度:" + _vm._s(_vm.temperature[0]) + "°C - " + _vm._s(_vm.temperature[1]) + "°C")]) : _vm._e(), _vm._v(" "), (_vm.show) ? _c('div', {
    staticClass: "tt"
  }, [_vm._v("湿度:" + _vm._s(_vm.humidity[0]) + "% - " + _vm._s(_vm.humidity[1]) + "%")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "switch"
  }, [_c('wux-switch', {
    attrs: {
      "value": _vm.show,
      "color": "#0093fb",
      "eventid": '2',
      "mpcomid": '3'
    },
    on: {
      "change": _vm.Switch
    }
  })], 1)]), _vm._v(" "), (_vm.show) ? _c('div', {
    staticClass: "txt"
  }, [_c('div', {
    staticClass: "title1"
  }, [_vm._v("温度:")]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "min"
  }, [_vm._v("-10°C")]), _vm._v(" "), _c('div', {
    staticClass: "cc"
  }, [_c('wux-slider', {
    attrs: {
      "min": "-10",
      "max": "50",
      "step": "1",
      "value": _vm.temperature,
      "controlled": "",
      "trackStyle": "background-color: #0093fb",
      "eventid": '3',
      "mpcomid": '4'
    },
    on: {
      "change": _vm.TemperatureCh
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "max"
  }, [_vm._v("50°C")])])]) : _vm._e(), _vm._v(" "), (_vm.show) ? _c('div', {
    staticClass: "txt"
  }, [_c('div', {
    staticClass: "title1"
  }, [_vm._v("湿度:")]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "min"
  }, [_vm._v("0%")]), _vm._v(" "), _c('div', {
    staticClass: "cc"
  }, [_c('wux-slider', {
    attrs: {
      "min": "0",
      "max": "100",
      "step": "1",
      "value": _vm.humidity,
      "controlled": "",
      "trackStyle": "background-color: #0093fb",
      "eventid": '4',
      "mpcomid": '5'
    },
    on: {
      "change": _vm.HumidityCh
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "max"
  }, [_vm._v("100%")])])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "ts"
  }, [_vm._v(_vm._s(_vm.group.length > '0' ? '已选择' + _vm.group.length + '个设备' : '未选择设备'))])], 1), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('wux-checkbox-group', {
    attrs: {
      "value": _vm.group,
      "eventid": '5',
      "mpcomid": '7'
    },
    on: {
      "change": _vm.onChange
    }
  }, _vm._l((_vm.DeviceList), function(item, i) {
    return _c('div', {
      key: i,
      staticClass: "group-list"
    }, _vm._l((item.device_list), function(list, s) {
      return _c('div', {
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
          "mpcomid": '6-' + i + '-' + s
        }
      })], 1)
    }))
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "list-button button2"
  }, [_c('div', {
    staticClass: "button"
  }, [_c('wux-button', {
    attrs: {
      "block": "",
      "type": "positive",
      "eventid": '6',
      "mpcomid": '8'
    },
    on: {
      "click": _vm.PostData
    }
  }, [_vm._v("保存")])], 1)])]), _vm._v(" "), _c('wux-toast', {
    attrs: {
      "id": "wux-toast",
      "mpcomid": '9'
    }
  }), _vm._v(" "), _c('wux-dialog', {
    attrs: {
      "id": "wux-dialog--alert",
      "mpcomid": '10'
    }
  }), _vm._v(" "), _c('wux-dialog', {
    attrs: {
      "id": "wux-dialog",
      "mpcomid": '11'
    }
  }), _vm._v(" "), _c('wux-loading', {
    attrs: {
      "id": "wux-loading",
      "mpcomid": '12'
    }
  }), _vm._v(" "), _c('div', {
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
      "eventid": '7',
      "mpcomid": '13'
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
      "eventid": '8'
    },
    on: {
      "click": function($event) {
        _vm.cropper = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('div', {
    staticClass: "getCropperImage btn",
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": _vm.getCropperImage
    }
  }, [_vm._v("保存")])])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-47f76451", esExports)
  }
}

/***/ })

},[222]);
//# sourceMappingURL=index.js.map