<template>
  <div class="home">
    <v-layout align-center justify-center column fill-height>
      
      <v-icon class="padding" size="80" color="green darken-2">phone</v-icon>
      <div class="display-2 font-weight-bold">
        Единная
      </div>
      <div class="display-2 font-weight-bold">
        База данных контактов
      </div>
      <div class="display-2 font-weight-bold padding">
        России
      </div>
      
      <div class="headline padding">
        Здесь вы можете найти номер абонента или службы
      </div>
      <div>
        <v-btn href="#/abonents"  large  round color="info" dark>Абоненты</v-btn>
        <v-btn href="#/structurs" large  round color="info" dark>Службы</v-btn>
      </div>
      
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import router from '@/router.js'

export default {
  name: 'home',
  methods:{
        goToPage(name){
            router.push({name})
        }
  }
}
</script>

<style scoped>
  .resultContainer {
    height: 350px;
  }

  .item {
    min-height: 50px;
    min-width: 80px;
    margin: 10px;
  }
  .home{
    height: 100%;
  }
  .padding{
    padding-bottom: 30px
  }
  
</style>