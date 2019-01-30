<template>
  <div id="app">
    <v-app id="inspire">
      <Header v-on:open-nav="openNav" v-bind:btnback="btnback"/>
      <Navigator v-on:close-nav="closeNav" v-bind:nav="nav" v-bind:drawer="drawer"/>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import Navigator from './components/layout/Navigator'
export default {
  name:"app",
  components:{
    Header,
    Navigator
  },
  data(){
    return{
      btnback:true,
      drawer:null,
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
      to.name === "Абонент" || to.name === "Служба"  ? this.btnback=true : this.btnback=false
    }
  },
  methods:{
    openNav(){
      this.drawer = !this.drawer
    },
    closeNav(val){
      this.drawer = val
    }
  }
}
</script>


