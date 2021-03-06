import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './utils/store/store'

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  store: store,
  computed: {
    userAvailable () {
      return store.getters.userIsAvailable
    },
    watch: {
      userAvailable (newStatus, oldStatus) {
        if (newStatus !== oldStatus) {
          router.push({path: '/'})
        }
      }
    }
  }
})
