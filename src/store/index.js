import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    latest: null,
    daily: null,
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  mutations: {
    SET_LATEST (state, latestData) {
      state.latest = latestData
    },
    SET_DAILY (state, dailyData) {
      state.daily = dailyData
    }
  },
  actions: {
    setLatest ({ commit }, data) {
      commit('SET_LATEST', data)
    },
    setDaily ({ commit }, data) {
      commit('SET_DAILY', data)
    }
  },
  modules: {
  }
})
