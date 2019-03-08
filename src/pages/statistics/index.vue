<template>
  <div class="container">
    <div class="echart">
      <ff-canvas id="column1" canvas-id="column1" :opts="opts"/>
    </div>
  </div>
</template>

<script>
import F2 from "../../../static/f2-canvas/lib/f2";
import Lodash from "../../../static/f2-canvas/lib/lodash";

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
import { formatDate } from "@/utils/index";
export default {
  data() {
    return {
      data: {
        temperature: [],
        humidity: []
      },
      opts: {
        lazyLoad: true
      },
      time: "7"
    };
  },
  methods: {
    TemperatureChart(canvas, width, height) {
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
      chart.source(this.data.temperature, defs);
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
        custom: true,
        onChange: function onChange(obj) {
          var legend = chart.get("legendController").legends.top[0];
          var tooltipItems = obj.items;
          var legendItems = legend.items;
          var map = {};
          // legendItems.map(function(item) {
          //   map[item.name] = item
          // });
          // tooltipItems.map(function(item) {
          //   var name = item.name;
          //   var value = item.value;
          //   if (map[name]) {
          //     map[name].value = value;
          //   }
          // });
          // legend.setItems();
          console.log(legend);
          legend.setItems(
            [{
              value: "90.2°C"
            },
            {
              value: "90.2°C"
            },
            {
              value: "90.2°C"
            },
            {
              value: "90.2°C"
            }
          ])
        },
        onHide: function onHide() {
          var legend = chart.get("legendController").legends.top[0];
          legend.setItems(chart.getLegendItems().country);
        }
      });
      // chart
      //   .area()
      //   .position("time*value")
      //   .color("type")
      //   .shape("type", function(type) {          if (type === "平均值") {
      //       return "dash";
      //     }});
      chart
        .line()
        .position("time*value")
        .color("type")
        .shape("type", function(type) {
          if (type === "平均值") {
            return "dash";
          }
        });
      chart.render();
      return chart;
    },
    GetData() {
      let _this = this;
      function Data(val) {
        let data = val.data;
        for (let i in data) {
          if (data[i].sht30) {
            _this.data.temperature.push({
              type: val.name ? val.name : "平均值",
              time: formatDate(new Date(Number(i))),
              value: data[i].sht30.avg
            });
          }
          if (data[i].humidity) {
            _this.data.humidity.push({
              type: val.name ? val.name : "平均值",
              time: formatDate(new Date(Number(i))),
              value: data[i].humidity.avg
            });
          }
        }
      }

      _this
        .ajax("device/device_group/get_all_group_continuous_data/", {
          period: _this.time,
          res_type: "avg"
        })
        .then(res => {
          res.forEach(function(item) {
            Data(item);
          });
          console.log(_this.data);
          this.$mp.page.selectComponent("#column1").init(this.TemperatureChart);
        });
    }
  },
  mounted() {
    this.GetData();
  }
};
</script>

<style scoped>
.echart {
  width: 100%;
  height: 270px;
  overflow: hidden;
}
</style>