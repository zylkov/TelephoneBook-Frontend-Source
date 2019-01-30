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

export default {
    name:"structurs",
    components:{
        Telephones
    },
    data(){
        return{
            telephones:[
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
            iconName:"business",
            namePath:"Служба"
        }
    }
}
</script>