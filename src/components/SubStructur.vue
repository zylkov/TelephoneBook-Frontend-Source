<template>
    <div class="SubStructur">
        <v-layout align-center justify-center fill-height>
            <v-card class="list">
            <v-expansion-panel>
                <v-expansion-panel-content
                v-for="item in substructrs"
                :key="item.id"
                expand-icon="mdi-menu-down"
                >
                <v-btn icon ripple @click="deleteSubstruct(item.id)">
                    <v-icon color="red lighten-1">delete</v-icon>
                </v-btn>
                <div slot="header">{{item.name}}</div>
                <v-layout align-center justify-center>
                    <v-card class="card" flat>
                        <v-list two-line>
                            <v-subheader class="subtitle">
                                Данные
                            </v-subheader>
                            <v-list-tile-content>
                                    <v-list-tile-title>Название</v-list-tile-title>
                                    <v-list-tile-sub-title>{{item.name}}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-content>
                                    <v-list-tile-title>Тип</v-list-tile-title>
                                    <v-list-tile-sub-title>{{item.type}}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-content v-if="item.adress">
                                    <v-list-tile-title>Адресс</v-list-tile-title>
                                    <v-list-tile-sub-title>{{item.adress}}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-subheader class="subtitle">
                                Контакные данные
                            </v-subheader>
                            <span v-for="(telephone,index) in item.number" :key="index" >
                                
                                    
                                
                                <v-list-tile-content>
                                    <v-list-tile-title>{{getTypeNumber(telephone)}}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{telephone[getTypeNumber(telephone)]}}</v-list-tile-sub-title>
                                    
                                </v-list-tile-content>
                                <v-list-tile-action>
                                    <v-btn icon ripple @click="deleteOffTelephone(getTypeNumber(telephone),telephone[getTypeNumber(telephone)],item.id)">
                                        <v-icon color="red lighten-1">delete</v-icon>
                                    </v-btn>
                                </v-list-tile-action>
                            </span>
                        </v-list>
                    </v-card>
                </v-layout>
                </v-expansion-panel-content>
            </v-expansion-panel>
            </v-card>
        </v-layout>
    </div>
</template>

<script>
export default {
    name:"SubStructur",
    props:[
        "substructrs"
    ],
    methods:{
        getTypeNumber(obj){
           return Object.keys(obj)[0]
        },
        deleteSubstruct(id){
            this.$emit('deleteSubstruct', id);
        },
        deleteOffTelephone(type,number,id){
            this.$emit('deleteOffTelephone', {type,number,id});
        }
    }
}
</script>

<style>
    .card{
        
        width: 90%;
    }
    .subtitle{
        margin-left: -30px;
    }
</style>