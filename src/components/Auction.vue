<template>
    <div>
        <div id="Greeting_Text">
            <h4>Trwa Licytacja</h4>
        </div>
        <h2 id="demo"></h2>
        <v-list two-line>
            <template v-for="(item, index) in items.slice(0, 10)">
                <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                <v-list-tile v-else :key="item.title" avatar
                             v-bind:style="{ background: item.activeColor }">
                    <v-list-tile-avatar>
                        <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        {{item.title}}
                    </v-list-tile-content>
                    <v-list-tile-content
                            class="font-weight-black red--text display-1 d-block text-xs-right">
                        {{item.rrso}}
                        <v-btn v-if="auction_stopped"
                               @click="HopToBankSite(item.site)"
                        fab dark color="red" small>
                            <v-icon dark>done_outline</v-icon>
                        </v-btn>

                    </v-list-tile-content>
                </v-list-tile>
            </template>
            <v-btn
                    id="Wstrzymaj"
                    v-bind:v-text="GetButtonText"
                    v-if="this.round<=3"
                    round
                    @click="StopAuction"
                    color="red"
                    dark>
                {{GetButtonText()}}
            </v-btn>
        </v-list>
    </div>
</template>

<script>
    import Vue from 'vue'
    import router from '../router'

    export default {

        name: "Auction",
        data() {
            return {
                auction_stopped: false,
                round: 1,
                button_text: "Wstrzymaj licytację",
                helper_items: [
                    {header: 'Aktualny ranking'},
                    {divider: true, inset: true},
                    {divider: true, inset: true},
                    {divider: true, inset: true},
                    {divider: true, inset: true},
                ],
                bank_items: [

                    {title: 'Alior   ', avatar: require('@/assets/LOGA-01.png'), rrso: "1.8%", rrso_int: 1.8, site: 'https://www.aliorbank.pl/', activeColor: 'white'},
                    {title: 'PKO BP  ', avatar: require('@/assets/LOGA-02.png'), rrso: '1.7%', rrso_int: 1.7, site: 'https://www.pkobp.pl/', activeColor: 'white'},
                    {title: 'PKO SA  ', avatar: require('@/assets/LOGA-03.png'), rrso: '2.1%', rrso_int: 2.1, site: 'https://www.pekao.com.pl/', activeColor: 'white'},
                    {title: 'Milenium', avatar: require('@/assets/LOGA-04.png'), rrso: '2.2%', rrso_int: 2.2, site: 'https://www.bankmillennium.pl/', activeColor: 'white'},
                    {title: 'MBank   ', avatar: require('@/assets/LOGA-05.png'), rrso: '2.6%', rrso_int: 2.6, site: 'https://www.mbank.pl/indywidualny/',activeColor: 'white'}
                ]
            }
        },
        methods: {

            HopToBankSite(url)
            {
                window.location = url
            },

            StopAuction() {
                 if (this.auction_stopped == false)
                     this.auction_stopped = true;
                 else
                 {
                     this.auction_stopped = false;
                     this.Time();
                 }
            },
            GetButtonText() {
                return this.button_text;
            },
            Time() {
                this.button_text="Wstrzymaj licytację";
                var now = new Date();
                var diff = 3;
                var countDownDate = new Date(now.getTime() + diff * 60000);

                var x = setInterval(() => {
                    var now = new Date().getTime();
                    var distance = countDownDate - now;
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    if (/^\d$/.test(seconds)) {
                        seconds = "0" + seconds;
                    }


                    this.bank_items.forEach(bank => {

                        let chance = Math.floor(Math.random() * 100);
                        if (chance < 3) {
                            bank.rrso_int = Math.max((bank.rrso_int - (Math.random() * 0.2)),0) + 0.1;
                            bank.rrso_int = bank.rrso_int.toFixed(2);
                            bank.rrso = bank.rrso_int + "%";
                            bank.activeColor='yellow';
                            const sleep = (milliseconds) => {
                                return new Promise(resolve => setTimeout(resolve, milliseconds))
                            }

                            sleep(500).then(() => {
                                bank.activeColor='white';
                            })

                        }

                    });

                    this.bank_items.sort((a, b) => (a.rrso_int > b.rrso_int) ? 1 : ((b.rrso_int > a.rrso_int) ? -1 : 0));
                    document.getElementById("demo").innerHTML = minutes + ":" + seconds;

                    if (distance < 0 || this.auction_stopped === true) {
                        this.round=this.round+1;
                        if (this.round==2)
                            this.button_text = "Rozpocznij Rundę 2"
                        if (this.round==3)
                            this.button_text = "Rozpocznij Rundę 3"
                        if(this.round>3)
                            this.button_text = "Wybierz ofertę"
                        clearInterval(x);
                        document.getElementById("demo").innerHTML = "Koniec Czasu";
                    }
                }, 1000);

            },
        },
        beforeMount() {
            this.Time();
        },
        computed: {
            items() {
                var output = [];
                let i = 0;
                for (i = 0; i < Math.max(this.bank_items.length, this.helper_items.length); i++) {

                    output.push(this.helper_items[i]);
                    // console.log(this.bank_items[i].rrso_int);
                    output.push(this.bank_items[i]);
                }
                return output;
            }
        }
    }
</script>

<style scoped>

    #Wstrzymaj {
        margin-top: 70px;
    }

    #demo {
        margin-top: 5px;
    }

</style>