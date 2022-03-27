import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入nprogress
import Npregress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

// 引入组件，并设置路由懒加载
const BArticle = () => import('@/view/article/BArticle.vue')
const BCategory = () => import('@/view/category/BCategory.vue')
const BHome = () => import('@/view/home/BHome.vue')
// const BLogin = () => import('@/view/login/BLogin.vue')
const BMessage = () => import('@/view/message/BMessage.vue')
const BSource = () => import('@/view/source/BSource.vue')
const BUser = () => import('@/view/user/BUser.vue')
const BSearch = () => import('@/view/search/BSearch.vue')
const BDashboard = () => import('@/view/dashboard/BDashboard.vue')

const routes = [
  // 导航部分
  {
    path: '/',
    component: BDashboard,
    children: [
      { path: 'home', component: BHome },
      { path: 'category', component: BCategory },
      { path: 'source', component: BSource },
      { path: 'message', component: BMessage },
      { path: 'user', component: BUser }
    ]
  },
  // 文章详情页面
  {
    path: '/article/:id',
    component: BArticle
  },
  // 搜索结果页面
  {
    path: '/search/:keyword',
    component: BSearch
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 配置Nprogress
router.beforeEach((to, from, next) => {
  Npregress.start()
  next()
})

router.afterEach(() => {
  Npregress.done()
})

export default router
