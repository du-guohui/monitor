<template>
  <div class="container">
    <img class="img" src="/static/img/index.png">
  </div>
</template>

<script>
import { QRCode } from "@/utils/index";
export default {
  methods: {
    scanCode() {
      wx.scanCode({
        success(res) {
          let code = QRCode(res.result);
        }
      });
    }
  }
};
</script>

<style scoped>
.img {
  height: 490px;
}
</style>
