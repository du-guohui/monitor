import Vue from 'vue'
import App from '@/App'
import { formatDate } from "@/utils/index";
import MpvueRouterPatch from 'mpvue-router-patch';
Vue.use(MpvueRouterPatch);

import { $wuxToast } from "@/wux/index";
import '@/wux/styles/index.wxss';

Vue.prototype.$url = 'http://172.16.1.117:5000'//测试接口
Vue.prototype.$wss = 'ws://172.16.1.117:5005'//测试接口
// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口
// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com'//线上接口

Vue.prototype.ajax = function (url, data, method) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${this.$url}/${url}`,
      data: data,
      method: method ? 'POST' : 'GET',
      header: {
        'Authorization': wx.getStorageSync('Authorization'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res);
        resolve(res.data);
      },
      fail(err) {
        reject(err);
      }
    });
  })
}

Vue.prototype.Toast = function (type, text) {
  $wuxToast().show({
    type: type,
    duration: 1500,
    color: "#ffffff",
    text: text
  });
}

Vue.filter('Temperature', function (value) {
  value = Number(value);
  return value.toFixed(1);
});

Vue.filter('formatDate', function (date) {
  console.log(Number(date));
  
  return date
});



Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  ...App
})

app.$mount();

export default {
  config: {
    pages: [

    ],
    window: {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#0093fb",
      "navigationBarTextStyle": "white",
      "enablePullDownRefresh": false
    },
    "tabBar": {
      "borderStyle": "#cccccc",
      "color": "#666666",
      "backgroundColor": "#ffffff",
      "selectedColor": "#0093fb",
      "list": [{
        "selectedIconPath": "static/img/1.png",
        "iconPath": "static/img/5.png",
        "pagePath": "pages/index/index",
        "text": "分析"
      }, {
        "selectedIconPath": "static/img/2.png",
        "iconPath": "static/img/6.png",
        "pagePath": "pages/list/index",
        "text": "设备"
      }, {
        "selectedIconPath": "static/img/3.png",
        "iconPath": "static/img/7.png",
        "pagePath": "pages/products/index",
        "text": "产品"
      }, {
        "selectedIconPath": "static/img/4.png",
        "iconPath": "static/img/8.png",
        "pagePath": "pages/my/index",
        "text": "我的"
      }]
    }
  }
}
