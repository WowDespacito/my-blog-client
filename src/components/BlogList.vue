<template>
  <div class="blogList-view" v-infinite-scroll="loadMore" :infinite-scroll-disabled="isLoading || !hasMore"  >
    <el-menu :router="true" :default-active="$route.params.id" v-for="article in articles" :key="article.id">
      <el-menu-item :index="`/post/${article.id}`">
        {{article.title}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { getBlogList } from '@/api';
import {ref, onMounted} from 'vue';
const articles = ref([]);
const isLoading = ref(false);
const hasMore = ref(true);
const pageNum = ref(1);
const pageSize = ref(10);
const total = ref(0);

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
.blogList-view {
  overflow: auto;
  width: 98%;
  height: 100%;

  .el-menu {
    background-color: rgba(255, 255, 255, 0);
  }
}
</style>