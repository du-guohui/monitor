<template>
  <div class="container" v-if="data!=''">
    <div class="list-tops">
      <wux-cell-group>
        <wux-cell :title="'分组名称：' + data[0].group.name" v-if="data[0].group.is_default"></wux-cell>
        <wux-cell hover-class="none" class="GroupName" v-else>
          <wux-input
            label="分组名称："
            :value="name"
            placeholder="请输入分组名称"
            controlled
            type="text"
            id="name"
            @change="NameChange"
          />
        </wux-cell>
      </wux-cell-group>

      <div class="fazhi" v-if="!data[0].group.is_default">
        <div class="title">告警阈值：
          <div class="tt" v-if="show">温度:{{temperature[0]}}°C - {{temperature[1]}}°C</div>
          <div class="tt" v-if="show">湿度:{{humidity[0]}}% - {{humidity[1]}}%</div>
          <div class="switch">
            <wux-switch :value="show" @change="Switch" color="#0093fb"/>
          </div>
        </div>
        <div class="txt" v-if="show">
          <div class="title1">温度:</div>
          <div class="box">
            <div class="min">-10°C</div>
            <div class="cc">
              <wux-slider
                min="-10"
                max="50"
                step="1"
                :value="temperature"
                @change="TemperatureCh"
                controlled
                trackStyle="background-color: #0093fb"
              />
            </div>
            <div class="max">50°C</div>
          </div>
        </div>
        <div class="txt" v-if="show">
          <div class="title1">湿度:</div>
          <div class="box">
            <div class="min">0%</div>
            <div class="cc">
              <wux-slider
                min="0"
                max="100"
                step="1"
                :value="humidity"
                @change="HumidityCh"
                controlled
                trackStyle="background-color: #0093fb"
              />
            </div>
            <div class="max">100%</div>
          </div>
        </div>
      </div>

      <div class="ts">{{group.length > '0' ? '已选择' + group.length + '个设备' : '未选择设备'}}</div>
    </div>

    <div class="list">
      <wux-checkbox-group :value="group" @change="onChange">
        <div class="group-list" v-for="(item,i) in DeviceList" :key="i">
          <div class="box" v-for="(list,s) in item.device_list" :key="s">
            <div class="img">
              <img :src="serverUrl + list.img_url" v-if="list.img_url">
            </div>
            <div class="title wux-ellipsis">{{list.name}}</div>
            <div class="text">{{item.group.name}}</div>
            <wux-checkbox
              color="positive"
              :value="list.id"
              class="checkbox"
              :disabled="item.group.is_default && data[0].group.is_default"
            />
          </div>
        </div>
      </wux-checkbox-group>
    </div>

    <div class="list-button" :class="{'button2':data[0].group.is_default}">
      <div class="button" v-if="!data[0].group.is_default">
        <wux-button block type="assertive" @click="Delete">删除分组</wux-button>
      </div>
      <div class="button">
        <wux-button block type="positive" @click="PostData">保存</wux-button>
      </div>
    </div>

    <wux-toast id="wux-toast"/>
    <wux-dialog id="wux-dialog--alert"/>
    <wux-dialog id="wux-dialog"/>
    <wux-loading id="wux-loading"/>
  </div>
</template>

<script>
import { $wuxDialog, $wuxLoading } from "../../../static/wux/index";
import store from "@/store";
export default {
  computed: {
    DeviceList() {
      return store.state.Data.Device;
    },
    Loading() {
      return store.state.Loading;
    }
  },
  data() {
    return {
      name: "",
      nChange: false,
      DeviceIndex: 0,
      show: false,
      serverUrl: "",
      data: [],
      group: [],
      temperature: [],
      humidity: [],
      id: [],
      load: false
    };
  },
  methods: {
    NameChange(e) {
      this.name = e.mp.detail.value;
      this.nChange = true;
    },
    Switch(e) {
      this.show = e.mp.detail.value;
    },
    TemperatureCh(e) {
      this.temperature = e.mp.detail.value;
    },
    HumidityCh(e) {
      this.humidity = e.mp.detail.value;
    },
    Delete() {
      let _this = this;
      $wuxDialog().alert({
        resetOnClose: true,
        title: "删除确认",
        content: '删除后该分组的设备将转移到"默认组"下',
        buttons: [
          {
            text: "取消"
          },
          {
            text: "确定",
            type: "primary",
            onTap(e) {
              _this
                .ajax(
                  "device/deleteDeviceGroup",
                  {
                    id: _this.$route.query.id
                  },
                  "POST"
                )
                .then(res => {
                  _this.Toast("success", "操作成功");
                  setTimeout(() => {
                    store.commit("DeviceList", this);
                    wx.navigateBack(1);
                  }, 800);
                });
            }
          }
        ]
      });
    },
    PostData2() {
      this.ajax(
        "device/moveDeviceListToGroup",
        {
          group_id: this.$route.query.id,
          device_id_list: this.group
        },
        "POST"
      ).then(res => {
        if (res == "success") {
          this.Toast("success", "操作成功");
          setTimeout(() => {
            store.commit("DeviceList", this);
            wx.navigateBack(1);
          }, 800);
        } else {
          this.Toast("forbidden", res.msg);
        }
      });
    },
    PostData() {
      let _this = this;
      $wuxDialog().alert({
        resetOnClose: true,
        title: "修改确认",
        content: "是否保存该分组？",
        buttons: [
          {
            text: "取消"
          },
          {
            text: "确定",
            type: "primary",
            onTap(e) {
              if (_this.nChange) {
                _this.PostName();
              }
              if (_this.show && _this.group.length > "0") {
                _this
                  .ajax(
                    _this.id.length > "0"
                      ? "alarm/multi_update_threshold"
                      : "alarm/multi_create_threshold",
                    {
                      data: JSON.stringify([
                        {
                          id: _this.id[0],
                          param: "temperature",
                          device_group_id: _this.$route.query.id,
                          max: _this.temperature[1],
                          min: _this.temperature[0],
                          is_on: _this.show
                        },
                        {
                          id: _this.id[1],
                          param: "humidity",
                          device_group_id: _this.$route.query.id,
                          max: _this.humidity[1],
                          min: _this.humidity[0],
                          is_on: _this.show
                        }
                      ])
                    },
                    _this.id.length > "0" ? "PUT" : "POST"
                  )
                  .then(res => {
                    if (res == "success") {
                      _this.PostData2();
                    } else {
                      this.Toast("forbidden", res.msg);
                    }
                  });
              } else if (!_this.show && _this.id.length > "0") {
                _this
                  .ajax(
                    "alarm/multi_update_threshold",
                    {
                      data: JSON.stringify([
                        {
                          id: _this.id[0],
                          param: "temperature",
                          device_group_id: _this.$route.query.id,
                          max: _this.temperature[1],
                          min: _this.temperature[0],
                          is_on: _this.show
                        },
                        {
                          id: _this.id[1],
                          param: "humidity",
                          device_group_id: _this.$route.query.id,
                          max: _this.humidity[1],
                          min: _this.humidity[0],
                          is_on: _this.show
                        }
                      ])
                    },
                    "PUT"
                  )
                  .then(res => {
                    if (res == "success") {
                      _this.PostData2();
                    } else {
                      this.Toast("forbidden", res.msg);
                    }
                  });
              } else {
                _this.PostData2();
              }
            }
          }
        ]
      });
    },
    PostName() {
      this.ajax(
        "device/device_group/" + this.$route.query.id + "/",
        {
          name: this.name
        },
        "PUT"
      ).then(res => {});
    },
    GetData() {
      this.ajax("alarm/get_threshold_by_group", {
        group_id: this.$route.query.id
      }).then(res => {
        if (res.length > "0") {
          let show = res.filter(item => item.is_on == true);
          if (show.length > "0") {
            this.show = true;
          }
          for (let i in res) {
            let data1 = res.filter(item => item.param == "temperature");
            let data2 = res.filter(item => item.param == "humidity");
            this.temperature[0] = data1[0].min;
            this.temperature[1] = data1[0].max;
            this.id[0] = data1[0].id;
            this.humidity[0] = data2[0].min;
            this.humidity[1] = data2[0].max;
            this.id[1] = data2[0].id;
          }
        } else {
          this.temperature = [10, 30];
          this.humidity = [30, 70];
        }
      });
    },
    GetList() {
      if (this.load) {
        this.data = this.DeviceList.filter(
          item => item.group.id == this.$route.query.id
        );
        this.name = this.data[0].group.name;
        let list = this.data[0].device_list;
        for (let i in list) {
          this.group.push(String(list[i].id));
        }
      } else {
        setTimeout(() => this.GetList(), 200);
      }
    },
    onChange(e) {
      const { value } = e.mp.detail;
      const data = this.group;
      const index = data.indexOf(value);
      const current =
        index === -1 ? [...data, value] : data.filter(n => n !== value);
      this.group = current;
    }
  },
  onShow() {
    this.nChange = false;
    this.serverUrl = this.$url;
    this.data = [];
    this.group = [];
    if (this.$route.query.is_default == "false") {
      this.GetData();
    }
    this.GetList();
  },
  watch: {
    Loading() {
      if (this.Loading) {
        this.load = false;
      } else {
        this.load = true;
      }
    },
    DeviceList() {
      this.DeviceIndex = 0;
      for (let i in this.DeviceList) {
        this.DeviceIndex =
          this.DeviceIndex + this.DeviceList[i].device_list.length;
      }
    }
  }
};
</script>

<style scoped>
.list-tops {
  /* position: fixed; */
  width: 100%;
  top: 0;
  z-index: 2;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
}
.list-tops .ts {
  height: 24px;
  line-height: 24px;
  font-size: 10px;
  padding: 0 15px;
  position: relative;
  z-index: 1;
  color: #999999;
  letter-spacing: 0.5px;
}
.list {
  padding: 0 0 75px;
  overflow: hidden;
}

.group-list {
  overflow: hidden;
}
.group-list .box {
  overflow: hidden;
  height: 60px;
  border-bottom: 1px solid #eeeeee;
  padding: 5px;
  position: relative;
  padding-right: 65px;
}

.group-list .img {
  height: 60px;
  width: 107px;
  float: left;
  overflow: hidden;
  margin-right: 8px;
  background: #cccccc;
}

.group-list .img img {
  height: 60px;
  width: 107px;
  float: left;
}

.group-list .title {
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  margin-top: 8px;
  margin-bottom: 5px;
}

.group-list .text {
  font-size: 12px;
  line-height: 16px;
  color: #cccccc;
}
.group-list .checkbox {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
}
.list-button {
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  position: fixed;
  bottom: 0;
  height: 64px;
  background: #ffffff;
  left: 0;
  right: 0;
  z-index: 1;
}
.list-button .button {
  width: 166px;
  float: left;
  height: 70px;
  padding: 0 10px;
}

.list-button.button2 .button {
  width: auto;
  float: none;
  height: 70px;
  padding: 0 10px;
}

.fazhi {
  overflow: hidden;
  position: relative;
  min-height: 40px;
  border-bottom: 1px solid #cccccc;
}
.fazhi .title {
  font-size: 13px;
  line-height: 40px;
  padding-left: 15px;
}
.fazhi .txt {
  display: block;
  overflow: hidden;
}

.fazhi .txt .title1 {
  font-size: 13px;
  line-height: 40px;
  width: 60px;
  padding-left: 15px;
  float: left;
}

.fazhi .tt {
  font-size: 12px;
  display: inline-block;
  vertical-align: top;
  padding-left: 14px;
  line-height: 40px;
}

.fazhi .box {
  float: left;
  width: 280px;
}

.fazhi .min {
  float: left;
  font-size: 12px;
  width: 50px;
  line-height: 40px;
  text-align: center;
}

.fazhi .cc {
  padding-top: 3px;
  width: 180px;
  float: left;
}

.fazhi .max {
  float: right;
  font-size: 12px;
  text-align: center;
  width: 50px;
  line-height: 40px;
}

.fazhi .show {
  float: right;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #cccccc;
  margin-top: 10px;
  margin-right: 10px;
}

.fazhi .show img {
  width: 100%;
  height: 100%;
  float: left;
}
.fazhi-checkbox {
  float: right;
}

.switch {
  position: absolute;
  right: 3px;
  top: 4px;
  transform: scale(0.8, 0.8);
}
</style>
