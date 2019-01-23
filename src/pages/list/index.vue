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

    <div class="list" v-if="searchData.length > '0'">
      <div class="list-top">
        温湿度传感器 （
        <span class="color1">{{searchData.length}}</span>
        /{{searchData.length}} ）
      </div>
      <div class="grids">
        <wux-grids :bordered="bordered" square>
          <wux-grid v-for="item in searchData" :key="item.id">
            <a class="grid" :href="'/pages/detail/index?devEui=' + item.devEui">
              <div class="name wux-text--left">
                <div class="text wux-ellipsis--l2">{{item.name}}</div>
              </div>
              <div class="parameter">
                <wux-row>
                  <wux-col :span="item.light ? '4' : '6'">
                    <div class="temperature li">
                      <img src="/static/img/14.png" alt>
                      <span class="ts" v-if="item.sht30 || item.temperature">
                        <span v-if="item.sht30">{{item.sht30 | Rounding}}</span>
                        <span v-if="item.temperature">{{item.temperature | Rounding}}</span>°C
                      </span>
                      <span class="ts" v-else>-</span>
                    </div>
                  </wux-col>
                  <wux-col :span="item.light ? '4' : '6'">
                    <div class="humidity li">
                      <img src="/static/img/10.png" alt>
                      <span class="ts color1" v-if="item.humidity">{{item.humidity | Rounding}}%</span>
                      <span class="ts color1" v-else>-</span>
                    </div>
                  </wux-col>
                  <wux-col span="4" v-if="item.light">
                    <div class="light li">
                      <img src="/static/img/19.png" alt>
                      <span class="ts" v-if="item.light">{{item.light | Rounding}}Lx</span>
                      <span class="ts" v-else>-</span>
                    </div>
                  </wux-col>
                </wux-row>
              </div>
              <div class="time" v-if="item.last_upload_date">
                <img src="/static/img/time.png" alt>
                {{item.last_upload_date}}
              </div>
            </a>
          </wux-grid>
        </wux-grids>
      </div>
    </div>

    <div class="prompts" v-else>
      <div class="box">
        <div class="ioc" @click="scanCode">
          <wux-icon type="ios-add" size="42" color="#cccccc" class="iocs"/>
        </div>
        <div class="title">点击“+”添加设备</div>
      </div>
    </div>

    <wux-toast id="wux-toast"/>
  </div>
</template>

<script>
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
      search: "",
      icon: "../20.png"
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

.list {
  overflow: hidden;
  margin-top: 60px;
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
  margin: 8px 4px;
}

.grid {
  width: 114px;
  height: 114px;
  margin: 5px;
  display: block;
  background: #ffffff;
  border-radius: 8px;
}

.grid .name {
  color: #333333;
  font-weight: bold;
  font-size: 13px;
  padding: 8px;
  overflow: hidden;
}

.grid .name .text {
  line-height: 20px;
  height: 40px;
  color: #333333;
  font-weight: 400;
}

.grid .parameter {
  margin-top: 4px;
  font-size: 12px;
  line-height: 18px;
  margin: 0;
  position: relative;
}

.grid .parameter .li {
  text-align: center;
}

.grid .parameter img {
  width: 16px;
  height: 16px;
  display: block;
  margin: 0 auto;
}

.grid .parameter .ts {
  display: block;
  padding-left: 0px;
  font-size: 10px;
}
.online {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #ffffff;
  font-size: 9px;
  height: 15px;
  line-height: 15px;
  width: 45px;
  text-align: center;
  border-radius: 12px;
  z-index: 10;
  background: #40cc8c;
}
.temperature .ts {
  color: #39d542;
}

.light .ts {
  color: #e6b726;
}
.time {
  width: 100%;
  color: #cccccc;
  line-height: 20px;
  font-size: 10px;
  text-align: center;
  margin-top: 2px;
}

.time img {
  width: 12px;
  height: 12px;
  display: inline-block;
  vertical-align: top;
  margin-top: 4px;
}
</style>
