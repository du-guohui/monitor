global.webpackJsonp([10],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3bc345b2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(136);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(130)
}
var normalizeComponent = __webpack_require__(1)
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

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mpvue_cropper__ = __webpack_require__(46);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      return __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].state.Data.Device;
    }
  },
  data: function data() {
    return {
      change: false,
      temperature: [],
      humidity: [],
      threshold_group_id: [],
      id: [],
      threshold: false,
      show: false,
      up: false,
      value: "",
      group: [],
      groupIndex: 0,
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
    MpvueCropper: __WEBPACK_IMPORTED_MODULE_3_mpvue_cropper__["a" /* default */]
  },
  methods: {
    Switch: function Switch(e) {
      this.show = e.mp.detail.value;
      this.change = true;
    },
    TemperatureCh: function TemperatureCh(e) {
      this.temperature = e.mp.detail.value;
      this.change = true;
    },
    HumidityCh: function HumidityCh(e) {
      this.humidity = e.mp.detail.value;
    },
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
              // _this.form.img_url = JSON.parse(res.data).content;
              _this.Toast("success", "上传图片成功");
            } else {
              _this.Toast("forbidden", "上传失败，请重新上传");
            }
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
    GetData: function GetData() {
      var _this2 = this;

      // 请求包含id为修改，否则为添加
      var id = this.$route.query.id;
      var editId = this.$route.query.editId;
      this.serverUrl = this.$url;
      if (id) {
        this.edit = true;
        for (var i in this.DeviceList) {
          for (var s in this.DeviceList[i].device_list) {
            if (this.DeviceList[i].device_list[s].id == id) {
              this.form = this.DeviceList[i].device_list[s];
            }
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
        for (var _i in this.DeviceList) {
          this.group.push(this.DeviceList[_i].group.name);
        }
        if (this.form.device_group_id) {
          for (var _i2 in this.DeviceList) {
            if (this.DeviceList[_i2].group.id == this.form.device_group_id) {
              this.value = this.DeviceList[_i2].group.name;
              this.groupIndex = _i2;
            }
          }
        } else {
          this.value = this.DeviceList[0].group.name;
        }
      }

      this.ajax("device/device/" + this.$route.query.id + "/").then(function (res) {
        if (res.device_threshold_list.length > "0") {
          _this2.threshold = true;
          var show = res.device_threshold_list.filter(function (item) {
            return item.is_on == true;
          });
          if (show.length > "0") {
            _this2.show = true;
          }
          for (var _i3 in res.device_threshold_list) {
            var data1 = res.device_threshold_list.filter(function (item) {
              return item.param == "temperature";
            });
            var data2 = res.device_threshold_list.filter(function (item) {
              return item.param == "humidity";
            });
            _this2.temperature[0] = data1[0].min;
            _this2.temperature[1] = data1[0].max;
            _this2.id[0] = data1[0].id;
            _this2.threshold_group_id[0] = data1[0].threshold_group_id;
            _this2.humidity[0] = data2[0].min;
            _this2.humidity[1] = data2[0].max;
            _this2.id[1] = data2[0].id;
            _this2.threshold_group_id[1] = data2[0].threshold_group_id;
          }
        } else if (res.group_threshold_list.length > "0") {
          _this2.threshold = false;
          var _show = res.group_threshold_list.filter(function (item) {
            return item.is_on == true;
          });
          if (_show.length > "0") {
            _this2.show = true;
          }
          for (var _i4 in res.group_threshold_list) {
            var _data = res.group_threshold_list.filter(function (item) {
              return item.param == "temperature";
            });
            var _data2 = res.group_threshold_list.filter(function (item) {
              return item.param == "humidity";
            });
            _this2.temperature[0] = _data[0].min;
            _this2.temperature[1] = _data[0].max;
            _this2.id[0] = _data[0].id;
            _this2.threshold_group_id[0] = _data[0].threshold_group_id;
            _this2.humidity[0] = _data2[0].min;
            _this2.humidity[1] = _data2[0].max;
            _this2.id[1] = _data2[0].id;
            _this2.threshold_group_id[1] = _data2[0].threshold_group_id;
          }
        } else {
          _this2.temperature = [10, 30];
          _this2.humidity = [30, 70];
        }
      });
    },
    GetData2: function GetData2() {
      var _this3 = this;

      this.show = false;
      this.ajax("device/device_group/" + this.DeviceList[this.groupIndex].group.id + "/").then(function (res) {
        if (res.threshold_list.length > "0") {
          var show = res.threshold_list.filter(function (item) {
            return item.is_on == true;
          });
          if (show.length > "0") {
            _this3.show = true;
          }
          for (var i in res.threshold_list) {
            var data1 = res.threshold_list.filter(function (item) {
              return item.param == "temperature";
            });
            var data2 = res.threshold_list.filter(function (item) {
              return item.param == "humidity";
            });
            _this3.temperature[0] = data1[0].min;
            _this3.temperature[1] = data1[0].max;
            _this3.id[0] = data1[0].id;
            _this3.threshold_group_id[0] = data1[0].threshold_group_id;
            _this3.humidity[0] = data2[0].min;
            _this3.humidity[1] = data2[0].max;
            _this3.id[1] = data2[0].id;
            _this3.threshold_group_id[1] = data2[0].threshold_group_id;
          }
        } else {
          _this3.temperature = [10, 30];
          _this3.humidity = [30, 70];
        }
      });
    },
    PostData2: function PostData2() {
      var _this4 = this;

      var _this = this;
      if (_this.change) {
        _this.ajax(_this.threshold ? "alarm/threshold_value/multiple_update/" : "alarm/threshold_value/multiple_create/", _this.threshold > "0" ? {
          data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()([{
            id: _this.id[0],
            param: "temperature",
            threshold_group_id: _this.threshold_group_id[0],
            max: _this.temperature[1],
            min: _this.temperature[0],
            is_on: _this.show
          }, {
            id: _this.id[1],
            param: "humidity",
            threshold_group_id: _this.threshold_group_id[1],
            max: _this.humidity[1],
            min: _this.humidity[0],
            is_on: _this.show
          }])
        } : {
          level: "device",
          id: _this.$route.query.id,
          data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()([{
            param: "temperature",
            max: _this.temperature[1],
            min: _this.temperature[0]
          }, {
            param: "humidity",
            max: _this.humidity[1],
            min: _this.humidity[0]
          }])
        }, _this.threshold ? "PUT" : "POST").then(function (res) {
          if (res == "success") {
            _this4.Toast("success", _this.$route.query.editId ? "修改成功" : "添加成功");
            setTimeout(function () {
              wx.switchTab({
                url: "/pages/list/index"
              });
              __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].commit("DeviceList", _this);
            }, 1500);
          } else {
            _this.Toast("forbidden", res.msg);
          }
        });
      } else {
        _this.Toast("success", _this.$route.query.id ? "修改成功" : "添加成功");
        setTimeout(function () {
          wx.switchTab({
            url: "/pages/list/index"
          });
          __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].commit("DeviceList", _this);
        }, 1500);
      }
    },
    PostData: function PostData() {
      var _this5 = this;

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
            _this5.Toast("success", _this5.$route.query.editId ? "修改成功" : "添加成功");
            setTimeout(function () {
              wx.switchTab({
                url: "/pages/list/index"
              });
              __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].commit("GatewayList", _this5);
            }, 1500);
          } else {
            _this5.Toast("forbidden", res.msg);
          }
        });
      } else {
        this.ajax(this.$route.query.id ? "device/updateDevice" : "device/addDevice", {
          id: this.form.id,
          appKey: this.form.appKey,
          devEui: this.form.devEui,
          name: this.form.name,
          img_url: this.img_url,
          device_group_id: this.DeviceList[this.groupIndex].group.id
        }, "POST").then(function (res) {
          if (res.content == "success") {
            _this5.PostData2();
          } else {
            _this5.Toast("forbidden", res.msg);
          }
        });
      }
    },
    Delete: function Delete() {
      var _this = this;
      Object(__WEBPACK_IMPORTED_MODULE_1__static_wux_index__["b" /* $wuxDialog */])().alert({
        resetOnClose: true,
        title: "删除确认",
        content: "是否删除该设备/网关?",
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
                setTimeout(function () {
                  wx.switchTab({
                    url: "/pages/list/index"
                  });
                  if (_this.form.gatewayId) {
                    __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].commit("GatewayList", _this);
                  } else {
                    __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].commit("DeviceList", _this);
                  }
                }, 1500);
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
    },
    onClick: function onClick() {
      var _this = this;
      Object(__WEBPACK_IMPORTED_MODULE_1__static_wux_index__["d" /* $wuxSelect */])("#wux-select").open({
        value: _this.value,
        options: _this.group,
        onConfirm: function onConfirm(value, index, options) {
          if (index !== -1) {
            _this.value = value;
            _this.groupIndex = index;
            if (!_this.threshold) {
              _this.GetData2();
            }
          }
        }
      });
    }
  },
  mounted: function mounted() {
    this.change = false;
    this.show = false;
    this.form = "";
    this.group = [];
    this.groupIndex = 0;
    this.value = "";
    this.cropper = false;
    this.img_url = "";
    if (this.$route.query.img_url) {
      this.img_url = this.$route.query.img_url;
    }
    wecropper = this.$refs.cropper;
    this.GetData();
  }
});

/***/ }),

/***/ 136:
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
      "mpcomid": '6'
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
  })], 1), _vm._v(" "), (!_vm.form.gatewayId) ? _c('wux-cell', {
    staticClass: "input",
    attrs: {
      "hover-class": "none",
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.onClick
    }
  }, [_c('div', {
    staticClass: "inputs"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("区域名称：")]), _vm._v(" "), _c('div', {
    staticClass: "txt"
  }, [_vm._v(_vm._s(_vm.value))])])]) : _vm._e(), _vm._v(" "), (!_vm.form.gatewayId) ? _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.cropper),
      expression: "!cropper"
    }],
    staticClass: "fazhi"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("告警阈值：\n          "), (_vm.show) ? _c('div', {
    staticClass: "tt"
  }, [_vm._v("温度:" + _vm._s(_vm.temperature[0]) + "°C - " + _vm._s(_vm.temperature[1]) + "°C")]) : _vm._e(), _vm._v(" "), (_vm.show) ? _c('div', {
    staticClass: "tt"
  }, [_vm._v("湿度:" + _vm._s(_vm.humidity[0]) + "% - " + _vm._s(_vm.humidity[1]) + "%")]) : _vm._e()]), _vm._v(" "), _c('div', {
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
  })], 1), _vm._v(" "), (_vm.show) ? _c('div', {
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
  }, [_vm._v("100%")])])]) : _vm._e()]) : _vm._e(), _vm._v(" "), (!_vm.form.gatewayId) ? _c('div', {
    staticClass: "upload-img",
    attrs: {
      "eventid": '5'
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
  }, [_vm._v("点击上传图片")])])]) : _vm._e()], 1) : _vm._e()], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.cropper),
      expression: "!cropper"
    }],
    staticClass: "list-button",
    class: {
      'button2': !_vm.edit
    }
  }, [(_vm.edit) ? _c('div', {
    staticClass: "button"
  }, [_c('wux-button', {
    attrs: {
      "block": "",
      "type": "assertive",
      "eventid": '6',
      "mpcomid": '7'
    },
    on: {
      "click": _vm.Delete
    }
  }, [_vm._v("删除")])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "button"
  }, [_c('wux-button', {
    attrs: {
      "block": "",
      "type": "positive",
      "eventid": '7',
      "mpcomid": '8'
    },
    on: {
      "click": _vm.PostData
    }
  }, [_vm._v("保存")])], 1)]), _vm._v(" "), _c('div', {
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
      "eventid": '8',
      "mpcomid": '9'
    },
    on: {
      "ready": _vm.cropperReady,
      "beforeDraw": _vm.cropperBeforeDraw,
      "beforeImageLoad": _vm.cropperBeforeImageLoad,
      "beforeLoad": _vm.cropperLoad
    }
  })], 1), _vm._v(" "), (!_vm.up) ? _c('div', {
    staticClass: "cropper-buttons"
  }, [_c('div', {
    staticClass: "upload btn",
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": function($event) {
        _vm.cropper = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('div', {
    staticClass: "getCropperImage btn",
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": _vm.getCropperImage
    }
  }, [_vm._v("保存")])]) : _vm._e()]), _vm._v(" "), _c('wux-toast', {
    attrs: {
      "id": "wux-toast",
      "mpcomid": '10'
    }
  }), _vm._v(" "), _c('wux-dialog', {
    attrs: {
      "id": "wux-dialog",
      "mpcomid": '11'
    }
  }), _vm._v(" "), _c('wux-dialog', {
    attrs: {
      "id": "wux-dialog--alert",
      "mpcomid": '12'
    }
  }), _vm._v(" "), _c('wux-select', {
    attrs: {
      "id": "wux-select",
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
     require("vue-hot-reload-api").rerender("data-v-3bc345b2", esExports)
  }
}

/***/ })

},[211]);
//# sourceMappingURL=index.js.map