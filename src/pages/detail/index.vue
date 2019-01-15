<template>
  <div class="container">
    <div v-if="devEui">
      <div v-for="(item,index) in DeviceList" :key="index">
        <div class="box" v-if="devEui == item.devEui">
          <div clsss="name">{{item.name}}</div>

          <div class="img">
            <img :src="item.img_url">
          </div>
        </div>
      </div>
    </div>
    <div @click="Upload">Upload</div>

    <div class="parameter" v-if="tabList">
      <div
        class="parameter-button"
        v-for="item in tabList"
        :key="item"
        @click="tabKey = item"
      >{{item}}</div>
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
      tabKey: "",
      tabList: [],
      devEui: ""
    };
  },
  methods: {
    Upload() {
      wx.chooseImage({
        success(res) {
          const tempFilePaths = res.tempFilePaths;
          wx.uploadFile({
            url: "http://172.16.1.117:5000/device/addEnvImg",
            filePath: tempFilePaths[0],
            name: "img",
            header: {
              Authorization: wx.getStorageSync("Authorization")
            },
            success(res) {
              console.log(res);
              //const data = res.data;
              // do something
            }
          });
        }
      });
    },
    onChange(e) {
      this.current = e.mp.detail.key;
    },
    formatDate(time) {
      console.log(formatDate(new Date(time)));
      // formatDate(new Date(time))
      // formatDate()
    },
    initChart() {
      this.option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        dataZoom: [
          {
            type: "slider", //图表下方的伸缩条
            show: true, //是否显示
            realtime: true, //拖动时，是否实时更新系列的视图
            start: 0, //伸缩条开始位置（1-100），可以随时更改
            end: 100 //伸缩条结束位置（1-100），可以随时更改
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
            name: "",
            type: "line",
            data: []
          }
        ]
      };
      // 1547544427000
      // console.log(formatDate(new Date(1547544427000)));
      function Chart(data, i, _this) {
        _this.option.series.name = data[i].tags.prop;
        for (let s in data[i].dps) {
          //console.log(formatDate(new Date(s)));
          //console.log(formatDate(new Date(s)));

          console.log(formatDate(new Date(s)));

          //console.log(formatDate(new Date(time)));

          _this.option.xAxis[0].data.push(s);
          _this.option.series[0].data.push(data[i].dps[s].toFixed(2));
        }
        _this.$refs.echarts.init();
      }

      this.ajax("device/getDeviceHistoryData?", {
        devEui: this.$route.query.devEui,
        start: Number(new Date().getTime() - 60 * 60 * 1000),
        end: Number(new Date().getTime())
      }).then(res => {
        let chart = res.content.data;
        if (this.tabList.length == "0") {
          for (let list in chart) {
            let key = chart[list].tags.prop;
            if (
              key == "sht30" ||
              key == "temperature" ||
              key == "humidity" ||
              key == "pm25" ||
              key == "formaldehyde" ||
              key == "light"
            ) {
              this.tabList.push(key);
            }
          }
          Chart(chart, 0, this);
        } else {
          for (let i in this.tabList) {
            if (this.tabList[i] == this.tabKey) {
              Chart(chart, i, this);
            }
          }
        }
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
    let _this = this;
    _this.tabList = [];
    _this.devEui = this.$route.query.devEui;
  },
  watch: {
    devEui() {
      this.initChart();
    },
    tabKey() {
      this.initChart();
    }
  }
};
</script>

<style scoped>
.echarts-wrap {
  width: 100%;
  height: 320px;
  position: relative;
  z-index: 10;
}
</style>
