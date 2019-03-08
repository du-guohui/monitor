<template>
  <div class="container">
    <div v-show="!cropper">
      <div class="list-tops">
        <wux-cell-group>
          <wux-cell hover-class="none" class="GroupName">
            <wux-input
              label="区域名称："
              :value="name"
              placeholder="请输入区域名称"
              controlled
              type="text"
              id="name"
              @change="NameChange"
            />
          </wux-cell>
          <div class="upload-img" @click="uploadTap()">
            <div class="title">位置图片：</div>
            <div class="upload-ioc">
              <img
                src="/static/img/12.png"
                alt
                class="no-img"
                v-if="!img_url || img_url=='null' || img_url==''"
              >
              <img :src="serverUrl + img_url" class="imgs" v-else>
              <div class="txt">点击上传图片</div>
            </div>
          </div>
        </wux-cell-group>

        <div class="fazhi">
          <div class="title">告警阈值：
            <div class="tt" v-if="show">温度:{{temperature[0]}}°C - {{temperature[1]}}°C</div>
            <div class="tt" v-if="show">湿度:{{humidity[0]}}% - {{humidity[1]}}%</div>
            <div class="switch">
              <wux-switch :value="show" @change="Switch" color="#0093fb"/>
            </div>
          </div>
          <div class="txt" v-if="show">
            <div class="title1">温度:</div>
            <div class="box">
              <div class="min">-10°C</div>
              <div class="cc">
                <wux-slider
                  min="-10"
                  max="50"
                  step="1"
                  :value="temperature"
                  @change="TemperatureCh"
                  controlled
                  trackStyle="background-color: #0093fb"
                />
              </div>
              <div class="max">50°C</div>
            </div>
          </div>
          <div class="txt" v-if="show">
            <div class="title1">湿度:</div>
            <div class="box">
              <div class="min">0%</div>
              <div class="cc">
                <wux-slider
                  min="0"
                  max="100"
                  step="1"
                  :value="humidity"
                  @change="HumidityCh"
                  controlled
                  trackStyle="background-color: #0093fb"
                />
              </div>
              <div class="max">100%</div>
            </div>
          </div>
        </div>

        <div class="ts">{{group.length > '0' ? '已选择' + group.length + '个设备' : '未选择设备'}}</div>
      </div>

      <div class="list">
        <wux-checkbox-group :value="group" @change="onChange">
          <div class="group-list" v-for="(item,i) in DeviceList" :key="i">
            <div class="box" v-for="(list,s) in item.device_list" :key="s">
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
          <wux-button block type="positive" @click="PostData">保存</wux-button>
        </div>
      </div>
    </div>

    <wux-toast id="wux-toast"/>
    <wux-dialog id="wux-dialog--alert"/>
    <wux-dialog id="wux-dialog"/>
    <wux-loading id="wux-loading"/>

    <div class="test" v-show="cropper">
      <div class="mpvue-cropper">
        <mpvue-cropper
          ref="cropper"
          :option="cropperOpt"
          @ready="cropperReady"
          @beforeDraw="cropperBeforeDraw"
          @beforeImageLoad="cropperBeforeImageLoad"
          @beforeLoad="cropperLoad"
        ></mpvue-cropper>
      </div>

      <div class="cropper-buttons">
        <div class="upload btn" @click="cropper=false">取消</div>
        <div class="getCropperImage btn" @click="getCropperImage">保存</div>
      </div>
    </div>
  </div>
</template>

<script>
import { $wuxDialog, $wuxLoading } from "../../../static/wux/index";
import store from "@/store";
import MpvueCropper from "mpvue-cropper";
let wecropper;
const device = wx.getSystemInfoSync();
const width = device.windowWidth;
const height = device.windowHeight - 50;
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
      nChange: false,
      DeviceIndex: 0,
      show: false,
      serverUrl: "",
      data: [],
      group: [],
      temperature: [],
      humidity: [],
      id: [],
      threshold_group_id: [],
      load: false,
      img_url: "",
      cropper: false,
      cropperOpt: {
        id: "cropper",
        targetId: "targetCropper",
        pixelRatio: device.pixelRatio,
        width,
        height,
        scale: 2.5,
        zoom: 8,
        cut: {
          x: (width - 320) / 2,
          y: (height - 180) / 2,
          width: 320,
          height: 180
        }
      }
    };
  },
  components: {
    MpvueCropper
  },
  methods: {
    cropperReady(...args) {
      console.log("cropper ready!");
    },
    cropperBeforeImageLoad(...args) {
      console.log("before image load");
    },
    cropperLoad(...args) {
      console.log("image loaded");
    },
    cropperBeforeDraw(...args) {
      // Todo: 绘制水印等等
    },
    uploadTap() {
      let _this = this;
      wx.chooseImage({
        count: 2, // 默认9
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: res => {
          const src = res.tempFilePaths[0];
          //  获取裁剪图片资源后，给data添加src属性及其值
          wecropper.pushOrigin(src);
          _this.cropper = true;
        }
      });
    },
    getCropperImage() {
      let _this = this;
      _this.up = true;
      wecropper
        .getCropperImage()
        .then(src => {
          const uploadTask = wx.uploadFile({
            url: _this.$url + `/device/addEnvImg`,
            filePath: src,
            name: "img",
            header: { Authorization: wx.getStorageSync("Authorization") },
            success(res) {
              _this.cropper = false;
              if (res.statusCode == 200) {
                _this.img_url = JSON.parse(res.data).content;
                _this.Toast("success", "上传图片成功");
              } else {
                _this.Toast("forbidden", "上传失败，请重新上传");
              }
              _this.nChange = true;
            }
          });
          uploadTask.onProgressUpdate(res => {
            console.log("上传进度", res.progress);
            console.log("已经上传的数据长度", res.totalBytesSent);
            console.log(
              "预期需要上传的数据总长度",
              res.totalBytesExpectedToSend
            );
          });
          _this.up = false;
        })
        .catch(e => {
          console.error("获取图片失败");
        });
    },
    NameChange(e) {
      this.name = e.mp.detail.value;
      this.nChange = true;
    },
    Switch(e) {
      this.show = e.mp.detail.value;
    },
    TemperatureCh(e) {
      this.temperature = e.mp.detail.value;
    },
    HumidityCh(e) {
      this.humidity = e.mp.detail.value;
    },
    Delete() {
      let _this = this;
      $wuxDialog().alert({
        resetOnClose: true,
        title: "删除确认",
        content: '删除区域后,该区域的设备将转移到"未设置区域"下',
        buttons: [
          {
            text: "取消"
          },
          {
            text: "确定",
            type: "primary",
            onTap(e) {
              _this
                .ajax(
                  "device/deleteDeviceGroup",
                  {
                    id: _this.$route.query.id
                  },
                  "POST"
                )
                .then(res => {
                  _this.Toast("success", "操作成功");
                  setTimeout(() => {
                    store.commit("DeviceList", _this);
                    wx.navigateBack(1);
                  }, 800);
                });
            }
          }
        ]
      });
    },
    PostData2(id) {
      this.ajax(
        "device/moveDeviceListToGroup",
        {
          group_id: id,
          device_id_list: this.group
        },
        "POST"
      ).then(res => {
        if (res == "success") {
          this.Toast("success", "操作成功");
          setTimeout(() => {
            store.commit("DeviceList", this);
            wx.navigateBack(1);
          }, 800);
        } else {
          this.Toast("forbidden", res.msg);
        }
      });
    },
    PostData() {
      let _this = this;
      $wuxDialog().alert({
        resetOnClose: true,
        title: "修改确认",
        content: "是否保存该区域？",
        buttons: [
          {
            text: "取消"
          },
          {
            text: "确定",
            type: "primary",
            onTap(e) {
              _this.PostName();
            }
          }
        ]
      });
    },
    PostName() {
      if (this.name == "") {
        this.Toast("forbidden", "区域名称不能为空");
      } else {
        this.ajax(
          "device/device_group/",
          { name: this.name, img_url: this.img_url },
          "POST"
        ).then(res => {
          if (res.id) {
            if (this.change) {
              this.ajax(
                "alarm/threshold_value/multiple_create/",
                {
                  level: "group",
                  id: res.id,
                  data: JSON.stringify([
                    {
                      param: "temperature",
                      max: this.temperature[1],
                      min: this.temperature[0]
                    },
                    {
                      param: "humidity",
                      max: this.humidity[1],
                      min: this.humidity[0]
                    }
                  ])
                },
                "POST"
              ).then(res2 => {
                if (res2 == "success") {
                  this.PostData2(res.id);
                } else {
                  this.Toast("forbidden", res2.msg);
                }
              });
            } else {
              this.PostData2(res.id);
            }
          } else {
            this.Toast("forbidden", res.msg);
          }
        });
      }
    },
    GetData() {
      this.temperature = [10, 30];
      this.humidity = [30, 70];
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
  mounted() {
    this.img_url = "";
    this.show = false;
    this.nChange = false;
    this.serverUrl = this.$url;
    this.data = [];
    this.group = [];
    this.cropper = false;
    this.edit = false;
    wecropper = this.$refs.cropper;
    this.GetData();
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
  left: 0;
  top: 0;
  bottom: 0;
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

.upload-img .title {
  font-weight: 400;
  font-size: 13px;
  line-height: 40px;
  height: 40px;
  width: 115px;
  text-indent: 18px;
  z-index: 10;
  position: absolute;
}

.upload-img {
  background: #ffffff;
  overflow: hidden;
  position: relative;
  height: 175px;
  width: 100%;
  border-top: 1px solid #eeeeee;
}

.upload-ioc {
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  position: absolute;
  text-align: center;
  font-size: 10px;
  color: #c1c1c1;
}
.upload-ioc .no-img {
  width: 70px;
  height: 70px;
}

.upload-ioc .imgs {
  width: 200px;
  height: 112.5px;
  margin-bottom: 10px;
}

.upload-ioc .txt {
  margin-top: -6px;
  font-weight: 200;
}
.upload-img .img {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
}

.buttons {
  margin-bottom: 9px;
}

.cropper-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #e5e5e5;
}

.cropper-buttons {
  background: rgba(0, 0, 0, 0.86);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0 20rpx;
  box-sizing: border-box;
  line-height: 50px;
  z-index: 1000;
}

.cropper-buttons .upload,
.cropper-buttons .getCropperImage {
  text-align: center;
  font-size: 16px;
}

.cropper-buttons .getCropperImage {
  color: #00b050;
}

.cropper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}

.btn {
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  border-radius: 2px;
  color: #ffffff;
}
.test {
  position: relative;
  z-index: 99;
}
.mpvue-cropper {
  position: relative;
  z-index: 100;
}
</style>
