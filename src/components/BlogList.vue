<template>
  <div class="intro">
      <h1>嗨～你好</h1>
      <h1>Welcome to My Blog</h1>
      <p>这是我的博客，分享我的所思所想</p>
      <p>This is a place where I share my thoughts and experiences.</p>
    </div>
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
import { getBlogList } from '@/api';
import { onMounted } from 'vue';
const articles = [];
const getList = async () =>{
  try{
    const re = await getBlogList();
    console.log(re);
  }catch(e){
    console.log(e)
  }
}
  onMounted(
    ()=>{
      getList();
    }
  )
</script>

<style lang="scss" scoped>
.intro {
    text-align: center;
    margin-bottom: 2rem;
    line-break: 0.25rem;

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.2rem;
      color: #666;
    }
  }
.article-list {
  .article-card {
    background-color: #ffffff;
    padding: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
      color: black;
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