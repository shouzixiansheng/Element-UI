import Vue from 'vue'
import Vuex from 'vuex'
import api from './axios/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    obj: null,
    mok: [],
    islogin: false
  },
  mutations: {
    loginSuccess (state, val) {
      state.islogin = val
    },
    incrment (state, val) {
      state.obj = val
    },
    mokdata (state, val) {
      state.mok = val
    },
    tableAdd (state, val) {
      state.mok.unshift(val)
    }
  },
  actions: {
    getdata: function () {
      this.commit('mokdata', null)
      api.mockdata('/components/Home')
        .then(res => {
          this.commit('mokdata', res)
        })
    }
  }
})
