<template>
  <div class="container">
    <div class="GatewayList" v-if="list.length > '0'">
      <wux-cell-group>
        <wux-cell
          :title="item.name"
          isLink
          v-for="(item,index) in list"
          :key="index"
          :url="'/pages/device/index?gatewayId=' + item.mac + '&name=' + item.name + '&editId=' + item.id"
        ></wux-cell>
      </wux-cell-group>
    </div>

    <div class="prompts" v-else>
      <div class="box">
        <div class="ioc" @click="scanCode">
          <wux-icon type="ios-add" size="42" color="#cccccc" class="iocs"/>
        </div>
        <div class="title">点击“+”添加设备</div>
      </div>
    </div>
  </div>
</template>

<script>
import { QRCode, ListCh } from "@/utils/index";
export default {
  data() {
    return {
      list: "",
      icon: "../20.png"
    };
  },
  methods: {
    GetData() {
      this.ajax("device/getGatewayList").then(res => {
        this.list = res.content;
      });
    },
    scanCode() {
      let _this = this;
      wx.scanCode({
        success(res) {
          let code = QRCode(res.result);
          if (code) {
            if (ListCh(_this.searchData, code)) {
              wx.navigateTo({
                url: `/pages/device/index?${code}&name=&img_url=`
              });
            } else {
              _this.Toast("forbidden", "您已添加该设备");
            }
          } else {
            _this.Toast("forbidden", "该二维码参数有误");
          }
        },
        fail(err) {
          _this.Toast("forbidden", "扫码失败");
        }
      });
    }
  },
  onShow() {
    this.GetData();
  }
};
</script>
