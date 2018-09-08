console.log('main.js')
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'

// import 'codemirror'
// import 'summernote/dist/summernote'
// import 'summernote/dist/summernote.css'

import Btn from '../src/components/Button'
import Input from '../src/components/FormInput'

Vue.component('btn', Btn)
Vue.component('form-input', Input)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
