import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        List: false,
        Login: false,
        DeviceList: [],
        AlarmList: []
    },
    mutations: {
        Login: (state) => {
            state.Login = true;
        },
        ChangeList: (state) => {
            state.List = !state.List;
        },
        Update: (state, data) => {

            function Time(data) {
                let date = new Date(data);
                let month = date.getMonth() + 1;
                let strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                let currentDate =
                    month +
                    "-" +
                    strDate +
                    " " +
                    date.getHours() +
                    ":" +
                    date.getMinutes();
                return currentDate;
            }

            function Time2(data) {
                let date = new Date(data);
                return Number(new Date(date));
            }

            let updata = JSON.parse(data);
            if (updata.msg_type == 'device_data') {

            } else if (updata.msg_type == 'alarm_list') {
                let res = updata.content;
                for (let i in res) {
                    state.AlarmList.unshift(res[i]);
                    state.AlarmList[i].created_at2 = Time2(res[i].created_at);
                    state.AlarmList[i].created_at = Time(res[i].created_at);
                    state.AlarmList[i].updated_at = Time(res[i].updated_at);
                }
            }
        },
        DeviceList: (state, data) => {
            function Group(list, i) {
                state.DeviceList[i].group.ol = list.filter(item => item.last_upload_date != '').length;
                for (let s in list) {
                    let num = Number(new Date()) - Number(list[s].last_upload_date);
                    if (num < 60 * 60 * 1000) {
                        let now = new Date(num);
                        let minute = now.getMinutes();
                        if (minute == '0') {
                            state.DeviceList[i].device_list[s].last_upload_date = `刚刚更新`;
                        } else {
                            state.DeviceList[i].device_list[s].last_upload_date = `更新于${minute}分钟前`;
                        }
                    }
                }
            }
            state.DeviceList = data;
            for (let i in data) {
                Group(data[i].device_list, i);
            }
            let list = state.DeviceList;
            for (let s in list) {
                if (list[s].group.is_default) {
                    [list[s], list[0]] = [list[0], list[s]];
                }
            }
        },
        AlarmList: (state, data) => {
            state.AlarmList = [];
            function Time(data) {
                let date = new Date(data);
                let month = date.getMonth() + 1;
                let strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                let currentDate =
                    month +
                    "-" +
                    strDate +
                    " " +
                    date.getHours() +
                    ":" +
                    date.getMinutes();
                return currentDate;
            }

            function Time2(data) {
                let date = new Date(data);
                return Number(new Date(date));
            }

            let res = data;
            for (let i in res) {
                state.AlarmList.push(res[i]);
                state.AlarmList[i].created_at2 = Time2(res[i].created_at);
                state.AlarmList[i].created_at = Time(res[i].created_at);
                state.AlarmList[i].updated_at = Time(res[i].updated_at);
            }
        }
    }
})

export default store
