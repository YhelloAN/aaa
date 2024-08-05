<!--
 * @Author: YanHuan 13781204115@163.com
 * @Date: 2024-07-01 14:58:15
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-04 16:57:18
 * @FilePath: \wen-jie-maind:\编程项目\Login\src\components\404.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <a-result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <RouterLink :to="{ name: 'shouye' }">
        <a-button type="primary">返回首页</a-button>
      </RouterLink>
    </template>
  </a-result>
</template>

<script lang="ts" setup>
import { ref } from "vue";
</script>

<style scoped></style>
