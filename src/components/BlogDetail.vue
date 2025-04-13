<template>
    <div class="post">
        <h1>{{ article.title }}</h1>
        <div class="meta">
            <span>{{ article.createTime }}</span>
        </div>
        <div v-html="marked(article.content)"></div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getBlogDetail } from "@/api"; 
import { marked } from "marked";

const route = useRoute();
const article = ref({
    id: "",
    title: "",
    content: "",
    createTime: "",
    updateTime: ""
});

// getBlogDetail
const loadBlogDetail = async (id) => {
    try {
        const response = await getBlogDetail(id);
        if (response.data) {
            article.value = response.data;
        } else {
            throw new Error("Blog not found");
        }
    } catch (error) {
        console.error("Error fetching blog detail:", error);
    }
}

onMounted(() => {
    const id = route.params.id;
    if (id) {
        loadBlogDetail(id);
    } else {
        console.error("No blog ID provided");
    }
});
</script>

<style lang="scss" scoped>
.post {
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  height: 95%;
  overflow-y: auto;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .meta {
    color: black;
    margin-bottom: 1rem;
  }
}
</style>