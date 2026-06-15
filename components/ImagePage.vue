<template>
  <v-container fluid class="pa-0">
    <!-- w-100 確保寬度永遠等同螢幕寬度，cover 確保比例完美不拉伸變形 -->
    <v-img
      :src="imageUrl"
      class="w-100"
      cover
      min-height="60vh"
      alt="作品展示圖"
    >
      <!-- 內建優雅的載入骨架屏效果，體現微互動專注度 -->
      <template #placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-container>
</template>

<script setup>
// 使用 props 接收圖片網址，體現高複用性元件設計
defineProps({
  imageUrl: {
    type: String,
    required: true
  }
})
</script>
