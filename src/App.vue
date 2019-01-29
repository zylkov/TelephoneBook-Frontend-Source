<template>
  <div id="app">
    <v-app id="inspire">
      <Header/>
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
  }
}
</script>


