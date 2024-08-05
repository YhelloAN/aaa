<!--
 * @Author: YanHuan 13781204115@163.com
 * @Date: 2024-07-02 11:13:35
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-02 15:53:27
 * @FilePath: \wen-jie-maind:\编程项目\Login\src\components\loading.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<!--
 * @Author: YanHuan 13781204115@163.com
 * @Date: 2024-07-02 11:13:35
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-02 11:18:35
 * @FilePath: \wen-jie-maind:\编程项目\Login\src\components\loading.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<!-- LoadingComponent.vue -->
<template>
  <div class="loading-wrapper">
    <div class="loading">
      <div class="cubes">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.loading-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.cubes {
   width: 40px;
   height: 40px;
   margin: 100px auto;
  }
  
  .cubes .sk-cube {
   width: 33%;
   height: 33%;
   background-color: #333;
   float: left;
   animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
  }
  
  .cubes .sk-cube1 {
   animation-delay: 0.2s;
  }
  
  .cubes .sk-cube2 {
   animation-delay: 0.3s;
  }
  
  .cubes .sk-cube3 {
   animation-delay: 0.4s;
  }
  
  .cubes .sk-cube4 {
   animation-delay: 0.1s;
  }
  
  .cubes .sk-cube5 {
   animation-delay: 0.2s;
  }
  
  .cubes .sk-cube6 {
   animation-delay: 0.3s;
  }
  
  .cubes .sk-cube7 {
   animation-delay: 0s;
  }
  
  .cubes .sk-cube8 {
   animation-delay: 0.1s;
  }
  
  .cubes .sk-cube9 {
   animation-delay: 0.2s;
  }
  
  @keyframes sk-cubeGridScaleDelay {
   0%,
   70%,
   100% {
    transform: scale3D(1, 1, 1);
   }
   35% {
    transform: scale3D(0, 0, 1);
   }
  }
</style>