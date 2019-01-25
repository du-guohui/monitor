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

    <!-- 温度图表 -->
    <div class="echarts-wrap" v-if="echart1">
      <div class="spin-box" v-if="loading">
        <wux-spin wux-class="spin"/>
      </div>
      <mpvue-echarts
        lazyLoad
        :echarts="echarts"
        :onInit="handleInit"
        ref="echarts"
        canvasId="echart"
      />
    </div>
    <!-- 湿度图表 -->
    <div class="echarts-wrap" v-if="echart2">
      <div class="spin-box" v-if="loading">
        <wux-spin wux-class="spin"/>
      </div>
      <mpvue-echarts
        lazyLoad
        :echarts="echarts"
        :onInit="handleInit2"
        ref="echarts2"
        canvasId="echart2"
      />
    </div>
    <!-- 光照图表 -->
    <div class="echarts-wrap" v-if="echart3">
      <div class="spin-box" v-if="loading">
        <wux-spin wux-class="spin"/>
      </div>
      <mpvue-echarts
        lazyLoad
        :echarts="echarts"
        :onInit="handleInit3"
        ref="echarts3"
        canvasId="echart3"
      />
    </div>
    <wux-calendar id="wux-calendar"/>
  </div>
</template>

<script>
import { $wuxCalendar } from "../../../static/wux/index";
import * as echarts from "../../../static/js/echarts.min";
import mpvueEcharts from "mpvue-echarts";
import { formatDate } from "@/utils/index";
import store from "@/store";
let chart, chart2, chart3;

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
      echart1: true,
      echart2: false,
      echart3: false,
      option1: null,
      option2: null,
      option3: null,
      loading: true,
      timeKey: "1",
      devEui: "",
      serverUrl: "",
      time: [],
      date: "",
      config: {
        animation: true,
        tooltip: {
          trigger: "axis",
          position: ["67%", "2.5%"],
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: []
        }
      }
    };
  },
  methods: {
    onChange(e) {
      this.current = e.mp.detail.key;
    },
    openCalendar() {
      let _this = this;
      const now = new Date();
      const minDate = now.getTime() - 86400 * 30 * 1000;
      const maxDate = now.getTime();
      $wuxCalendar().open({
        value: _this.time,
        minDate,
        maxDate,
        onChange: (values, displayValues) => {
          _this.time = values;
        }
      });
    },
    initChart() {
      this.config.xAxis.data = [];
      //温度图表
      if (this.timeKey == "1") {
        this.option1 = {
          ...this.config,
          yAxis: {
            axisLabel: {
              formatter: "{value}"
            }
          },
          legend: {
            data: ["温度", "湿度"],
            x: "4%",
            y: "5%"
          },
          yAxis: [
            {
              name: "温度",
              axisLabel: {
                formatter: "{value} °C"
              }
            },
            {
              name: "湿度",
              axisLabel: {
                formatter: "{value} %"
              }
            }
          ],
          series: [
            {
              name: "温度",
              type: "line",
              yAxisIndex: 0,
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
              name: "湿度",
              type: "line",
              yAxisIndex: 1,
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
      } else {
        this.option1 = {
          ...this.config,
          yAxis: {
            axisLabel: {
              formatter: "{value} °C"
            }
          },
          legend: {
            data: ["最高温度", "最低温度"],
            x: "4%",
            y: "5%"
          },
          series: []
        };
      }
      //湿度图表
      this.option2 = {
        ...this.config,
        yAxis: {
          axisLabel: {
            formatter: "{value} %"
          }
        },
        legend: {
          data: ["最高湿度", "最低湿度"],
          x: "4%",
          y: "5%"
        },
        series: []
      };
      //光照图表
      this.option3 = {
        ...this.config,
        yAxis: {
          axisLabel: {
            formatter: "{value} Lx"
          }
        },
        legend: {
          data: ["最高光照", "最低光照"],
          x: "4%",
          y: "5%"
        },
        series: []
      };

      function Comb(option, data) {
        let { avg, max, min } = data;
        if (avg != undefined) {
          if (option.series[0] == undefined) {
            option.series.push({
              name: "",
              type: "line",
              smooth: true,
              data: [avg.toFixed(1)],
              itemStyle: {
                normal: {
                  color: "#39d542",
                  lineStyle: {
                    color: "#39d542"
                  }
                }
              }
            });
          } else {
            option.series[0].data.push(avg.toFixed(1));
          }
        } else if (max != undefined) {
          if (option.series[0] == undefined && option.series[1] == undefined) {
            option.series.push({
              name: "",
              type: "line",
              data: [max.toFixed(1)]
            });
            option.series.push({
              name: "",
              type: "line",
              data: [min.toFixed(1)]
            });
          } else {
            option.series[0].data.push(max.toFixed(1));
            option.series[1].data.push(min.toFixed(1));
          }
        }
      }
      // this.loading = true;
      this.ajax("device/getDeviceHistoryData", {
        devEui: this.$route.query.devEui,
        period: this.timeKey,
        type: this.timeKey == "1" ? "" : "max_and_min"
      }).then(res => {
        let list = res.content;
        for (let i in list) {
          if (JSON.stringify(list[i]) == "{}") {
          } else {
            if (this.timeKey == "1") {
              this.config.xAxis.data.push(
                formatDate(new Date(Number(i)), "hour")
              );
            } else {
              this.config.xAxis.data.push(formatDate(new Date(Number(i))));
            }
          }
          if (this.timeKey != "1") {
            if (list[i]["sht30"] != undefined) {
              Comb(this.option1, list[i].sht30);
            }
            if (list[i]["temperature"] != undefined) {
              Comb(this.option1, list[i].temperature);
            }
            if (list[i]["humidity"] != undefined) {
              Comb(this.option2, list[i].humidity);
            }
          } else {
            if (list[i]["sht30"] != undefined) {
              this.option1.series[0].data.push(list[i]["sht30"].avg.toFixed(1));
            }
            if (list[i]["temperature"] != undefined) {
              this.option1.series[0].data.push(
                list[i]["temperature"].avg.toFixed(1)
              );
            }
            if (list[i]["humidity"] != undefined) {
              this.option1.series[1].data.push(
                list[i]["humidity"].avg.toFixed(1)
              );
            }
          }
          if (list[i]["light"] != undefined) {
            this.echart3 = true;
            Comb(this.option3, list[i].light);
          } else {
            this.echart3 = false;
          }
        }
        if (this.timeKey == "1") {
          this.echart2 = false;
          if (this.echart3) {
            this.option3.series[0].name = "光照";
            this.option3.series[0].itemStyle = {
              normal: {
                color: "#e6b726",
                lineStyle: {
                  color: "#e6b726"
                }
              }
            };
          }
        } else {
          this.echart2 = true;
          this.option1.series[0].name = "最高温度";
          this.option1.series[1].name = "最低温度";
          if (this.echart2) {
            this.option2.series[0].name = "最高湿度";
            this.option2.series[1].name = "最低湿度";
          }
          if (this.echart3) {
            this.option3.series[0].name = "最高光照";
            this.option3.series[1].name = "最低光照";
          }
        }
        setTimeout(() => {
          this.loading = false;
          this.$refs.echarts.init();
          this.echart2 ? this.$refs.echarts2.init() : "";
          this.echart3 ? this.$refs.echarts3.init() : "";
        }, 200);
      });
    },
    handleInit(canvas, width, height) {
      chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      canvas.setChart(chart);
      chart.setOption(this.option1);
      return chart;
    },
    handleInit2(canvas, width, height) {
      chart2 = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      canvas.setChart(chart2);
      chart2.setOption(this.option2);
      return chart2;
    },
    handleInit3(canvas, width, height) {
      chart3 = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      canvas.setChart(chart3);
      chart3.setOption(this.option3);
      return chart3;
    }
  },
  onShow() {
    this.tabList = [];
    this.devEui = this.$route.query.devEui;
    this.serverUrl = this.$url;
  },
  mounted() {
    const now = new Date();
    this.time.push(now.getTime());
    this.date = now.getMonth() + 1 + "-" + now.getDate();
    this.echart2 = false;
    this.echart3 = false;
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
  padding-bottom: 5px;
  overflow: hidden;
  width: 100%;
  height: 260px;
  position: relative;
  background: #ffffff;
  z-index: 2;
  margin-bottom: 5px;
}
.spin-box {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 1);
  z-index: 10;
}
.spin-box ._wux-spin {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  padding: 5px 10px 10px;
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
.container .echarts-wrap:last-child {
  margin-bottom: 0;
}
</style>
