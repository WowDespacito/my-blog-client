<template>
  <div class="home">
    <div class="intro">
      <h1>Welcome to My Blog</h1>
      <p>This is a place where I share my thoughts and experiences.</p>
    </div>
    <BlogList />
  </div>
</template>

<script setup>
import BlogList from "@/components/BlogList.vue";
</script>

<style lang="scss" scoped>
.home {
  padding: 2rem;

  .intro {
    text-align: center;
    margin-bottom: 2rem;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      color: #666;
    }
  }
}
</style>