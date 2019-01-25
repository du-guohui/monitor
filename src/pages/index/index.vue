<template>
  <div class="container mtt">
    <div class="index-weather">
      <div class="city" v-if="weatherData">
        <img src="/static/img/15.png" alt>
        {{weatherData.basic.parent_city}}
      </div>
      <div class="humidity" v-if="weatherData">
        <img src="/static/img/16.png" alt>
        {{weatherData.now.hum}}%
      </div>
      <div class="temperature" v-if="weatherData">
        <img src="/static/img/17.png" alt>
        {{weatherData.now.tmp}}°C
      </div>
    </div>

    <div class="index-shebei">
      <div class="title color1">设备概览</div>
      <wux-row>
        <wux-col span="4">
          <div class="li">
            <div class="txt">{{DeviceList.length}}</div>
            <div class="txt2">设备数</div>
          </div>
        </wux-col>
        <wux-col span="4">
          <div class="li">
            <div class="txt">{{DeviceList.length}}</div>
            <div class="txt2">在线设备</div>
          </div>
        </wux-col>
        <wux-col span="4">
          <div class="li">
            <div class="txt">0</div>
            <div class="txt2">提示</div>
          </div>
        </wux-col>
      </wux-row>
    </div>

    <div class="echarts-li">
      <div class="title color1">设备分布</div>
      <div class="echarts-wrap">
        <mpvue-echarts :echarts="echarts" :onInit="ecScatterInit" canvasId="scatter"/>
      </div>
    </div>

    <div class="echarts-li">
      <div class="title color1">珠江城一周温度</div>
      <div class="echarts-wrap">
        <mpvue-echarts :echarts="echarts" :onInit="ecBarInit" canvasId="bar"/>
      </div>
    </div>

    <div class="echarts-li">
      <div class="title color1">珠江城一周湿度</div>
      <div class="echarts-wrap">
        <mpvue-echarts :echarts="echarts" :onInit="ecBarInit2" canvasId="bar2"/>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "../../../static/js/echarts.min";
import mpvueEcharts from "mpvue-echarts";
import store from "@/store";
let barChart, barChart2, scatterChart;

function getBarOption() {
  return {
    tooltip: {
      trigger: "axis",
      confine: true,
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    legend: {
      data: ["工程院", "茶室1", "茶室2", "大会议室"]
    },
    toolbox: {},
    grid: {
      left: "3%",
      right: "7%",
      bottom: "5%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          formatter: "{value} °C"
        }
      }
    ],
    series: [
      {
        name: "工程院",
        type: "line",
        data: [24, 22, 23, 22, 20, 22, 23]
      },
      {
        name: "茶室1",
        type: "line",
        data: [23, 24, 24, 25, 26, 25, 24]
      },
      {
        name: "茶室2",
        type: "line",
        data: [24, 23, 25, 22, 23, 25, 24]
      },
      {
        name: "大会议室",
        type: "line",
        data: [23, 23, 22, 24, 25, 25, 26]
      }
    ]
  };
}
function getBarOption2() {
  return {
    tooltip: {
      trigger: "axis",
      confine: true,
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    legend: {
      data: ["工程院", "茶室1", "茶室2", "大会议室"]
    },
    toolbox: {},
    grid: {
      left: "3%",
      right: "7%",
      bottom: "5%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          formatter: "{value} %"
        }
      }
    ],
    series: [
      {
        name: "工程院",
        type: "line",
        data: [34, 35, 35, 38, 36, 32, 33]
      },
      {
        name: "茶室1",
        type: "line",
        data: [36, 38, 38, 40, 37, 39, 40]
      },
      {
        name: "茶室2",
        type: "line",
        data: [37, 37, 34, 35, 35, 35, 37]
      },
      {
        name: "大会议室",
        type: "line",
        data: [39, 36, 36, 39, 37, 35, 36]
      }
    ]
  };
}
function getScatterOption() {
  return {
    tooltip: {
      trigger: "item",
      formatter: "{a} {b}: {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      x: "left",
      data: ["广州", "北京"]
    },
    series: [
      {
        name: "设备分布",
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        },
        data: [{ value: 6, name: "广州" }, { value: 1, name: "北京" }]
      }
    ]
  };
}
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
      weatherData: "",
      echarts,
      ecBarInit: function(canvas, width, height) {
        barChart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(barChart);
        barChart.setOption(getBarOption());
        return barChart;
      },
      ecBarInit2: function(canvas, width, height) {
        barChart2 = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(barChart2);
        barChart2.setOption(getBarOption2());
        return barChart2;
      },
      ecScatterInit: function(canvas, width, height) {
        scatterChart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(scatterChart);
        scatterChart.setOption(getScatterOption());
        return scatterChart;
      }
    };
  },
  methods: {
    Weather() {
      let _this = this;
      wx.getLocation({
        type: "wgs84",
        success(res) {
          const latitude = res.latitude;
          const longitude = res.longitude;
          wx.request({
            url:
              "https://free-api.heweather.net/s6/weather/now?key=HE1901231004001149",
            data: {
              location: `${latitude},${longitude}`
            },
            success(res) {
              _this.weatherData = res.data.HeWeather6[0];
            }
          });
        }
      });
    }
  },
  mounted() {
    this.Weather();
  }
};
</script>

<style scoped>
.echarts-wrap {
  overflow: hidden;
  width: 100%;
  height: 280px;
  z-index: 10;
}
.index-weather {
  height: 40px;
  line-height: 40px;
  background: #0093fb;
  color: #ffffff;
}
.index-weather .city {
  float: left;
  color: #ffffff;
  font-size: 17px;
  margin-left: 5px;
  font-weight: 400;
}
.index-weather img {
  float: left;
  width: 26px;
  height: 26px;
  margin-top: 7px;
}
.index-weather .humidity,
.index-weather .temperature {
  float: right;
  margin-right: 10px;
  font-weight: 400;
}
.echarts-li {
  overflow: hidden;
  background: #ffffff;
  margin: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
}

.echarts-li .title {
  line-height: 36px;
  font-size: 15px;
  font-weight: 400;
  padding: 4px 12px;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 8px;
}

.index-shebei {
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  margin: 10px 10px 5px;
  border-radius: 12px;
}

.index-shebei .title {
  line-height: 36px;
  font-size: 15px;
  font-weight: 400;
  padding: 4px 12px;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 8px;
}

.index-shebei .li {
  width: 102px;
  height: 72px;
  overflow: hidden;
  background: #ffffff;
  margin: 5px 10px;
  text-align: center;
}

.index-shebei img {
  margin-top: 5px;
  width: 30px;
  height: 30px;
}

.index-shebei .txt {
  font-size: 18px;
  font-weight: bold;
  line-height: 30px;
  height: 30px;
  margin-top: 4px;
  margin-bottom: 4px;
}

.index-shebei .txt2 {
  font-size: 14px;
  color: #7f8081;
  font-weight: 400;
}

.mtt {
  padding-bottom: 5px;
}
</style>
