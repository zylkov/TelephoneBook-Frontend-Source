<template>
<div class="AddStructur">
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
                    placeholder="Полиция"
                    required
                ></v-text-field>
                <v-select
                    v-model="place"
                    ref="place"
                    :items="testPlaces"
                    item-text="name"
                    item-value="id"
                    label="Местоположение"
                    return-object
                    :rules="[v => !!v || 'Это поле должо быть заполенно']"
                    required
                ></v-select>
                <v-text-field
                    class="item-list"
                    ref="adress"
                    v-model="adress"
                    :rules="[() => !!adress || 'Это поле должо быть заполенно ']"
                    
                    label="Адресс"
                    placeholder="ул. Сизам, дом 12"
                    required
                ></v-text-field>
                
                
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
    name:"AddStructur",
    data(){
        return{
            name:null,
            testPlaces:[
                {id:1, name:"Санк-Петербург"},
                {id:2, name:"Рощино"},
            ],
            places:[],
            place:null,
            adress:null,
            errorMessages:[],
            formHasErrors:false
        }
    },
    computed:{
        form(){
            return{
                name:this.name,
                place:this.place,
                adress:this.adress
            }
        }
    },
    created(){
        axios.get('/places.api')
            .then(res=>{
                this.places = res.data.output
            })
            .catch(err=>console.log(err))
    },
    methods:{
        cancel(){
            router.back()
        },
        resetForm () {
            this.errorMessages = []
            this.formHasErrors = false

            Object.keys(this.form).forEach(f => {
            this.$refs[f].reset()
        })
        },
        submit () {
            this.formHasErrors = false

            Object.keys(this.form).forEach(f => {
            if (!this.form[f]) this.formHasErrors = true

            this.$refs[f].validate(true)
            })

            if(!this.formHasErrors)
                axios({
                    method:"post",
                    url:"/structurs.api",
                    data:{
                        id_place:this.place.id,
                        name:this.name,
                        adress:this.adress,
                        method:"add"
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
                    this.resetForm()
                })
                .catch(err=>console.log(err))
        }
    }
}
</script>

<style>
.item-list{
    margin-bottom: 14px; 
}
.card-form{
    margin-top: 10px;
}
</style>