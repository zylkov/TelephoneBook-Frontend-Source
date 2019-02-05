<template>
   <div class="structurs">
       <v-layout align-center justify-center>
          <div class="search">
            <v-text-field
                v-model="search"
                outline
                label="Поиск"
                type="text"
                prepend-icon="search"
            >
            </v-text-field>
          </div>
       </v-layout>
       <Telephones 
       v-bind:telephones="telephones"
       v-bind:iconName="iconName"
       v-bind:namePath="namePath" />
   </div> 
</template>

<script>
import Telephones from '../components/Telephones'
import axios from 'axios'

export default {
    name:"structurs",
    components:{
        Telephones
    },
    data(){
        return{
            testtelephones:[
                {
                    id:"1",
                    name:"Полиция",
                    middle_name:"Алексеевич",
                    place:"Рощино"
                },
                { divider: true, inset: true },
                {
                    id:"2",
                    name:"ООО Солнышко",
                    place:"Санкт-Петербург" 
                },
                { divider: true, inset: true },
                {
                    id:"3",
                    name:"УП Лалаленд",
                    place:"Санкт-Петербург" 
                }
            ],
            telephones:[],
            iconName:"business",
            namePath:"Служба",
            search:""
        }
    },
    created(){
        axios.get('http://c911161l.beget.tech/practic2/structurs.api')
            .then(res=>{
                this.telephones = res.data.output
            })
            .catch(err=>console.log(err))
    },
    watch:{
        search:function(query){
            axios.get('http://c911161l.beget.tech/practic2/structurs/search.api',{
                params:{
                    query
                }
            })
            .then(res=>{
                this.telephones = res.data.output
            })
            .catch(err=>console.log(err))
        }
    }
}
</script>

<style>
.search{
    margin-top: 10px;
    width: 100%;
    max-width: 800px;
    
}
</style>