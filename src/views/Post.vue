<template>
  <div class="post-container">
    <BlogDetail />
  </div>
</template>

<script setup>
import BlogDetail from "@/components/BlogDetail.vue";
</script>

<style lang="scss" scoped>
.post-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>