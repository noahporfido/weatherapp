import Vue from 'vue'
import Vuex from 'vuex'
import wheater from './modules/wheater'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    wheater
  }
})
