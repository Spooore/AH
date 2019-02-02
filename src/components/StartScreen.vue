<template>
    <v-app id="inspire">
        <div id="Greeting_Text">
            Let's get ready to rumble.
        </div>

        <div id="Slider_box">
            <v-container
                    fluid
                    grid-list-lg
            >
            <v-layout
                    row
                    wrap
            >
            <v-flex>
                <v-card-text class="Slider_question">
                    <p allign="left">Ile chcesz pożyczyć?</p>
                </v-card-text>
            </v-flex>
                <v-flex
                        shrink
                        style="width: 80px"
                >
                    <v-text-field
                            v-model="ex1.val"
                            class="mt-0"
                            hide-details
                            single-line
                            counter
                            type="number"
                    ></v-text-field>
                </v-flex>
            </v-layout>
            </v-container>
                <v-flex>
            <v-slider
                v-model="ex1.val"
                :thumb-color="ex1.color"
                thumb-label="always"
                :thumb-size="40"
                :min="50"
                :max="20000"
         ></v-slider>
                </v-flex>
            <v-container
                    fluid
                    grid-list-lg
            >
                <v-layout
                        row
                        wrap
                >
                    <v-flex>
                        <v-card-text class="Slider_question">
                            <p >Na jaki okres czasu?</p>
                        </v-card-text>
                    </v-flex>
                    <v-flex
                            shrink
                            style="width: 80px"
                    >
                        <v-text-field
                                v-model="ex2.val"
                                class="mt-0"
                                hide-details
                                single-line
                                counter
                                type="number"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-flex>
                <v-slider
                        v-model="ex2.val"
                        :thumb-color="ex2.color"
                        thumb-label="always"
                        :thumb-size="40"
                        :min="1"
                        :max="60"
                ></v-slider>
            </v-flex>

        </div>
        <div id="Summary">
            <span> Pożyczyasz
                <span class="summary_value">{{ex1.val}}</span>
                złotych, na okres
               <span class="summary_time">{{ex2.val}}</span>
                miesięcy. </span>

        </div>
        <div class="text-xs-center">
            <v-btn round
                   @click="changePage"
                   color="primary"
                   dark>Rumble On</v-btn>
        </div>
        <v-navigation-drawer
                v-model="drawer"
                clipped
                fixed
                app
        >

            <v-list dense>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>thumb_up</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Dashboard</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>thumb_up</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Settings</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-toolbar>

    </v-app>
</template>

<script>

    import router from '../router'
    import FirstRound from "./FirstRound"

    let val_cash=100;
    let val_time=6;
    export default {

        data: () => ({
            drawer: null,
            ex1: { label: 'Pieniądze', val: val_cash, color: 'red'},
            ex2: { label: 'Czas     ', val: val_time, color: 'red'}
        }),
        props: {
            source: String
        },
        methods: {
            changePage(){
                 router.push({ name: 'FirstRound'})
            }
        },
        components: {
            FirstRound
        }
    }
</script>

<style>
    *{
        padding:0;
        margin:0;
    }

    #Greeting_Text{
        font-family: 'Varela Round', sans-serif;
        background-color: #ff3333;
        height:15%;
        /*margin-bottom:20px;*/
        padding: 15px;
        font-size: 2em;
        color: white;
    }

    #Slider_box{
        padding:0;
        margin:20px;
    }
    .Slider_question{
        font-family: 'Varela Round', sans-serif;
        padding:0;
    }
    #Summary{
        font-family: 'Varela Round', sans-serif;
        padding: 25px;
        margin:10px;
    }
    .summary_value{
        font-size: 20px;
        color:#ff3333;
    }
    .summary_time{
        font-size: 20px;
        color:#ff3333;
    }

</style>