<template>
  <div class="psot">
  <el-container >
    <el-aside >
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
</script>

<style lang="scss" scoped>
.post{
  .el-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    .el-aside {
      max-width: 10vw;
    }

    .el-main{
      max-width: 70vw;
    }
  }
}

</style>