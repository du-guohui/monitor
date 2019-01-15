<template>
  <div class="container">
    <div class="my-top theme-back">
      <div class="avatar" v-if="user" :style="{backgroundImage:'url('+ user.avatarUrl +')'}"></div>
      <div class="name" v-if="user">{{user.nickName ? user.nickName : '昵称'}}</div>
    </div>
    <div class="list">
      <wux-cell-group>
        <wux-cell title="设置" isLink></wux-cell>
        <wux-cell title="公司介绍" isLink url="/pages/UnitedData/index"></wux-cell>
      </wux-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ""
    };
  },
  methods: {
    UserInfo() {
      let _this = this;
      if (wx.getStorageSync("UserInfo")) {
        _this.user = JSON.parse(wx.getStorageSync("UserInfo"));
      }
    }
  },
  onShow() {
    this.UserInfo();
  }
};
</script>

<style scoped>
.my-top {
  overflow: hidden;
  padding: 20px 0 20px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 125px;
  z-index: 10;
}
.avatar {
  width: 80px;
  height: 80px;
  border: solid 4px #ffffff;
  background-size: cover;
  border-radius: 50%;
  margin: 0 auto 10px;
  background-color: #c9c9c9;
}
.name {
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
}
.list {
  padding-top: 165px;
}
.login-button {
  position: fixed;
  bottom: 5%;
  left: 10%;
  right: 10%;
}
</style>
