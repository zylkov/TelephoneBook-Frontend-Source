<template>
    <div class="Abonent">
        <Telephone v-bind:telephone="telephone"/>
    </div>
</template>

<script>
import Telephone from '../components/Telephone'
import axios from 'axios'


export default {
    name:"Abonent",
    components:{
        Telephone
    },
    data(){
        return{
            testtelephone:
            {
                id:"1",
                surname:"Зыльков",
                name:"Даниил",
                middle_name:"Алексеевич",
                place:"Рощино",
                address:"проезд Строителей, дом 124",
                number_telephone:"823-321-32-32"
            },
            telephone:
            {
                id:"",
                surname:"",
                name:"",
                middle_name:"",
                place:"",
                address:"",
                number_telephone:"" 
            }
        }
    },
    created(){
        axios.get('http://c911161l.beget.tech/practic2/telephone.api',{
            params:{
                id:this.$route.params.id
            }
        })
            .then(res=>{
                this.telephone = res.data.output
            })
            .catch(err=>console.log(err))
    }
}
</script>
