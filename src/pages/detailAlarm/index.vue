<template>
  <div class="container">
    <div class="alarm-top">
      <div class="time-sc" @click="openCalendar" :class="{'ac':key=='4'}">{{date}}</div>
      <div class="time-buttons">
        <div class="button" :class="{'ac':key=='0'}" @click="key='0'">近一天</div>
        <div class="button" :class="{'ac':key=='1'}" @click="key='1'">近三天</div>
        <div class="button" :class="{'ac':key=='2'}" @click="key='2'">全部</div>
      </div>
    </div>
    <div class="alarm-list">
      <div class="cards d1">
        <wux-wing-blank size="default">
          <wux-card title="茶室" extra="温度">
            <view slot="body" class="text">温度过低告警，当前温度12°C</view>
            <view slot="footer" class="time">
              <span class="time1">
                <img src="/static/img/time2.png">01-26 13:35
              </span>
              <span class="time2">
                <img src="/static/img/time3.png">未恢复
              </span>
            </view>
          </wux-card>
        </wux-wing-blank>
      </div>
      <div class="cards" v-if="key > '0'">
        <wux-wing-blank size="default">
          <wux-card title="会议室" extra="湿度">
            <view slot="body" class="text">湿度过高告警，当前湿度50%</view>
            <view slot="footer" class="time">
              <span class="time1">
                <img src="/static/img/time2.png">01-24 13:35
              </span>
              <span class="time2">
                <img src="/static/img/time3.png">01-24 14:35
              </span>
            </view>
          </wux-card>
        </wux-wing-blank>
      </div>
      <div class="cards" v-if="key == '2'">
        <wux-wing-blank size="default">
          <wux-card title="茶室2" extra="状态">
            <view slot="body" class="text">该设备处于离线状态</view>
            <view slot="footer" class="time">
              <span class="time1">
                <img src="/static/img/time2.png">01-22 13:35
              </span>
              <span class="time3">
                <img src="/static/img/time3.png">01-22 15:35
              </span>
            </view>
          </wux-card>
        </wux-wing-blank>
      </div>
    </div>
    <wux-calendar id="wux-calendar"/>
  </div>
</template>

<script>
import { $wuxCalendar } from "../../../static/wux/index";
export default {
  data() {
    return {
      key: "0",
      time: [],
      date: ""
    };
  },
  methods: {
    openCalendar() {
      let _this = this;
      const now = new Date();
      const minDate = now.getTime() - 86400 * 30 * 1000;
      const maxDate = now.getTime();
      $wuxCalendar().open({
        value: _this.time,
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
    const now = new Date();
    this.time.push(now.getTime());
    this.date =
      now.getFullYear() + "-" + now.getMonth() + 1 + "-" + now.getDate();
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
  padding-top: 60px;
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
