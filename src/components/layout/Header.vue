<template>
   <v-toolbar>
      
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn href="/" flat>
           Домашняя страница
        </v-btn>
        <v-btn href="#/abonents" flat>
            Абоненты
        </v-btn>
        <v-btn href="#/structurs" flat>
            Службы
        </v-btn>
      </v-toolbar-items>
    </v-toolbar> 
</template>

<script>
export default {
    name:"Header"
}
</script>

