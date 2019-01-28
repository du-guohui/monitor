import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        List: false,
        Login: false,
        DeviceList: [],
        DeviceOl: 0
    },
    mutations: {
        Login: (state) => {
            state.Login = true;
        },
        ChangeList: (state) => {
            state.List = !state.List;
        },
        DeviceList: (state, data) => {
            state.DeviceOl = 0;
            state.DeviceList = [];
            for (let i in data) {
                state.DeviceList.push(data[i]);
                let num = Number(new Date()) - Number(data[i].last_upload_date);
                if (num < 60 * 60 * 1000) {
                    let now = new Date(num);
                    let minute = now.getMinutes();
                    if (minute == '0') {
                        state.DeviceList[i].last_upload_date = `刚刚更新`;
                    } else {
                        state.DeviceList[i].last_upload_date = `更新于${minute}分钟前`;
                    }
                    state.DeviceOl = state.DeviceOl + 1;
                } else {
                    state.DeviceList[i].last_upload_date = '';
                }
            }
        },
        ListUpdate: (state, data) => {
            function Completion(s) {
                return s < 10 ? '0' + s : s;
            }
            let now = new Date();
            let hour = now.getHours();
            let minute = now.getMinutes();
            for (let i in state.DeviceList) {
                if (state.DeviceList[i].devEui == JSON.parse(data).devEui) {
                    let obj = Object.assign(state.DeviceList[i], JSON.parse(data));
                    state.DeviceList[i] = obj;
                    state.DeviceList[i].last_upload_date = Completion(hour) + ":" + Completion(minute);
                }
            }
        }
    }
})

export default store
