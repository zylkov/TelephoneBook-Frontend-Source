<template>
   <v-toolbar>
      <v-toolbar-side-icon @click.stop="clickBurger"></v-toolbar-side-icon>
      <v-toolbar-title>{{$route.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        
      </v-toolbar-items>
    </v-toolbar> 
</template>

<script>

export default {
    name:"Header",
    methods:{
        clickBurger(){
            this.$emit("open-nav",true)
        }
    },
    props:[
        'btnback'
    ]
}
</script>

