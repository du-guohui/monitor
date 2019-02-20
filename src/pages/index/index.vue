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
            <div class="txt">{{DeviceLength}}</div>
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
          <div class="li" @click="ToAlarm">
            <div class="txt" :class="{'red' : AlarmLength > '0'}">{{AlarmLength}}</div>
            <div class="txt2" :class="{'red' : AlarmLength > '0'}">报警</div>
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
      <div class="title color1">
        {{Group.title}}一周温度
        <wux-icon type="ios-more" size="26" color="#cccccc" class="ioc" @click="Select"/>
      </div>
      <div class="echarts-wrap" v-show="!SelectBox">
        <ff-canvas id="column2" canvas-id="column2" :opts="opts"/>
      </div>
    </div>

    <div class="echarts-li">
      <div class="title color1">
        {{Group.title}}一周湿度
        <wux-icon type="ios-more" size="26" color="#cccccc" class="ioc" @click="Select"/>
      </div>
      <div class="echarts-wrap" v-show="!SelectBox">
        <ff-canvas id="column3" canvas-id="column3" :opts="opts"/>
      </div>
    </div>

    <wux-select id="wux-select"/>
    <wux-loading id="wux-loading"/>
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
import { $wuxSelect, $wuxLoading } from "../../../static/wux/index";
import store from "@/store";
import { formatDate, ChartData } from "@/utils/index";
export default {
  computed: {
    Loading() {
      return store.state.Loading;
    },
    DeviceList() {
      return store.state.Data.Device;
    },
    DeviceLength() {
      return store.state.Data.DeviceLength;
    },
    DeviceOl() {
      return store.state.Data.DeviceOl;
    },
    AlarmList() {
      return store.state.Data.Alarm;
    },
    AlarmLength() {
      return store.state.Data.Alarm.filter(item => !item.is_recovered).length;
    }
  },
  data() {
    return {
      Group: "",
      GroupList: [],
      weatherData: "",
      opts: {
        lazyLoad: true
      },
      data0: [],
      data1: [],
      data2: [],
      SelectBox: false,
      change: false,
      load: true
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
              title: options[index].title
            };
            _this.GetData();
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
        map2.push(
          ((list[i].device_list.length / length) * 100).toFixed(1) + "%"
        );
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
            return (
              (val * 100).toFixed(1) + "%" + " , 设备数量：" + val * length
            );
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
          mask: "MM-DD"
        },
        value: {
          tickCount: 5,
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
          mask: "MM-DD"
        },
        value: {
          tickCount: 5,
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
    GetData() {
      if (
        !this.load &&
        JSON.stringify(this.Group) != "{}" &&
        this.DeviceLength > "0"
      ) {
        if (this.Group.id) {
          this.data1 = [];
          this.data2 = [];
          this.ajax("device/getDeviceContinuousDataPacketByGroup", {
            group_id: this.Group.id,
            period: 7,
            res_type: "avg"
          }).then(res => {
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
                  this.data1.push(temperature[0]);
                  let humidity = ChartData(
                    list[time],
                    time,
                    res[i].name
                  ).filter(
                    item => item.types == "humidity" && item.res == "avg"
                  );
                  this.data2.push(humidity[0]);
                }
              }
            }
            this.$mp.page.selectComponent("#column1").init(this.initChart);
            this.$mp.page.selectComponent("#column2").init(this.initChart2);
            this.$mp.page.selectComponent("#column3").init(this.initChart3);
          });
        } else {
          this.$mp.page.selectComponent("#column1").init(this.initChart);
        }
      } else {
        setTimeout(() => {
          this.GetData();
        }, 400);
      }
    },
    ToAlarm() {
      wx.switchTab({
        url: "/pages/alarm/index"
      });
    }
  },
  mounted() {
    this.Weather();
  },
  onShow() {
    this.data1 = [];
    this.data2 = [];
    this.GetData();
  },
  watch: {
    Loading() {
      let _this = this;
      if (this.$route) {
        this.$wuxLoading = $wuxLoading();
        if (this.Loading) {
          this.$wuxLoading.show({
            text: "数据加载中"
          });
        } else {
          setTimeout(() => {
            this.$wuxLoading.hide();
          }, 800);
        }
      }
      if (this.Loading) {
        _this.load = true;
      } else {
        setTimeout(() => {
          _this.load = false;
        }, 800);
      }
    },
    DeviceList() {
      this.Group = "";
      this.GroupList = [];
      if (this.DeviceList.length > "0") {
        for (let i in this.DeviceList) {
          if (this.DeviceList[i].device_list.length > "0") {
            this.GroupList.push({
              value: this.DeviceList[i].group.id,
              title: this.DeviceList[i].group.name
            });
            if (this.Group.length == "0") {
              this.Group = {
                id: this.DeviceList[i].group.id,
                title: this.DeviceList[i].group.name
              };
            }
          }
        }
      }
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
  z-index: 0;
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
  right: 0px;
  top: 0px;
  padding: 10px 20px;
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

.index-shebei .red {
  color: red;
}

.mtt {
  padding-bottom: 5px;
}
</style>
