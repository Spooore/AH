import Vue from 'vue'
import App from './App.vue'
import 'vuetify/src/stylus/app.styl'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/es5/util/colors'


Vue.config.productionTip = false

import Vuetify, {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VList,
    VListTile,
    VListTileAction,
    VIcon,
    VListTileContent,
    VListTileSubTitle,
    VToolbarSideIcon,
    VToolbarTitle,
    VContent,
    VContainer,
    VFlex,
    VTooltip,
    VLayout,
    VBtn,
    VListTileTitle,
    VSlider,
    transitions
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
    iconfont: 'mdi',
    theme: {
        primary: colors.red.darken1,
        secondary: colors.red.lighten4,
        accent: colors.indigo.base
    },
    components: {
        VApp,
        VNavigationDrawer,
        VFooter,
        VToolbar,
        VList,
        VListTile,
        VListTileAction,
        VIcon,
        VListTileContent,
        VListTileSubTitle,
        VToolbarSideIcon,
        VToolbarTitle,
        VContent,
        VContainer,
        VFlex,
        VTooltip,
        VLayout,
        VBtn,
        VListTileTitle,
        VSlider,
        transitions
    },
    directives: {
        Ripple
    }
})

new Vue({
    render: h => h(App),
    // router,
}).$mount('#app')
