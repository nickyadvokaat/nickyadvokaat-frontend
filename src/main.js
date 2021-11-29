import {createApp} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import VueSmoothScroll from 'vue3-smooth-scroll'

loadFonts()

createApp(App)
    .use(vuetify)
    .use(VueSmoothScroll)
    .mount('#app')
