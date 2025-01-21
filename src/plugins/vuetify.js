/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

//i18n imports
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n, useI18n } from 'vue-i18n'
import i18n from '@/i18n/i18n'
import calendarLocalConfig from "@/i18n/calendarLocalConfig";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    VTextField : {
      variant: 'outlined',
      hideDetails: 'auto'
    },
    VNavigationDrawer: {
      color: 'primaryLight',
      VCard: {
        color: 'indigo-darken-2'
      },
      VList: {
        density: 'compact',
        VListGroup: {
          density: 'compact',
          VListItem: {
            class: 'text-indigo-darken-4',
            VListItemAction: {
              class: 'text-caption text-danger'
            },
            VBtn: {
              class: 'text-primary',
              variant: 'flat'
            },
          },
        }
      },

    },
  },
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
  theme: {
    defaultTheme: 'light',
    options: {
      customProperties: true,
    },
    themes: {
      light: {

      },
    },
  },
})
