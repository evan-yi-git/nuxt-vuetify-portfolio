// https://nuxt.com
export default defineNuxtConfig({
  devtools: { enabled: true },

  // 直接引入官方模組，它會自動幫你處理好所有 Vuetify 組件與圖標的載入
  modules: [
    'vuetify-nuxt-module'
  ],

  // 100% 符合最新官方定義的寫法，紅線會立刻消失！
  vuetify: {
    vuetifyOptions: {
      ssr: true // 放在這裡符合 TypeScript 嚴謹型別
    }
  },

  compatibilityDate: '2026-06-15'
})
