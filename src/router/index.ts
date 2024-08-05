/*
 * @Author: YanHuan 13781204115@163.com
 * @Date: 2024-06-27 16:16:58
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-06 12:52:41
 * @FilePath: \wen-jie-maind:\编程项目\Login\src\router\index.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
//创建一个路由器，并暴露出去
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Login from "@/components/Login.vue";
import Home from "@/components/Home.vue";
import signin from "@/components/sign.vue";
import text from "@/components/text.vue";
import error from "@/components/404.vue";
import user from "@/components/user.vue"
import image from "@/components/image.vue";
import animation from "@/components/animation.vue"
import forgetPassword from "@/components/forgetPassword.vue"
const router = createRouter({
  history: createWebHistory(), //指定工作模式
  routes: [
    //路由规则
    {
      name: "denglu", //命名路由,做用户权限时要用
      path: "/login",
      beforeEnter: (to,from)=>{
        if(to.query.logOut=='true'){
          localStorage.removeItem("TOKEN")
          localStorage.removeItem("username")
          localStorage.setItem("LOGOUT",'true')
          return {name:'denglu'}
        }
      },
      component: Login,
    },
    {
      name: "404", //命名路由
      path: "/404",
      component: error,
    },
    {
      name: "user", //命名路由
      path: "/user",
      beforeEnter: (to,from)=>{
        if(to.query.userStatue=='false' || localStorage.getItem("LOGOUT")=="true"){
          alert("请先登录")
          return {name:'denglu'}
        }
      },
      component: user,
    },
    {
      name: "shouye",
      path: "/home",
      component: Home,
      children:[
        {
          name: "wenzi",
          path: "text",
          component: text,
        },
        {
          name: "tupian",
          path: "image",
          component: image,
        },
        {
          name: "donghua",
          path: "animation",
          component: animation,
        },
      ]
    },
    {
      name: "zhuce",
      path: "/signin",
      component: signin,
    },
    {
      name: "wangjimima",
      path: "/forgetPassword",
      component: forgetPassword,
    },
    {
      name: "any",//任意路由
      path: "/:pathMatch(.*)*",
      redirect:'/404'
    },
    {
      path: "/",
      redirect: "/login",
    },
  ],
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});

//暴露
export default router;
