import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav.vue'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'
import 'element-ui/lib/theme-chalk/index.css'
import '@/mock/MockServe'
import '../node_modules/swiper/dist/css/swiper.css'
import Carsousel from './components/Carsousel.vue'
import Pagination from './components/Pagination.vue'
import loadimg from '@/assets/load.gif'

Vue.use(ElementUI)
Vue.use(VueLazyload, {
  loading: loadimg
})
Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carsousel.name, Carsousel)
Vue.component(Pagination.name, Pagination)

new Vue({
  router,
  store,

  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
