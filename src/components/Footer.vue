<template>
    <footer class="footer">
      <div class="copyright">&copy; 2023 My Blog</div>
      <SocialLinks />
    </footer>
  </template>
  
  <script setup>
  import SocialLinks from "@/components/SocialLinks.vue";
  </script>
  
  <style lang="scss" scoped>
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #ffffff;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    margin-top: auto;
  
    .copyright {
      color: #666;
    }
  }
  </style>