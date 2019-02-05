<template>
    <div class="AddSubStructur">
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
            <v-card ref="form" class="card-form">
                <v-card-text>
                
                <v-text-field
                    class="item-list"
                    ref="name"
                    v-model="name"
                    :rules="[() => !!name || 'Это поле должо быть заполенно']"
                    
                    label="Название"
                    placeholder="Отдел 4"
                    required
                ></v-text-field>
                <v-text-field
                    class="item-list"
                    ref="type"
                    v-model="type"
                    :rules="[() => !!type || 'Это поле должо быть заполенно ']"
                    
                    label="Тип"
                    placeholder="Отдел"
                    required
                ></v-text-field>
                <v-text-field
                    class="item-list"
                    ref="address"
                    v-model="address"
                    
                    label="Адресс"
                    placeholder="ул. Строителей дом 123"
                    required
                ></v-text-field>

                <span v-for="(item, index) in telephones" :key="index">
                    <v-divider class="item-list"></v-divider>
                    
                    <v-text-field
                        class="item-list"
                        :ref="'telephones['+index+'].type'"
                        v-model="telephones[index].type"
                        :rules="[() => !!telephones[index].type || 'Это поле должо быть заполенно ']"
                        
                        label="Тип"
                        placeholder="Факс"
                        required
                    ></v-text-field>
                    <v-text-field
                        class="item-list"
                        :ref="'telephones['+index+'].number'"
                        v-model="telephones[index].number"
                        :rules="[() => !!telephones[index].number || 'Это поле должо быть заполенно']"
                        
                        label="Телефон"
                        placeholder="6666"
                        required
                    ></v-text-field>
                    <v-layout align-center justify-center row>
                        <v-btn small round color="primary" @click="deletetelephone(index)" >Убрать</v-btn>
                    </v-layout>
                    
                </span>

                <v-divider class="item-list"></v-divider>
                <v-layout align-center justify-center row>
                    <v-btn small round color="primary" dark @click="addtelephone()">Добавить телефон</v-btn>
                </v-layout>
                
                
                </v-card-text>
                <v-divider class="mt-5"></v-divider>
                <v-card-actions>
                <v-btn @click="cancel()" flat>Отменить</v-btn>
                <v-spacer></v-spacer>
                <v-slide-x-reverse-transition>
                    <v-tooltip
                    v-if="formHasErrors"
                    left
                    >
                    <v-btn
                        slot="activator"
                        icon
                        class="my-0"
                        @click="resetForm"
                    >
                        <v-icon>refresh</v-icon>
                    </v-btn>
                    <span>Очистить форму</span>
                    </v-tooltip>
                </v-slide-x-reverse-transition>
                <v-btn color="success" flat @click="submit">Добавить</v-btn>
                
                
                </v-card-actions>
            </v-card>
            
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import router from '@/router'
import axios from 'axios'


export default {
    name:"AddSubStructur",
    data(){
        return{
            name:null,
            type:null,
            address:null,
            telephones:[
                
            ],
            errorMessages:[],
            formHasErrors:false
        }
    },
    computed:{
        form(){
            return{
                name:this.name,
                type:this.type,
                address:this.address
            
            }
        }
    },
    methods:{
        addtelephone(){
            this.telephones=[...this.telephones,{
                number:null,
                type:null
            }]
        },
        deletetelephone(delid){
            
            this.telephones=this.telephones.filter((el,index)=>index!==delid)
        },
        cancel(){
            router.back()
        },
        resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })

        this.telephones=[]

        },
        submit () {
            this.formHasErrors = false

            Object.keys(this.form).forEach(f => {
            if (!this.form[f]) this.formHasErrors = true

            this.$refs[f].validate(true)
            })
            
            this.telephones.forEach((item,index)=>{
                if(!this.$refs[`telephones[${index}].number`][0]) this.formHasErrors=true
                if(!this.$refs[`telephones[${index}].type`][0]) this.formHasErrors=true

                this.$refs[`telephones[${index}].number`][0].validate(true)
                this.$refs[`telephones[${index}].type`][0].validate(true)
            })

            if(!this.formHasErrors)
                axios({
                    method:"post",
                    url:"http://c911161l.beget.tech/practic2/substructur.api",
                    data:{
                        id_structur:this.$route.params.id,
                        name:this.name,
                        type:this.type,
                        adress:this.address
                        
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
                    console.log("Succes add substruct:",res.data)
                    return res.data.output
                })
                .then((indata)=>{
                    this.telephones.forEach((item)=>{
                        axios({
                            method:"post",
                            url:"http://c911161l.beget.tech/practic2/substructur/telephone.api",
                            data:{
                                id_substructr:indata.id,
                                type:item.type,
                                number:item.number
                                
                            },
                            transformRequest:function(data){
                                return Object.keys(data)
                                        .map(function(key, index) {
                                            return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                                        })
                                        .join("&")
                            }
                        })
                        .then(res=>{console.log("Succes add telephone:",res.data)})
                        .catch(err=>console.log("Error add telephone:",err))

                    })
                })
                .catch(err=>console.log("Error add substruct:",err))
        }
    }
}
</script>

<style>
.item-list{
    margin-bottom: 14px;
    margin-top: 5px;  
}
.card-form{
    margin-top: 10px;
}

</style>

