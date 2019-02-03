import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Abonents from './views/Abonents.vue'
import Abonent from './views/Abonent.vue'
import Structurs from './views/Structurs.vue'
import Structur from './views/Structur.vue'
import AddAbonent from './views/AddAbonent.vue'
import AddStructur from './views/AddStructur.vue'
import AddSubStructur from './views/AddSubStructur.vue'

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
      path: '/abonents/add',
      name: 'Новый абонент',
      component: AddAbonent
      
    },
    {
      path:'/structurs',
      name:'Службы',
      component:Structurs
    },
    {
      path:'/structurs/add',
      name:'Новая служба',
      component:AddStructur
    },
    {
      path:'/abonent/:id',
      name:'Абонент',
      component: Abonent
    },
    {
      path:'/structur/:id',
      name:'Служба',
      component: Structur
    },
    {
      path:'/structur/:id/add',
      name:'Новый отдел',
      component: AddSubStructur
    },
  ]
})
