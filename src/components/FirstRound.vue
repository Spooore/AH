<template>
    <div>

        <v-flex>
            <div id="Greeting_Text">
                <h1>1</h1>
                <span>Runda </span>
            </div>

            <div id="Boxer">

            </div>
        </v-flex>
        <div class="text-xs-center">
            <v-btn
                    id="Rozpocznij"
                    round
                    to="Auction"
                    color="red"
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
    }
</script>

<style scoped>


    #Boxer {
        background-image: url("https://media1.giphy.com/media/5tslZSupN8TwotE04E/giphy.gif?cid=3640f6095c3a48f96e315734675c620f");
        background-position: center;
        background-size: cover;
        height: 90%;
        width: 100%;
        left: 50%;
        top: 73%;
        transform: translate(-50%, -50%);
        position: absolute;
    }

    #Rozpocznij {
        position: absolute;
        bottom: 2%;
        left: 50%;
        transform: translate(-50%, -50%);

    }

</style>