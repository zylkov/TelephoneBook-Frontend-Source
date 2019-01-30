<template>
    <div class="Telephones">
        <v-layout align-center justify-center>
            <v-card class="list">
                <v-list two-line>
                    <div v-bind:key="item.id" v-for="(item, index) in telephones">
                        
        
                    <v-divider
                        v-if="item.divider"
                        :inset="item.inset"
                        :key="index"
                    ></v-divider>
        
                    <v-list-tile
                        v-else
                        :key="item.id"
                        avatar
                        @click="goToPageTelephone(item.id)"
                        
                    >
                        <v-list-tile-avatar>
                        <v-icon size="40" color="green darken-2">account_circle</v-icon>
                        </v-list-tile-avatar>
        
                        <v-list-tile-content>
                        <v-list-tile-title >{{item.surname+" "+item.name+" "+item.middle_name}}</v-list-tile-title>
                        <v-list-tile-sub-title >{{item.place}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    </div>
                </v-list>
            </v-card>
        </v-layout>
    </div>
</template>

<script>
import router from '../router'

export default {
    name:"Telephones",
    props:["telephones"],
    methods:{
        goToPageTelephone(id){
            router.push({name:"Абонент",params: { id }})
        }
    }
}
</script>

<style>
.list{
    margin-top: 10px;
    width: 100%;
    max-width: 1000px;
    
}
</style>
