<template>
   <div class="abonents">
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
            namePath:"Абонент"
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
    }
}
</script>
