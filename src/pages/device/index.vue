<template>
  <div class="container">
    <div class="device-top">
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

        <div class="upload-img" @click="Upload" v-if="!form.gatewayId">
          <div class="title">位置图片：</div>

          <div class="img" v-if="img_url">
            <wux-image wux-class="image" :src="serverUrl + img_url"/>
          </div>

          <div class="upload-ioc" v-else>
            <img src="/static/img/12.png" alt>
            <div class="txt">点击上传图片</div>
          </div>
        </div>
      </wux-cell-group>
    </div>

    <div class="footer-button">
      <div class="positive color1 buttons" @click="PostData">保存</div>
      <div class="calm buttons" @click="Delete" v-if="$route.query.id">删除</div>
    </div>

    <wux-toast id="wux-toast"/>
    <wux-dialog id="wux-dialog"/>
    <wux-dialog id="wux-dialog--alert"/>
    
  </div>
</template>

<script>
import { $wuxDialog } from "../../wux/index";
import store from "@/store";
export default {
  computed: {
    DeviceList() {
      return store.state.DeviceList;
    }
  },
  data() {
    return {
      serverUrl: "",
      form: "",
      img_url: ""
    };
  },
  methods: {
    Upload() {
      let _this = this;
      wx.chooseImage({
        success(res) {
          const tempFilePaths = res.tempFilePaths;
          wx.uploadFile({
            url: _this.$url + `/device/addEnvImg`,
            filePath: tempFilePaths[0],
            name: "img",
            header: { Authorization: wx.getStorageSync("Authorization") },
            success(res) {
              if (res.statusCode == 200) {
                _this.img_url = JSON.parse(res.data).content;
                _this.form.img_url = JSON.parse(res.data).content;
                _this.Toast("success", "上传图片成功");
              } else {
                _this.Toast("forbidden", "上传失败，请重新上传");
              }
            }
          });
        }
      });
    },
    GetData() {
      console.log(this.$route.query);
      // 请求包含id为修改，否则为添加
      let id = this.$route.query.id;
      this.serverUrl = this.$url;
      if (id) {
        for (let i in this.DeviceList) {
          if (this.DeviceList[i].id == id) {
            this.form = this.DeviceList[i];
          }
        }
      } else {
        this.form = this.$route.query;
      }
      if (this.$route.query.gatewayId) {
        wx.setNavigationBarTitle({
          title: this.$route.query.gatewayId ? "设备修改" : "添加设备"
        });
      } else {
        wx.setNavigationBarTitle({
          title: id ? "设备修改" : "添加设备"
        });
      }
    },
    PostData() {
      if (this.form.name == "") {
        this.Toast("forbidden", "位置名称不能为空");
        return;
      } else {
        this.ajax(
          this.$route.query.id ? "device/updateDevice" : "device/addDevice",
          this.form,
          "POST"
        ).then(res => {
          if (res.content == "success") {
            this.Toast(
              "success",
              this.$route.query.id ? "修改成功" : "添加成功"
            );
            setTimeout(() => {
              wx.navigateBack(1);
            }, 1500);
          } else {
            this.Toast("success", "操作失败");
          }
        });
      }
    },
    Delete() {
      let _this = this;
      $wuxDialog().alert({
        resetOnClose: true,
        title: "删除确认",
        content: "是否删除该设备？",
        buttons: [
          {
            text: "取消"
          },
          {
            text: "确定",
            type: "primary",
            onTap(e) {
              _this
                .ajax("device/deleteDevice", { id: _this.form.id }, "POST")
                .then(res => {
                  if (res.content == "success") {
                    let list = _this.DeviceList;
                    for (let i in list) {
                      if (list[i].id == _this.form.id) {
                        list.splice(i, 1);
                        this.Toast("success", "删除成功");
                        setTimeout(() => {
                          wx.switchTab({
                            url: "/pages/list/index"
                          });
                        }, 1500);
                        return;
                      }
                    }
                  } else {
                    this.Toast("forbidden", "服务器错误");
                  }
                });
            }
          }
        ]
      });
    },
    onChange(e) {
      this.form[e.mp.currentTarget.id] = e.mp.detail.value;
    }
  },
  onShow() {
    this.img_url = "";
    this.GetData();
  }
};
</script>

<style scoped>
.device-top {
  overflow: hidden;
  margin-top: 10px;
}

.device-top .input {
  line-height: 40px;
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

.upload-img .title {
  font-weight: 400;
  font-size: 13px;
  line-height: 40px;
  height: 40px;
  width: 80px;
  text-indent: 10px;
  z-index: 10;
  position: absolute;
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
.upload-ioc img {
  width: 70px;
  height: 70px;
}
.upload-ioc .txt {
  margin-top: -8px;
  font-weight: 200;
}
.upload-img .img {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 90px;
}

.buttons {
  margin-bottom: 9px;
}
</style>
