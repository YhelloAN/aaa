/*
 * @Author: YanHuan 13781204115@163.com
 * @Date: 2024-06-26 15:34:15
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-01 10:28:03
 * @FilePath: \wen-jie-maind:\编程项目\Login\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import './assets/main.css'
import AntD from 'ant-design-vue';
import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import router from "./router";
import { setIncos } from '@/setIcon'; // 引入注册图标的函数
import pinia from "./store";
import axios from 'axios'
const app = createApp(App)

// 全局使用图标
setIncos(app)

axios({
  url:'/api/user/login',
  method:'post',
  data:{
    username:'Melody',
    password:'456'
  }
})



// app.use(mock)
app.use(pinia)
app.use(AntD)
app.use(router)
app.mount('#app')