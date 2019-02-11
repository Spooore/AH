import Vue from 'vue'
import App from './App.vue'
import 'vuetify/src/stylus/app.styl'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/es5/util/colors'


Vue.config.productionTip = false

import Vuetify, {
    VDivider,
    VCheckbox,
    VSubheader,
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
    VTextField,
    VCardText,
    VImg,
    VListTileAvatar,
    transitions
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'
import router from './router'

Vue.use(Vuetify, {
    iconfont: 'mdi',
    theme: {
        primary: '#86af49',
        secondary: colors.red.lighten4,
        accent: colors.indigo.base
    },
    components: {
        VDivider,
        VListTileAvatar,
        VCheckbox,
        VSubheader,
        VApp,
        VImg,
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
        VTextField,
        VCardText,
        transitions
    },
    directives: {
        Ripple
    }
})

new Vue({
    router,

    // router,
    render: h => h(App)
}).$mount('#app')
