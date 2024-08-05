/*
 * @Author: YanHuan 13781204115@163.com
 * @Date: 2024-06-28 23:43:06
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-01 16:21:58
 * @FilePath: \wen-jie-maind:\编程项目\Login\src\api\user\index.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
//接口，在仓库中的user文件中引入
//统一管理用户相关的接口
import request from "@/utils/request";
import type { loginForm,loginResponseData,userResponseData } from "./type";
enum API{
  LOGIN_URL='/user/login',
  USERINFO_URL='/user/info'
}
//暴露请求函数
//登录方法
export const reqLogin = (data:loginForm)=>request.post<any,loginResponseData>(API.LOGIN_URL,data);
//在函数中调用二次封装好的对象方法request.post，传入一个数据data

//获取用户信息方法
export const reqUserInfo = ()=>request.get<any,userResponseData>(API.USERINFO_URL);
