<template>
    <!-- 加载动画 -->
    <Loading/>
    <Background @loadComplete="loadComplete"/>
    <!-- 加载完成 -->
    <Transition name="fade" mode="out-in">
      <main id="main" v-if="store.LoadStatus">
        <!-- 顶部导航栏 -->
        <Header />
        <div class="container">
          <!-- 主内容区域 -->
          <router-view />
        </div>
        <!-- 页脚 -->
        <Footer />
      </main>
    </Transition>
</template>

<script setup>
import Loading from "@/components/Loading.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Background from "@/components/Background.vue";
import { mainStore } from "@/store";
import { onBeforeUnmount, onMounted } from "vue";
import config from "@/../package.json";
import cursorInit from "@/utils/cursor";
import { helloInit, checkDays } from "@/utils/getTime.js";

const store = mainStore();
// 加载完成事件
const loadComplete = () => {
  // 设置加载状态
  store.setLoadStatus(true);
  nextTick(() => {
    // 欢迎提示
    helloInit();
    // 默哀模式
    checkDays();
  });
};

// 页面宽度
const getWidth = () => {
  store.setInnerWidth(window.innerWidth);
}


// 监听窗口大小变化
watch(
  () => store.innerWidth,
  (value) => {
    if (value < 990) {
      store.boxOpenState = false;
    }
  }
)

onMounted(() => {
  // 自定义鼠标
  cursorInit();

  // 监听当前页面宽度
  getWidth();
  window.addEventListener("resize", getWidth);

  // 控制台输出
  const styleTitle1 = "font-size: 20px;font-weight: 600;color: rgb(244,167,89);";
  const styleTitle2 = "font-size:12px;color: rgb(244,167,89);";
  const styleContent = "color: rgb(30,152,255);";
  const title1 = "WowDespacito";
  const content = `\n\n网站创建者：咫\n主页: ${config.home}\nGithub: ${config.github}\n\n原作者：imsyy\n版本: 4.1.4\n主页: https://imsyy.top\nGithub: https://github.com/imsyy/home`;
  console.info(`%c${title1}  %c${content}`, styleTitle1, styleTitle2, styleContent);
});

onBeforeUnmount(() => {
  // 移除事件监听
  window.removeEventListener("resize", getWidth);
});
</script>

<style lang="scss">
#main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1);
  transform-origin: center;
  transition: transform 0.5s;
  animation: fade-blur-main-in 0.65s cubhic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.5s;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;
    margin: 0 auto;
    background-color: rgba(182, 182, 182, 0.8);
  }
}
</style>