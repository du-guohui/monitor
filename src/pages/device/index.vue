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
      </wux-cell-group>
    </div>

    <div class="bottom-button">
      <wux-button block type="positive" @click="PostData">保存</wux-button>
    </div>

    <wux-toast id="wux-toast"/>
    
  </div>
</template>

<script>
import { $wuxToast } from "../../wux/index";
export default {
  data() {
    return {
      form: ""
    };
  },
  methods: {
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
    onChange(e) {
      this.form[e.mp.currentTarget.id] = e.mp.detail.value;
    }
  },
  mounted() {
    let _this = this;
    _this.form = this.$route.query;
    wx.setNavigationBarTitle({
      title: _this.$route.query.id ? "设备修改" : "添加设备"
    });
  }
};
</script>

<style scoped>
</style>
