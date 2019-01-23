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

      wx.onSocketMessage(function(res) {
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
      _this.ajax("device/getDeviceList").then(res => {
        if (res.content.length > "0") {
          store.commit("DeviceList", res.content);
        }
      });
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

.bottom-button {
  position: fixed;
  bottom: 30px;
  left: 10%;
  right: 10%;
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
</style>
