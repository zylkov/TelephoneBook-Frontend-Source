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
                <v-text-field
                    class="item-list"
                    ref="place"
                    v-model="place"
                    :rules="[() => !!place || 'Это поле должо быть заполенно ']"
                    
                    label="Место нахождение"
                    placeholder="Рощино"
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
export default {
    name:"AddStructur",
    data(){
        return{
            name:null,
            place:null
        }
    },
    computed:{
        form(){
            return{
                name:this.name,
                place:this.place
            }
        }
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