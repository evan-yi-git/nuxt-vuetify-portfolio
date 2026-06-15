<template>
  <v-app class="bg-grey-lighten-5">
    <!-- 頂部現代感極簡導覽列 -->
    <v-app-bar flat class="border-b px-md-12" color="white">
      <v-toolbar-title class="text-subtitle-1 font-weight-black tracking-widest text-grey-darken-4">
        PREMIUM UI <span class="text-primary">.</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- 導覽模式切換控制面板 -->
      <v-btn-toggle v-model="currentView" mandatory variant="outlined" divided class="rounded-xl">
        <v-btn value="gallery" class="text-caption font-weight-bold">精選專案2</v-btn>
        <v-btn value="components" class="text-caption font-weight-bold">高級互動組件庫</v-btn>
      </v-btn-toggle>
    </v-app-bar>

    <!-- 主要內容區：透過 Window 絲滑抽換兩個獨立組件 -->
    <v-main>
      <v-window v-model="currentView">
        
        <v-window-item value="gallery">
          <!-- 呼叫第一個分拆組件，並監聽內部發送出的彈窗請求 -->
          <ProjectGallery @trigger-modal="dialog = true" />
        </v-window-item>

        <v-window-item value="components">
          <!-- 呼叫第二個分拆組件 -->
          <ComponentShowcase @trigger-modal="dialog = true" />
        </v-window-item>

      </v-window>

      <!-- 全域共享彈出視窗組件 (v-dialog) -->
      <v-dialog v-model="dialog" max-width="400">
        <v-card class="rounded-xl pa-4 text-center">
          <v-card-item class="pt-4">
            <v-avatar size="64" color="primary" class="mb-2 text-white font-weight-bold">CV</v-avatar>
            <v-card-title class="font-weight-black">即戰力前端維運人才</v-card-title>
          </v-card-item>
          <v-card-text class="text-body-2 text-grey-darken-1 py-2">
            這個動態效果展示了 Vue 3 的反應式狀態控制（Reactive State）與 Vuetify 3 遮罩層的平滑過場動畫。非常期待能將這套高效率的組件開發思維帶入貴團隊。
          </v-card-text>
          <v-card-actions class="justify-center pb-2">
            <v-btn variant="flat" color="black" rounded="xl" class="px-8" @click="dialog = false">關閉視窗</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>

    <!-- 頁尾 -->
    <v-footer class="text-center d-flex flex-column py-6 bg-white border-t">
      <div class="text-caption text-grey-darken-1 font-weight-medium">
        &copy; {{ new Date().getFullYear() }} Elite Portfolio. Component Architecture with Nuxt 4.
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const currentView = ref('gallery')
const dialog = ref(false)
</script>

<style scoped>
.tracking-widest {
  letter-spacing: 0.15em !important;
}
</style>
