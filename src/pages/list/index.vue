<template>
  <div class="container">
    <div v-if="!load">
      <div v-if="DeviceLength > '0'">
        <div class="list-search">
          <div class="list-search-left">
            <wux-search-bar placeholder="请输入关键词" :value="search" clear @change="onChange"/>
          </div>
          <div class="list-search-right" @click="scanCode">
            <img src="/static/img/11.png" alt>
          </div>
        </div>

        <div class="group-list">
          <wux-accordion-group controlled :current="current" @change="groupChange">
            <wux-accordion
              v-for="(group,index) in searchData"
              :key="index"
              v-if="!group.group.is_default"
            >
              <div slot="header" class="group-top">
                <div
                  class="title"
                >{{group.group.name + ' (' + group.group.ol + '/' + group.device_list.length +')'}}</div>
                <div class="ts" v-show="search ==''">
                  <div class="uonline" v-if="group.group.ol != group.device_list.length">
                    <img src="/static/img/uo.png" alt>
                    {{group.device_list.length - group.group.ol}}
                  </div>
                  <div class="err" v-if="group.group.err > '0'">
                    <img src="/static/img/err.png" alt>
                    {{group.group.err}}
                  </div>
                </div>
              </div>
              <div class="list" v-if="group.device_list.length > '0'">
                <div class="grids">
                  <wux-grids :bordered="bordered" square>
                    <wux-grid v-for="(item,i) in group.device_list" :key="i">
                      <Grid :data="item"></Grid>
                    </wux-grid>
                  </wux-grids>
                </div>
              </div>
            </wux-accordion>
            <wux-accordion
              v-for="(group,index) in searchData"
              :key="index"
              v-if="group.group.is_default"
            >
              <div slot="header" class="group-top">
                <div
                  class="title"
                >{{group.group.name + ' (' + group.group.ol + '/' + group.device_list.length +')'}}</div>
                <div class="ts" v-show="search ==''">
                  <div class="uonline" v-if="group.group.ol != group.device_list.length">
                    <img src="/static/img/uo.png" alt>
                    {{group.device_list.length - group.group.ol}}
                  </div>
                  <div class="err" v-if="group.group.err > '0'">
                    <img src="/static/img/err.png" alt>
                    {{group.group.err}}
                  </div>
                </div>
              </div>
              <div class="list" v-if="group.device_list.length > '0'">
                <div class="grids">
                  <wux-grids :bordered="bordered" square>
                    <wux-grid v-for="(item,i) in group.device_list" :key="i">
                      <Grid :data="item"></Grid>
                    </wux-grid>
                  </wux-grids>
                </div>
              </div>
            </wux-accordion>
          </wux-accordion-group>
        </div>
      </div>

      <div class="prompt" v-if="none">
        <div class="box">
          <div class="title">您还没有设备，请先添加设备</div>
          <div class="ioc" @click="scanCode">
            <wux-icon type="ios-add" size="30" color="#ffffff" class="iocs"/>
          </div>
        </div>
      </div>
    </div>

    <wux-toast id="wux-toast"/>
    <wux-loading id="wux-loading"/>
  </div>
</template>

<script>
import store from "@/store";
import { $wuxLoading } from "../../../static/wux/index";
import { QRCode, ListCh, GatewayCh } from "@/utils/index";
import Grid from "@/component/list-grid.vue";
export default {
  components: {
    Grid
  },
  computed: {
    Loading() {
      return store.state.Loading;
    },
    Login() {
      return store.state.Login;
    },
    DeviceList() {
      return store.state.Data.Device;
    },
    GatewayList() {
      return store.state.Data.Gateway;
    },
    DeviceLength() {
      return store.state.Data.DeviceLength;
    },
    AlarmList() {
      return store.state.Data.Alarm;
    },
    searchData() {
      if (this.DeviceList) {
        let list = JSON.parse(JSON.stringify(this.DeviceList));
        let search = new RegExp(this.search, "i");
        let arr = [];
        for (let i in list) {
          arr[i] = {};
          arr[i].group = list[i].group;
          arr[i].device_list = [];
          let list2 = list[i].device_list;
          for (let s in list2) {
            if (search.test(list2[s].name)) {
              arr[i].device_list.push(list2[s]);
            }
          }
        }
        return arr;
      }
    }
  },
  data() {
    return {
      current: [],
      bordered: false,
      search: "",
      QueryUrl: "",
      load: true,
      none: false,
      code: false,
      path: ""
    };
  },
  methods: {
    groupChange(e) {
      this.current = e.mp.detail.key;
    },
    onChange(e) {
      this.search = e.mp.detail.value;
    },
    scanCode() {
      let _this = this;
      _this.code = true;
      wx.scanCode({
        success(res) {
          if (res.scanType == "WX_CODE") {
            let key = res.path.split("?");
            _this.Code(key[1]);
          } else {
            _this.Code(res.result);
          }
        },
        fail(err) {
          _this.Toast("forbidden", "扫码失败");
        }
      });
    },
    Code(res) {
      if (!this.load) {
        let code = QRCode(res ? res : this.QueryUrl);
        if (code) {
          if (code.indexOf("gatewayId=") != -1) {
            if (GatewayCh(this.GatewayList, code)) {
              wx.navigateTo({
                url: `/pages/device/index?${code}&name=&img_url=`
              });
            } else {
              this.Toast("forbidden", "您已添加该网关");
            }
          } else if (code.indexOf("devEui=") != -1) {
            if (ListCh(this.DeviceList, code)) {
              wx.navigateTo({
                url: `/pages/device/index?${code}&name=&img_url=`
              });
            } else {
              this.Toast("forbidden", "您已添加该设备");
            }
          }
        } else {
          this.Toast("forbidden", "该二维码参数有误");
        }
      } else {
        setTimeout(() => this.Code(), 200);
      }
      this.code = false;
    },
    GetAlarm() {
      if (this.AlarmList) {
        let list = this.searchData;
        for (let i in list) {
          let device = list[i].device_list;
          for (let s in device) {
            let vals = this.AlarmList.filter(
              item => item.devEui == device[s].devEui
            ).length;
            this.searchData[i].group.err = this.searchData[i].group.err + vals;
            this.searchData[i].device_list[s].err = vals;
          }
        }
      }
    }
  },
  onLoad(e) {
    // if (JSON.stringify(this.$route.query) != "{}") {
    //   let _this = this;
    //   if (_this.$route.query.gatewayId) {
    //     _this.QueryUrl = "gatewayId=" + _this.$route.query.gatewayId;
    //     _this.Code();
    //   } else if (_this.$route.query.devEui) {
    //     _this.QueryUrl =
    //       "devEui=" +
    //       _this.$route.query.devEui +
    //       "&appKey=" +
    //       this.$route.query.appKey;
    //     _this.Code();
    //   }
    // }
  },
  // onShow() {
  //   if (!this.code) {
  //     store.commit("DeviceList", this);
  //   }
  // },
  watch: {
    search() {
      this.GetAlarm();
    },
    DeviceLength() {
      setTimeout(() => {
        if (this.DeviceLength == "0") {
          this.none = true;
        } else {
          this.none = false;
          for (let i in this.DeviceList) {
            this.current.push(i);
          }
        }
      }, 300);
    },
    Loading() {
      let _this = this;
      if (this.$route) {
        this.$wuxLoading = $wuxLoading();
        if (this.Loading) {
          this.$wuxLoading.show({
            text: "数据加载中"
          });
        } else {
          setTimeout(() => {
            this.$wuxLoading.hide();
          }, 800);
        }
      }
      if (this.Loading) {
        _this.load = true;
      } else {
        setTimeout(() => {
          _this.load = false;
        }, 800);
      }
    },
    DeviceList() {
      this.GetAlarm();
    }
  }
};
</script>

<style scoped>
.group-top {
  position: relative;
  width: 100%;
}
.group-top .ts {
  position: absolute;
  right: 20px;
  top: 0;
  text-align: right;
  font-size: 11px;
}
.group-top .ts img {
  float: left;
  width: 14px;
  height: 14px;
  margin-right: 4px;
  margin-top: 13px;
}
.group-top .err,
.group-top .uonline {
  float: left;
  font-size: 11px;
  font-weight: bold;
  padding-left: 6px;
}
.group-top .err {
  color: #d81e06;
}
.group-top .uonline {
  color: #cccccc;
}
.list-search {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: #0093fb;
  z-index: 10;
  height: 60px;
  overflow: hidden;
}
.list-search-left {
  overflow: hidden;
  float: left;
  width: 305px;
  height: 36px;
  padding: 13px 0 13px 14px;
  border-radius: 80px;
}
.list-search-right {
  float: right;
  width: 55px;
  height: 60px;
  position: relative;
}
.list-search-right img {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.group-list {
  margin-top: 60px;
  overflow: hidden;
}

.list {
  /* overflow: hidden; */
}
.list-top {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  color: #333333;
  font-size: 13.5px;
  background-color: #ffffff;
}
.grids {
  overflow: hidden;
  margin: 5px 4px;
  position: relative;
}
</style>