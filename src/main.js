import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Carousel, CarouselItem, Pagination, Row, Col, Input, Button, Message } from 'element-ui'

Vue.config.productionTip = false

Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Button)
Vue.use(Message)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
