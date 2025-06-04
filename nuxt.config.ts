import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
  devtools: { enabled: false },
  css: ['~/assets/styles/main.scss'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-ignore
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  app: {
    head: {
      title: 'Jean Bacari - Ghostwriting',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Jean Bacari - Ghostwriting' },
        { name: 'keywords', content: 'Ghostwriting, Ghostwritier, GhostWritting services' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Jean Bacari - Ghostwriting' },
        { property: 'og:description', content: 'Jean Bacari - Ghostwriting' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:site_name', content: 'Jean Bacari - Ghostwriting' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})