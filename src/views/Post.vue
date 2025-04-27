<template>
  <div class="post-container">
    <el-button icon="el-icon-back" @click="this.$router.back()"></el-button>
    <BlogDetail />
  </div>
</template>

<script setup>
import BlogDetail from "@/components/BlogDetail.vue";
</script>

<style lang="scss" scoped>
.post-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>