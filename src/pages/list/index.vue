<template>
  <div class="container">
    <wux-row>
      <wux-col span="10">
        <view>
          <wux-search-bar :value="search" clear @change="onChange"/>
        </view>
      </wux-col>
      <wux-col span="2">
        <view>
          <wux-button block type="positive" size="small" @click="scanCode">
            <wux-icon type="ios-add"/>
          </wux-button>
        </view>
      </wux-col>
    </wux-row>

    <wux-grids :bordered="bordered" square class="grids">
      <wux-grid v-for="item in searchData" :key="item.id">
        <a class="grid" :href="'/pages/detail/index?devEui=' + item.devEui">
          <div class="name wux-ellipsis--l2 wux-text--left">{{item.name}}</div>
          <div class="parameter">
            {{item.devEui}}
             <!-- <wux-tag v-if="item.temperature">{{item.temperature}}</wux-tag>
            <wux-tag v-if="item.sht30">{{item.sht30}}</wux-tag>
            <wux-tag v-if="item.humidity">{{item.humidity}}</wux-tag>
            <wux-tag v-if="item.battery">{{item.battery}}</wux-tag>
            <wux-tag v-if="item.formaldehyde">{{item.formaldehyde}}</wux-tag>
            <wux-tag v-if="item.light">{{item.light}}</wux-tag> -->
          </div>
        </a>
      </wux-grid>
    </wux-grids>

    <wux-toast id="wux-toast"/>
  </div>
</template>

<script>
import { $wuxToast } from "../../wux/index";
import store from "@/store";
import { QRCode } from "@/utils/index";
export default {
  computed: {
    DeviceList() {
      return store.state.DeviceList;
    },
    searchData() {
      var search = this.search;
      if (search) {
        return this.DeviceList.filter(function(product) {
          return Object.keys(product).some(function(key) {
            return (
              String(product[key])
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        });
      }
      return this.DeviceList;
    }
  },
  data() {
    return {
      bordered: false,
      search: ""
    };
  },
  methods: {
    onChange(e) {
      this.search = e.mp.detail.value;
    },
    scanCode() {
      let _this = this;
      wx.scanCode({
        success(res) {
          let code = QRCode(res.result);
          if (code) {
            // let str = code.split("&");
            // let list = [];
            // let ps = "";
            // for (let i in str) {
            //   for (let s in _this.searchData) {
            //     if (str[i].indexOf(_this.searchData[s].devEui) != -1) {
            //       $wuxToast().show({
            //         type: "forbidden",
            //         duration: 1500,
            //         color: "#fff",
            //         text: "您已添加该设备"
            //       });
            //       ps = true;
            //       return false;
            //     }
            //   }
            // }
            // if (ps) {
            //   wx.navigateTo({
            //     url: `/pages/device/index?${code}&name=&img_url=`
            //   });
            // }

                        wx.navigateTo({
                url: `/pages/device/index?${code}&name=&img_url=`
              });
          } else {
            $wuxToast().show({
              type: "forbidden",
              duration: 1500,
              color: "#fff",
              text: "该二维码参数有误",
              success: () => console.log("该二维码参数有误")
            });
          }
        },
        fail(err) {
          $wuxToast().show({
            type: "forbidden",
            duration: 1500,
            color: "#fff",
            text: "扫码失败",
            success: () => console.log("扫码失败")
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.grid {
  width: 95px;
  height: 95px;
  margin: 10px;
  display: block;
  background: #ffffff;
  padding: 10px;
}
.grid .name {
  color: #000000;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  height: 40px;
}
.grid .parameter {
  font-size: 12px;
}
</style>
