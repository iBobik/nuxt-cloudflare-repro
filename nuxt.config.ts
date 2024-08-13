// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  routeRules: { // Does not generete static files with or without this config
    '/': { static: true },
    '/about': { static: true },
  },
})
