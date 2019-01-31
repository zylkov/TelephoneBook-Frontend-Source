<template>
  <div id="app">
    <v-app id="inspire">
      <Header v-on:open-nav="openNav" v-on:click-add="clickAdd" v-bind:btnAdd="btnAdd" v-bind:tooltipAdd="tooltipAdd"/>
      <Navigator v-on:close-nav="closeNav" v-bind:nav="nav" v-bind:drawer="drawer"/>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import Navigator from './components/layout/Navigator'

import router from '@/router'

export default {
  name:"app",
  components:{
    Header,
    Navigator
  },
  data(){
    return{
      drawer:null,
      btnAdd:false,
      admin:true,
      tooltipAdd:"Добавить",
      nav:[
        {
          title:"Главная",
          pathName:"Главная",
          icon:"home"
        },
        {
          title:"Абоненты",
          pathName:"Абоненты",
          icon:"account_circle"
        },
        {
          title:"Службы",
          pathName:"Службы",
          icon:"business"
        }
      ]
    }
  },
  watch: {
    '$route' (to) {
      if(this.admin){
        if(to.name === "Абоненты"){
          this.btnAdd=true
          this.tooltipAdd="Добавить абонента"
        }
        else{
          this.btnAdd=false
        }
      }
    }
  },
  created:function(){
    if(this.admin){
        if(this.$route.name === "Абоненты"){
          this.btnAdd=true
          this.tooltipAdd="Добавить абонента"
        }
        else{
          this.btnAdd=false
        }
    }
  },
  methods:{
    openNav(){
      this.drawer = !this.drawer
    },
    closeNav(val){
      this.drawer = val
    },
    clickAdd(){
      if(this.$route.name==="Абоненты"){
        router.push({name:"Новый абонент"})
      }
    }
  }
}
</script>


