<template>
    <footer class="footer">
      <div class="copyright">&copy; 2025 My Blog</div>
      <SocialLinks />
    </footer>
  </template>
  
  <script setup>
  import SocialLinks from "@/components/SocialLinks.vue";
  </script>
  
  <style lang="scss" scoped>
  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 90%;
    background-color: white;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 10px 10px;
  
    .copyright {
      font-size: 1rem;
      color: #666;
    }
  }
  </style>