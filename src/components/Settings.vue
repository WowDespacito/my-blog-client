<template>
    <div class="settings">
      <h1>Settings</h1>
      <div class="theme-switch">
        <label>Theme:</label>
        <select v-model="theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div class="font-size">
        <label>Font Size:</label>
        <input type="range" min="12" max="24" v-model="fontSize" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  
  const theme = ref("light");
  const fontSize = ref(16);
  
  watch(theme, (newTheme) => {
    document.body.className = newTheme;
  });
  
  watch(fontSize, (newSize) => {
    document.documentElement.style.fontSize = `${newSize}px`;
  });
  </script>
  
  <style lang="scss" scoped>
  .settings {
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  
    .theme-switch,
    .font-size {
      margin-bottom: 1rem;
  
      label {
        margin-right: 0.5rem;
      }
    }
  }
  </style>