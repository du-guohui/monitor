<template>
  <div class="container">
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

.img{
  height: 500px;
}
</style>
