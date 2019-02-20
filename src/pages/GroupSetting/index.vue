<template>
  <div class="container">
    <div class="groups" v-if="!load">
      <div class="add-button" @click="visible = true">
        <wux-icon type="ios-add" size="23" color="#ffffff"/>
      </div>

      <wux-cell-group title="我的分组">
        <wux-cell
          :title="item.group.name"
          isLink
          v-for="item in NewList"
          :key="item.group.name"
          :label="item.device_list.length + '个设备'"
          :url="'/pages/GroupList/index?id=' + item.group.id + '&is_default=' + item.group.is_default"
          :class="{'is_default': item.group.is_default && DeviceList.length >'1'}"
        ></wux-cell>
      </wux-cell-group>
    </div>

    <wux-popup position="bottom" :visible="visible" @close="onClose" class="group-box">
      <wux-cell-group title="新建分组">
        <wux-cell hover-class="none">
          <wux-input
            label="分组名称"
            placeholder="请输入分组名称"
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
    onClose() {
      this.visible = false;
    },
    onChange(e) {
      this.form[e.mp.currentTarget.id] = e.mp.detail.value;
    },
    PostData() {
      if (this.form.name == "") {
        this.Toast("forbidden", "分组名称不能为空");
      } else {
        this.ajax("device/addDeviceGroup", this.form, "POST").then(res => {
          if (res == "success") {
            this.visible = false;
            store.commit("DeviceList", this);
            this.form = {
              name: "",
              desc: ""
            };
            setTimeout(() => {
              this.Toast("success", "添加成功");
            }, 850);
          } else {
            this.Toast("forbidden", "操作失败");
          }
        });
      }
    }
  },
  onShow() {
    store.commit("DeviceList", this);
    this.form = {
      name: "",
      desc: ""
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
</style>
