import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import journalState from './modules/journal'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
})

export default new Vuex.Store({
  modules: {
    journalState
  },
  plugins: [vuexLocal.plugin]
})
