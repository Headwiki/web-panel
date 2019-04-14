import Vue from 'vue'
import Router from 'vue-router'
import Panel from '@/components/Panel'
import ToDo from '@/components/ToDo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Panel',
      component: Panel
    },
    {
      path: '/todo',
      component: ToDo
    }
  ]
})
