<!--
 * @Author: YanHuan 13781204115@163.com
 * @Date: 2024-07-03 09:59:12
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-06 17:31:42
 * @FilePath: \wen-jie-maind:\编程项目\Login\src\components\user.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <pie-chart-outlined />
          <span>我的</span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>工具</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>好友</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <logout-outlined />
              <span>登录相关</span>
            </span>
          </template>
          <a-menu-item key="9">
            <RouterLink
              :to="{ name: 'denglu', replace: true, query: { logOut: logOut } }"
              ><a-button type="primary" danger ghost>退出登录</a-button>
            </RouterLink>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>{{ name }}</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <a-descriptions title="用户信息" layout="vertical">
            <a-descriptions-item label="用户名"
              ><strong>{{ name }}</strong></a-descriptions-item
            >
            <a-descriptions-item label="电话">1810000000</a-descriptions-item>
            <a-descriptions-item label="居住">中国-广西</a-descriptions-item>
            <a-descriptions-item label="地址" :span="2">
              广西壮族自治区 灵田镇 桂林电子科技大学 花江校区
            </a-descriptions-item>
            <a-descriptions-item label="备注"
              >哈哈！你也想当大锦鲤吗？</a-descriptions-item
            >
          </a-descriptions>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  LogoutOutlined
} from "@ant-design/icons-vue";
import { ref, onMounted, onBeforeMount } from "vue";
// 引入 axios 库
import axios from "axios";

// 组件挂载时执行初始刷新
onBeforeMount(() => {
  name = localStorage.getItem("username");
});

const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(["1"]);
let name = localStorage.getItem("username");
let logOut = ref("true");
onMounted(() => {
  // useUserStore.userInfo();
  // 定义请求的 URL 和方法
  const url = "/api/user/info";
  const method = "get";
  let tokenInfo = localStorage.getItem("TOKEN");
  // 发送 GET 请求
  axios({
    url: url,
    method: method,
    // 可以添加 headers 等其他配置
    headers: {
      token: tokenInfo, // 替换成实际的 token 值
    },
  })
    .then((response) => {
      // 请求成功，处理响应数据
      console.log(response.data);
      if (response.data.code === 200) {
        // 处理成功逻辑
        const userInfo = response.data.data.checkUser;
        console.log("用户信息：", userInfo, name);
      } else {
        // 处理其他 code 的逻辑
        console.log(response.data.data.message);
      }
    })
    .catch((error) => {
      // 请求失败，处理错误
      if (error.response) {
        // 请求已发出，服务器响应了状态码 2xx 之外的其他状态
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // 请求已发出但没有收到响应
        console.log(error.request);
      } else {
        // 发生了触发请求错误的问题
        console.log("Error", error.message);
      }
    });
});
</script>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
