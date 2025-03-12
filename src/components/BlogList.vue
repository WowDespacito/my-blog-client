<template>
  <div class="article-list">
    <div v-for="article in articles" :key="article.id" class="article-card">
      <h2>{{ article.title }}</h2>
      <p>{{ article.summary }}</p>
      <div class="meta">
        <span>{{ article.date }}</span>
        <router-link :to="`/post/${article.id}`">Read More</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const articles = [
  {
    id: 1,
    title: "First Blog Post",
    summary: "This is the summary of the first blog post.",
    date: "2023-10-01",
  },
  {
    id: 2,
    title: "Second Blog Post",
    summary: "This is the summary of the second blog post.",
    date: "2023-10-05",
  },
];
</script>

<style lang="scss" scoped>
.article-list {
  .article-card {
    background-color: #ffffff;
    padding: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: #666;
      margin-bottom: 1rem;
    }

    .meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #999;

      a {
        color: #007bff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>