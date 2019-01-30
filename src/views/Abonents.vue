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

export default {
    name:"abonents",
    components:{
        Telephones
    },
    data(){
        return{
            telephones:[
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
            iconName:"account_circle",
            namePath:"Абонент"
        }
    }
}
</script>
