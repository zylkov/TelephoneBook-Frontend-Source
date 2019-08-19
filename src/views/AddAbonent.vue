<template>
    <div class="AddAbonent">
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
            <v-card ref="form" class="card-form">
                <v-card-text>
                
                <v-text-field
                    class="item-list"
                    ref="surname"
                    v-model="surname"
                    :rules="[() => !!surname || 'Это поле должо быть заполенно']"
                    
                    label="Фамилия"
                    placeholder="Зыльков"
                    required
                ></v-text-field>
                <v-text-field
                    class="item-list"
                    ref="name"
                    v-model="name"
                    :rules="[() => !!name || 'Это поле должо быть заполенно ']"
                    
                    label="Имя"
                    placeholder="Даниил"
                    required
                ></v-text-field>
                <v-text-field
                    class="item-list"
                    ref="middle_name"
                    v-model="middle_name"
                    :rules="[() => !!middle_name || 'Это поле должо быть заполенно']"
                    
                    label="Отчество"
                    placeholder="Алексеевич"
                    required
                ></v-text-field>
               
                <v-select
                    v-model="place"
                    ref="place"
                    :items="places"
                    item-text="name"
                    item-value="id"
                    label="Место прописки"
                    return-object
                    :rules="[v => !!v || 'Это поле должо быть заполенно']"
                    required
                ></v-select>
                
                <v-text-field
                    class="item-list"
                    ref="address"
                    v-model="address"
                    
                    label="Адресс"
                    placeholder="ул. Строителей дом 123"
                    required
                ></v-text-field>
                
                <v-text-field
                    class="item-list"
                    ref="number_telephone"
                    v-model="number_telephone"
                    :rules="[() => !!number_telephone || 'Это поле должо быть заполенно']"
                    
                    label="Телефон"
                    placeholder="12332145"
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
    name:"AddAbonent",
    data(){
        return{
            places:[],
            surname:null,
            name:null,
            middle_name:null,
            place:null,
            address:null,
            number_telephone:null,
            errorMessages:[],
            formHasErrors:false
        }
    },
    computed:{
        form(){
            return{
                surname:this.surname,
                name:this.name,
                middle_name:this.middle_name,
                place:this.place,
                address:this.address,
                number_telephone:this.number_telephone
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
                    url:"/telephones.api",
                    data:{
                        method:"add",
                        id_place:this.place.id,
                        surname:this.surname,
                        name:this.name,
                        middle_name:this.middle_name,
                        address:this.adress,
                        number_telephone:this.number_telephone
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
