<template>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        
  
        <v-list class="pt-0" dense>
          
  
          <v-list-tile
            v-for="item in nav"
            :key="item.title"
            @click="goToPage(item.pathName)"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
  
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
import router from '@/router.js'

export default {
    name:"Navigator",
    props:[
        "nav",
        "drawer"
    ],
    methods:{
        goToPage(name){
            router.push({name})
        }
    },
    watch:{
        drawer:function(val){
            this.$emit("close-nav",val)
        }
    }
}
</script>
