<template>
  <div class="container">
    <div class="groups">
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
          :url="'/pages/GroupList/index?id=' + item.group.id"
          :class="{'is_default': item.group.is_default}"
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
          <wux-input
            label="分组描述"
            placeholder="请输入分组描述"
            id="desc"
            :value="form.desc"
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
  </div>
</template>

<script>
import { $wuxDialog } from "../../../static/wux/index";
import store from "@/store";
export default {
  computed: {
    DeviceList() {
      return store.state.DeviceList;
    },
    NewList() {
      let NewList = JSON.parse(JSON.stringify(this.DeviceList));
      return NewList.reverse();
    }
  },
  data() {
    return { visible: false, form: { name: "", desc: "" } };
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
            this.Toast("success", "添加成功");
            this.visible = false;
            store.commit("ChangeList");
            this.form = {
              name: "",
              desc: ""
            };
          } else {
            this.Toast("forbidden", "操作失败");
          }
        });
      }
    }
  },
  mounted() {
    this.form = {
      name: "",
      desc: ""
    };
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
