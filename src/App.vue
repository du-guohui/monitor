<script>
import store from "./store";
export default {
  mpType: "app",
  computed: {
    login() {
      return store.state.Login;
    }
  },
  methods: {
    Setting() {
      //验证用户授权
      let _this = this;
      wx.getSetting({
        success(res) {
          if (res.authSetting["scope.userInfo"]) {
            _this.Login();
          } else {
            wx.reLaunch({
              url: "/pages/login/index"
            });
          }
        }
      });
    },
    Login() {
      //用户登录
      let _this = this;
      wx.login({
        success(res) {
          if (res.code) {
            _this.ajax("user/login", { code: res.code }).then(res => {
              wx.setStorage({
                key: "Authorization",
                data: res.content,
                success() {
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
      //定时请求列表
      let _this = this;
      setInterval(List, 50000);
      function List() {
        _this.ajax("device/getDeviceList").then(res => {
          if (res.content.length > "0") {
            store.commit("DeviceList", res.content);
          }
        });
      }
      List();
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
.footer-button{
  position: fixed;
  bottom: 40px;
  left: 40px;
  right: 40px;
  z-index: 1;
}
page,
.container {
  background-color: #eeeeee;
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
  background: #ffffff;
}

.calm {
  color: #e51c24;
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
</style>
