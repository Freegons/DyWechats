// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['vuetify/styles'], // 添加 Vuetify 样式
  build: {
    transpile: ['vuetify'], // 转译 Vuetify 依赖
  },
})
