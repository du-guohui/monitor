<template>
  <div class="container">
    <div class="groups" v-if="!load">
      <a class="add-button" href="/pages/GroupList2/index">
        <wux-icon type="ios-add" size="23" color="#ffffff"/>
      </a>

      <wux-cell-group title="区域列表">
        <van-swipe-cell
          right-width="65"
          v-for="(item,i) in NewList"
          :key="i"
          v-if="!item.group.is_default"
        >
          <wux-cell
            :title="item.group.name"
            isLink
            :label="item.device_list.length + '个设备'"
            :url="'/pages/GroupList/index?id=' + item.group.id"
          ></wux-cell>
          <view slot="right">
            <div class="del" @click="Delete(i)">删除</div>
          </view>
        </van-swipe-cell>
        <wux-cell
          v-for="(item,i) in NewList"
          :key="i"
          :title="item.group.name"
          isLink
          :label="item.device_list.length + '个设备'"
          :url="'/pages/GroupList/index?id=' + item.group.id"
          v-if="item.group.is_default"
        ></wux-cell>
      </wux-cell-group>
    </div>

    <wux-popup position="bottom" :visible="visible" @close="onClose" class="group-box">
      <wux-cell-group title="新建区域">
        <wux-cell hover-class="none">
          <wux-input
            label="区域名称"
            placeholder="请输入区域名称"
            id="name"
            :value="form.name"
            controlled
            type="text"
            @change="onChange"
          />
        </wux-cell>
        <wux-cell hover-class="none">
          <wux-button block type="positive" @click="PostData">保存</wux-button>
        </wux-cell>
      </wux-cell-group>
    </wux-popup>

    <wux-toast id="wux-toast"/>
    <wux-dialog id="wux-dialog"/>
    <wux-dialog id="wux-dialog--alert"/>
    <wux-loading id="wux-loading"/>
  </div>
</template>

<script>
import { $wuxDialog, $wuxLoading } from "../../../static/wux/index";
import store from "@/store";
export default {
  computed: {
    Loading() {
      return store.state.Loading;
    },
    DeviceList() {
      return store.state.Data.Device;
    },
    NewList() {
      let NewList = JSON.parse(JSON.stringify(this.DeviceList));
      return NewList.reverse();
    }
  },
  data() {
    return { visible: false, form: { name: "", desc: "" }, load: true };
  },
  methods: {
    Add(){
      // GroupList2
    },
    Delete(i) {
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
                    id: _this.NewList[i].group.id
                  },
                  "POST"
                )
                .then(res => {
                  _this.Toast("success", "操作成功");
                  setTimeout(() => {
                    store.commit("DeviceList", _this);
                  }, 800);
                });
            }
          }
        ]
      });
    },
    onClose() {
      this.visible = false;
    },
    onChange(e) {
      this.form[e.mp.currentTarget.id] = e.mp.detail.value;
    },
    // PostData() {
    //   if (this.form.name == "") {
    //     this.Toast("forbidden", "区域名称不能为空");
    //   } else {
    //     this.ajax("device/device_group/", this.form, "POST").then(res => {
    //       if (res == "success") {
    //         this.visible = false;
    //         store.commit("DeviceList", this);
    //         this.form = {
    //           name: "",
    //           desc: "",
    //           img_url: ""
    //         };
    //         setTimeout(() => {
    //           this.Toast("success", "添加成功");
    //         }, 850);
    //       } else {
    //         this.Toast("forbidden", res.msg);
    //       }
    //     });
    //   }
    // }
  },
  onShow() {
    this.form = {
      name: "",
      desc: "",
      img_url: ""
    };
  },
  watch: {
    Loading() {
      let _this = this;
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

<style scoped>
.groups .add-button {
  width: 30px;
  height: 30px;
  background: #0093fb;
  border-radius: 50%;
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 8.5px;
}
.add-button ._wux-icon {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.del {
  width: 100%;
  background: red;
  text-align: center;
  color: #ffffff;
  font-size: 14px;
  height: 60px;
  line-height: 60px;
  width: 65px;
}
</style>
