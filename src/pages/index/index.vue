<template>
  <div class="container">
    <div class="index-weather">
      <div class="city">广州</div>
      <div class="temperature">25°C</div>
      <div class="humidity">68%</div>
    </div>

    <div class="echarts-wrap">
      <mpvue-echarts :echarts="echarts" :onInit="handleInit" ref="echarts"/>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts/dist/echarts.min";
import mpvueEcharts from "mpvue-echarts";
let chart = null;
export default {
  components: {
    mpvueEcharts
  },
  data() {
    return {
      echarts,
      option: null
    };
  },
  methods: {
    initChart() {
      this.option = {
        tooltip: {
          formatter: "{a} {c} {b}°C"
        },
        toolbox: {
          show: true,
          feature: {}
        },
        series: [
          {
            name: "平均温度",
            center: ["68%", "55%"],
            type: "gauge",
            z: 3,
            min: "-10",
            max: "100",
            splitNumber: 11,
            radius: "65%",
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 5
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto"
              }
            },
            splitLine: {
              // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "auto"
              }
            },
            axisLabel: {
              backgroundColor: "auto",
              borderRadius: 2,
              color: "#eee",
              padding: 3,
              textShadowBlur: 2,
              textShadowOffsetX: 1,
              textShadowOffsetY: 1,
              textShadowColor: "#222"
            },
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: "bolder",
              fontSize: 20,
              fontStyle: "italic"
            },
            data: [{ value: 26, name: "" }]
          },
          {
            name: "最高温度",
            type: "gauge",
            center: ["20%", "35%"],
            radius: "30%",
            min: "-10",
            max: "100",
            splitNumber: 11,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 2
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 5, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto"
              }
            },
            splitLine: {
              // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "auto"
              }
            },
            pointer: {
              width: 2
            },
            title: {
              offsetCenter: [0, "-30%"] // x, y，单位px
            },
            data: [{ value: "30", name: "" }]
          },
          {
            name: "最低温度",
            type: "gauge",
            center: ["20%", "70%"],
            radius: "30%",
            min: "-10",
            max: "100",
            splitNumber: 11,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 2
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 5, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto"
              }
            },
            splitLine: {
              // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "auto"
              }
            },
            pointer: {
              width: 2
            },
            title: {
              offsetCenter: [0, "-30%"]
            },
            detail: {
              fontWeight: "bolder"
            },
            data: [{ value: "20", name: "" }]
          }
        ]
      };
      this.$refs.echarts.init();
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
  mounted() {
    this.initChart();
  }
};
</script>

<style scoped>
.echarts-wrap {
  width: 100%;
  height: 320px;
  z-index: 10;
}
.container{
  display: none;
}
</style>
