/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-06-29 13:37:50
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-06 09:57:23
 * @FilePath: \wen-jie-maind:\编程项目\Login\src\utils\request.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
//axios二次封装:使用请求与响应拦截器
//引入组件库中的提示信息
import axios from "axios";
import userStore from "@/store/modules/user";
let request = axios.create({
  //基础路径
  baseURL:'/api',
  //超时时间
  timeout:5000,

});
request.interceptors.request.use((config)=>{
  //config（配置对象）带有header请求头属性，经常给服务器端携带公共参数
  let useUserStore = userStore();
  if(useUserStore.token){
    config.headers.token = useUserStore.token
  }
  //注意返回配置对象
  return config;
});
request.interceptors.response.use((response)=>{
  //成功的回调
  //简化数据
  return response.data;
},(error)=>{
  //定义一个变量，存网络错误信息
  let message = '';
  let status = error.response.status;
  switch (status) {
    case 401:
      message = "TOKEN过期";
      break;
    case 403:
      message = "无权访问";
      break;
    case 404:
      message = "请求地址错误"
      break
    case 500:
      message = "服务器出现问题"
      break
    default:
      message = "网络出现问题"
      break;
  }
  //用组件显示错误信息
  return Promise.reject(error);
});
//request即Pro版axios
export default request;