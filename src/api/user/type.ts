/*
 * @Author: YanHuan 13781204115@163.com
 * @Date: 2024-06-28 23:43:18
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-06 10:16:06
 * @FilePath: \wen-jie-maind:\编程项目\Login\src\api\user\type.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
//确定请求过来的数据的格式，定义数据类型
//登录接口携带参数的类型
export interface loginForm {
  username: string;
  password: string;
}

//登录接口返回数据的类型
interface login_data{
  token:string,
  message?:string
}
export interface loginResponseData {
  code: number;
  data:login_data
}
//定义服务器返回用户信息的数据类型
interface userInfo{
  token: string,
  username: string,
  password: string,
}
interface user{
  checkUser:userInfo
}
export interface userResponseData{
  code:number,
  data:user
}
