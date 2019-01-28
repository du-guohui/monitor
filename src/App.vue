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
  methods: {
    Setting() {
      //验证用户授权
      let _this = this;
      wx.getSetting({
        success(res) {
          if (
            res.authSetting["scope.userInfo"] &&
            wx.getStorageSync("UserInfo") != ""
          ) {
            _this.Login();
          } else {
            wx.reLaunch({
              url: "/pages/login/index"
            });
          }
        }
      });
    },
    WebSocket() {
      let _this = this;
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
        _this.seTList();
      });

      wx.onSocketClose(function(res) {
        console.log("WebSocket 已关闭！");
        _this.seTList();
      });

      wx.onSocketMessage(function(res) {
        console.log(res.data);
        store.commit("ListUpdate", res.data);
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
                    _this.WebSocket();
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
    GetList() {
      //获取设备列表
      let _this = this;
      _this.ajax("device/getDeviceList", { no_fake: true }).then(res => {
        if (res.content[0].devEui) {
          store.commit("DeviceList", res.content);
        }
      });
    },
    seTList() {
      setInterval(this.GetList, 10000);
    }
  },
  created() {
    this.Setting();
  },
  watch: {
    login() {
      this.Login();
    },
    list() {
      this.GetList();
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
.prompts {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
}
.prompts .box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.prompts .title {
  color: #999999;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 18px;
  font-weight: 400;
}

.prompts .ioc {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin: 12px auto;
  background: #ffffff;
  position: relative;
}

.prompts .iocs {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
</style>
