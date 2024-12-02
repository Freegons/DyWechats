// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["vuetify/styles"],
  build: {
    transpile: ["vuetify"],
  },
  plugins: [{ src: "~/plugins/toast.js", ssr: false }],
  app: {
    head: {
      title: "DyWechats",
    },
  },
});
