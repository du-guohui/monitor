global.webpackJsonp([18],{

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_wux_styles_index_wxss__);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);


__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口
// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口
// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口
// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口
// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.request({
      url: _this.$url + '/' + url,
      data: data,
      method: method ? method : 'GET',
      header: {
        'Authorization': wx.getStorageSync('Authorization'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function success(res) {
        // console.log(res.data);
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {
  Object(__WEBPACK_IMPORTED_MODULE_5__static_wux_index__["e" /* $wuxToast */])().show({
    type: type,
    duration: 1500,
    color: "#ffffff",
    text: text
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {
  value = Number(value);
  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    pages: [],
    window: {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#0093fb",
      "navigationBarTextStyle": "white",
      "enablePullDownRefresh": false
    },
    "permission": {
      "scope.userLocation": {
        "desc": "你的位置信息将用于小程序获取天气信息"
      }
    },
    "tabBar": {
      "borderStyle": "white",
      "color": "#666666",
      "backgroundColor": "#ffffff",
      "selectedColor": "#0093fb",
      "list": [{
        "selectedIconPath": "static/img/3.png",
        "iconPath": "static/img/7.png",
        "pagePath": "pages/index/index",
        "text": "报警"
      }, {
        "selectedIconPath": "static/img/2.png",
        "iconPath": "static/img/6.png",
        "pagePath": "pages/list/index",
        "text": "设备"
      }, {
        "selectedIconPath": "static/img/1.png",
        "iconPath": "static/img/5.png",
        "pagePath": "pages/statistics/index",
        "text": "分析"
      }, {
        "selectedIconPath": "static/img/4.png",
        "iconPath": "static/img/8.png",
        "pagePath": "pages/my/index",
        "text": "我的"
      }]
    }
  }
});

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(97);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(96)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64c21a03", Component.options)
  } else {
    hotAPI.reload("data-v-64c21a03", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 96:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(8);



/* harmony default export */ __webpack_exports__["a"] = ({
  mpType: "app",
  computed: {
    login: function login() {
      return __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.Login;
    },
    list: function list() {
      return __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.List;
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    Setting: function Setting() {
      //验证用户授权
      var _this = this;
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting["scope.userInfo"]) {
            _this.Login();
          } else {
            //重新授权
            // JSON.stringify(_this.$router.currentRoute.query) != "{}"
            if (_this.$router.currentRoute.query) {
              wx.reLaunch({
                url: "/pages/login/index?shareId=" + _this.$router.currentRoute.query.shareId
              });
            } else {
              wx.reLaunch({
                url: "/pages/login/index"
              });
            }
          }
        }
      });
    },
    WebSocket: function WebSocket() {
      var _this = this;
      wx.connectSocket({
        url: this.$wss,
        method: "GET",
        header: {
          "content-type": "application/json"
        },
        success: function success(res) {
          console.log("连接成功" + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(res));
        },
        fail: function fail(res) {
          console.log("连接失败" + res);
        }
      });

      wx.onSocketOpen(function (res) {
        wx.sendSocketMessage({
          data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()({
            Authorization: wx.getStorageSync("Authorization")
          })
        });
      });

      wx.onSocketError(function (res) {
        console.log("WebSocket 发生错误！");
      });

      wx.onSocketClose(function (res) {
        console.log("WebSocket 已关闭！");
        setTimeout(function () {
          _this.WebSocket();
        }, 30000);
      });

      wx.onSocketMessage(function (res) {
        __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].commit("Update", res.data);
      });
    },
    Login: function Login() {
      //用户登录
      var _this = this;
      wx.login({
        success: function success(res) {
          if (res.code) {
            var UserInfo = JSON.parse(wx.getStorageSync("UserInfo"));
            _this.ajax("user/login", {
              code: res.code,
              nickName: UserInfo.nickName,
              gender: UserInfo.gender,
              country: UserInfo.country,
              province: UserInfo.country,
              city: UserInfo.country,
              avatarUrl: UserInfo.avatarUrl
            }).then(function (res) {
              wx.setStorage({
                key: "Authorization",
                data: res.content,
                success: function success() {
                  _this.GetList();
                  _this.WebSocket();
                }
              });
            });

            wx.getSystemInfo({
              success: function success(res) {
                wx.setStorage({
                  key: "Info",
                  data: res.platform,
                  success: function success() {}
                });
              }
            });
          } else {
            console.log("登录失败！" + res.errMsg);
          }
        }
      });
    },
    GetList: function GetList() {
      //获取设备列表
      __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].commit("DeviceList", this);
      //获取报警列表
      // store.commit("AlarmList", this);
      //获取网关列表
      __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].commit("GatewayList", this);
    }
  },
  created: function created() {
    this.Setting();
  },

  watch: {
    login: function login() {
      this.Login();
    }
  }
});

/***/ })

},[71]);
//# sourceMappingURL=app.js.map