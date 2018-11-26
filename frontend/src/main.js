console.log('main.js');
// import 'jquery'; window.$ = $; window.jQuery = jQuery;
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';

Vue.config.productionTip = false

if (process.env.NODE_ENV == 'production') {
    window.NODE_SERVER = 'https://' + window.location.hostname + ':3000'
    window.ELOGS_SERVER = 'https://' + window.location.hostname + ':8000'
}
else {
    window.NODE_SERVER = 'http://' + window.location.hostname + ':3000'
    window.ELOGS_SERVER = 'http://' + window.location.hostname + ':8000'
}
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
