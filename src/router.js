import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Abonents from './views/Abonents.vue'
import Abonent from './views/Abonent.vue'
import Structurs from './views/Structurs.vue'
import Structur from './views/Structur.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Главная',
      component: Home
    },
    {
      path: '/abonents',
      name: 'Абоненты',
      component: Abonents
      
    },
    {
      path:'/structurs',
      name:'Службы',
      component:Structurs
    },
    {
      path:'/abonents/:id',
      name:'Абонент',
      component: Abonent
    },
    {
      path:'/structurs/:id',
      name:'Служба',
      component: Structur
    },
  ]
})
