global.webpackJsonp([9],{

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wux_index__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wux_styles_index_wxss__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__wux_styles_index_wxss__);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);




//Vue.prototype.$url = 'http://172.16.1.117:5000'//测试接口
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'https://nhjk.uniteddata.com'; //线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.request({
      url: _this.$url + ('/' + url),
      data: data,
      method: method ? 'POST' : 'GET',
      header: {
        'Authorization': wx.getStorageSync('Authorization'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function success(res) {
        //console.log(res);
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {
  Object(__WEBPACK_IMPORTED_MODULE_5__wux_index__["b" /* $wuxToast */])().show({
    type: type,
    duration: 1500,
    color: "#ffffff",
    text: text
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    pages: [],
    window: {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#3a9cff",
      "navigationBarTextStyle": "white",
      "enablePullDownRefresh": false
    },
    "tabBar": {
      "borderStyle": "black",
      "color": "#999999",
      "backgroundColor": "#ffffff",
      "selectedColor": "#3a9cff",
      "list": [{
        "selectedIconPath": "static/img/home-c.png",
        "iconPath": "static/img/home.png",
        "pagePath": "pages/index/index",
        "text": "首页"
      }, {
        "selectedIconPath": "static/img/list-c.png",
        "iconPath": "static/img/list.png",
        "pagePath": "pages/list/index",
        "text": "设备"
      }, {
        "selectedIconPath": "static/img/product-c.png",
        "iconPath": "static/img/product.png",
        "pagePath": "pages/products/index",
        "text": "产品"
      }, {
        "selectedIconPath": "static/img/my-c.png",
        "iconPath": "static/img/my.png",
        "pagePath": "pages/my/index",
        "text": "我的"
      }]
    }
  }
});

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(91);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(90)
}
var normalizeComponent = __webpack_require__(5)
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

/***/ 90:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["a"] = ({
  mpType: "app",
  computed: {
    login: function login() {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].state.Login;
    }
  },
  methods: {
    Setting: function Setting() {
      var _this = this;
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting["scope.userInfo"]) {
            _this.Login();
          } else {
            wx.reLaunch({
              url: "/pages/login/index"
            });
          }
        }
      });
    },
    Login: function Login() {
      //用户登录
      var _this = this;
      wx.login({
        success: function success(res) {
          if (res.code) {
            _this.ajax("user/login", { code: res.code }).then(function (res) {
              //console.log(res);
              wx.setStorage({
                key: "Authorization",
                data: res.content,
                success: function success() {
                  _this.GetList();
                }
              });
            });
          } else {
            console.log("登录失败！" + res.errMsg);
          }
        }
      });
    },
    GetList: function GetList() {
      //定时请求列表
      var _this = this;
      setInterval(List, 50000);
      function List() {
        _this.ajax("device/getDeviceList").then(function (res) {
          if (res.content.length > "0") {
            __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit("DeviceList", res.content);
          }
        });
      }
      List();
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

},[50]);
//# sourceMappingURL=app.js.map