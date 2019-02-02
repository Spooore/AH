import Vue from 'vue'
import Router from 'vue-router'
import StartScreen from "./components/StartScreen";


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'StartScreen',
            component: StartScreen
        },
        {
            path: '/FirstRound',
            name: 'FirstRound',
            component: () => import('./components/FirstRound')
        },
        {
            path: '/Auction',
            name: 'Auction',
            component: () => import('./components/Auction')
        }
    ]
})
