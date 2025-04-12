<template>
  <div class="home">
    <BlogList />
  </div>
</template>

<script setup>
import BlogList from "@/components/BlogList.vue";
</script>

<style lang="scss" scoped>
.home {
  padding: 1.2rem;
  width: 90%;
  height: 95%;
  overflow-y: auto;
}
</style>