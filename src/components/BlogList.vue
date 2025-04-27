<template>
  <div v-infinite-scroll="loadMore" :infinite-scroll-disabled="isLoading || !hasMore" style="overflow: auto" >
    <el-menu v-for="article in articles" :key="article.id">
      <h2>目录</h2>
      <el-menu-item class="article-card">
        {{article.title}}
      </el-menu-item>
    </el-menu>
  </div>

<!--  <div class="article-list" v-infinite-scroll="loadMore" :infinite-scroll-disabled="isLoading || !hasMore">-->
<!--    <div v-for="article in articles" :key="article.id" class="article-card">-->
<!--      <h2>{{ article.title }}</h2>-->
<!--      <div class="meta">-->
<!--        <span>{{ article.date }}</span>-->
<!--        <router-link :to="`/post/${article.id}`">Read More</router-link>-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; 加载中 &ndash;&gt;-->
<!--    <div v-if="isLoading" class="loading-spinner">-->
<!--      <div class="spinner"></div>-->
<!--      <p>Loading...</p>-->
<!--    </div> -->
<!--    &lt;!&ndash; 没有更多数据 &ndash;&gt;-->
<!--    <div v-if="!hasMore " class="no-more-data">-->
<!--      <p>没有更多数据了</p>-->
<!--    </div>-->
<!--    &lt;!&ndash; 错误提示 &ndash;&gt;-->
<!--    <div v-if="error" class="error-message">-->
<!--      {{ error }} <button @click="retryLoading">重试</button>-->
<!--    </div>-->
<!--  </div>-->

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
      pageSize: pageSize.value,
      status: '0'
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