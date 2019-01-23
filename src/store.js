import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        List: false,
        Login: false,
        DeviceList: []
    },
    mutations: {
        Login: (state) => {
            state.Login = true;
        },
        ChangeList: (state) => {
            state.List = !state.List;
        },
        DeviceList: (state, data) => {
            state.DeviceList = [];
            for (let i in data) {
                state.DeviceList.push(data[i]);
                let now = new Date(Number(data[i].last_upload_date))
                function Completion(s) {
                    return s < 10 ? '0' + s : s;
                }
                let hour = now.getHours();
                let minute = now.getMinutes();
                state.DeviceList[i].last_upload_date = Completion(hour) + ":" + Completion(minute);
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
