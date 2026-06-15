<template>
  <v-app class="bg-grey-lighten-5">
    <!-- 頂部導覽列：當進入獨立圖片頁面時自動隱藏，讓圖片完全滿版 -->
    <v-app-bar flat class="border-b px-md-4" color="white" v-if="!isIndependentPage">
      <v-toolbar-title class="text-subtitle-1 font-weight-black tracking-widest text-grey-darken-4">
        PREMIUM UI <span class="text-primary">.</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
      <!-- 導覽切換按鈕 -->
      <v-btn variant="text" class="text-caption font-weight-bold mr-2" @click="homeViewMode = 'gallery'">精選專案2</v-btn>
      <v-btn variant="text" class="text-caption font-weight-bold mr-4" @click="homeViewMode = 'components'">高級互動組件庫</v-btn>
      
      <!-- 利用 to 屬性綁定 Nuxt 路由，點擊直接跳轉獨立網址網頁 -->
      <v-btn to="/pc" class="text-caption font-weight-bold bg-blue-lighten-5 text-primary rounded-xl mr-2 px-4">💻 PC版獨立網址</v-btn>
      <v-btn to="/mb" class="text-caption font-weight-bold bg-green-lighten-5 text-success rounded-xl px-4">📱 MB版獨立網址</v-btn>
    </v-app-bar>

    <!-- 主要內容動態注入孔 -->
    <v-main>
      <!-- NuxtPage 會自動根據目前的網址，對應到 pages 資料夾底下的組件 -->
      <NuxtPage :view-mode="homeViewMode" />
    </v-main>

    <!-- 頁尾：獨立網頁時同樣自動隱藏 -->
    <v-footer v-if="!isIndependentPage" class="text-center d-flex flex-column py-6 bg-white border-t">
      <div class="text-caption text-grey-darken-1 font-weight-medium">
        &copy; {{ new Date().getFullYear() }} Elite Portfolio. Multi-page Router Architecture.
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const homeViewMode = ref('gallery')

// 判斷目前是不是在 /pc 或 /mb 頁面
const isIndependentPage = computed(() => {
  return route.path === '/pc' || route.path === '/mb'
})
</script>

<style scoped>
.tracking-widest {
  letter-spacing: 0.15em !important;
}
</style>
