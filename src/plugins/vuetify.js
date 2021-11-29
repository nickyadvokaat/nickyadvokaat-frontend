// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import {createVuetify} from 'vuetify'

export default createVuetify({
    theme: {
        options: {
            customProperties: true,
        },
        defaultTheme: 'dark',
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: "#0F89FE",
                    secondary: "#00C9FB"
                }
            },
            dark: {
                dark: true,
                colors: {
                    primary: "#10F489",
                    secondary: "#00C9FB"
                }
            }
        }
    },
})
