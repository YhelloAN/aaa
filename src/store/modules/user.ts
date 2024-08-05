/*
 * @Author: YanHuan 13781204115@163.com
 * @Date: 2024-06-28 23:16:40
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-06 10:35:27
 * @FilePath: \wen-jie-maind:\编程项目\Login\src\store\modules\user.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
//创建用户相关的小仓库
//引入接口方法
import { reqLogin, reqUserInfo } from "@/api/user";
import { defineStore } from "pinia";
//创建用户小仓库
export const userStore = defineStore("User", {
  //存数据的地方
  state: () => {
    return {
      token:localStorage.getItem("TOKEN"),
    };
  },
  //异步|逻辑部分
  actions: {
    //定义用户登录的方法userLogin
    async userLogin(data:any){     //data是组件引用此方法时传过来的
      let result = await reqLogin(data);//reqLogin是api中定义的方法
      if (result.code==200) {
        this.token=result.data.token;
        //本地存储持久化token，pinia有持久化插件
        localStorage.setItem('TOKEN',result.data.token);
        //保证当前async函数返回一个成功的promise
        return 'ok'
      }else{
        return Promise.reject(new Error(result.data.message))
      }
    },
    async userInfo(){
      try {
        let result = await reqUserInfo();
        console.log('Result type:', typeof result);
        console.log('Result content:', JSON.stringify(result, null, 2));
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    }
  },
  getters: {},
});
//对外暴露获取小仓库的方法,在登录组件中引入
export default userStore;