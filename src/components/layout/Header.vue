<template>
   <v-toolbar>
      <v-btn @click="goBack()" v-if="btnback" icon class="hidden-xs-only">
              <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>{{$route.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn @click="goToPage('Главная')" flat>
           Главная
        </v-btn>
        <v-btn @click="goToPage('Абоненты')" flat>
            Абоненты
        </v-btn>
        <v-btn @click="goToPage('Службы')" flat>
            Службы
        </v-btn>
      </v-toolbar-items>
    </v-toolbar> 
</template>

<script>
import router from '@/router.js'

export default {
    name:"Header",
    methods:{
        goToPage(name){
            router.push({name})
        },
        goBack(){
            router.back()
        }
    },
    props:[
        'btnback'
    ]
}
</script>

