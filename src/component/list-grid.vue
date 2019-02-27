<template>
  <a class="grid" :href="'/pages/detail/index?devEui=' + data.devEui">
    <div class="name wux-text--left">
      <div class="text wux-ellipsis--l2">{{data.name}}</div>
    </div>
    <div class="parameter">
      <wux-row>
        <wux-col span="6">
          <div class="temperature li">
            <img src="/static/img/14.png" alt>
            <span class="ts" v-if=" data.temperature ||  data.temperature == '0'">
              <span
                v-if="data.temperature || data.temperature == '0'"
              >{{data.temperature | Rounding}}</span>
              °C
            </span>
            <span class="ts" v-else>-</span>
          </div>
        </wux-col>
        <wux-col span="6">
          <div class="humidity li">
            <img src="/static/img/10.png" alt>
            <span
              class="ts color1"
              v-if="data.humidity || data.humidity == '0'"
            >{{data.humidity | Rounding}}%</span>
            <span class="ts color1" v-else>-</span>
          </div>
        </wux-col>
        <wux-col span="6">
          <div class="light li" v-if="data.light">
            <img src="/static/img/19.png" alt>
            <span class="ts" v-if="data.light || data.light == '0'">{{data.light | Rounding}}Lx</span>
            <span class="ts" v-else>-</span>
          </div>
        </wux-col>
      </wux-row>
    </div>
    <div class="time" v-if="data.last_upload_date2">
      <img src="/static/img/time.png" alt>
      {{data.last_upload_date2}}
    </div>
    <div class="err" v-if="data.err > '0'">
      <img src="/static/img/err.png" alt>
      {{data.err}}
    </div>
  </a>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style scoped>
.grid {
  width: 114px;
  height: 114px;
  margin: 5px;
  display: block;
  background: #ffffff;
  border-radius: 8px;
}
.grid .name {
  color: #333333;
  font-weight: bold;
  font-size: 13px;
  padding: 8px 8px 3px;
  overflow: hidden;
}
.grid .name .text {
  line-height: 20px;
  height: 40px;
  color: #333333;
  font-weight: 400;
}
.grid .parameter {
  font-size: 12px;
  line-height: 18px;
  margin: 0px 4px 0;
  position: relative;
}
.grid .parameter .li {
  text-align: left;
}
.grid .parameter img {
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: top;
  margin: 2px auto;
}
.grid .parameter .ts {
  display: inline-block;
  padding-left: 0px;
  font-size: 10px;
}

.temperature .ts {
  color: #39d542;
}
.light .ts {
  color: #e6b726;
}
.time {
  color: #cccccc;
  line-height: 20px;
  font-size: 9px;
  text-align: left;
  position: absolute;
  overflow: hidden;
  left: 6px;
  right: 10px;
  bottom: 7px;
}
.time img {
  width: 12px;
  height: 12px;
  display: inline-block;
  vertical-align: top;
  margin-top: 4px;
}
.grid {
  position: relative;
}
.err {
  position: absolute;
  font-size: 9px;
  color: #d81e06;
  right: 7px;
  bottom: 7px;
  line-height: 20px;
  text-align: right;
}
.err img {
  width: 12px;
  height: 12px;
  display: inline-block;
  vertical-align: top;
  margin-top: 4px;
  margin-right: -2px
}
</style>