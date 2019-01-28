<template>
  <div class="container">
    <div class="my-top theme-back">
      <div class="avatar" v-if="user" :style="{backgroundImage:'url('+ user.avatarUrl +')'}"></div>
      <div class="name" v-if="user">{{user.nickName ? user.nickName : '昵称'}}</div>
      <img src="/static/img/13.png" alt>
    </div>

    <div class="list">
      <div class="list-cell">
        <wux-cell-group>
          <wux-cell title="网关管理" isLink url="/pages/GatewayList/index"></wux-cell>
        </wux-cell-group>
      </div>
      <div class="list-cell">
        <wux-cell-group>
          <wux-cell title="设置" isLink></wux-cell>
          <wux-cell title="系统介绍" isLink></wux-cell>
          <wux-cell title="产品介绍" isLink url="/pages/products/index"></wux-cell>
          <wux-cell title="企业介绍" isLink url="/pages/UnitedData/index"></wux-cell>
        </wux-cell-group>
      </div>
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
  height: 135px;
  z-index: 10;
}
.avatar {
  width: 80px;
  height: 80px;
  border: solid 4px #ffffff;
  background-size: cover;
  border-radius: 50%;
  margin: 0 auto 4px;
  background-color: #c9c9c9;
  position: relative;
  z-index: 2;
}
.name {
  text-align: center;
  line-height: 30px;
  font-size: 17px;
  font-weight: 400;
  color: #ffffff;
  position: relative;
  z-index: 2;
}
.my-top img {
  width: 100%;
  height: 177px;
  position: absolute;
  z-index: 0;
  top: -2px;
  left: 0;
  right: 0;
  bottom: 0;
}
.list {
  padding-top: 175px;
}
.list-cell {
  margin-top: 9px;
}
.login-button {
  position: fixed;
  bottom: 5%;
  left: 10%;
  right: 10%;
}
</style>
