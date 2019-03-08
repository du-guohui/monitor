<template>
  <div class="container">
    <div v-if="!load">
      <div class="filterbar">
        <div class="filter-list">
          <div
            class="box"
            @click="filterbar = !filterbar,filterIndex = '0'"
            :class="{'ac':status != '0'}"
          >
            <div class="title">{{ status == '0' ? '状态':items[0].children[status].label}}</div>
          </div>
          <div
            class="box"
            @click="filterbar = !filterbar,filterIndex = '1'"
            :class="{'ac':time != '0'}"
          >
            <div class="title">{{ time == '0' ? '时间':items[1].children[time].label}}</div>
          </div>
          <div
            class="box"
            @click="filterbar = !filterbar,filterIndex = '2'"
            :class="{'ac':type != '0'}"
          >
            <div class="title">{{ type == '0' ? '类型':items[2].children[type].label}}</div>
          </div>
          <div
            class="box"
            @click="filterbar = !filterbar,filterIndex = '3'"
            :class="{'ac':grade != '0'}"
          >
            <div class="title">{{ grade == '0' ? '等级':items[3].children[grade].label}}</div>
          </div>
        </div>
      </div>

      <div
        class="filterbar-box"
        v-for="(item,i) in items"
        :key="i"
        v-if="filterbar && filterIndex == i"
      >
        <div
          class="li"
          :class="{'ac':status == items[filterIndex].children[s].value}"
          v-for="(li,s) in item.children"
          :key="s"
          v-if="filterIndex == '0'"
          @click="status = s,filterbar = false"
        >{{li.label}}</div>
        <div
          class="li"
          :class="{'ac':time == items[filterIndex].children[s].value}"
          v-for="(li,s) in item.children"
          :key="s"
          v-if="filterIndex == '1'"
          @click="time = s,filterbar = false"
        >{{li.label}}</div>
        <div
          class="li"
          :class="{'ac':type == items[filterIndex].children[s].value}"
          v-for="(li,s) in item.children"
          :key="s"
          v-if="filterIndex == '2'"
          @click="type = s,filterbar = false"
        >{{li.label}}</div>
        <div
          class="li"
          :class="{'ac':grade == items[filterIndex].children[s].value}"
          v-for="(li,s) in item.children"
          :key="s"
          v-if="filterIndex == '3'"
          @click="grade = s,filterbar = false"
        >{{li.label}}</div>
      </div>

      <div class="filterbar-mask" v-if="filterbar" @click="filterbar = false"></div>

      <div class="alarm-list">
        <div
          class="cards"
          v-for="item in TypeData"
          :key="item.id"
          :class="{'d1':!item.is_recovered}"
        >
          <wux-card
            :title="item.device.name"
            :extra="item.threshold.param == 'humidity' ? '湿度':'温度'"
            v-if="item.type == 'value'"
          >
            <view
              slot="body"
              class="text"
            >{{item.threshold.param == 'humidity' ? '湿度':'温度'}}{{item.value > item.threshold.max ? '过高':'过低'}}告警，当前{{item.threshold.param == 'humidity' ? '湿度':'温度'}}{{item.value}}{{item.threshold.param == 'humidity' ? '%':'°C'}}</view>
            <view slot="footer" class="time">
              <span class="time1">
                <img src="/static/img/time2.png">
                {{item.created_at}}
              </span>
              <span class="time2">
                <img src="/static/img/time3.png">
                {{!item.is_recovered ? '未恢复' : item.updated_at}}
              </span>
            </view>
          </wux-card>
          <wux-card :title="item.device.name" extra="离线" v-if="item.type == 'offline'">>
            <view slot="body" class="text">该设备处于离线状态</view>
            <view slot="footer" class="time">
              <span class="time1">
                <img src="/static/img/time2.png">
                {{item.created_at}}
              </span>
              <span class="time2">
                <img src="/static/img/time3.png">
                {{!item.is_recovered ? '未恢复' : item.updated_at}}
              </span>
            </view>
          </wux-card>
        </div>
      </div>

      <!-- <div class="prompt" v-if="TypeData.length == '0'">
        <div class="box">
          <div class="title">暂无数据</div>
        </div>
      </div>-->
    </div>

    <wux-calendar id="wux-calendar"/>
    <wux-loading id="wux-loading"/>
  </div>
</template>

<script>
import { $wuxCalendar, $wuxLoading } from "../../../static/wux/index";
import store from "@/store";
export default {
  data() {
    return {
      itemsIndex: 0,
      items: [
        {
          label: "状态",
          value: "status",
          children: [
            {
              label: "全部",
              value: "0"
            },
            {
              label: "未恢复",
              value: "1"
            },
            {
              label: "已恢复",
              value: "2"
            }
          ]
        },
        {
          label: "时间",
          value: "time",
          children: [
            {
              label: "全部",
              value: "0"
            },
            {
              label: "近一天",
              value: "1"
            },
            {
              label: "近三天",
              value: "2"
            }
          ]
        },
        {
          label: "类型",
          value: "type",
          children: [
            {
              label: "全部",
              value: "0"
            },
            {
              label: "离线",
              value: "1"
            },
            {
              label: "温度",
              value: "2"
            },
            {
              label: "湿度",
              value: "3"
            }
          ]
        },
        {
          label: "等级",
          value: "grade",
          children: [
            {
              label: "全部",
              value: "0"
            },
            {
              label: "一般告警",
              value: "1"
            },
            {
              label: "重要告警",
              value: "2"
            },
            {
              label: "紧急告警",
              value: "3"
            }
          ]
        }
      ],
      filterbar: false,
      filterIndex: 0,
      status: "0",
      time: "0",
      type: "0",
      grade: "0",
      time: [],
      now: [],
      date: "",
      load: true
    };
  },
  computed: {
    Loading() {
      return store.state.Loading;
    },
    AlarmList() {
      return store.state.Data.Alarm;
    },
    TimeData() {
      const now = new Date();
      if (this.time == "0") {
        return this.AlarmList;
      } else if (this.time == "1") {
        return this.AlarmList.filter(
          item => item.created_at2 + 86400 * 1000 * 3 > now
        );
      } else if (this.time == "2") {
        return this.AlarmList.filter(
          item => item.created_at2 + 86400 * 1000 > now
        );
      } else if (this.time == "4") {
        return this.AlarmList.filter(
          item =>
            new Date(item.created_at2).getDate() ==
              new Date(this.time[0]).getDate() &&
            new Date(item.created_at2).getMonth() ==
              new Date(this.time[0]).getMonth()
        );
      }
    },
    StatusData() {
      if (this.status == "0") {
        return this.TimeData;
      } else if (this.status == "1") {
        return this.TimeData.filter(item => !item.is_recovered);
      } else if (this.status == "2") {
        return this.TimeData.filter(item => item.is_recovered);
      }
    },
    TypeData() {
      if (this.type == "0") {
        return this.StatusData;
      } else if (this.type == "1") {
        return this.StatusData.filter(item => item.type == "offline");
      } else if (this.type == "2") {
        return this.StatusData.filter(
          item => item.type == "value" && item.threshold.param == "temperature"
        );
      } else if (this.type == "3") {
        return this.StatusData.filter(
          item => item.type == "value" && item.threshold.param == "humidity"
        );
      }
    },
    GradeData() {
      return this.TypeData;
    }
  },
  methods: {
    openCalendar() {
      let _this = this;
      const now = new Date();
      const maxDate = _this.now[0];
      $wuxCalendar().open({
        value: _this.now,
        maxDate,
        onChange: (values, displayValues) => {
          _this.date = displayValues[0];
          _this.time = values;
          _this.time = "4";
        }
      });
    }
  },
  onReady() {
    this.status = "0";
    this.time = "0";
    this.type = "0";
    this.grade = "0";
  },
  onShow() {
    const now = new Date();
    this.now.push(now.getTime());
    let month = now.getMonth() + 1;
    function Completion(s) {
      return s < 10 ? "0" + s : s;
    }
    this.date =
      now.getFullYear() +
      "-" +
      Completion(month) +
      "-" +
      Completion(now.getDate());
    wx.pageScrollTo({
      scrollTop: 0
    });
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
    }
  }
};
</script>

<style scoped>
.filterbar-box {
  position: fixed;
  top: 44px;
  width: 100%;
  background: #ffffff;
  z-index: 100;
}

.filterbar-box .li {
  line-height: 30px;
  overflow: hidden;
  font-size: 12.5px;
  padding: 7px 30px;
  color: #999999;
  border-bottom: 1px solid #cccccc;
}

.filterbar-box .li:last-child {
  border-bottom: none;
}

.filterbar-box .li.ac {
  color: #0093fb;
  font-weight: bold;
}

.filter-list {
  overflow: hidden;
  background: #ffffff;
}
.filter-list .box {
  overflow: hidden;
  float: left;
  width: 25%;
  line-height: 44px;
  text-align: center;
}
.filter-list .title {
  font-size: 14px;
  color: #999999;
  padding-left: 15px;
}

.filter-list .box.ac .title {
  color: #0093fb;
}

.filter-list .title::after {
  display: inline-block;
  width: 14px;
  height: 14px;
  content: "";
  display: inline-block;
  vertical-align: top;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACaElEQVR4Xu2Wz2oTURTGz7HiUkhWM29TCq5ciNBGxEU3JneCm0IF3RQvXagLXQhCcowriyCjYAUtdCO+TbJx8gTtlYEGpmEmmXj/wj3ZzuSe8/3O990zCJH/MHL9wADYAZET4AhEbgC+BDkCHIHICXAEIjcAbwGOAEcgcgIcgcgNwFuAI8ARiJyAsQhMJpOdfr//2wXP0Wi0PRwO/5ioZQQAET0GgA9KqZMsy/ZNNFZ3hpTyRpqmnwHgASLuDwaDE91a2gCI6AkAvF80opT6ZANCKT5Jkm+IeP+qlgKAgRDiow4ELQBEdAgAb2oa+CKEeKjTWPW/NeKrj/s6ELQAjMfjZ4j4ukGoEQh5nm8VRfG1Mvlr5ZRSB1mWvftf2FoAyqI2IZTi5/P5DwC4WydQV3x5pjaANhCm0+kjKeXlJlNyId4YgHUQlFLfZ7PZblsIUsqbaZqe2pz8YhhGHLA4bFUc2kIoxSdJcoaId2zZvnquUQBtnNDtdvd6vd5Fw553Kt5oBKqC1jmhDoLryVuJQBUCEUkAeNFw8f3qdDr3Fk7I8/xWURQ/XdneagSWILwCgOerIABAuefPEXHbReaXaxi/A5YLENExABw1QDhVSt1GxJ2G50+FEG83WZ+bvmsdQNkQEa1yQm3PJj5y2sBwAmBTCK7EW9sCTeTbOMGleOcA1jnBtXgvAJog+BDvDcAyBF/ivQK4+mx+iYh/ba+6VdvA2RZos5J8vMMAfFAPqSY7IKRp+OiFHeCDekg12QEhTcNHL+wAH9RDqskOCGkaPnphB/igHlJNdkBI0/DRCzvAB/WQakbvgH97qQdQg92i7QAAAABJRU5ErkJggg==");
  background-size: cover;
  margin: 15px 4px;
}

.filter-list .box.ac .title::after {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMUMxQzhBNTQwODYxMUU5ODE4MkQ5NzkxQUYyRDgyNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMUMxQzhBNjQwODYxMUU5ODE4MkQ5NzkxQUYyRDgyNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMxQzFDOEEzNDA4NjExRTk4MTgyRDk3OTFBRjJEODI3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMxQzFDOEE0NDA4NjExRTk4MTgyRDk3OTFBRjJEODI3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Znf6DgAAAbdJREFUeNrs2b9Kw1AUBvD+iS6CzySCUxe71cFO3XQoKGgHxW46Frp16qRgly6CIOIL+QQK8TsQIZTcm4TkntOS78ChpaVNvl9ubnPTdhzHrSZXp9XwIgABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAgEZVVPUL2vPf/6fH6E+l/T5Cf8mT+DLaihEwQn+glwoj9jmBPt+WU+ACvZDBgB4GRJB9XaEHybaWCbwdAIb/FR7mGy8Pk6MUInw/vXmBxz6MLEeA6wQc1IjQzQifroNKB7Hqf4M4Ajd4eHS8/YI+qxh+je453h9jEpxZzwFP6NuckdAJER49M50DSiCsSm4r0ghf94WQD6FfAkHCv2mED3ElWAShWyD8iUb4UJfCeQivDgT18CHXAoIw9SCsNxD2LcKHXgw9eH4eeykECf9uEb6WxVBOTdA/6DsHgswJh8niJquuQ4bXAJC6R+855oVTz+fGocNr3g+YeE4Hs/DaN0SKIqiF1wYogqAa3gLAh6Ae3gogC8EkvNavgA9B1uLfVuFruR+w68X/BQhAAAIQgAAEIAABCEAAAhCAAAQgAAEI0LD6E2AA+5JWBDQhndoAAAAASUVORK5CYII=");
  background-size: cover;
}

.filterbar {
  position: fixed;
  width: 100%;
  height: 44px;
  z-index: 99;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
}

.filterbar-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 80;
}

.alarm-top {
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 10px;
  height: 30px;
  background: #0093fb;
  color: #ffffff;
  z-index: 10;
}
.alarm-top .time-sc {
  float: left;
  border: 1.5px solid #ffffff;
  border-radius: 6px;
  line-height: 20px;
  height: 20px;
  padding: 5px 15px;
  font-size: 12px;
}
.alarm-top .time-sc.ac {
  background: #ffffff;
  color: #0093fb;
  border: 1.5px solid #0093fb;
}
.alarm-top .time-buttons {
  float: right;
  overflow: hidden;
}
.time-buttons .button {
  border: 1px solid #ffffff;
  font-size: 12px;
  border-radius: 6px;
  line-height: 20px;
  height: 20px;
  padding: 5px 15px;
  float: left;
  margin-left: 10px;
}
.time-buttons .button.ac {
  border: 1px solid #0093fb;
  color: #0093fb;
  background: #ffffff;
}
.alarm-list {
  padding: 52px 8px 0;
  overflow: hidden;
}
.cards {
  overflow: hidden;
  margin-bottom: 8px;
  border-radius: 4px;
}
.time2,
.time3 {
  padding-left: 20px;
}

.time1 img,
.time2 img,
.time3 img {
  width: 14px;
  height: 14px;
  display: inline-block;
  vertical-align: top;
  margin-top: 3px;
  margin-right: 4px;
}
</style>