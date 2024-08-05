/*
 * @Author: YanHuan 13781204115@163.com
 * @Date: 2024-06-30 13:54:33
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-06 11:18:09
 * @FilePath: \wen-jie-maind:\编程项目\Login\src\mock\index.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
// const Mock=require('mockjs')
// const data=Mock.mock({

// import { message } from "ant-design-vue"
// import { Item } from "ant-design-vue/es/menu"
// import { url } from "inspector"

// })

//这是用了vite-plugin-mock插件和mockjs
function createUserList() {
  return [
    {
      token: "111",
      username: "苏三",
      password: "123",
    },
    {
      token: "222",
      username: "Melody",
      password: "456",
    },
  ];
}
//对外暴露两个接口，一个是登录接口，另一个是获取用户信息的接口
export default [
  //登录接口
  {
    url: "/api/user/login",
    method: "post",
    response: ({ body }: any) => {
      const { username, password } = body;
      
      // 假设 createUserList() 函数返回一个用户列表
      const userList = createUserList();
      const checkUser = userList.find((item) => item.username === username && item.password === password);
      
      // 如果没有找到用户，则返回错误信息
      if (!checkUser) {
        return { code: 401, data: { message: "账号或密码不正确" } };
      }
      
      // 假设用户对象中包含 token 属性
      const { token } = checkUser;
      return { code: 200, data: { token } };
    },
  },
    //获取用户信息
    {
      url: "/api/user/info",
      method: "get",
      response: (request: any) => { // 修正函数名为 response
        const token = request.headers.token;
        const checkUser = createUserList().find((item) => item.token === token); // 修正为严格等于 ===
        
        // 如果没有找到用户，返回错误信息
        if (!checkUser) {
          return { code: 401, data: { message: "未授权的访问" } }; // 使用更合适的状态码
        }
        
        // 成功
        return { code: 200, data: { checkUser } };
      },
    }
];

