<template>
  <div class="container login">
    <img class="img" src="/static/img/back.png">
    <div class="bottom-button">
      <wux-button openType="getUserInfo" @getuserinfo="userinfo" block type="positive">微信登录</wux-button>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  methods: {
    userinfo(e) {
      if (e.mp.detail.rawData) {
        wx.setStorage({
          key: "UserInfo",
          data: e.mp.detail.rawData,
          success(res) {
            wx.reLaunch({
              url: "/pages/index/index"
            });
            store.commit("Login");
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.login{
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

.login{
  height: 100%;
}
.img {
  height: 500px;
}
</style>
