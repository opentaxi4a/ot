/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '@/router'
// The style are only needed for some map controls.
// However, you can also style them by your own
import "vue3-openlayers/styles.css";

import OpenLayersMap from "vue3-openlayers";

export function registerPlugins(app) {
  app
    .use(OpenLayersMap)
    .use(vuetify)
    .use(router)
}
