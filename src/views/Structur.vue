<template>
    <div class="Structur">
        <OfficalTelephone v-bind:telephone="telephone"/>
        <SubStructur v-bind:substructrs="substructrs"/>
    </div>
</template>

<script>
import OfficalTelephone from '../components/OfficalTelephone'
import SubStructur from '../components/SubStructur'
import axios from 'axios'


export default {
    name:"Structur",
    components:{
        OfficalTelephone,
        SubStructur
    },
    data(){
        return{
            telephone:
            {
                id:"",
                name:"",
                place:"",
            },
            substructrs:[],
            testtelephone:
            {
                id:"1",
                name:"Полиция",
                place:"Рощино",
                
                           
            },
            testsubstructrs:[
                    {
                        id:"1",
                        name:"Отдел 5",
                        type:"отдел",
                        telephones:[
                            {
                                number:"323131",
                                type:"Факс"
                            },
                            {
                                number:"323131",
                                type:"Телефон"
                            }
                        ]
                    },
                    {
                        id:"2",
                        name:"Отдел 2",
                        type:"отдел",
                        address:"проезд Строителей, дом 124",
                        telephones:[
                            {
                                number:"43234",
                                type:"Факс"
                            },
                            {
                                number:"43245",
                                type:"Телефон"
                            }
                        ]
                    }
                ] 
        }
    },
    created(){
        axios.get('http://c911161l.beget.tech/practic2/structur.api',{
            params:{
                id:this.$route.params.id
            }
        })
            .then(res=>{
                this.telephone = res.data.output
            })
            .catch(err=>console.log(err))
        
        axios.get('http://c911161l.beget.tech/practic2/substructurs.api',{
            params:{
                id:this.$route.params.id
            }
        })
            .then(res=>{
                this.substructrs = res.data.output
            })
            .catch(err=>console.log(err))
    }
}
</script>

<style>
.Structur{
    width: 100%;
}
.lay{
    background-color: red;
    width: 100%;
}
</style>
