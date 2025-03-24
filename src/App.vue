<template>
  <div id="app">
    <!-- 加载动画 -->
    <Loading />

    <Transition name="fade" mode="out-in">
      <!-- 顶部导航栏 -->
      <Header />
      <!-- 主内容区域 -->
      <router-view />
      <!-- 页脚 -->
      <Footer />
    </Transition>

  </div>
</template>

<script setup>
import Loading from "@/components/Loading.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import mainStore from "@/store";

const store = mainStore();

// 页面宽度
const getWidth = ()=>{
  store.setInnerWidth(window.innerWidth)
};

// 加载完成事件
const loadComplete = ()=>{
  nextTick(()=>{
    // 欢迎提示
    helloInit();
    // 默哀模式
    checkDays();
  })
};

// 监听宽度变化
watch(
  () => store.innerWidth,
  (value) => {
    if (value < 990){
      store.boxOpenState = false;
    }
  }
);
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