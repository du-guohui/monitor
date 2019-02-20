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
            <div class="title">分组：</div>
            <div class="txt">{{value}}</div>
          </div>
        </wux-cell>

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

    <div class="footer-button" v-show="!cropper">
      <div class="positive color1 buttons" @click="PostData">保存</div>
      <div class="calm buttons" @click="Delete" v-if="edit">删除</div>
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

      <div class="cropper-buttons">
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
            if (res.code == "1062") {
              this.Toast("forbidden", "操作失败,该网关已被使用！");
              return;
            } else if (res.code == "1404") {
              this.Toast("forbidden", "操作失败,该设备不存在！");
              return;
            } else {
              this.Toast("forbidden", "操作失败");
              return;
            }
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
            this.Toast(
              "success",
              this.$route.query.id ? "修改成功" : "添加成功"
            );
            setTimeout(() => {
              wx.switchTab({
                url: "/pages/list/index"
              });
              store.commit("DeviceList", this);
            }, 1500);
          } else {
            if (res.code == "1062") {
              this.Toast("forbidden", "操作失败,该设备已被添加！");
              return;
            } else if (res.code == "1404") {
              this.Toast("forbidden", "操作失败,该设备不存在！");
              return;
            } else {
              this.Toast("forbidden", "操作失败");
              return;
            }
          }
        });
      }
    },
    Delete() {
      let _this = this;
      $wuxDialog().alert({
        resetOnClose: true,
        title: "删除确认",
        content:
          "是否删除该设备/网关?",
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
          }
        }
      });
    }
  },
  mounted() {
    this.form = "";
    this.group = [];
    this.groupIndex = 0;
    this.value = "";
    this.cropper = false;
    this.img_url = "";
    if (this.$route.query.img_url) {
      this.img_url = this.$route.query.img_url;
      // this.form.img_url = this.$route.query.img_url;
    }
    wecropper = this.$refs.cropper;
    this.GetData();
  }
};
</script>

<style scoped>
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
