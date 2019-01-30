<template>
  <div id="app">
    <v-app id="inspire">
      <Header v-bind:btnback="btnback"/>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import Header from './components/layout/Header'
export default {
  name:"app",
  components:{
    Header
  },
  data(){
    return{
      btnback:true
    }
  },
  watch: {
    '$route' (to) {
      to.name === "Абонент" || to.name === "Служба"  ? this.btnback=true : this.btnback=false
    }
  }
}
</script>


