<template>
  <div class="container">
    <div v-if="devEui">
      <div v-for="(item,index) in DeviceList" :key="index" class="boxs">
        <div class="box" v-if="devEui == item.devEui">
          <a class="edit" :href="'/pages/device/index?id=' + item.id">
            <img src="/static/img/9.png" alt>
          </a>
          <div class="name">{{item.name}}</div>

          <div class="img" v-if="item.img_url">
            <wux-image
              wux-class="image"
              v-if="item.img_url"
              :src="serverUrl + item.img_url"
              lazyLoad
            />
          </div>
          <div class="no-img" v-else>
            <img src="/static/img/18.png" alt>
            <div class="txt">未上传位置图片</div>
          </div>
        </div>
      </div>
    </div>

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

      function Chart(data, i, _this) {
        _this.option.series.name = data[i].tags.prop;
        for (let s in data[i].dps) {
          _this.option.xAxis[0].data.push(formatDate(new Date(Number(s))));
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
    this.tabList = [];
    this.devEui = this.$route.query.devEui;
    this.serverUrl = this.$url;
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
.box {
  height: 200px;
  overflow: hidden;
  position: relative;
  background-color: #ffffff;
}
.box .name {
  line-height: 40px;
  height: 40px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 15px;
  color: #ffffff;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.box .edit {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  right: 13px;
  top: 7px;
}
.box .img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
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
  top: 46%;
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
</style>
