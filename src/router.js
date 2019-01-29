import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Abonents from './views/Abonents.vue'
import Structurs from './views/Structurs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/abonents',
      name: 'abonents',
      component: Abonents
      
    },
    {
      path:'/structurs',
      name:'structurs',
      component:Structurs
    }
  ]
})
