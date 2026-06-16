<template>
  <div>
    <!-- 原本主頁的兩個切換元件 -->
    <v-window v-model="currentView">
      <v-window-item value="gallery">
        <ProjectGallery @trigger-modal="dialog = true" />
      </v-window-item>
      <v-window-item value="components">
        <ComponentShowcase @trigger-modal="dialog = true" />
      </v-window-item>
    </v-window>

    <!-- 全域共享彈出視窗組件 -->
    <v-dialog v-model="dialog" max-width="400">
      <v-card class="rounded-xl pa-4 text-center">
        <v-card-item class="pt-4">
          <v-avatar size="64" color="primary" class="mb-2 text-white font-weight-bold">CV</v-avatar>
          <v-card-title class="font-weight-black">即戰力前端維運人才</v-card-title>
        </v-card-item>
        <v-card-text class="text-body-2 text-grey-darken-1 py-2">
          這個動態效果展示了 Vue 3 的反應式狀態控制（Reactive State）與 Vuetify 3 遮罩層的平滑過場動畫。
        </v-card-text>
        <v-card-actions class="justify-center pb-2">
          <v-btn variant="flat" color="black" rounded="xl" class="px-8" @click="dialog = false">關閉視窗</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({ viewMode: String })
const currentView = ref('gallery')
const dialog = ref(false)

// 監聽父層導覽列按鈕點擊，同步切換檢視模式
watch(() => props.viewMode, (newVal) => {
  if (newVal === 'gallery' || newVal === 'components') {
    currentView.value = newVal
  }
})
</script>
