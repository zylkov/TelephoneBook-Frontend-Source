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
        else if(to.name ==="Службы"){
          this.btnAdd=true
          this.tooltipAdd="Добавить службу"
        }
        else if(to.name ==="Служба"){
          this.btnAdd=true
          this.tooltipAdd="Добавить отдел"
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
        else if(this.$route.name ==="Службы"){
          this.btnAdd=true
          this.tooltipAdd="Добавить службу"
        }
        else if(this.$route.name ==="Служба"){
          this.btnAdd=true
          this.tooltipAdd="Добавить отдел"
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
      else if(this.$route.name==="Службы"){
        router.push({name:"Новая служба"})
      }
      else if(this.$route.name==="Служба"){
        router.push({name:"Новый отдел"})
      }
    }
  }
}
</script>


