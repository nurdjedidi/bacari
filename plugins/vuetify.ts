import '@mdi/font/css/materialdesignicons.css'
import { defineNuxtPlugin } from 'nuxt/app'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          colors: {
            background: '#f0ecf4',
            surface: '#fcf8ff',
            'surface-dim': '#dcd9e1',
            'surface-bright': '#fcf8ff',
            'on-surface': '#1b1b21',
            outline: '#777682',
            'outline-variant': '#c7c5d3',
            primary: '#5355aa',
            'on-primary': '#ffffff',
            secondary: '#416084',
            'on-secondary': '#ffffff',
            tertiary: '#79499a',
            'on-tertiary': '#ffffff',
            error: '#ba1a1a',
            'on-error': '#ffffff',
            'surface-light': '#eae7ef',
          },
          dark: false,
          variables: {
            'overlay-background': '#1b1b25',
          },
        },
        dark: {
          colors: {
            background: '#1f1f25',
            surface: '#131318',
            'surface-dim': '#131318',
            'surface-bright': '#39383f',
            'on-surface': '#e4e1e9',
            outline: '#918f9d',
            'outline-variant': '#464651',
            primary: '#c0c1ff',
            'on-primary': '#232479',
            secondary: '#a9c9f2',
            'on-secondary': '#0d3253',
            tertiary: '#e3b5ff',
            'on-tertiary': '#471768',
            error: '#ffb4ab',
            'on-error': '#690005',
            'surface-light': '#39383f',
          },
          dark: true,
          variables: {
            'overlay-background': '#1b1b25',
          },
        },
      },
    },
  })

  app.vueApp.use(vuetify)
})