global.webpackJsonp([17],{"/jSC":function(t,e){},M93x:function(t,e,n){"use strict";var o=n("Mw+1");var a=function(t){n("/jSC")},i=n("ybqe")(o.a,null,a,null,null);e.a=i.exports},"Mw+1":function(t,e,n){"use strict";var o=n("mvHQ"),a=n.n(o),i=n("olkN");e.a={mpType:"app",computed:{login:function(){return i.a.state.Login},list:function(){return i.a.state.List}},data:function(){return{}},methods:{Setting:function(){var t=this;wx.getSetting({success:function(e){e.authSetting["scope.userInfo"]?t.Login():t.$router.currentRoute.query?wx.reLaunch({url:"/pages/login/index?shareId="+t.$router.currentRoute.query.shareId}):wx.reLaunch({url:"/pages/login/index"})}})},WebSocket:function(){wx.connectSocket({url:this.$wss,method:"GET",header:{"content-type":"application/json"},success:function(t){console.log("连接成功"+a()(t))},fail:function(t){console.log("连接失败"+t)}}),wx.onSocketOpen(function(t){wx.sendSocketMessage({data:a()({Authorization:wx.getStorageSync("Authorization")})})}),wx.onSocketError(function(t){console.log("WebSocket 发生错误！")}),wx.onSocketClose(function(t){console.log("WebSocket 已关闭！")}),wx.onSocketMessage(function(t){i.a.commit("Update",t.data)})},Login:function(){var t=this;wx.login({success:function(e){if(e.code){var n=JSON.parse(wx.getStorageSync("UserInfo"));t.ajax("user/login",{code:e.code,nickName:n.nickName,gender:n.gender,country:n.country,province:n.country,city:n.country,avatarUrl:n.avatarUrl}).then(function(e){wx.setStorage({key:"Authorization",data:e.content,success:function(){t.GetList(),t.WebSocket()}})}),wx.getSystemInfo({success:function(t){wx.setStorage({key:"Info",data:t.platform,success:function(){}})}})}else console.log("登录失败！"+e.errMsg)}})},GetList:function(){i.a.commit("DeviceList",this),i.a.commit("AlarmList",this),i.a.commit("GatewayList",this)}},created:function(){this.Setting()},watch:{login:function(){this.Login()}}}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Dd8w"),a=n.n(o),i=n("//Fk"),c=n.n(i),s=n("5nAL"),r=n.n(s),u=n("M93x"),g=n("D4CW"),l=n("2FZb"),f=n("Irxk");n.n(f);r.a.use(g.a),r.a.prototype.$url="https://nhjk.uniteddata.com",r.a.prototype.$wss="wss://nhjk.uniteddata.com/wss",r.a.prototype.ajax=function(t,e,n){var o=this;return new c.a(function(a,i){wx.request({url:o.$url+"/"+t,data:e,method:n||"GET",header:{Authorization:wx.getStorageSync("Authorization"),"Content-Type":"application/x-www-form-urlencoded"},success:function(t){a(t.data)},fail:function(t){i(t)}})})},r.a.prototype.Toast=function(t,e){Object(l.e)().show({type:t,duration:1500,color:"#ffffff",text:e})},r.a.filter("Rounding",function(t){return(t=Number(t)).toFixed(0)}),r.a.config.productionTip=!1,u.a.mpType="app",new r.a(a()({},u.a)).$mount(),e.default={config:{pages:[],window:{backgroundTextStyle:"light",navigationBarBackgroundColor:"#0093fb",navigationBarTextStyle:"white",enablePullDownRefresh:!1},permission:{"scope.userLocation":{desc:"你的位置信息将用于小程序获取天气信息"}},tabBar:{borderStyle:"white",color:"#666666",backgroundColor:"#ffffff",selectedColor:"#0093fb",list:[{selectedIconPath:"static/img/1.png",iconPath:"static/img/5.png",pagePath:"pages/index/index",text:"分析"},{selectedIconPath:"static/img/2.png",iconPath:"static/img/6.png",pagePath:"pages/list/index",text:"设备"},{selectedIconPath:"static/img/3.png",iconPath:"static/img/7.png",pagePath:"pages/alarm/index",text:"报警"},{selectedIconPath:"static/img/4.png",iconPath:"static/img/8.png",pagePath:"pages/my/index",text:"我的"}]}}}}},["NHnr"]);