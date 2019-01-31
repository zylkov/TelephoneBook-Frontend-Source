<template>
   <v-toolbar>
      <v-toolbar-side-icon @click.stop="clickBurger"></v-toolbar-side-icon>
      <v-toolbar-title>{{$route.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
          <v-tooltip class="addBt" v-if="btnAdd" bottom >
            <v-btn  flat icon @click="clickAdd" slot="activator" >
                <v-icon >add</v-icon>
            </v-btn>
            <span>
                {{tooltipAdd}}
            </span>
          </v-tooltip>
      </v-toolbar-items>
    </v-toolbar> 
</template>

<script>

export default {
    name:"Header",
    methods:{
        clickBurger(){
            this.$emit("open-nav",true)
        },
        clickAdd(){
            this.$emit("click-add")
        }
    },
    props:[
        'btnAdd',
        'tooltipAdd'
    ]
}
</script>

<style>
    .addBt{
        padding-top:8px; 
    }
</style>


