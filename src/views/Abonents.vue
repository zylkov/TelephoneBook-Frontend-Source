<template>
   <div class="abonents">
       <Telephones v-bind:telephones="telephones"/>
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
                    surname:"Зыльков",
                    name:"Даниил",
                    middle_name:"Алексеевич",
                    place:"Рощино"
                },
                { divider: true, inset: true },
                {
                    id:"2",
                    surname:"Гриньков",
                    name:"Григорий",
                    middle_name:"вцвцвывы",
                    place:"Санкт-Петербург" 
                },
                { divider: true, inset: true },
                {
                    id:"3",
                    surname:"Камчатный",
                    name:"Андрей",
                    middle_name:"Демонович",
                    place:"Санкт-Петербург" 
                },
                { divider: true, inset: true },
                {
                    id:"4",
                    surname:"Первушин",
                    name:"Алексей",
                    middle_name:"Антонович",
                    place:"Санкт-Петербург" 
                }
            ]
        }
    }
}
</script>
