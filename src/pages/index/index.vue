<template>
  <div class="container mtt">
    <div class="index-weather" v-if="weatherData!=''">
      <div class="city">
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
            <div class="txt">{{DeviceIndex}}</div>
            <div class="txt2">设备数</div>
          </div>
        </wux-col>
        <wux-col span="4">
          <div class="li">
            <div class="txt">{{DeviceOl}}</div>
            <div class="txt2">在线设备</div>
          </div>
        </wux-col>
        <wux-col span="4">
          <div class="li">
            <div class="txt">{{AlarmIndex}}</div>
            <div class="txt2">报警</div>
          </div>
        </wux-col>
      </wux-row>
    </div>

    <div class="echarts-li">
      <div class="title color1">设备分布</div>
      <div class="echarts-wrap" v-show="!SelectBox">
        <ff-canvas id="column1" canvas-id="column1" :opts="opts"/>
      </div>
    </div>

    <div class="echarts-li">
      <div class="title color1" @click="Select">
        {{Group.name}}一周温度
        <wux-icon type="ios-more" size="26" color="#cccccc" class="ioc"/>
      </div>
      <div class="echarts-wrap" v-show="!SelectBox">
        <ff-canvas id="column2" canvas-id="column2" :opts="opts"/>
      </div>
    </div>

    <div class="echarts-li">
      <div class="title color1" @click="Select">
        {{Group.name}}一周湿度
        <wux-icon type="ios-more" size="26" color="#cccccc" class="ioc"/>
      </div>
      <div class="echarts-wrap" v-show="!SelectBox">
        <ff-canvas id="column3" canvas-id="column3" :opts="opts"/>
      </div>
    </div>

    <wux-select id="wux-select"/>
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
import { $wuxSelect } from "../../../static/wux/index";
import store from "@/store";
import { formatDate, ChartData } from "@/utils/index";
export default {
  computed: {
    DeviceList() {
      return store.state.DeviceList;
    },
    AlarmList() {
      return store.state.AlarmList;
    }
  },
  data() {
    return {
      DeviceIndex: 0,
      DeviceOl: 0,
      AlarmIndex: 0,
      Group: "",
      GroupList: [],
      weatherData: "",
      opts: {
        lazyLoad: true
      },
      data0: [],
      data1: [],
      data2: [],
      SelectBox: false
    };
  },
  methods: {
    Select() {
      let _this = this;
      _this.SelectBox = true;
      $wuxSelect("#wux-select").open({
        value: _this.Group.id,
        options: _this.GroupList,
        onConfirm: (value, index, options) => {
          if (index !== -1) {
            _this.Group = {
              id: value,
              name: options[index].title
            };
          }
          _this.SelectBox = false;
        },
        onCancel: () => {
          _this.SelectBox = false;
        }
      });
    },
    initChart(canvas, width, height) {
      let chart = null;
      let data = [];
      let map = [];
      let map2 = [];
      let list = this.DeviceList;
      let length = 0;
      for (let i in list) {
        length = length + list[i].device_list.length;
      }
      for (let i in list) {
        data.push({
          name: list[i].group.name,
          a: "1",
          percent: list[i].device_list.length / length
        });
        map.push(list[i].group.name);
        map2.push((list[i].device_list.length / length) * 100 + "%");
      }

      var obj = new Object();
      for (var x in map) {
        obj[map[x]] = map2[x];
      }

      chart = new F2.Chart({
        el: canvas,
        width,
        height
      });
      chart.source(data, {
        percent: {
          formatter: function formatter(val) {
            return val * 100 + "%" + " , 设备数量：" + val * length;
          }
        }
      });
      chart.legend({
        position: "right",
        itemFormatter: function itemFormatter(val) {
          return val + "  " + obj[val];
        }
      });
      chart.coord("polar", {
        transposed: true,
        radius: 0.85
      });
      chart.axis(false);
      chart
        .interval()
        .position("a*percent")
        .color("name", [
          "#1890FF",
          "#13C2C2",
          "#2FC25B",
          "#FACC14",
          "#F04864",
          "#8543E0"
        ])
        .adjust("stack")
        .style({
          lineWidth: 1,
          stroke: "#fff",
          lineJoin: "round",
          lineCap: "round"
        })
        .animate({
          appear: {
            duration: 1200,
            easing: "bounceOut"
          }
        });
      chart.render();
      return chart;
    },
    initChart2(canvas, width, height) {
      let chart = null;
      chart = new F2.Chart({
        el: canvas,
        width,
        height
      });
      var defs = {
        time: {
          type: "timeCat",
          mask: "MM-DD",
          tickCount: 5
        },
        value: {
          tickCount: 6,
          alias: "",
          formatter: function formatter(ivalue) {
            if (ivalue == "") {
              return "";
            } else {
              return Number(ivalue).toFixed(1) + "°C";
            }
          }
        }
      };
      chart.source(this.data1, defs);
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
      chart
        .area()
        .position("time*value")
        .color("type")
        .shape("type", function(type) {});
      chart
        .line()
        .position("time*value")
        .color("type");
      chart.render();
      return chart;
    },
    initChart3(canvas, width, height) {
      let chart = null;
      chart = new F2.Chart({
        el: canvas,
        width,
        height
      });
      var defs = {
        time: {
          type: "timeCat",
          mask: "MM-DD",
          tickCount: 7
        },
        value: {
          tickCount: 6,
          alias: "",
          formatter: function formatter(ivalue) {
            if (ivalue == "") {
              return "";
            } else {
              return ivalue.toFixed(1) + "%";
            }
          }
        }
      };
      chart.source(this.data2, defs);
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

      chart
        .area()
        .position("time*value")
        .color("type")
        .shape("type", function(type) {});
      chart
        .line()
        .position("time*value")
        .color("type");
      chart.render();
      return chart;
    },
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
    },
    GetData(id) {
      let _this = this;
      _this.data1 = [];
      _this.data2 = [];
      _this
        .ajax("device/getDeviceContinuousDataPacketByGroup", {
          group_id: _this.Group.id,
          period: 7,
          res_type: "avg"
        })
        .then(res => {
          if (res.length > "0") {
            for (let i in res) {
              let list = res[i].continuousData;
              for (let time in list) {
                let temperature = ChartData(
                  list[time],
                  time,
                  res[i].name
                ).filter(
                  item => item.types == "temperature" && item.res == "avg"
                );
                _this.data1.push(temperature[0]);
                let humidity = ChartData(list[time], time, res[i].name).filter(
                  item => item.types == "humidity" && item.res == "avg"
                );
                _this.data2.push(humidity[0]);
              }
            }
          }
          _this.$mp.page.selectComponent("#column1").init(_this.initChart);
          _this.$mp.page.selectComponent("#column2").init(_this.initChart2);
          _this.$mp.page.selectComponent("#column3").init(_this.initChart3);
        });
    }
  },
  mounted() {
    this.Weather();
    if (this.DeviceOl > "0" && this.DeviceList) {
      this.Group = this.DeviceList[0].group;
      this.GetData();
    }
  },
  watch: {
    DeviceList() {
      this.DeviceOl = 0;
      this.DeviceIndex = 0;
      for (let i in this.DeviceList) {
        if (this.DeviceList[i].device_list.length > "0") {
          this.GroupList.push({
            value: this.DeviceList[i].group.id,
            title: this.DeviceList[i].group.name
          });
        }
        this.DeviceIndex =
          this.DeviceIndex + this.DeviceList[i].device_list.length;
        for (let s in this.DeviceList[i].device_list) {
          if (this.DeviceList[i].device_list[s].last_upload_date != "") {
            this.DeviceOl = this.DeviceOl + 1;
          }
        }
      }
      if (this.$route) {
        if (this.data0.length == "0" && this.$route.name == "pagesIndexIndex") {
          this.Group = this.DeviceList[0].group;
        }
      }
    },
    AlarmList() {
      this.AlarmIndex = this.AlarmList.filter(item => !item.is_deleted).length;
    },
    Group() {
      this.GetData();
    }
  }
};
</script>

<style scoped>
.echarts-wrap {
  overflow: hidden;
  width: 100%;
  height: 220px;
  position: relative;
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
  border-radius: 8px;
  height: 264px;
}

.echarts-li .title {
  line-height: 36px;
  font-size: 14px;
  font-weight: 400;
  padding: 4px 12px;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 8px;
  position: relative;
}

.echarts-li .title .ioc {
  position: absolute;
  right: 10px;
  top: 10px;
}

.index-shebei {
  overflow: hidden;
  background: #ffffff;
  margin: 10px 10px 5px;
  border-radius: 8px;
}

.index-shebei .title {
  line-height: 36px;
  font-size: 13px;
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

.column1 {
}
</style>
