<template>
    <div class="Abonent">
        <Telephone v-bind:telephone="telephone"/>
    </div>
</template>

<script>
import Telephone from '../components/Telephone'

export default {
    name:"Abonent",
    components:{
        Telephone
    },
    data(){
        return{
            telephone:
            {
                id:"1",
                surname:"Зыльков",
                name:"Даниил",
                middle_name:"Алексеевич",
                place:"Рощино",
                address:"проезд Строителей, дом 124",
                number_telephone:"823-321-32-32"
            }
        }
    }
}
</script>
