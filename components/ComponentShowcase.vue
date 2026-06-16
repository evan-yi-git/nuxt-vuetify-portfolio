<template>
  <v-container class="py-12 px-6" style="max-width: 800px;">
    
    <!-- 1. 頁籤切換效果 (v-tabs) -->
    <h4 class="text-subtitle-1 font-weight-black mb-3">1. 頁籤切換效果 (Tabs)</h4>
    <v-card flat class="border rounded-xl overflow-hidden bg-white mb-8">
      <v-tabs v-model="activeTab" bg-color="grey-lighten-4" color="primary" grow>
        <v-tab value="tab-1" class="font-weight-bold">RWD 切版2</v-tab>
        <v-tab value="tab-2" class="font-weight-bold">資料維運</v-tab>
      </v-tabs>
      <v-card-text class="pa-6">
        <v-window v-model="activeTab">
          <v-window-item value="tab-1">
            <h5 class="text-h6 font-weight-black mb-2">100% 設計稿還原技術</h5>
            <p class="text-body-2 text-grey-darken-1">專注於手機與桌機雙端的使用表現，杜絕任何不合理的斷點閃爍。熟練運用 Vuetify 3 網格系統，確保響應式版型精確無誤。</p>
          </v-window-item>
          <v-window-item value="tab-2">
            <h5 class="text-h6 font-weight-black mb-2">多子站資料集中控管</h5>
            <p class="text-body-2 text-grey-darken-1">建立「數據與畫面抽離（Data-Driven）」的前端範本。更新產品上架時，只需調整核心資料，所有同步站台即可一鍵即時完成發布。</p>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>

    <!-- 2. 手風琴摺疊效果 (v-expansion-panels) -->
    <h4 class="text-subtitle-1 font-weight-black mb-3">2. 手風琴摺疊效果 (Accordion)</h4>
    <v-expansion-panels class="mb-8 border rounded-xl overflow-hidden" variant="accordion" flat>
      <v-expansion-panel title="如何保證跨裝置相容性？" text="全面採用 Vuetify 的彈性網格與 Flexbox 實用類別，並在開發初期進行多款實體手機與平板的真機除錯。"></v-expansion-panel>
      <v-expansion-panel title="多站台更新時如何防呆？" text="將內容資料與視覺排版完美分離，維運人員只需修改特定 JSON 資料結構，大幅降低改壞 HTML 結構的風險。"></v-expansion-panel>
    </v-expansion-panels>

    <!-- 3. 彈出卡片按鈕 (v-dialog 觸發點) -->
    <h4 class="text-subtitle-1 font-weight-black mb-3">3. 彈出卡片組件 (Modal / Dialog)</h4>
    <div class="text-center bg-white border rounded-xl pa-8">
      <v-btn color="success" size="large" rounded="xl" prepend-icon="mdi-card-account-details" @click="$emit('trigger-modal')">
        點擊觸發：高質感彈出卡片
      </v-btn>
    </div>

  </v-container>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['trigger-modal'])

const activeTab = ref('tab-1')
</script>
