<template>
  <div class="post">
    <h1>{{ article.title }}</h1>
    <div class="meta">
      <span>{{ article.date }}</span>
    </div>
    <div class="content">
      {{ article.content }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const article = ref({
  id: route.params.id,
  title: "First Blog Post",
  date: "2023-10-01",
  content: "This is the full content of the first blog post.",
});
</script>

<style lang="scss" scoped>
.post {
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .meta {
    color: #999;
    margin-bottom: 1rem;
  }

  .content {
    line-height: 1.6;
    color: #333;
  }
}
</style>