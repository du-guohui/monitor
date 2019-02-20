<template>
  <div class="container">
    <div v-if="!load">
      <div class="prompts" v-if="GatewayLength > '0'">
        <div class="box">
          <div class="title">我的网关</div>
        </div>
      </div>

      <div class="GatewayList" v-if="GatewayLength > '0'">
        <wux-cell-group>
          <wux-cell
            :title="item.name"
            isLink
            v-for="(item,index) in GatewayList"
            :key="index"
            :url="'/pages/device/index?gatewayId=' + item.mac + '&name=' + item.name + '&editId=' + item.id"
          ></wux-cell>
        </wux-cell-group>
      </div>

      <div class="prompt" v-else>
        <div class="box">
          <div class="title" v-if="GatewayLength == '0'">您还没有网关，请先添加网关</div>
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
import { $wuxLoading } from "../../../static/wux/index";
import { QRCode, ListCh, GatewayCh } from "@/utils/index";
import store from "@/store";
export default {
  data() {
    return {
      load: true
    };
  },
  computed: {
    Loading() {
      return store.state.Loading;
    },
    GatewayList() {
      return store.state.Data.Gateway;
    },
    GatewayLength() {
      return store.state.Data.Gateway.length;
    }
  },
  methods: {
    scanCode() {
      let _this = this;
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
        let code = QRCode(res);
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
    }
  },
  watch: {
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
    }
  }
};
</script>

<style scoped>
.prompts {
  overflow: hidden;
}
.prompts .box {
  overflow: hidden;
  padding: 7px 10px;
}

.prompts .title {
  color: #999999;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 400;
  float: left;
  line-height: 30px;
}

.prompts .ioc {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #0093fb;
  position: relative;
  float: right;
}

.prompts .iocs {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

