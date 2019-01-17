<template>
  <div class="container">
    <div class="GatewayList">
      <wux-cell-group>
        <wux-cell
          :title="item.name"
          isLink
          v-for="(item,index) in list"
          :key="index"
          :url="'/pages/device/index?gatewayId=' + item.mac+'&name='+item.name"
        ></wux-cell>
      </wux-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ""
    };
  },
  methods: {
    GetData() {
      this.ajax("device/getGatewayList").then(res => {
        console.log(res);

        this.list = res.content;
      });
    }
  },
  onShow() {
    this.GetData();
  }
};
</script>

<style scoped>
.GatewayList {
  margin-top: 9px;
}
</style>
