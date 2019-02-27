<template>
  <div class="container">
    <div class="boxs">
      <div class="box" v-if="data">
        <button data-name="shareBtn" open-type="share" class="shareBtn"></button>
        <img src="/static/img/share.png" alt class="shareBtn-img">
        <a
          class="edit"
          :href="'/pages/device/index?id=' + data.id + '&img_url=' + data.img_url + '&device_group=' + data.device_group_id"
        >
          <img src="/static/img/9.png">
        </a>
        <div class="name">{{data.name}}</div>
        <div
          class="img"
          v-if="data.img_url"
          v-bind:style="{backgroundImage:'url(' + serverUrl + data.img_url + ')'}"
        ></div>
        <div class="no-img" v-else>
          <img src="/static/img/18.png" alt>
          <div class="txt">未上传位置图片</div>
        </div>
      </div>

      <div class="detail-list grid" v-if="data">
        <wux-row>
          <wux-col :span="data.light ? '4' : '6'" @click="tabIndex = '0'">
            <div class="temperature li">
              <img src="/static/img/14.png" class="ioc">
              <img src="/static/img/ac.png" class="ac" v-if="tabIndex == '0'">
              <span class="ts" v-if="data.temperature">
                <span v-if="data.temperature">{{data.temperature | Rounding}}</span>°C
              </span>
              <span class="ts" v-else>-</span>
            </div>
          </wux-col>
          <wux-col :span="data.light ? '4' : '6'" @click="tabIndex = '1'">
            <div class="humidity li">
              <img src="/static/img/10.png" class="ioc">
              <img src="/static/img/ac.png" class="ac" v-if="tabIndex == '1'">
              <span class="ts color1" v-if="data.humidity">{{data.humidity | Rounding}}%</span>
              <span class="ts color1" v-else>-</span>
            </div>
          </wux-col>
          <wux-col span="4" v-if="data.light" @click="tabIndex = '2'">
            <div class="light li">
              <img src="/static/img/19.png" class="ioc">
              <img src="/static/img/ac.png" class="ac" v-if="tabIndex == '2'">
              <span class="ts" v-if="data.light">{{data.light | Rounding}}Lx</span>
              <span class="ts" v-else>-</span>
            </div>
          </wux-col>
        </wux-row>
      </div>
    </div>

    <div class="detail-time">
      <div class="time-sc" v-if="timeX">时间: {{timeX}}</div>
      <div
        v-for="(item,index) in timeList"
        :key="index"
        class="button"
        @click="timeIndex = index"
        :class="{'ac':timeIndex == index}"
      >
        {{item.title}}
        <img src="/static/img/ac.png" alt class="ioc">
      </div>
    </div>

    <div class="ff-canvas">
      <ff-canvas id="column" canvas-id="column" :opts="opts"/>
      <div class="no-none" v-if="none =='0'">暂无数据</div>
    </div>

    <wux-cell-group v-if="data">
      <wux-cell title="报警信息" isLink :url="'/pages/detailAlarm/index?devEui=' + data.devEui"></wux-cell>
    </wux-cell-group>

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

import store from "@/store";
import { $wuxCalendar, $wuxLoading } from "../../../static/wux/index";
import { formatDate, ChartData } from "@/utils/index";

export default {
  computed: {
    DeviceList() {
      return store.state.Data.Device;
    }
  },
  data() {
    return {
      data: "",
      tabIndex: 0,
      tabList: [
        { val: "temperature", name: "温度", alias: "°C" },
        { val: "humidity", name: "湿度", alias: "%" },
        { val: "light", name: "光照", alias: "Lx" }
      ],
      timeList: [
        {
          title: "日",
          key: "1",
          type: "avg",
          mask: "MM-DD hh:mm",
          tickCount: 4,
          res: ["avg"]
        },
        {
          title: "周",
          key: "7",
          type: "max_and_min",
          mask: "MM-DD",
          tickCount: 7,
          res: ["max", "min"]
        },
        {
          title: "月",
          key: "30",
          type: "max_and_min",
          mask: "MM-DD",
          tickCount: 7,
          res: ["max", "min"]
        }
      ],
      timeIndex: 0,
      serverUrl: "",
      opts: {
        lazyLoad: true
      },
      ChartData: [[], [], []],
      timeX: "",
      none: ""
    };
  },
  methods: {
    GetData() {
      if (this.DeviceList.length > "0") {
        let list = this.DeviceList;
        let detail = [];
        for (let i in list) {
          let list1 = list[i].device_list;
          for (let s in list1) {
            detail.push(list1[s]);
          }
        }
        let details = detail.filter(
          item => item.devEui == this.$route.query.devEui
        );
        this.data = details[0];
        // console.log(this.data);
      } else {
        setTimeout(() => {
          this.GetData();
        }, 300);
      }
    },
    GetList() {
      let _this = this;
      let box = this.ChartData[this.timeIndex];
      if (box.length == "0") {
        _this
          .ajax("device/getDeviceHistoryData", {
            devEui: _this.$route.query.devEui,
            period: _this.timeList[_this.timeIndex].key,
            type: _this.timeList[_this.timeIndex].type
          })
          .then(res => {
            let list = res.content;
            for (let time in list) {
              let data = ChartData(
                list[time],
                time,
                _this.tabList[_this.tabIndex].name
              );
              for (let i in data) {
                box.push(data[i]);
              }
            }
            _this.ChartsUp();
          });
      } else {
        _this.ChartsUp();
      }
    },
    ChartsUp() {
      this.$mp.page.selectComponent("#column").init(this.initChart);
      setTimeout(() => {
        this.none = this.ChartData[this.timeIndex].filter(
          item => item.value
        ).length;
      }, 400);
    },
    initChart(canvas, width, height) {
      let _this = this;
      let chart = null;
      function Charts(data) {
        let list = data.filter(
          item => item.types == _this.tabList[_this.tabIndex].val
        );
        if (list) {
          let type = _this.timeList[_this.timeIndex].res;
          let list3 = [];
          for (let i in type) {
            let list2 = list.filter(item => item.res == type[i]);
            for (let s in list2) {
              let li = list2[s];
              if (li.res == "max") {
                if (
                  li.type == "温度" ||
                  li.type == "湿度" ||
                  li.type == "光照"
                ) {
                  li.type = "最高" + li.type;
                }
                list3.push(li);
              } else if (li.res == "min") {
                if (
                  li.type == "温度" ||
                  li.type == "湿度" ||
                  li.type == "光照"
                ) {
                  li.type = "最低" + li.type;
                }
                list3.push(li);
              } else {
                list3.push(li);
              }
            }
          }
          return list3;
        }
      }
      chart = new F2.Chart({
        el: canvas,
        width,
        height
      });
      var defs = {
        time: {
          type: "timeCat",
          mask: _this.timeList[_this.timeIndex].mask,
          tickCount: _this.timeList[_this.timeIndex].tickCount,
          range: [0, 1]
        },
        value: {
          tickCount: 5,
          alias: _this.tabList[_this.tabIndex].name,
          formatter: function formatter(ivalue) {
            if (ivalue == "") {
              return ivalue;
            } else {
              return (
                Number(ivalue).toFixed(1) + _this.tabList[_this.tabIndex].alias
              );
            }
          }
        }
      };
      chart.source(Charts(_this.ChartData[_this.timeIndex]), defs);
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
        showCrosshairs: true,
        onChange: function onChange(obj) {
          _this.timeX = obj.items[0].title;
          _this.leftX = obj.x;
        },
        onHide: function onHide() {
          _this.timeX = "";
        }
      });
      if (_this.timeList[_this.timeIndex].type == "avg") {
        chart.line().position("time*value");
        chart
          .area()
          .position("time*value")
          .style({
            stroke: "#fff",
            lineWidth: 1
          });
      } else {
        chart
          .area()
          .position("time*value")
          .color("type")
          .shape("type", function(type) {
            if (type === "最高") {
              return "line";
            }
            if (type === "最低") {
              return "line";
            }
          });
        chart
          .line()
          .position("time*value")
          .color("type");
      }
      chart.render();
      return chart;
    }
  },
  mounted() {
    this.ChartData = [[], [], []];
    this.serverUrl = this.$url;
    this.tabIndex = 0;
    this.timeIndex = 0;
    this.none = "";
    this.GetData();
    this.GetList();
  },
  onShareAppMessage(options) {
    var that = this;
    let UserInfo = JSON.parse(wx.getStorageSync("UserInfo"));
    var shareObj = {
      title: UserInfo.nickName + "分享设备-" + that.data.name,
      path: "/pages/share/index?shareId=" + that.data.id,
      imageUrl: "/static/img/share-back.jpg",
      success: function(res) {
        // 转发成功之后的回调
        if (res.errMsg == "shareAppMessage:ok") {
        }
      },
      fail: function() {
        // 转发失败之后的回调
        if (res.errMsg == "shareAppMessage:fail cancel") {
          // 用户取消转发
        } else if (res.errMsg == "shareAppMessage:fail") {
          // 转发失败，其中 detail message 为详细失败信息
        }
      }
    };
    return shareObj;
  },
  watch: {
    timeIndex() {
      this.GetList();
    },
    tabIndex() {
      this.ChartsUp();
    }
  }
};
</script>

<style scoped>
.shareBtn {
  width: 34px;
  height: 34px;
  position: absolute;
  right: 50px;
  top: 3px;
  z-index: 7;
  background: none;
  overflow: hidden;
  padding: 0;
  border: none;
  box-shadow: none;
  opacity: 0;
}

.shareBtn-img {
  width: 22px;
  height: 22px;
  margin: 6px;
  float: left;
  display: block;
  position: absolute;
  right: 50px;
  top: 2px;
  z-index: 6;
}

.boxs {
  overflow: hidden;
  min-height: 250px;
}
.ff-canvas {
  width: 100%;
  height: 240px;
  background: #ffffff;
  margin-bottom: 5px;
  overflow: hidden;
  position: relative;
  z-index: 0;
}
.ff-canvas .no-none {
  line-height: 240px;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  font-size: 15px;
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
  width: 26px;
  height: 26px;
  display: inline-block;
  vertical-align: top;
  margin: 6px;
}

.grid .ac {
  position: absolute;
  width: 14px;
  height: 14px;
  top: 1px;
  right: 1px;
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

.grid .li {
  text-align: left;
  display: inline-block;
  vertical-align: top;
  border: 1px solid #d9d9d9;
  padding: 0 15px 0 5px;
  min-width: 80px;
  margin-top: 6px;
  height: 36px;
  line-height: 36px;
  border-radius: 6px;
  position: relative;
}

.container .echarts-wrap:last-child {
  margin-bottom: 0;
}
.none {
  text-align: center;
  font-size: 14px;
  padding: 20px;
}
.time-sc {
  float: left;
  /* border: 1.5px solid #d9d9d9; */
  border-radius: 6px;
  line-height: 16px;
  height: 16px;
  padding: 5px 15px;
  font-size: 12px;
  margin-top: 2px;
  position: relative;
}
.time-sc .ioc {
  position: absolute;
  width: 12px;
  height: 12px;
  top: 0.5px;
  right: 0.5px;
}
#date {
  text-align: center;
  position: absolute;
  width: 10vw;
  height: 14px;
  line-height: 14px;
  font-size: 9px;
  color: #fff;
  margin-left: -5vw;
  background-color: #808080;
  padding: 0 2px;
  z-index: 9999;
  bottom: 10px;
}
</style>
