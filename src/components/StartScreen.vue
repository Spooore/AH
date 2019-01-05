<template>
    <v-app id="inspire">
        <div id="Greeting_Text">
            Let's get ready to rumble.
        </div>

        <div id="Slider_box">
            <v-card-text class="Slider_question">
            <p class="text-sm-left">Ile pieniędzy chcesz pożyczyć?</p>
            </v-card-text>
                <v-slider
                v-model="ex1.val"
                :thumb-color="ex1.color"
                thumb-label="always"
                :thumb-size="50"
                :min="50"
                :max="20000"
        ></v-slider>
            <v-card-text class="Slider_question">
            <p class="text-sm-left">Na jaki okres czasu (miesiące)?</p>
            </v-card-text>
            <v-slider
                v-model="ex2.val"
                :thumb-color="ex2.color"
                thumb-label="always"
                :min="1"
                :max="60"
        ></v-slider>
        </div>
        <div id="Summary">
            <span> Pożyczyasz {{ex1.val}} złotych, na okres {{ex2.val}} miesięcy. </span>
            <div class="text-xs-center">
                <v-btn round color="primary" dark>Rumble On</v-btn>
            </div>
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

        <v-footer app absolute>
            <span>&copy; Tymon Czarnota 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    let val=50;
    export default {
        data: () => ({
            drawer: null,
            ex1: { label: 'Pieniądze', val: val, color: 'red'},
            ex2: { label: 'Czas     ', val: val, color: 'red'}
        }),
        props: {
            source: String
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
        margin-bottom:20px;
        padding: 15px;
        font-size: 2em;
        color: white;
    }

    #Slider_box{
        margin:20px;
    }
    .Slider_question{
        font-family: 'Varela Round', sans-serif;
        padding:5px;
    }
    #Summary{
        font-family: 'Varela Round', sans-serif;
        margin:0;
    }

</style>