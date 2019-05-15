import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Index from './components/table/Index.vue'
import TableBase from './components/table/TableBase'
import TableUpdate from './components/table/TableUpdate'
import TableSort from './components/table/TableSort'
import TableAdd from './components/table/TableAdd'
import Charts from './components/echarts/Finds'
import Land from './components/Land.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home',
          name: 'index',
          component: Index
        },
        {
          path: '/home/tablebase',
          name: 'tableBase',
          component: TableBase
        },
        {
          path: '/home/tableupdate/*',
          name: 'tableUpdate',
          component: TableUpdate
        },
        {
          path: '/home/tablesort',
          name: 'tableSort',
          component: TableSort
        },
        {
          path: '/home/tableadd',
          name: 'tableAdd',
          component: TableAdd
        },
        {
          path: '/home/charts',
          name: 'Charts',
          component: Charts
        }
      ]
    },
    {
      path: '/land',
      name: 'land',
      component: Land
    }
  ]
})
