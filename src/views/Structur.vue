<template>
    <div class="Structur">
        <OfficalTelephone v-bind:telephone="telephone"/>
        <SubStructur v-bind:substructrs="substructrs"/>
    </div>
</template>

<script>
import OfficalTelephone from '../components/OfficalTelephone'
import SubStructur from '../components/SubStructur'

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
                id:"1",
                name:"Полиция",
                place:"Рощино",
                
                           
            },
            substructrs:[
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
