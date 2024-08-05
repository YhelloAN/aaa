<!--
 * @Author: YanHuan 13781204115@163.com
 * @Date: 2024-07-03 10:46:05
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-04 17:27:05
 * @FilePath: \wen-jie-maind:\编程项目\Login\src\components\animation.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="dots">
    <div class="dot1"></div>
    <div class="dot2"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
</script>

<style scoped>
.dots {
  margin: 100px auto;
  width: 200px;
  height: 200px;
  position: relative;
  text-align: center;
  animation: sk-rotate 2s infinite linear;
}

.dot1 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #83ff96;
  border-radius: 100%;
  animation: sk-bounce 2s infinite ease-in-out;
}
.dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #fbff83;
  border-radius: 100%;
  animation: sk-bounce 2s infinite ease-in-out;
}
.dot2 {
  top: auto;
  bottom: 0;
  animation-delay: -1s;
}

@keyframes sk-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
</style>
