<template>
  <div class="intro">
      <h1>嗨～你好</h1>
      <h1>Welcome to My Blog</h1>
      <p>这是我的博客，分享我的所思所想</p>
      <p>This is a place where I share my thoughts and experiences.</p>
    </div>
  <div class="article-list" v-infinite-scroll="loadMore" :infinite-scroll-disabled="isLoading || !hasMore">
    <div v-for="article in articles" :key="article.id" class="article-card">
      <h2>{{ article.title }}</h2>
      <div class="meta">
        <span>{{ article.date }}</span>
        <router-link :to="`/post/${article.id}`">Read More</router-link>
      </div>
    </div>

    <!-- 加载中 -->
    <div v-if="isLoading" class="loading-spinner">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div> 
    <!-- 没有更多数据 -->
    <div v-if="!hasMore " class="no-more-data">
      <p>没有更多数据了</p>
    </div>
    <!-- 错误提示 -->
    <div v-if="error" class="error-message">
      {{ error }} <button @click="retryLoading">重试</button>
    </div>
  </div>

</template>

<script setup>
import { getBlogList } from '@/api';
import { ref, onMounted } from 'vue';

const articles = ref([]);
const isLoading = ref(false);
const hasMore = ref(true);
const pageNum = ref(1);
const pageSize = ref(10);
const total = ref(0);
const error = ref(null);

const loadMore = async () => {
  if (isLoading.value || !hasMore.value) return;
  isLoading.value = true;
  try {
    const response = await getBlogList({
      pageNum: pageNum.value,
      pageSize: pageSize.value
    })

    if (response.data.total){
      articles.value = [...articles.value, ...response.data.items];
      pageNum.value++;
      hasMore.value = articles.value.length < response.data.total;
      total.value = response.data.total;
    } else {
      hasMore.value = false;
    }
  } catch (err) {
    console.error('Error loading more articles:', err);
  } finally {
    isLoading.value = false;
  }
}
onMounted(
    ()=>{
      loadMore();
    }
)
</script>

<style lang="scss" scoped>
.intro {
    text-align: center;
    margin-bottom: 2rem;
    //line-break: 0.25rem;

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
  .loading-spinner, .no-more-data, .error-message {
    text-align: center;
    padding: 20px;
    color: #999;
  }
}
</style>