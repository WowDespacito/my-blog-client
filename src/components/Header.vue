<template>
  <header class="header">
    <div class="logo">My Blog</div>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/settings">Settings</router-link>
    </nav>
    <SocialLinks />
  </header>
</template>

<script setup>
import SocialLinks from "@/components/SocialLinks.vue";
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .logo {
    font-size: 1.5rem;
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