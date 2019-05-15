import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import Echarts from 'echarts'

import 'reset-css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

require('./mock.js')

Vue.use(ElementUI)

Vue.prototype.$echart = Echarts

router.beforeEach((to, from, next) => {
  let logined = store.state.islogin
  if (to.name === 'land') {
    if (!logined) {
      next()
    } else {
      router.replace('/')
    }
  } else {
    if (!logined) {
      router.replace({ path: '/land', query: { redirect: to.name } })
    } else {
      next()
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
