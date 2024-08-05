<template>
  <a-flex :justify="titalJustify">
    <div class="tital">Hello</div>
  </a-flex>

  <div class="main">
    <a-form
      class="inputForm"
      :model="formState"
      name="basic"
      :rules="rules"
      ref="jiaoyan"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 14 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="用户名"
        name="username"
        :rules="[{ required: true, message: '请输入用户名' }]"
      >
        <a-input v-model:value="formState.username"
          ><template #prefix>
            <UserOutlined class="site-form-item-icon" /> </template
        ></a-input>
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: '请输入密码' }]"
      >
        <a-input-password v-model:value="formState.password">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ span: 24 }">
        <a-flex :justify="justify">
          <a-tooltip placement="right">
            <template #title>
              <span>勾选后可保持登录状态</span>
            </template>
            <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
          </a-tooltip>
          <a href="#" class="forgetPassword"
            ><RouterLink to="/forgetPassword">忘记密码</RouterLink></a
          >
        </a-flex>
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 24 }">
        <a-flex :justify="justify">
          <a-button
            type="primary"
            html-type="submit"
            @click="Login()"
            :loading="button_statue"
            >登录</a-button
          >
          <RouterLink to="/signin"
            ><a-button type="primary" html-type="submit"
              >注册</a-button
            ></RouterLink
          >
        </a-flex>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup name="Login">
import { ref } from "vue";
import { reactive } from "vue";
import userStore from "@/store/modules/user";
import { RouterView, RouterLink, useRouter } from "vue-router";
import { message } from "ant-design-vue";
let useUserStore = userStore();
//获取路由器
let router = useRouter();
let jiaoyan = ref();
//按钮状态
let button_statue = ref(false);
document.body.style.background =
  "linear-gradient(to bottom right, #faff9b, #efafd7)";
//收集用户数据
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: false,
});
const onFinish = (values: any) => {
  console.log("表单有内容:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("表单无内容:", errorInfo);
};
const rules = {
  username: [{}],
  password: [{}],
};
const justify = ref("space-around");
const titalJustify = "center";
//登录方法
//点击后，通知仓库发送登录请求，请求成功则展示数据，否则弹出失败信息

const Login = async () => {
  await jiaoyan.value.validate();
  button_statue.value = true;
  // useUserStore.userLogin(formState)//调用仓库中的方法
  try {
    //登陆成功后的进程,这里是路由跳转
    await useUserStore.userLogin(formState); //调用仓库中的方法
    button_statue.value = false;
    message.success("登录成功");
    localStorage.setItem("LOGOUT", "false");
    localStorage.setItem("username",formState.username)
    //编程式导航路由跳转
    router.push({
      path: "/home/text",
      query: {
        username: formState.username,
      },
    });
  } catch (error) {
    button_statue.value = false;
    message.error((error as Error).message); //使用断言来处理数据类型
  }
};
</script>

<style scoped>
.main {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 275px;
  width: 400px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.329);
}
.inputForm {
  margin-top: 30px;
  margin-right: 29px;
}
.forgetPassword {
  color: rgb(59, 105, 255);
}
.forgetPassword:hover {
  background-color: #ffffff00;
  color: rgb(239, 244, 255);
}
.tital {
  text-align: center;
  position: absolute;
  top: 10vh;
  font-weight: 800;
  font-size: 100px;
}
</style>
