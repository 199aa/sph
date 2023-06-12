import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: () => import('@/views/Home')
    },
    {
      name: 'search',
      path: '/search/:keyword?',
      component: () => import('@/views/Search/Search.vue')
    },
    {
      path: '/detail/:id?',
      component: () => import('@/views/Detail/index.vue'),
      name: 'detail'
    },
    {
      path: '/addcartsuccess/:skuNum?',
      component: () => import('@/views/AddCartSuccess/index.vue'),
      name: 'AddCartSuccess'
    },
    {
      path: '/shopcart',
      component: () => import('@/views/ShopCart/index.vue'),
      name: 'ShopCart'
    },
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/register',
      component: () => import('@/views/Register/index.vue')
    },
    {
      path: '/trade',
      component: () => import('@/views/Trade/index.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 }
  }
})
router.beforeEach(async (to, from, next) => {
  // const arr = ['/home', '/search', '/detail', '/addcartsuccess', '/shopcart']
  let name = store.state.UserInfo.name
  let token = store.state.token

  if (token) {
    if (to.path == '/login' || to.path == '/register') {
      next('/')
    } else {
      if (name) {
        next()
      } else {
        try {
          await store.dispatch('UserInfo')
          next()
        } catch (error) {
          await store.dispatch('logout')
          next('/login')
        }
      }
    }
  } else {
    next()
  }
})
export default router
