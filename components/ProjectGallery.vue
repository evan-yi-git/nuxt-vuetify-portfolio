<template>
  <div>
    <!-- 1. 滑動 Banner 效果 (v-carousel) -->
    <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
      <v-carousel-item v-for="(slide, i) in bannerSlides" :key="i" :src="slide.image" cover>
        <div class="d-flex fill-height align-center bg-black-opacity pl-md-16 px-6 text-white">
          <div style="max-width: 600px;">
            <v-chip color="primary" variant="flat" size="small" class="mb-4">{{ slide.tag }}</v-chip>
            <h2 class="text-h4 font-weight-black mb-2">{{ slide.title }}</h2>
            <p class="text-body-2 text-grey-lighten-2 mb-4">{{ slide.desc }}</p>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>

    <!-- 2. 專案網格列表與獨立介紹頁 -->
    <v-container class="py-12 px-6" style="max-width: 1100px;">
      <!-- 列表檢視 -->
      <v-row v-if="!selectedProject">
        <v-col v-for="project in projects" :key="project.id" cols="12" md="6">
          <v-card flat class="border rounded-xl bg-white h-100 d-flex flex-column" hover style="transition: all 0.3s ease;">
            <v-img :src="project.image" height="240" cover class="bg-grey-lighten-2"></v-img>
            <v-card-item class="pt-4">
              <div class="text-caption text-primary font-weight-bold">{{ project.category }}</div>
              <v-card-title class="text-h6 font-weight-black text-grey-darken-4 pa-0">{{ project.title }}</v-card-title>
            </v-card-item>
            <v-card-text class="text-body-2 text-grey-darken-1 flex-grow-1">{{ project.shortDesc }}</v-card-text>
            <v-card-actions class="pa-4 pt-0">
              <v-btn variant="flat" color="black" block rounded="xl" @click="selectedProject = project">進入專案介紹頁面</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- 【獨立作品介紹頁面】 -->
      <v-card v-else flat class="border rounded-xl bg-white pa-6 pa-md-10">
        <v-btn variant="text" prepend-icon="mdi-arrow-left" class="font-weight-bold mb-4" @click="selectedProject = null">
          返回作品列表
        </v-btn>
        <v-row align="center">
          <v-col cols="12" md="5">
            <v-img :src="selectedProject.image" class="rounded-xl border" height="280" cover></v-img>
          </v-col>
          <v-col cols="12" md="7" class="pl-md-6">
            <span class="text-caption text-primary font-weight-bold">{{ selectedProject.category }}</span>
            <h2 class="text-h4 font-weight-black text-grey-darken-4 mb-4">{{ selectedProject.title }}</h2>
            <p class="text-body-2 text-grey-darken-2 mb-6" style="line-height: 1.8;">{{ selectedProject.fullDesc }}</p>
            <div class="d-flex gap-2 mb-4">
              <v-chip size="small" variant="tonal" color="success" class="mr-2">Lighthouse 98分</v-chip>
              <v-chip size="small" variant="tonal" color="info">100% RWD 還原</v-chip>
            </div>
            <!-- 觸發全域彈窗，使用自訂事件通知父層 -->
            <v-btn color="primary" rounded="xl" @click="$emit('trigger-modal')">模擬線上部署驗證</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['trigger-modal'])

const selectedProject = ref(null)

const bannerSlides = ref([
  {
    title: '多年跨專案多站台維運實績',
    tag: 'OPERATION',
    desc: '實作高複用性資料驅動架構，將多網站內容上架與改版效率大幅提升 40%。',
    image: 'https://unsplash.com'
  },
  {
    title: '極致還原的雙端 RWD 切版美學',
    tag: 'DESIGN & UI',
    desc: '專注於手機與桌機雙端流暢微互動體驗。利用 Material Design 3 規範，打造高質感的視覺表現。',
    image: 'https://unsplash.com'
  }
])

const projects = ref([
  {
    id: 1,
    category: 'Architecture / Operation',
    title: '集團多品牌響應式官網維運',
    shortDesc: '負責集團旗下多個子品牌網站的日常內容迭代與產品快速上架更新。',
    fullDesc: '在這個大型維運項目中，我們將舊有的靜態切版全部轉化為組件化（Component）思維。透過統一配置 Vuetify 主題，實作一套程式碼、多品牌靈活更換視覺色系的彈性。成功在上線營運期間，達成了多站台資料上架效率翻倍、線上零瑕疵的優異表現。',
    image: 'https://unsplash.com'
  },
  {
    id: 2,
    category: 'UI / UX Interaction',
    title: '現代化設計系統組件庫二次封裝',
    shortDesc: '將常用的下拉選單、手風琴、彈出卡片進行高相容性的企業級封裝。',
    fullDesc: '為了解決團隊重複開發基礎 UI 的浪費，本專案將 Vuetify 3 核心組件進行深度二次封裝。100% 完美還原 Figma 設計師的高階特效。重點針對網頁首頁載入速度（FCP）與行動裝置觸控回饋（Touch Ripple）進行全面效能調校。',
    image: 'https://unsplash.com'
  }
])
</script>

<style scoped>
.bg-black-opacity {
  background: linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%);
  width: 100%;
}
.v-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.06) !important;
}
</style>
