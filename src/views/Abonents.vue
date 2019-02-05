<template>
   <div class="abonents">
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
       v-bind:namePath="namePath"
       v-on:deleteTelephone="deleteTelephone" />
   </div> 
</template>

<script>
import Telephones from '../components/Telephones'
import axios from 'axios'

export default {
    name:"abonents",
    components:{
        Telephones
    },
    data(){
        return{
            testtelephones:[
                {
                    id:"1",
                    name:"Зыльков Даниил Алексеевич",
                    middle_name:"Алексеевич",
                    place:"Рощино"
                },
                { divider: true, inset: true },
                {
                    id:"2",
                    name:"Гриньков Григорий вцвцвывы",
                    place:"Санкт-Петербург" 
                },
                { divider: true, inset: true },
                {
                    id:"3",
                    name:"Камчатный Андрей Демонович",
                    place:"Санкт-Петербург" 
                },
                { divider: true, inset: true },
                {
                    id:"4",
                    name:"Первушин Алексей Антонович",
                    place:"Санкт-Петербург" 
                }
            ],
            telephones:[],
            iconName:"account_circle",
            namePath:"Абонент",
            search:""
        }
    },
    created(){
        axios.get('http://c911161l.beget.tech/practic2/telephones.api')
            .then(res=>{
                this.telephones = res.data.output.map(element => {
                  return{
                      id:element.id,
                      name: [element.surname, element.name, element.middle_name].join(" "),
                      place: element.place
                  }
                }) 
            })
            .catch(err=>console.log(err))
    },
    watch:{
        search:function(query){
            axios.get('http://c911161l.beget.tech/practic2/telephones/search.api',{
                params:{
                    query
                }
            })
            .then(res=>{
                this.telephones = res.data.output.map(element => {
                  return{
                      id:element.id,
                      name: [element.surname, element.name, element.middle_name].join(" "),
                      place: element.place
                  }
                }) 
            })
            .catch(err=>console.log(err))
        }
    },
    methods:{
        deleteTelephone(id){
            axios({
                    method:"post",
                    url:"http://c911161l.beget.tech/practic2/telephones.api",
                    data:{
                        method:"delete",
                        id
                    },
                    transformRequest:function(data){
                        return Object.keys(data)
                                .map(function(key, index) {
                                    return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                                })
                                .join("&")
                    }
                })
                .then(res=>{
                    console.log("Sucse:",res.data)
                    this.telephones = this.telephones.filter((item)=>item.id!==id)
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

