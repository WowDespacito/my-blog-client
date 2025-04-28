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
    //background-color: rgba(0,0,0,0.1);
    //box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    //margin-top: auto;
    width: 100%;
    //height: 4%;
  
    .copyright {
      font-size: 1.5rem;
      color: #666;
    }
  }
  </style>