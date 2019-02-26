<script>
import store from "./store";
export default {
  mpType: "app",
  computed: {
    login() {
      return store.state.Login;
    },
    list() {
      return store.state.List;
    }
  },
  data() {
    return {};
  },
  methods: {
    Setting() {
      //验证用户授权
      let _this = this;
      wx.getSetting({
        success(res) {
          if (
            res.authSetting["scope.userInfo"]
          ) {
            _this.Login();
          } else {
            //重新授权
            // JSON.stringify(_this.$router.currentRoute.query) != "{}"
            if (_this.$router.currentRoute.query) {
              wx.reLaunch({
                url:
                  "/pages/login/index?shareId=" +
                  _this.$router.currentRoute.query.shareId
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
    WebSocket() {
      // let _this = this;
      wx.connectSocket({
        url: this.$wss,
        method: "GET",
        header: {
          "content-type": "application/json"
        },
        success: function(res) {
          console.log("连接成功" + JSON.stringify(res));
        },
        fail: function(res) {
          console.log("连接失败" + res);
        }
      });

      wx.onSocketOpen(function(res) {
        wx.sendSocketMessage({
          data: JSON.stringify({
            Authorization: wx.getStorageSync("Authorization")
          })
        });
      });

      wx.onSocketError(function(res) {
        console.log("WebSocket 发生错误！");
      });

      wx.onSocketClose(function(res) {
        console.log("WebSocket 已关闭！");
      });

      wx.onSocketMessage(function(res) {
        store.commit("Update", res.data);
      });
    },
    Login() {
      //用户登录
      let _this = this;
      wx.login({
        success(res) {
          if (res.code) {
            let UserInfo = JSON.parse(wx.getStorageSync("UserInfo"));
            _this
              .ajax("user/login", {
                code: res.code,
                nickName: UserInfo.nickName,
                gender: UserInfo.gender,
                country: UserInfo.country,
                province: UserInfo.country,
                city: UserInfo.country,
                avatarUrl: UserInfo.avatarUrl
              })
              .then(res => {
                wx.setStorage({
                  key: "Authorization",
                  data: res.content,
                  success() {
                    _this.GetList();
                    _this.WebSocket();
                  }
                });
              });

            wx.getSystemInfo({
              success: function(res) {
                wx.setStorage({
                  key: "Info",
                  data: res.platform,
                  success() {}
                });
              }
            });
          } else {
            console.log("登录失败！" + res.errMsg);
          }
        }
      });
    },
    GetList() {
      //获取设备列表
      store.commit("DeviceList", this);
      //获取报警列表
      store.commit("AlarmList", this);
      //获取网关列表
      store.commit("GatewayList", this);
    }
  },
  created() {
    this.Setting();
  },
  watch: {
    login() {
      this.Login();
    }
  }
};
</script>

<style>
page,
.container {
  background-color: #eeeeee;
}
.footer-button {
  position: fixed;
  bottom: 40px;
  left: 40px;
  right: 40px;
  z-index: 1;
}
.color1 {
  color: #0093fb;
}

image {
  width: 100%;
}

.wux-grids {
  background-color: transparent !important;
}

.buttons {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 13.5px;
  border-radius: 6px;
  color: #ffffff;
}

.positive.buttons {
  background-color: #0093fb;
}
.calm.buttons {
  background-color: #e51c24;
}

* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}

.wux-cell__text {
  text-align: left;
  color: #333333;
  font-size: 13.5px;
  line-height: 26px;
  font-weight: 400;
}

.wux-search-bar__search {
  top: 12px !important;
}

.alarm-list .wux-card__content {
  font-size: 17px;
  font-weight: 400;
  color: #666666;
}

.alarm-list .text {
  font-size: 14px;
  color: #666666;
}
.alarm-list .wux-card__extra {
  display: block;
  font-size: 12px;
  flex: 0.15;
  -ms-flex: 0.15;
  width: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 4px;
  background: #eeeeee;
  color: #666666;
}

.alarm-list .d1 .wux-card__extra,
.alarm-list .d1 .text {
  color: #d81e06;
}

.alarm-list .d2 .wux-card__extra,
.alarm-list .d2 .text {
  color: #e6b726;
}

.alarm-list .time {
  font-size: 13px;
  line-height: 20px;
  color: #666666;
}

.group-list .wux-accordion__bd,
.group-list .wux-cell-group__bd {
  padding: 0 !important;
  background: none !important;
}
.group-list .wux-accordion__hd {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  color: #333333;
  font-size: 13.5px;
  background-color: #ffffff;
}
.group-list .wux-accordion__arrow {
  top: 15px;
  right: 15px;
  width: 10px;
  height: 10px;
}
.wux-cell-group__hd {
  margin-bottom: 3px;
}

.group-box .wux-input,
.group-box .wux-input__label {
  line-height: 25px;
}
.group-box .wux-cell {
  padding: 5px 20px;
}
.group-box .wux-input__label {
  height: 30px;
  margin-top: 8px;
}

.group-list .checkbox .wux-cell:after {
  display: none;
}

.wux-button {
  font-size: 12px !important;
}

.wux-button--positive.wux-button--hover {
  background-color: #0093fb !important;
  color: #fff !important;
}

.wux-slider__handle {
  width: 20px !important;
  height: 20px !important;
}
.groups .wux-cell-group__bd {
  background: none;
}
.is_default .wux-cell {
  margin-top: 15px !important;
}
.groups .wux-cell {
  background: #ffffff !important;
}

.container .wux-button--positive.wux-button--hover,
.container .wux-button--positive {
  background-color: #0093fb !important;
  color: #fff !important;
}

.wux-select__button--confirm,
.wux-dialog__button--primary {
  color: #0093fb !important;
}

.prompt {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 99;
}

.prompt .box {
  width: 80%;
}

.prompt .box,
.prompt .iocs {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.prompt .ioc {
  background: #0093fb;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px auto;
  position: relative;
  overflow: hidden;
}
.prompt .title {
  line-height: 26px;
  font-size: 14px;
  text-align: center;
  font-weight: 300;
}

.GroupName .wux-cell {
  padding: 2px 5px;
}
.GroupName .wux-input__label {
  line-height: 40px;
  font-size: 13px;
}
.GroupName .wux-input__item {
  text-align: left;
}
</style>
