<template>
  <div class="container login">
    <img class="img" src="/static/img/back.png">
    <div class="footer-button">
      <wux-button openType="getUserInfo" @getuserinfo="userinfo" block type="positive">微信登录</wux-button>
    </div>
    <wux-loading id="wux-loading"/>
  </div>
</template>

<script>
import { $wuxLoading } from "../../../static/wux/index";
import store from "@/store";
export default {
  methods: {
    userinfo(e) {
      let _this = this;
      if (e.mp.detail.rawData) {
        wx.setStorage({
          key: "UserInfo",
          data: e.mp.detail.rawData,
          success(res) {
            store.commit("Login");
            if (_this.$route.query.shareId != "undefined") {
              wx.reLaunch({
                url: "/pages/share/index?shareId=" + _this.$route.query.shareId
              });
              // store.commit("Login");
            } else {
              // store.commit("Login");
              wx.reLaunch({
                url: "/pages/index/index"
              });
            }
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.footer-button{
  position: fixed;
  bottom: 20px;
  width: 80%;
  left: 10%;
  right: 10%;
  z-index: 10;
}
.login {
  background-color: #f8fbff;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.login {
  height: 100%;
}
.img {
  width: 375px;
  height: 651px;
}
</style>
