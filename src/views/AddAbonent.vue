<template>
    <div class="AddAbonent">
        <v-layout align-center justify-center>
            <v-card class="list">
                <v-list two-line>
                    <v-list-tile class="item-list">
                        <v-list-tile-content>
                            <v-list-tile-title>Фамилия</v-list-tile-title>
                            <v-list-tile-sub-title>
                                <v-text-field
                                placeholder="Зыльков"
                                required/>
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider/>
                    <v-list-tile class="item-list">
                        <v-list-tile-content>
                            <v-list-tile-title>Имя</v-list-tile-title>
                            <v-list-tile-sub-title>
                                <v-text-field
                                placeholder="Даниил"
                                required/>
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider/>
                    <v-list-tile class="item-list">
                        <v-list-tile-content>
                            <v-list-tile-title>Отчество</v-list-tile-title>
                            <v-list-tile-sub-title>
                                <v-text-field
                                placeholder="Алексеевич"
                                required/>
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider/>
                    <v-list-tile class="item-list">
                        <v-list-tile-content>
                            <v-list-tile-title>Место прописки</v-list-tile-title>
                            <v-list-tile-sub-title>
                                <v-text-field
                                placeholder="Рощино"
                                required
                                />
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider/>
                    <v-list-tile class="item-list">
                        <v-list-tile-content>
                            <v-list-tile-title>Адресс</v-list-tile-title>
                            <v-list-tile-sub-title>
                                <v-text-field
                                placeholder="Проезд Строителей; дом 123; кв 21"
                                />
                                
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider/>
                    <v-list-tile class="item-list">
                        <v-list-tile-content>
                            <v-list-tile-title>Номер телефона</v-list-tile-title>
                            <v-list-tile-sub-title>
                                <v-text-field required/>
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
       </v-layout>
    </div>
</template>

<script>
export default {
    name:"AddAbonent"
}
</script>

<style>
.item-list{
    padding-top:10px;
    padding-bottom: 10px; 
}
</style>
