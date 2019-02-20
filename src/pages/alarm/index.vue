<template>
  <div class="container">
    <div class="alarm-top">
      <div class="time-sc" @click="openCalendar" :class="{'ac':key=='4'}" v-if="date">{{date}}</div>
      <div class="time-buttons">
        <div class="button" :class="{'ac':key=='0'}" @click="key='0'">近一天</div>
        <div class="button" :class="{'ac':key=='1'}" @click="key='1'">近三天</div>
        <div class="button" :class="{'ac':key=='2'}" @click="key='2'">全部</div>
      </div>
    </div>

    <div v-if="!load">
      
      <div class="alarm-list">
        <div class="cards" v-for="item in Data" :key="item.id" :class="{'d1':!item.is_recovered}">
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

      <div class="prompt" v-if="Data.length == '0'">
        <div class="box">
          <div class="title">暂无数据</div>
        </div>
      </div>

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
      key: "2",
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
    Data() {
      const now = new Date();
      if (this.key == "2") {
        return this.AlarmList;
      } else if (this.key == "1") {
        return this.AlarmList.filter(
          item => item.created_at2 + 86400 * 1000 * 3 > now
        );
      } else if (this.key == "0") {
        return this.AlarmList.filter(
          item => item.created_at2 + 86400 * 1000 > now
        );
      } else if (this.key == "4") {
        return this.AlarmList.filter(item => item.created_at2 < this.time[0]);
      }
    }
  },
  methods: {
    openCalendar() {
      let _this = this;
      const now = new Date();
      const minDate = now.getTime() - 86400 * 30 * 1000;
      const maxDate = _this.now[0];
      $wuxCalendar().open({
        value: _this.now,
        minDate,
        maxDate,
        onChange: (values, displayValues) => {
          _this.date = displayValues[0];
          _this.time = values;
          _this.key = "4";
        }
      });
    }
  },
  mounted() {
    this.key = "2";
    const now = new Date();
    this.now.push(now.getTime());
    let month = now.getMonth() + 1;
    this.date = now.getFullYear() + "-" + month + "-" + now.getDate();
  },
  onShow() {
    store.commit("AlarmList", this);
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
  padding: 60px 8px 0;
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
