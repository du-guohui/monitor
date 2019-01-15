import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        Login: false,
        DeviceList: []
    },
    mutations: {
        Login: (state) => {
            state.Login = true;
        },
        DeviceList: (state, data) => {
            state.DeviceList = data;
           // console.log(state.DeviceList);
        }
    }
})

export default store
