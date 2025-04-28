<template>
  <div class="content-box" v-html="marked(article.content)"></div>
</template>

<script setup>
import {ref} from "vue";
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
watch(
    () => route.params.id,
    (value)=>{
      loadBlogDetail(value);
    },
    {immediate: true}
)
</script>

<style lang="scss" scoped>
.content-box {
  width: 100%;
  height: 100%;
}
</style>