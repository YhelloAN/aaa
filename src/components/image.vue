<!--
 * @Author: YanHuan 13781204115@163.com
 * @Date: 2024-07-03 10:28:35
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-03 16:29:51
 * @FilePath: \wen-jie-maind:\编程项目\Login\src\components\image.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <a-row>
    <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
      <a-card hoverable style="width: 240px">
        <template #cover>
          <img alt="example" src="../assets/Lucia.jpg" />
        </template>
        <a-card-meta title="Lucia">
          <template #description>www.instagram.com</template>
        </a-card-meta>
      </a-card>
    </a-col>
    <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
      <a-card hoverable style="width: 240px">
        <template #cover>
          <img alt="example" src="../assets/Luna.jpg" />
        </template>
        <a-card-meta title="Luna">
          <template #description>www.instagram.com</template>
        </a-card-meta>
      </a-card>
    </a-col>
    <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
      <a-card hoverable style="width: 240px">
        <template #cover>
          <img alt="example" src="../assets/Tune.jpg" />
        </template>
        <a-card-meta title="Tune">
          <template #description>www.instagram.com</template>
        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
</script>

<style scoped></style>
