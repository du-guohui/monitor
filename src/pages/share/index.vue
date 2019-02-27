<template>
  <div class="container">
    <wux-loading id="wux-loading"/>
  </div>
</template>

<script>
import store from "@/store";
import { $wuxLoading } from "../../../static/wux/index";
export default {
  computed: {
    Loading() {
      return store.state.Loading;
    }
  },
  data() {
    return {
      shareId: "",
      load: true
    };
  },
  methods: {
    GetData() {
      if (!this.load) {
        this.ajax(
          "device/device/share_device/",
          {
            device_id_list: this.shareId
          },
          "POST"
        ).then(res => {
          store.commit("DeviceList", this);
          wx.reLaunch({
            url: "/pages/list/index"
          });
        });
      } else {
        setTimeout(() => {
         this.GetData()
        }, 800);
      }
    }
  },
  onLoad(e) {
    this.shareId = e.shareId;
  },
  onShow() {
    this.GetData();
  },
  watch: {
    Loading() {
      let _this = this;
      if (_this.Loading && _this.$route) {
        // _this.GetData();
      }
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
