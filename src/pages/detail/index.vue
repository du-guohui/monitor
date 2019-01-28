<template>
  <div class="container">
    <div v-if="devEui">
      <div v-for="(item,index) in DeviceList" :key="index" class="boxs">
        <div class="box" v-if="devEui == item.devEui">
          <a class="edit" :href="'/pages/device/index?id=' + item.id + '&img_url=' + item.img_url">
            <img src="/static/img/9.png" alt>
          </a>
          <div class="name">{{item.name}}</div>
          <div
            class="img"
            v-if="item.img_url"
            v-bind:style="{backgroundImage:'url(' + serverUrl + item.img_url + ')'}"
          ></div>
          <div class="no-img" v-else>
            <img src="/static/img/18.png" alt>
            <div class="txt">未上传位置图片</div>
          </div>
        </div>

        <div class="detail-list grid" v-if="devEui == item.devEui">
          <wux-row>
            <wux-col :span="item.light ? '4' : '6'" @click="tabKey = '1'">
              <div class="temperature li">
                <img src="/static/img/14.png" class="ioc">
                <img src="/static/img/ac.png" class="ac" v-if="tabKey =='1'">
                <span class="ts" v-if="item.sht30 || item.temperature">
                  <span v-if="item.sht30">{{item.sht30 | Rounding}}</span>
                  <span v-if="item.temperature">{{item.temperature | Rounding}}</span>°C
                </span>
                <span class="ts" v-else>-</span>
              </div>
            </wux-col>
            <wux-col :span="item.light ? '4' : '6'" @click="tabKey = '2'">
              <div class="humidity li">
                <img src="/static/img/10.png" class="ioc">
                <img src="/static/img/ac.png" class="ac" v-if="tabKey =='2'">
                <span class="ts color1" v-if="item.humidity">{{item.humidity | Rounding}}%</span>
                <span class="ts color1" v-else>-</span>
              </div>
            </wux-col>
            <wux-col span="4" v-if="item.light" @click="tabKey = '3'">
              <div class="light li">
                <img src="/static/img/19.png" class="ioc">
                <img src="/static/img/ac.png" class="ac" v-if="tabKey =='3'">
                <span class="ts" v-if="item.light">{{item.light | Rounding}}Lx</span>
                <span class="ts" v-else>-</span>
              </div>
            </wux-col>
          </wux-row>
        </div>
      </div>
    </div>

    <div class="detail-time">
      <div class="button" @click="timeKey = '1'" :class="{'ac':timeKey == '1'}">
        日
        <img src="/static/img/ac.png" alt class="ioc">
      </div>
      <div class="button" @click="timeKey = '7'" :class="{'ac':timeKey == '7'}">
        周
        <img src="/static/img/ac.png" alt class="ioc">
      </div>
      <div class="button" @click="timeKey = '30'" :class="{'ac':timeKey == '30'}">
        月
        <img src="/static/img/ac.png" alt class="ioc">
      </div>
    </div>

    <div class="ff-canvas">
      <ff-canvas id="column" canvas-id="column" :opts="opts"/>
      <div class="no-none" v-if="none">暂无数据</div>
    </div>

    <wux-cell-group>
      <wux-cell title="报警信息" isLink></wux-cell>
    </wux-cell-group>
  </div>
</template>

<script>
import Renderer from "../../../static/f2-canvas/lib/renderer";
import F2 from "../../../static/f2-canvas/lib/f2";

F2.Util.addEventListener = function(source, type, listener) {
  source.addListener(type, listener);
};

F2.Util.removeEventListener = function(source, type, listener) {
  source.removeListener(type, listener);
};

F2.Util.createEvent = function(event, chart) {
  const type = event.type;
  let x = 0;
  let y = 0;
  const touches = event.touches;
  if (touches && touches.length > 0) {
    x = touches[0].x;
    y = touches[0].y;
  }
  return {
    type,
    chart,
    x,
    y
  };
};

import { formatDate } from "@/utils/index";
import store from "@/store";

export default {
  computed: {
    DeviceList() {
      return store.state.DeviceList;
    }
  },
  data() {
    return {
      tabKey: "1",
      tabName: "温度",
      tabDw: "°C",
      timeKey: "1",
      devEui: "",
      serverUrl: "",
      opts: {
        lazyLoad: true
      },
      data: [],
      none: false
    };
  },
  methods: {
    GetData() {
      if (this.tabKey == "1") {
        this.tabName = "温度";
        this.tabDw = "°C";
      }
      if (this.tabKey == "2") {
        this.tabName = "湿度";
        this.tabDw = "%";
      }
      if (this.tabKey == "3") {
        this.tabName = "光照";
        this.tabDw = "Lx";
      }
      this.data = [];
      this.ajax("device/getDeviceHistoryData", {
        devEui: this.$route.query.devEui,
        period: this.timeKey,
        type: this.timeKey == "1" ? "" : "max_and_min"
      }).then(res => {
        let list = res.content;
        for (let i in list) {
          if (this.timeKey == "1") {
            if (list[i]["sht30"] != undefined && this.tabKey == "1") {
              this.data.push({
                time: formatDate(new Date(Number(i))),
                value: list[i]["sht30"].avg.toFixed(1)
              });
            }
            if (list[i]["temperature"] != undefined && this.tabKey == "1") {
              this.data.push({
                time: formatDate(new Date(Number(i))),
                value: list[i]["temperature"].avg.toFixed(1)
              });
            }
            if (list[i]["humidity"] != undefined && this.tabKey == "2") {
              this.data.push({
                time: formatDate(new Date(Number(i))),
                value: list[i]["humidity"].avg.toFixed(1)
              });
            }
            if (list[i]["light"] != undefined && this.tabKey == "3") {
              this.data.push({
                time: formatDate(new Date(Number(i))),
                value: list[i]["light"].avg.toFixed(1)
              });
            }
          } else {
            if (list[i]["sht30"] != undefined && this.tabKey == "1") {
              this.data.push(
                {
                  time: formatDate(new Date(Number(i))),
                  value: list[i]["sht30"].max.toFixed(1),
                  type: "最高" + this.tabName
                },
                {
                  time: formatDate(new Date(Number(i))),
                  value: list[i]["sht30"].min.toFixed(1),
                  type: "最低" + this.tabName
                }
              );
            }
            if (list[i]["temperature"] != undefined && this.tabKey == "1") {
              this.data.push(
                {
                  time: formatDate(new Date(Number(i))),
                  value: list[i]["temperature"].max.toFixed(1),
                  type: "最高" + this.tabName
                },
                {
                  time: formatDate(new Date(Number(i))),
                  value: list[i]["temperature"].min.toFixed(1),
                  type: "最低" + this.tabName
                }
              );
            }
            if (list[i]["humidity"] != undefined && this.tabKey == "2") {
              this.data.push(
                {
                  time: formatDate(new Date(Number(i))),
                  value: list[i]["humidity"].max.toFixed(1),
                  type: "最高" + this.tabName
                },
                {
                  time: formatDate(new Date(Number(i))),
                  value: list[i]["humidity"].min.toFixed(1),
                  type: "最低" + this.tabName
                }
              );
            }
            if (list[i]["light"] != undefined && this.tabKey == "3") {
              this.data.push(
                {
                  time: formatDate(new Date(Number(i))),
                  value: list[i]["light"].max.toFixed(1),
                  type: "最高" + this.tabName
                },
                {
                  time: formatDate(new Date(Number(i))),
                  value: list[i]["light"].min.toFixed(1),
                  type: "最低" + this.tabName
                }
              );
            }
          }
        }
        this.$mp.page.selectComponent("#column").init(this.initChart);
        if (this.data.length > "0") {
          this.none = false;
        } else {
          this.none = true;
        }
      });
    },
    initChart(canvas, width, height) {
      let _this = this;
      let chart = null;
      chart = new F2.Chart({
        el: canvas,
        width,
        height
      });
      var defs = {
        time: {
          type: "timeCat",
          mask: this.timeKey == "1" ? "MM-DD hh:mm" : "MM-DD",
          tickCount: this.timeKey == "1" ? 4 : 7,
          range: [0, 1]
        },
        value: {
          tickCount: 5,
          min: 0,
          alias: _this.tabName,
          formatter: function formatter(ivalue) {
            return ivalue + _this.tabDw;
          }
        }
      };
      chart.source(_this.data, defs);
      chart.axis("time", {
        label: function label(text, index, total) {
          var textCfg = {};
          if (index === 0) {
            textCfg.textAlign = "left";
          } else if (index === total - 1) {
            textCfg.textAlign = "right";
          }
          return textCfg;
        }
      });
      chart.tooltip({
        showCrosshairs: true
      });
      if (this.timeKey == "1") {
        chart
          .line()
          .position("time*value")
          .shape("smooth");
        chart
          .point()
          .position("time*value")
          .shape("smooth")
          .style({
            stroke: "#fff",
            lineWidth: 1
          });
      } else {
        chart
          .line()
          .position("time*value")
          .color("type")
          .shape("type", function(type) {
            if (type === "最高" + this.tabName) {
              return "line";
            }
            if (type === "最低" + this.tabName) {
              return "line";
            }
          });
      }
      chart.render();
      return chart;
    }
  },
  onShow() {
    this.tabList = [];
    this.devEui = this.$route.query.devEui;
    this.serverUrl = this.$url;
  },
  mounted() {
    this.tabKey = "1";
    this.timeKey = "1";
    this.tabName = "温度";
    this.tabDw = "°C";
    this.GetData();
  },
  watch: {
    tabKey() {
      this.GetData();
    },
    timeKey() {
      this.GetData();
    }
  }
};
</script>

<style scoped>
.ff-canvas {
  width: 100%;
  height: 240px;
  background: #ffffff;
  margin-bottom: 5px;
  position: relative;
  overflow: hidden;
}
.ff-canvas .no-none {
  line-height: 240px;
  height: 100%;
  width: 100%;
  background: #ffffff;
  font-size: 13px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.box {
  overflow: hidden;
  position: relative;
  background-color: #ffffff;
  width: 100%;
  padding-bottom: 56%;
  margin-bottom: 5px;
}
.box .name {
  line-height: 40px;
  height: 40px;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 15px;
  color: #ffffff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  text-indent: 10px;
  z-index: 5;
}
.box .edit {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  /* background-color: rgba(0, 0, 0, 0.3); */
  position: absolute;
  right: 7px;
  top: 3px;
  z-index: 6;
}
.box .img {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-size: cover;
}
.box .edit img {
  width: 24px;
  height: 24px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.box .no-img {
  position: absolute;
  text-align: center;
  left: 50%;
  top: 56%;
  transform: translate(-50%, -50%);
}
.box .no-img img {
  width: 127px;
  height: 97px;
}
.box .no-img .txt {
  font-size: 11px;
  color: #aaaaaa;
  line-height: 12px;
  font-weight: 200;
}

.detail-time {
  overflow: hidden;
  text-align: left;
  background: #ffffff;
  position: relative;
  z-index: 2;
}

.detail-time {
  text-align: right;
  height: 30px;
  padding: 5px 10px 6px;
}

.detail-time .time-more {
  float: left;
  line-height: 30px;
  font-size: 14px;
  padding: 0 15px;
}

.detail-time .button {
  text-align: center;
  display: inline-block;
  vertical-align: top;
  border: 1px solid #d9d9d9;
  line-height: 26px;
  height: 26px;
  font-size: 12px;
  margin: 2px 4px;
  width: 60px;
  border-radius: 4px;
  position: relative;
}
.detail-time .button .ioc {
  width: 12px;
  height: 12px;
  position: absolute;
  right: 0px;
  top: 0;
  display: none;
}
.detail-time .button.ac .ioc {
  display: block;
}

.grid {
  background: #ffffff;
  text-align: center;
  overflow: hidden;
  margin-bottom: 5px;
  line-height: 50px;
}

.grid .ioc {
  width: 32px;
  height: 32px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}

.grid .ac {
  position: absolute;
  width: 14px;
  height: 14px;
  top: 10px;
  right: 2px;
}

.grid .ts {
  padding-left: 0px;
  font-size: 15px;
}
.grid .temperature .ts {
  color: #39d542;
}
.grid .light .ts {
  color: #e6b726;
}
.container .echarts-wrap:last-child {
  margin-bottom: 0;
}
.none {
  text-align: center;
  font-size: 14px;
  padding: 20px;
}
</style>
