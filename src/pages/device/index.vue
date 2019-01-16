<template>
  <div class="container">
    <div>
      <wux-cell-group v-if="form">
        <wux-cell hover-class="none">
          <wux-input
            label="位置名称"
            placeholder="请输入位置名称"
            id="name"
            :value="form.name"
            controlled
            type="text"
            @change="onChange"
          />
        </wux-cell>

        <wux-image wux-class="image" v-if="form.img_url" :src="serverUrl + form.img_url" lazyLoad/>
      </wux-cell-group>
      <wux-button block type="positive" @click="Upload">{{form.img_url ? '修改图片':'上传图片'}}</wux-button>
    </div>

    <div class="bottom-button">
      <wux-button block type="positive" @click="PostData">保存</wux-button>
      <wux-button block type="assertive" @click="Delete" v-if="form.id">删除</wux-button>
    </div>

    <wux-toast id="wux-toast"/>
    <wux-dialog id="wux-dialog"/>
    <wux-dialog id="wux-dialog--alert"/>
  </div>
</template>

<script>
import { $wuxToast, $wuxDialog } from "../../wux/index";
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
      form: ""
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
                _this.form.img_url = JSON.parse(res.data).content;
                $wuxToast().show({
                  type: "success",
                  duration: 1500,
                  color: "#fff",
                  text: "上传图片成功"
                });
              } else {
                $wuxToast().show({
                  type: "forbidden",
                  duration: 1500,
                  color: "#fff",
                  text: "上传失败，请重新上传"
                });
              }
            }
          });
        }
      });
    },
    GetData() {
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
      wx.setNavigationBarTitle({
        title: id ? "设备修改" : "添加设备"
      });
    },
    PostData() {
      if (this.form.name == "") {
        $wuxToast().show({
          type: "forbidden",
          duration: 1500,
          color: "#fff",
          text: "位置名称不能为空"
        });
        return;
      } else {
        this.ajax(
          this.$route.query.id ? "device/updateDevice" : "device/addDevice",
          this.form,
          "POST"
        ).then(res => {
          if (res.content == "success") {
            $wuxToast().show({
              type: "success",
              duration: 1500,
              color: "#fff",
              text: this.$route.query.id ? "修改成功" : "添加成功"
            });
            setTimeout(() => {
              wx.navigateBack(1);
            }, 1500);
          } else {
            $wuxToast().show({
              type: "forbidden",
              duration: 1500,
              color: "#fff",
              text: "操作失败"
            });
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
                        $wuxToast().show({
                          type: "success",
                          duration: 1500,
                          color: "#fff",
                          text: "删除成功"
                        });
                        setTimeout(() => {
                          wx.switchTab({
                            url: "/pages/list/index"
                          });
                        }, 1500);
                        return;
                      }
                    }
                  } else {
                    $wuxToast().show({
                      type: "forbidden",
                      duration: 1500,
                      color: "#fff",
                      text: "服务器错误"
                    });
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
    this.GetData();
  }
};
</script>

<style scoped>
</style>
