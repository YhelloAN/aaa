<!--
 * @Author: YanHuan 13781204115@163.com
 * @Date: 2024-06-29 21:46:01
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-06 12:12:13
 * @FilePath: \wen-jie-maind:\编程项目\Login\src\components\home.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="bodybgc">
    <a-layout>
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1"
            ><RouterLink :to="{ name: 'wenzi' }">text</RouterLink></a-menu-item
          >
          <a-menu-item key="2"
            ><RouterLink :to="{ name: 'donghua' }"
              >animation</RouterLink
            ></a-menu-item
          >
          <a-menu-item key="3"
            ><RouterLink :to="{ name: 'tupian' }"
              >image</RouterLink
            ></a-menu-item
          >
          <!-- <RouterLink to="/login"></RouterLink> -->

          <div class="logo">
            <RouterLink
              :to="{ name: 'user', query: { userStatue: userStatue } }"
              ><a-avatar
                style="color: #f56a00; background-color: #fde3cf"
                size="large"
                >{{ firstLetter }}
              </a-avatar>
            </RouterLink>
          </div>
        </a-menu>
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
        <a-breadcrumb :style="{ margin: '16px 0' }">
          <!-- <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item> -->
        </a-breadcrumb>
        <div
          :style="{
            background: '#fff',
            padding: '24px',
            minHeight: '380px',
            height: '100vh',
          }"
        >
          <RouterView></RouterView>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";

onBeforeMount(() => {
  if (localStorage.getItem("LOGOUT") == "true") {
    firstLetter = "未登录";
    userStatue = "false";
  }
});
document.body.style.background = "white";
const selectedKeys = ref<string[]>(["1"]);
const route = useRoute();
let userStatue = "false";
let username = route.query.username;
let firstLetter = "未登录";
if (username) {
  firstLetter = (username as string).slice(0, 1).toUpperCase();
  userStatue = "true";
} else {
  firstLetter = "未登录";
  userStatue = "false";
}
</script>

<style scoped>
#components-layout-demo-fixed {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
.logo {
  width: auto;
  height: auto;
  line-height: 40px;
  text-align: center;
  position: fixed;
  right: 1%;
  top: 1%;
}
</style>
