<template>
   <div class="structurs">
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
            namePath:"Служба"
        }
    },
    created(){
        axios.get('http://c911161l.beget.tech/practic2/structurs.api')
            .then(res=>{
                this.telephones = res.data.output
            })
            .catch(err=>console.log(err))
    }
}
</script>