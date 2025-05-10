<template>
  <div class="header">
    <div class="logo">My Blog</div>
    <nav class="nav">
      <router-link to="/">Home</router-link>
<!--      <router-link to="/about">About</router-link>-->
<!--      <router-link to="/settings">Settings</router-link>-->
    </nav>
    <SocialLinks />
  </div>
</template>

<script setup>
import SocialLinks from "@/components/SocialLinks.vue";
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90%;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 10px 10px;

  .logo {
    font-size: 1rem;
    font-weight: bold;
    color: #333;
  }

  .nav {
    a {
      margin: 0 1rem;
      color: #333;
      text-decoration: none;

      &:hover {
        color: #007bff;
      }
    }
  }
}
</style>