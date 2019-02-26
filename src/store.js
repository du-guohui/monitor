import Vue from 'vue'
import Vuex from 'vuex'
import { Time, Time2 } from "@/utils/index";
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        Loading: false,
        Login: false,
        AlarmList: [],
        GatewayList: [],
        Data: {
            Gateway: [],
            Alarm: [],
            Device: [],
            DeviceLength: '',
            DeviceOl: 0
        }
    },
    mutations: {
        Login: (state) => {
            state.Login = true;
        },
        Update: (state, data) => {
            let updata = JSON.parse(data);
            if (updata.msg_type == 'device_data') {
                let data = state.Data.Device;
                for (let i in data) {
                    let list2 = data[i].device_list;
                    for (let s in list2) {
                        if (list2[s].devEui == updata.content.devEui) {
                            var news = Object.assign(state.Data.Device[i].device_list[s], updata.content);
                            state.Data.Device[i].device_list[s] = news;
                            if (state.Data.Device[i].device_list[s].sht30) {
                                state.Data.Device[i].device_list[s].temperature = state.Data.Device[i].device_list[s].sht30;
                            }
                            state.Data.Device[i].device_list[s].last_upload_date2 = `刚刚更新`;
                        }
                    }
                }
            }
            else if (updata.msg_type == 'alarm_list') {
                let res = updata.content;
                for (let i in res) {
                    state.Data.Alarm.unshift(res[i]);
                    state.Data.Alarm[i].created_at = Time(res[i].created_at);
                    state.Data.Alarm[i].created_at2 = Time2(res[i].created_at);
                    state.Data.Alarm[i].updated_at = Time(res[i].updated_at);
                }
                wx.vibrateLong();
            }
        },
        DeviceList: (state, app) => {
            function Group(list, i) {
                state.Data.Device[i].group.ol = list.filter(item => item.last_upload_date != '').length;
                state.Data.DeviceOl = Number(state.Data.Device[i].group.ol) + state.Data.DeviceOl;
                for (let s in list) {
                    let num = Number(new Date()) - Number(list[s].last_upload_date);
                    if (num < 60 * 60 * 1000) {
                        let now = new Date(num);
                        let minute = now.getMinutes();
                        if (minute == '0') {
                            state.Data.Device[i].device_list[s].last_upload_date2 = `刚刚更新`;
                        } else {
                            state.Data.Device[i].device_list[s].last_upload_date2 = `更新于${minute}分钟前`;
                        }
                    }
                    if (state.Data.Device[i].device_list[s].sht30) {
                        state.Data.Device[i].device_list[s].temperature = state.Data.Device[i].device_list[s].sht30;
                    }
                    state.Data.DeviceLength = Number(state.Data.DeviceLength) + 1
                }
            }
            state.Loading = true;
            app.ajax("device/getDeviceListPacketByGroup", { no_fake: true }).then(
                res => {
                    state.Data.DeviceLength = '';
                    state.Data.DeviceOl = 0;
                    state.Data.Device = res;
                    for (let i in res) {
                        Group(res[i].device_list, i);
                    }
                    for (let s in state.Data.Device) {
                        if (state.Data.Device[s].group.is_default) {
                            [state.Data.Device[s], state.Data.Device[0]] = [state.Data.Device[0], state.Data.Device[s]];
                        }
                    }
                    if (state.Data.DeviceLength == '') {
                        state.Data.DeviceLength = 0;
                    }
                    state.Loading = false;
                }
            );
        },
        AlarmList: (state, app) => {
            state.Loading = true;
            app.ajax("alarm/alarm/").then(res => {
                state.Data.Alarm = JSON.parse(JSON.stringify(res));
                for (let i in res) {
                    state.Data.Alarm[i].created_at = Time(res[i].created_at);
                    state.Data.Alarm[i].created_at2 = Time2(res[i].created_at);
                    state.Data.Alarm[i].updated_at = Time(res[i].updated_at);
                }
                state.Loading = false;                
            });
        },
        GatewayList: (state, app) => {
            state.Loading = true;
            app.ajax("device/getGatewayList").then(res => {
                state.Data.Gateway = res.content;
                state.Loading = false;
            });
        },
    }
})

export default store
