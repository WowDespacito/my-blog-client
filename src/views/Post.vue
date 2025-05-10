<template>
  <div class="post-view">
  <el-container >
    <el-aside >
      <el-page-header :icon="ArrowLeft" @click="goBack()">
      </el-page-header>
      <BlogList />
    </el-aside>
    <el-main>
      <BlogDetail :key="$route.fullPath" />
    </el-main>
  </el-container>
  </div>
</template>

<script setup>
import BlogDetail from "@/components/BlogDetail.vue";
import BlogList from "@/components/BlogList.vue";
import {useRouter} from "vue-router";

const router = useRouter();
const goBack = () => {
  router.push("/");
}
</script>

<style lang="scss" scoped>
.post-view{
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  .el-container {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .el-aside {
      width: 20%;
      height: 100%;
      display: grid;
      place-items: center;
      margin: 5px;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 5px;
    }

    .el-main{
      //width: 80%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.8);
      display: grid;
      place-items: center;
      margin: 5px 5px;
      padding: 10px 10px;
      border-radius: 5px;
    }
  }
}

</style>