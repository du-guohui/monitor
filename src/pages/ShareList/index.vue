<template>
  <div class="container">
    <div class="list-tops">
      <div class="ts">{{group.length > '0' ? '已选择' + group.length + '个设备' : '未选择设备'}}</div>
    </div>

    <div class="list">
      <wux-checkbox-group :value="group" @change="onChange">
        <div class="group-list" v-for="(item,i) in DeviceList" :key="i">
          <div class="box" v-for="(list,s) in item.device_list" :key="s" v-if="!list.parent_device_id">
            <div class="img">
              <img :src="serverUrl + list.img_url" v-if="list.img_url">
            </div>
            <div class="title wux-ellipsis">{{list.name}}</div>
            <div class="text">{{item.group.name}}</div>
            <wux-checkbox color="positive" :value="list.id" class="checkbox"/>
          </div>
        </div>
      </wux-checkbox-group>
    </div>

    <div class="list-button button2">
      <div class="button">
        <wux-button block type="positive" open-type="share" v-if="group.length > '0'">分享</wux-button>
        <wux-button block type="positive" v-else @click="NoShare()">分享</wux-button>
      </div>
    </div>

    <wux-toast id="wux-toast"/>
    <wux-dialog id="wux-dialog--alert"/>
    <wux-dialog id="wux-dialog"/>
    <wux-loading id="wux-loading"/>
  </div>
</template>

<script>
import { $wuxDialog, $wuxLoading } from "../../../static/wux/index";
import store from "@/store";
export default {
  computed: {
    DeviceList() {
      return store.state.Data.Device;
    },
    Loading() {
      return store.state.Loading;
    }
  },
  data() {
    return {
      name: "",
      serverUrl: "",
      data: [],
      group: [],
      load: false
    };
  },
  onShow() {
    this.serverUrl = this.$url;
    this.data = [];
    this.group = [];
    wx.hideShareMenu();
  },
  onShareAppMessage(options) {
    var that = this;
    let UserInfo = JSON.parse(wx.getStorageSync("UserInfo"));
    var shareObj = {
      title: UserInfo.nickName + "分享设备",
      path: "/pages/share/index?shareId=" + this.group.join(","),
      imageUrl: "/static/img/share-back.jpg",
      success: function(res) {
        // 转发成功之后的回调
        if (res.errMsg == "shareAppMessage:ok") {
        }
      },
      fail: function() {
        // 转发失败之后的回调
        if (res.errMsg == "shareAppMessage:fail cancel") {
          // 用户取消转发
        } else if (res.errMsg == "shareAppMessage:fail") {
          // 转发失败，其中 detail message 为详细失败信息
        }
      }
    };
    return shareObj;
  },
  methods: {
    NoShare(){
       this.Toast("forbidden", "请选择设备");
    },
    onChange(e) {
      const { value } = e.mp.detail;
      const data = this.group;
      const index = data.indexOf(value);
      const current =
        index === -1 ? [...data, value] : data.filter(n => n !== value);
      this.group = current;
    }
  },
  watch: {
    Loading() {
      if (this.Loading) {
        this.load = false;
      } else {
        this.load = true;
      }
    },
    DeviceList() {
      this.DeviceIndex = 0;
      for (let i in this.DeviceList) {
        this.DeviceIndex =
          this.DeviceIndex + this.DeviceList[i].device_list.length;
      }
    },
    group() {
      if (this.group.length > "0") {
        wx.showShareMenu();
      } else {
        wx.hideShareMenu();
      }
    }
  }
};
</script>

<style scoped>
.list-tops {
  /* position: fixed; */
  width: 100%;
  top: 0;
  z-index: 2;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
}
.list-tops .ts {
  height: 24px;
  line-height: 24px;
  font-size: 10px;
  padding: 0 15px;
  position: relative;
  z-index: 1;
  color: #999999;
  letter-spacing: 0.5px;
}
.list {
  padding: 0 0 75px;
  overflow: hidden;
}

.group-list {
  overflow: hidden;
}
.group-list .box {
  overflow: hidden;
  height: 60px;
  border-bottom: 1px solid #eeeeee;
  padding: 5px;
  position: relative;
  padding-right: 65px;
}

.group-list .img {
  height: 60px;
  width: 107px;
  float: left;
  overflow: hidden;
  margin-right: 8px;
  background: #cccccc;
}

.group-list .img img {
  height: 60px;
  width: 107px;
  float: left;
}

.group-list .title {
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  margin-top: 8px;
  margin-bottom: 5px;
}

.group-list .text {
  font-size: 12px;
  line-height: 16px;
  color: #cccccc;
}
.group-list .checkbox {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
}
.list-button {
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  position: fixed;
  bottom: 0;
  height: 64px;
  background: #ffffff;
  left: 0;
  right: 0;
  z-index: 1;
}
.list-button .button {
  width: 166px;
  float: left;
  height: 70px;
  padding: 0 10px;
}

.list-button.button2 .button {
  width: auto;
  float: none;
  height: 70px;
  padding: 0 10px;
}

.fazhi {
  overflow: hidden;
  position: relative;
  min-height: 40px;
  border-bottom: 1px solid #cccccc;
}
.fazhi .title {
  font-size: 13px;
  line-height: 40px;
  padding-left: 15px;
}
.fazhi .txt {
  display: block;
  overflow: hidden;
}

.fazhi .txt .title1 {
  font-size: 13px;
  line-height: 40px;
  width: 60px;
  padding-left: 15px;
  float: left;
}

.fazhi .tt {
  font-size: 12px;
  display: inline-block;
  vertical-align: top;
  padding-left: 14px;
  line-height: 40px;
}

.fazhi .box {
  float: left;
  width: 280px;
}

.fazhi .min {
  float: left;
  font-size: 12px;
  width: 50px;
  line-height: 40px;
  text-align: center;
}

.fazhi .cc {
  padding-top: 3px;
  width: 180px;
  float: left;
}

.fazhi .max {
  float: right;
  font-size: 12px;
  text-align: center;
  width: 50px;
  line-height: 40px;
}

.fazhi .show {
  float: right;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #cccccc;
  margin-top: 10px;
  margin-right: 10px;
}

.fazhi .show img {
  width: 100%;
  height: 100%;
  float: left;
}
.fazhi-checkbox {
  float: right;
}

.switch {
  position: absolute;
  right: 3px;
  top: 4px;
  transform: scale(0.8, 0.8);
}
</style>
