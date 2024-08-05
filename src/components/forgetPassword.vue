<!--
 * @Author: YanHuan 13781204115@163.com
 * @Date: 2024-07-03 10:44:53
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-05 13:39:35
 * @FilePath: \wen-jie-maind:\编程项目\Login\src\components\forgetPassword.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="main">
    <span class="bg"></span>
    <div class="form">
      <a-row>
        <a-col :span="22">
          <a-form
            :model="formState"
            v-bind="layout"
            :rules="rules"
            :validate-messages="validateMessages"
            @finish="onFinish"
          >
            <a-form-item
              name="username"
              label="用户名"
              :rules="[{ required: true }]"
            >
              <a-input v-model:value="formState.username" />
            </a-form-item>
            <a-form-item
              name="email"
              label="Email"
              :rules="[{ type: 'email', required: true }]"
            >
              <a-flex>
                <a-input v-model:value="formState.email" />
                <a-button type="primary">发送验证码</a-button>
              </a-flex>
            </a-form-item>
            <a-form-item label="验证码" name="verification_code">
              <a-input v-model:value="formState.verification_code" />
            </a-form-item>
            <a-form-item label="新密码" name="pass">
              <a-input-password v-model:value="formState.pass" />
            </a-form-item>
            <a-form-item label="确认密码" name="checkPass">
              <a-input-password v-model:value="formState.checkPass" />
            </a-form-item>
            <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 6 }">
              <a-button type="primary" html-type="submit">确定</a-button>
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import type { Rule } from "ant-design-vue/es/form";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label}不能为空",
  types: {
    email: "${label}格式不正确",
  },
};
interface FormState {
  username: string;
  pass: string;
  checkPass: string;
  email: string;
  verification_code: string;
}
const formState = reactive<FormState>({
  username: "",
  pass: "",
  checkPass: "",
  email: "",
  verification_code: "",
});
//自定义表单验证规则
const validatePass = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("请输入密码");
  } else if (value.length < 3) {
    return Promise.reject("密码长度应大于等于3");
  } else if (value.length > 7) {
    return Promise.reject("密码长度应小于等于6");
  } else {
    return Promise.resolve();
  }
};
const validatePass2 = async (_rule: Rule, value: string) => {
  if (formState.pass && value === "") {
    return Promise.reject("请再次输入密码");
  } else if (value !== formState.pass) {
    return Promise.reject("两次密码不相同，请检查输入");
  } else {
    return Promise.resolve();
  }
};
const rules: Record<string, Rule[]> = {
  pass: [{ required: true, validator: validatePass, trigger: "change" }],
  checkPass: [{ required: true, validator: validatePass2, trigger: "change" }],
  verification_code: [{ required: true, trigger: "change" }],
};
const onFinish = (values: any) => {
  console.log("Success:", values);
};
</script>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;
  background-color: #4492ff;
  text-align: center;
}
.bg {
  color: antiquewhite;
  font-weight: 800;
  font-size: 18ch;
  border-radius: 5px;
}
.form {
  position: absolute;
  text-align: center;
  padding-right: 2%;
  padding-top: 30px;
  width: 500px;
  top: 50%;
  right: 50%;
  transform: translateX(50%) translateY(-50%);
  background-color: #ffffff85;
}
</style>
