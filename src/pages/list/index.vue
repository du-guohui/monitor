<template>
  <div class="container">
    <div class="list-search">
      <div class="list-search-left">
        <wux-search-bar placeholder="请输入关键词" :value="search" clear @change="onChange"/>
      </div>
      <div class="list-search-right">
        <wux-button block type="positive" size="small" @click="scanCode" class="add-button">
          <wux-icon type="ios-add" size="22"/>
        </wux-button>
      </div>
    </div>

    <wux-grids :bordered="bordered" square class="grids">
      <wux-grid v-for="item in searchData" :key="item.id">
        <a class="grid" :href="'/pages/detail/index?devEui=' + item.devEui">
          <div class="name wux-ellipsis--l2 wux-text--left">{{item.name}}</div>
          <div class="parameter">
            <!-- <wux-tag v-if="item.temperature">{{item.temperature}}</wux-tag>
            <wux-tag v-if="item.sht30">{{item.sht30}}</wux-tag>
            <wux-tag v-if="item.humidity">{{item.humidity}}</wux-tag>
            <wux-tag v-if="item.battery">{{item.battery}}</wux-tag>
            <wux-tag v-if="item.formaldehyde">{{item.formaldehyde}}</wux-tag>
            <wux-tag v-if="item.light">{{item.light}}</wux-tag>-->
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
import { QRCode, ListCh } from "@/utils/index";
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
            if (ListCh(_this.searchData, code)) {
              wx.navigateTo({
                url: `/pages/device/index?${code}&name=&img_url=`
              });
            } else {
              $wuxToast().show({
                type: "forbidden",
                duration: 1500,
                color: "#fff",
                text: "您已添加该设备"
              });
            }
          } else {
            $wuxToast().show({
              type: "forbidden",
              duration: 1500,
              color: "#fff",
              text: "该二维码参数有误"
            });
          }
        },
        fail(err) {
          $wuxToast().show({
            type: "forbidden",
            duration: 1500,
            color: "#fff",
            text: "扫码失败"
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.list-search {
  /* position: fixed; */
  left: 0;
  right: 0;
  top: 0;
  background: #ffffff;
  z-index: 10;
  padding: 0 5px;
  height: 54px;
  overflow: hidden;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2)
}

.list-search-left {
  overflow: hidden;
  float: left;
  width: 78%;
  height: 42px;
  padding: 5px 0 5px 2%;
}

.list-search-right {
  float: right;
  margin: 0 2%;
  width: 15%;
  height: 40px;
  position: relative;
}

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
