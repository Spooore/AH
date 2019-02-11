<template>
    <div>



        <v-flex>

            <div class="wrapper">
                <div id="Greeting_Text">
                    <h1>1</h1>
                    <span>Runda </span>
                </div>

                <div id="Boxer">
                </div>
            </div>



        </v-flex>
        <div class="text-xs-center">
            <v-btn
                    id="Rozpocznij"
                    round
                    to="Auction"
                    color="primary"
                    dark>Rozpocznij
            </v-btn>
        </div>
    </div>
</template>

<script>
    import Auction from "./Auction";

    export default {

        name: "FirstRound",
        comments: {
            Auction
        },
        data() {
            return {
                    img: require('@/assets/logo-header.png'),
            }
        },
    }
</script>

<style scoped>

    .wrapper{
        z-index:2;
        width:100%;
        height:auto;
        background-color:#FFF;
        left:auto ;
        right:auto ;
        margin: auto;
    }

    #Boxer {
        background-image: url("https://media.giphy.com/media/RAUh1XkOJnF4c/giphy.gif");
        background-position: center;
        background-size: cover;
        height: 100%;
        width: 100%;
        /*left: 50%;*/
        top: auto;
        /*transform: translate(-50%, -50%);*/
        position: absolute;
    }

    #Rozpocznij {
        position: absolute;
        bottom: 2%;
        left: 50%;
        transform: translate(-50%, -50%);

    }

</style>