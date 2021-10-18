import Vue from 'vue'
import Vuex from 'vuex'
import weather from './modules/weather'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    weather,
    user
  }
})
