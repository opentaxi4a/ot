/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

//i18n imports
import i18n from '@/i18n/i18n'
import '@/styles/fonts.css';

const app = createApp(App)

registerPlugins(app)
app.use(i18n)
app.mount('#app')
