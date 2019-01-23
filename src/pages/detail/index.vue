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
            <wux-col :span="item.light ? '4' : '6'">
              <div class="temperature li">
                <img src="/static/img/14.png" alt>
                <span class="ts" v-if="item.sht30 || item.temperature">
                  <span v-if="item.sht30">{{item.sht30 | Rounding}}</span>
                  <span v-if="item.temperature">{{item.temperature | Rounding}}</span>°C
                </span>
                <span class="ts" v-else>-</span>
              </div>
            </wux-col>
            <wux-col :span="item.light ? '4' : '6'">
              <div class="humidity li">
                <img src="/static/img/10.png" alt>
                <span class="ts color1" v-if="item.humidity">{{item.humidity | Rounding}}%</span>
                <span class="ts color1" v-else>-</span>
              </div>
            </wux-col>
            <wux-col span="4" v-if="item.light">
              <div class="light li">
                <img src="/static/img/19.png" alt>
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

    <div class="echarts-wrap">
      <mpvue-echarts lazyLoad :echarts="echarts" :onInit="handleInit" ref="echarts"/>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts/dist/echarts.min";
import mpvueEcharts from "mpvue-echarts";
import { formatDate } from "@/utils/index";
import store from "@/store";
let chart = null;

export default {
  computed: {
    DeviceList() {
      return store.state.DeviceList;
    }
  },
  components: {
    mpvueEcharts
  },
  data() {
    return {
      echarts,
      option: null,
      timeKey: "1",
      devEui: "",
      serverUrl: ""
    };
  },
  methods: {
    onChange(e) {
      this.current = e.mp.detail.key;
    },
    initChart() {
      this.option = {
        animation: true,
        tooltip: {
          trigger: "axis",
          position: ["68%", "0"],
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          left: "30",
          top: "5",
          data: ["温度(°C)", "温度(%)"]
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "5%",
          containLabel: true
        },
        dataZoom: [
          {
            type: "slider",
            show: this.timeKey == "7" ? false : true,
            realtime: true,
            start: this.timeKey == "7" ? "0" : "80",
            end: 100
          }
        ],
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: []
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "温度(°C)",
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                color: "#39d542",
                lineStyle: {
                  color: "#39d542"
                }
              }
            },
            data: []
          },
          {
            name: "温度(%)",
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                color: "#0093fb",
                lineStyle: {
                  color: "#0093fb"
                }
              }
            },
            data: []
          }
        ]
      };

      this.ajax("device/getDeviceHistoryData", {
        devEui: this.$route.query.devEui,
        period: this.timeKey
      }).then(res => {
        let list = res.content;
        for (let i in list) {
          if (this.timeKey == "1") {
            this.option.xAxis[0].data.push(
              formatDate(new Date(Number(i)), "hour")
            );
          } else {
            this.option.xAxis[0].data.push(formatDate(new Date(Number(i))));
          }
          if (list[i].sht30) {
            this.option.series[0].data.push(list[i].sht30.toFixed(1));
          }
          if (list[i].temperature) {
            this.option.series[0].data.push(list[i].temperature.toFixed(1));
          }
          if (list[i].humidity) {
            this.option.series[1].data.push(list[i].humidity.toFixed(1));
          }
        }
        this.$refs.echarts.init();
      });
    },
    handleInit(canvas, width, height) {
      chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      canvas.setChart(chart);
      chart.setOption(this.option);
      return chart;
    }
  },
  onShow() {
    this.tabList = [];
    this.devEui = this.$route.query.devEui;
    this.serverUrl = this.$url;
  },
  mounted() {
    console.log(this.$route.query.devEui);

    if ((this.timeKey = "1")) {
      this.initChart();
      return;
    } else {
      this.timeKey == "1";
    }
  },
  watch: {
    timeKey() {
      this.initChart();
    }
  }
};
</script>

<style scoped>
.echarts-wrap {
  width: 100%;
  height: 280px;
  position: relative;
  z-index: 10;
  background: #ffffff;
  z-index: 0;
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
  padding: 7px 10px 13px;
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

.grid img {
  width: 32px;
  height: 32px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
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
</style>
