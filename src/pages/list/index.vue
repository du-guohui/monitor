<template>
  <div class="container">
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
          :title="group.group.name + '  (' + group.group.ol + '/' + group.device_list.length +')'"
          v-for="(group,index) in DeviceList"
          :key="index"
        >
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

    <!-- <div class="list">
      <div class="list-top">
        温湿度传感器 （
        <span class="color1">{{DeviceOl}}</span>
        /{{searchData.length}} ）
      </div>
    </div>-->
    <!-- <div class="prompts" v-else>
      <div class="box">
        <div class="ioc" @click="scanCode">
          <wux-icon type="ios-add" size="42" color="#cccccc" class="iocs"/>
        </div>
        <div class="title">点击“+”添加设备</div>
      </div>
    </div>-->
    <wux-toast id="wux-toast"/>
  </div>
</template>

<script>
import store from "@/store";
import { QRCode, ListCh } from "@/utils/index";
import Grid from "@/component/list-grid.vue";
export default {
  components: {
    Grid
  },
  computed: {
    DeviceList() {
      return store.state.DeviceList;
    },
    // searchData() {
    //   var search = this.search;
    //   return this.DeviceList.filter(function(product) {
    //     return Object.keys(product).some(function(key) {
    //       return (
    //         String(product[key])
    //           .toLowerCase()
    //           .indexOf(search) > -1
    //       );
    //     });
    //   });
    //   return this.DeviceList;
    // }
  },
  data() {
    return {
      current: ["0"],
      bordered: false,
      search: ""
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
  mounted() {
    //store.commit("ChangeList");
  }
};
</script>

<style scoped>
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
  overflow: hidden;
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
}
</style>