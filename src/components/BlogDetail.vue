<template>
  <div class="blogDetail-view">
    <div class="mdContent" v-html="compileMdContent(article.content)"></div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import { useRoute } from "vue-router";
import { getBlogDetail } from "@/api";
import {marked} from "marked";
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const compileMdContent = (mdContent) => {
    marked.setOptions({
      highlight: (code, language) => {
        const validLang = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(code, {language: validLang}).value;
      }
    });
    return marked(mdContent);
};

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
.blogDetail-view {
  width: 100%;
  height: 100%;
  .MdContent {
    color: rgba(0,0,0,0.5);
  }
}
</style>