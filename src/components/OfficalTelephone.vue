<template>
   <div class="OfficalTelephone">
       <v-layout align-center justify-center>
            <v-card class="list">
                <v-list two-line>
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>Название</v-list-tile-title>
                            <v-list-tile-sub-title>{{telephone.name}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        </v-list-tile>

                        <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>Место нахождения</v-list-tile-title>
                            <v-list-tile-sub-title>{{telephone.place}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        </v-list-tile>

                        <v-list-tile v-if="telephone.address">
                        <v-list-tile-content >
                            <v-list-tile-title>Адресс</v-list-tile-title>
                            <v-list-tile-sub-title>{{telephone.address}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        </v-list-tile>
                        
                </v-list>
            </v-card>
       </v-layout>
   </div> 
</template>

<script>
export default {
    name:"OfficalTelephone",
    props:["telephone"]
}
</script>

<style>
.list{
    margin-top: 10px;
    width: 100%;
    max-width: 800px;
    
}
</style>