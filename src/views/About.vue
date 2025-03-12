<template>
    <div class="about">
      <h1>About Me</h1>
      <p>Hello! I'm a web developer who loves building things with Vue.js.</p>
      <div class="skills">
        <h2>Skills</h2>
        <ul>
          <li>Vue.js</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
        </ul>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .about {
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  
    .skills {
      margin-top: 1rem;
  
      h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }
  
      ul {
        list-style-type: disc;
        padding-left: 1.5rem;
      }
    }
  }
  </style>