import Vue from 'vue'
import App from '@/App'
import MpvueRouterPatch from 'mpvue-router-patch';
Vue.use(MpvueRouterPatch);

import { $wuxToast } from "@/wux/index";
import '@/wux/styles/index.wxss';

//Vue.prototype.$url = 'http://172.16.1.117:5000'//测试接口
Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

Vue.prototype.ajax = function (url, data, method) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: this.$url + `/${url}`,
      data: data,
      method: method ? 'POST' : 'GET',
      header: {
        'Authorization': wx.getStorageSync('Authorization'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        //console.log(res);
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
}
