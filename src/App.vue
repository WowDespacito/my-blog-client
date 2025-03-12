<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <Header />
    <!-- 主内容区域 -->
    <router-view />
    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Arial", sans-serif;
  background-color: #f5f5f5;
  color: #333;
}
</style>