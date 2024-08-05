<!--
 * @Author: YanHuan 13781204115@163.com
 * @Date: 2024-06-29 22:37:45
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-05 13:31:20
 * @FilePath: \wen-jie-maind:\编程项目\Login\src\components\sign.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="main">
    <span class="bg">SIGNIN</span>
    <div class="form">
      <a-row>
        <a-col :span="22">
          <a-form
            :model="formState"
            v-bind="layout"
            :rules="rules"
            name="nest-messages"
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
            <a-form-item label="密码" name="pass">
              <a-input-password v-model:value="formState.pass" />
            </a-form-item>
            <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 6 }">
              <a-button type="primary" html-type="submit">注册</a-button>
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
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
const rules: Record<string, Rule[]> = {
  pass: [{ required: true, validator: validatePass, trigger: "change" }],
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
  background-color: #ffe344e0;
  text-align: center;
}
.bg {
  color: white;
  font-weight: 800;
  font-size: 18ch;
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
