<template>
  <div class="container">
    <div class="device-top" v-show="!cropper">
      <wux-cell-group v-if="form">
        <wux-cell hover-class="none" class="input">
          <wux-input
            :label="form.gatewayId ? '网关位置：':'设备位置：'"
            :placeholder="form.gatewayId ? '请输入网关位置信息':'请输入设备位置信息'"
            id="name"
            :value="form.name"
            controlled
            type="text"
            @change="onChange"
          />
        </wux-cell>

        <wux-cell hover-class="none" class="input" @click="onClick" v-if="!form.gatewayId">
          <div class="inputs">
            <div class="title">区域名称：</div>
            <div class="txt">{{value}}</div>
          </div>
        </wux-cell>

        <div class="fazhi" v-if="!form.gatewayId" v-show="!cropper">
          <div class="title">告警阈值：
            <div class="tt" v-if="show">温度:{{temperature[0]}}°C - {{temperature[1]}}°C</div>
            <div class="tt" v-if="show">湿度:{{humidity[0]}}% - {{humidity[1]}}%</div>
          </div>
          <div class="switch">
            <wux-switch :value="show" @change="Switch" color="#0093fb"/>
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

        <div class="upload-img" @click="uploadTap()" v-if="!form.gatewayId">
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
    </div>

    <div class="list-button" v-show="!cropper" :class="{'button2':!edit}">
      <div class="button" v-if="edit">
        <wux-button block type="assertive" @click="Delete">删除</wux-button>
      </div>
      <div class="button">
        <wux-button block type="positive" @click="PostData">保存</wux-button>
      </div>
    </div>

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

      <div class="cropper-buttons" v-if="!up">
        <div class="upload btn" @click="cropper=false">取消</div>
        <div class="getCropperImage btn" @click="getCropperImage">保存</div>
      </div>
    </div>

    <wux-toast id="wux-toast"/>
    <wux-dialog id="wux-dialog"/>
    <wux-dialog id="wux-dialog--alert"/>
    <wux-select id="wux-select"/>
    <wux-loading id="wux-loading"/>
  </div>
</template>

<script>
import { $wuxDialog, $wuxSelect, $wuxLoading } from "../../../static/wux/index";
import store from "@/store";
import MpvueCropper from "mpvue-cropper";

let wecropper;
const device = wx.getSystemInfoSync();
const width = device.windowWidth;
const height = device.windowHeight;

export default {
  computed: {
    DeviceList() {
      return store.state.Data.Device;
    }
  },
  data() {
    return {
      change: false,
      temperature: [],
      humidity: [],
      threshold_group_id: [],
      id: [],
      threshold: false,
      show: false,
      up: false,
      value: "",
      group: [],
      groupIndex: 0,
      cropper: false,
      edit: false,
      serverUrl: "",
      form: "",
      img_url: "",
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
    Switch(e) {
      this.show = e.mp.detail.value;
      this.change = true;
    },
    TemperatureCh(e) {
      this.temperature = e.mp.detail.value;
      this.change = true;
    },
    HumidityCh(e) {
      this.humidity = e.mp.detail.value;
    },
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
                // _this.form.img_url = JSON.parse(res.data).content;
                _this.Toast("success", "上传图片成功");
              } else {
                _this.Toast("forbidden", "上传失败，请重新上传");
              }
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
    GetData() {
      // 请求包含id为修改，否则为添加
      let id = this.$route.query.id;
      let editId = this.$route.query.editId;
      this.serverUrl = this.$url;
      if (id) {
        this.edit = true;
        for (let i in this.DeviceList) {
          for (let s in this.DeviceList[i].device_list) {
            if (this.DeviceList[i].device_list[s].id == id) {
              this.form = this.DeviceList[i].device_list[s];
            }
          }
        }
      } else if (editId) {
        this.edit = true;
        this.form = this.$route.query;
      } else {
        this.edit = false;
        this.form = this.$route.query;
      }
      if (this.$route.query.gatewayId) {
        wx.setNavigationBarTitle({
          title: this.$route.query.name == "" ? "添加网关" : "网关修改"
        });
      } else {
        wx.setNavigationBarTitle({
          title: id ? "设备修改" : "添加设备"
        });
        for (let i in this.DeviceList) {
          this.group.push(this.DeviceList[i].group.name);
        }
        if (this.form.device_group_id) {
          for (let i in this.DeviceList) {
            if (this.DeviceList[i].group.id == this.form.device_group_id) {
              this.value = this.DeviceList[i].group.name;
              this.groupIndex = i;
            }
          }
        } else {
          this.value = this.DeviceList[0].group.name;
        }
      }

      this.ajax("device/device/" + this.$route.query.id + "/").then(res => {
        if (res.device_threshold_list.length > "0") {
          this.threshold = true;
          let show = res.device_threshold_list.filter(
            item => item.is_on == true
          );
          if (show.length > "0") {
            this.show = true;
          }
          for (let i in res.device_threshold_list) {
            let data1 = res.device_threshold_list.filter(
              item => item.param == "temperature"
            );
            let data2 = res.device_threshold_list.filter(
              item => item.param == "humidity"
            );
            this.temperature[0] = data1[0].min;
            this.temperature[1] = data1[0].max;
            this.id[0] = data1[0].id;
            this.threshold_group_id[0] = data1[0].threshold_group_id;
            this.humidity[0] = data2[0].min;
            this.humidity[1] = data2[0].max;
            this.id[1] = data2[0].id;
            this.threshold_group_id[1] = data2[0].threshold_group_id;
          }
        } else if (res.group_threshold_list.length > "0") {
          this.threshold = false;
          let show = res.group_threshold_list.filter(
            item => item.is_on == true
          );
          if (show.length > "0") {
            this.show = true;
          }
          for (let i in res.group_threshold_list) {
            let data1 = res.group_threshold_list.filter(
              item => item.param == "temperature"
            );
            let data2 = res.group_threshold_list.filter(
              item => item.param == "humidity"
            );
            this.temperature[0] = data1[0].min;
            this.temperature[1] = data1[0].max;
            this.id[0] = data1[0].id;
            this.threshold_group_id[0] = data1[0].threshold_group_id;
            this.humidity[0] = data2[0].min;
            this.humidity[1] = data2[0].max;
            this.id[1] = data2[0].id;
            this.threshold_group_id[1] = data2[0].threshold_group_id;
          }
        } else {
          this.temperature = [10, 30];
          this.humidity = [30, 70];
        }
      });
    },
    GetData2() {
      this.show = false;
      this.ajax(
        "device/device_group/" + this.DeviceList[this.groupIndex].group.id + "/"
      ).then(res => {
        if (res.threshold_list.length > "0") {
          let show = res.threshold_list.filter(item => item.is_on == true);
          if (show.length > "0") {
            this.show = true;
          }
          for (let i in res.threshold_list) {
            let data1 = res.threshold_list.filter(
              item => item.param == "temperature"
            );
            let data2 = res.threshold_list.filter(
              item => item.param == "humidity"
            );
            this.temperature[0] = data1[0].min;
            this.temperature[1] = data1[0].max;
            this.id[0] = data1[0].id;
            this.threshold_group_id[0] = data1[0].threshold_group_id;
            this.humidity[0] = data2[0].min;
            this.humidity[1] = data2[0].max;
            this.id[1] = data2[0].id;
            this.threshold_group_id[1] = data2[0].threshold_group_id;
          }
        } else {
          this.temperature = [10, 30];
          this.humidity = [30, 70];
        }
      });
    },
    PostData2() {
      let _this = this;
      if (_this.change) {
        _this
          .ajax(
            _this.threshold
              ? "alarm/threshold_value/multiple_update/"
              : "alarm/threshold_value/multiple_create/",
            _this.threshold > "0"
              ? {
                  data: JSON.stringify([
                    {
                      id: _this.id[0],
                      param: "temperature",
                      threshold_group_id: _this.threshold_group_id[0],
                      max: _this.temperature[1],
                      min: _this.temperature[0],
                      is_on: _this.show
                    },
                    {
                      id: _this.id[1],
                      param: "humidity",
                      threshold_group_id: _this.threshold_group_id[1],
                      max: _this.humidity[1],
                      min: _this.humidity[0],
                      is_on: _this.show
                    }
                  ])
                }
              : {
                  level: "device",
                  id: _this.$route.query.id,
                  data: JSON.stringify([
                    {
                      param: "temperature",
                      max: _this.temperature[1],
                      min: _this.temperature[0]
                    },
                    {
                      param: "humidity",
                      max: _this.humidity[1],
                      min: _this.humidity[0]
                    }
                  ])
                },
            _this.threshold ? "PUT" : "POST"
          )
          .then(res => {
            if (res == "success") {
              this.Toast(
                "success",
                _this.$route.query.editId ? "修改成功" : "添加成功"
              );
              setTimeout(() => {
                wx.switchTab({
                  url: "/pages/list/index"
                });
                store.commit("DeviceList", _this);
              }, 1500);
            } else {
              _this.Toast("forbidden", res.msg);
            }
          });
      } else {
        _this.Toast(
          "success",
         _this.$route.query.id ? "修改成功" : "添加成功"
        );
        setTimeout(() => {
          wx.switchTab({
            url: "/pages/list/index"
          });
          store.commit("DeviceList", _this);
        }, 1500);
      }
    },
    PostData() {
      if (this.form.name == "") {
        this.Toast(
          "forbidden",
          this.form.gatewayId ? "网关位置信息" : "位置名称不能为空"
        );
        return;
      }
      if (this.form.gatewayId) {
        this.ajax(
          this.$route.query.editId
            ? "device/updateGateway"
            : "device/addGateway",
          {
            name: this.form.name,
            mac: this.form.gatewayId,
            id: this.form.editId
          },
          "POST"
        ).then(res => {
          if (res.content == "success") {
            this.Toast(
              "success",
              this.$route.query.editId ? "修改成功" : "添加成功"
            );
            setTimeout(() => {
              wx.switchTab({
                url: "/pages/list/index"
              });
              store.commit("GatewayList", this);
            }, 1500);
          } else {
            this.Toast("forbidden", res.msg);
          }
        });
      } else {
        this.ajax(
          this.$route.query.id ? "device/updateDevice" : "device/addDevice",
          {
            id: this.form.id,
            appKey: this.form.appKey,
            devEui: this.form.devEui,
            name: this.form.name,
            img_url: this.img_url,
            device_group_id: this.DeviceList[this.groupIndex].group.id
          },
          "POST"
        ).then(res => {
          if (res.content == "success") {
            this.PostData2();
          } else {
            this.Toast("forbidden", res.msg);
          }
        });
      }
    },
    Delete() {
      let _this = this;
      $wuxDialog().alert({
        resetOnClose: true,
        title: "删除确认",
        content: "是否删除该设备/网关?",
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
                  _this.form.gatewayId
                    ? "device/deleteGateway"
                    : "device/deleteDevice",
                  {
                    id: _this.form.gatewayId ? _this.form.editId : _this.form.id
                  },
                  "POST"
                )
                .then(res => {
                  if (res.content == "success") {
                    _this.Toast("success", "删除成功");
                    setTimeout(() => {
                      wx.switchTab({
                        url: "/pages/list/index"
                      });
                      if (_this.form.gatewayId) {
                        store.commit("GatewayList", _this);
                      } else {
                        store.commit("DeviceList", _this);
                      }
                    }, 1500);
                  } else {
                    _this.Toast("forbidden", "服务器错误");
                  }
                });
            }
          }
        ]
      });
    },
    onChange(e) {
      this.form[e.mp.currentTarget.id] = e.mp.detail.value;
    },
    onClick() {
      let _this = this;
      $wuxSelect("#wux-select").open({
        value: _this.value,
        options: _this.group,
        onConfirm: (value, index, options) => {
          if (index !== -1) {
            _this.value = value;
            _this.groupIndex = index;
            if (!_this.threshold) {
              _this.GetData2();
            }
          }
        }
      });
    }
  },
  mounted() {
    this.change = false;
    this.show = false;
    this.form = "";
    this.group = [];
    this.groupIndex = 0;
    this.value = "";
    this.cropper = false;
    this.img_url = "";
    if (this.$route.query.img_url) {
      this.img_url = this.$route.query.img_url;
    }
    wecropper = this.$refs.cropper;
    this.GetData();
  }
};
</script>

<style scoped>
.fazhi {
  margin-top: 10px;
  overflow: hidden;
  position: relative;
  min-height: 40px;
  background: #ffffff;
}
.fazhi .title {
  font-size: 14px;
  line-height: 40px;
  position: relative;
  width: 100%;
}

.fazhi .txt {
  display: block;
  overflow: hidden;
}
.fazhi .txt1 {
  margin-top: 40px;
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
  padding-left: 5px;
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
  z-index: 12;
}
.device-top {
  overflow: hidden;
  margin-top: 10px;
}

.input {
  line-height: 40px;
  height: 40px;
}

.inputs {
  line-height: 40px;
  height: 40px;
  position: relative;
  background: #ffffff;
  margin-top: 10px;
}

.upload-img {
  margin-top: 10px;
  background: #ffffff;
  overflow: hidden;
  position: relative;
  height: 175px;
  width: 100%;
  margin-bottom: 27px;
}

.title {
  font-weight: 400;
  font-size: 14px;
  line-height: 40px;
  height: 40px;
  width: 90px;
  text-indent: 10px;
  z-index: 10;
  position: absolute;
}
.input .txt {
  float: right;
  color: #999999;
  font-size: 12px;
  padding-right: 15px;
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
