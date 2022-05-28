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

// 过滤器
Vue.filter('dateFormat', function (originVal, fmt) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  if (fmt === 'yyyy-MM-dd') {
    return `${y}-${m}-${d}`
  }

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
