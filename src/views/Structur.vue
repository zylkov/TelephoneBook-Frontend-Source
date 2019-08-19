<template>
    <div class="Structur">
        <OfficalTelephone v-bind:telephone="testtelephone"/>
        <SubStructur v-bind:substructrs="testsubstructrs" v-on:deleteSubstruct="deleteSubstruct" v-on:deleteOffTelephone="deleteOffTelephone"/>
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
        axios.get('/structur.api',{
            params:{
                id:this.$route.params.id
            }
        })
            .then(res=>{
                this.telephone = res.data.output
            })
            .catch(err=>console.log(err))
        
        axios.get('/substructurs.api',{
            params:{
                id:this.$route.params.id
            }
        })
            .then(res=>{
                this.substructrs = res.data.output
            })
            .catch(err=>console.log(err))
    },
    methods:{
        deleteSubstruct(id){
            axios({
                    method:"post",
                    url:"/substructur.api",
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
                    this.substructrs = this.substructrs.filter((item)=>item.id!==id)
                })
                .catch(err=>console.log(err))
        },
        deleteOffTelephone(indata){
            axios({
                    method:"post",
                    url:"/substructur/telephone.api",
                    data:{
                        method:"delete",
                        number:indata.number,
                        type:indata.type,
                        id_substructr:indata.id
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
                    let idx = 0
                    let data = this.substructrs.find((x,index) =>{
                        if (x.id===indata.id){
                            idx = index
                            return true 
                            }
                        })
                    .number.filter((item,key)=> item !== indata.type && key !== indata.number)
                    this.substructrs[idx].number=data
                    console.log("Sucse:",res.data)
                    
                })
                .catch(err=>console.log(err))
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
