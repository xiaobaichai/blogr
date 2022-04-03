import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Carousel, Pagination, Row, Col, Input, Button } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Carousel)
Vue.use(Pagination)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
