<template>
  <div class="container">
    <wux-row>
      <wux-col span="10">
        <view>
          <wux-search-bar clear/>
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
      <wux-grid v-for="item in DeviceList" :key="item.id">
        <a class="grid" :href="'/pages/detail/index?devEui=' + item.devEui">
          <div class="name wux-ellipsis--l2 wux-text--left">{{item.name}}</div>
          <div class="parameter"></div>
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
    }
  },
  data() {
    return {
      bordered: false
    };
  },
  methods: {
    scanCode() {
      let _this = this;
      wx.scanCode({
        success(res) {
          let code = QRCode(res.result);
          if (code) {
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
