<!--
 * @Author: YanHuan 13781204115@163.com
 * @Date: 2024-06-30 10:25:45
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-06 20:04:04
 * @FilePath: \wen-jie-maind:\编程项目\Login\src\components\text.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <a-comment>
    <template #actions>
      <span key="comment-basic-like">
        <a-tooltip title="Like">
          <template v-if="action === 'liked'">
            <LikeFilled @click="like" />
          </template>
          <template v-else>
            <LikeOutlined @click="like" />
          </template>
        </a-tooltip>
        <span style="padding-left: 8px; cursor: auto">
          {{ likes }}
        </span>
      </span>
      <span key="comment-basic-dislike">
        <a-tooltip title="Dislike">
          <template v-if="action === 'disliked'">
            <DislikeFilled @click="dislike" />
          </template>
          <template v-else>
            <DislikeOutlined @click="dislike" />
          </template>
        </a-tooltip>
        <span style="padding-left: 8px; cursor: auto">
          {{ dislikes }}
        </span>
      </span>
      <span key="comment-basic-reply-to">Reply to</span>
    </template>
    <template #author><a>路遥</a></template>
    <template #avatar>
      <a-avatar src="https://p1.ssl.qhimg.com/dr/270_500_/t01f68f9a6545b02bd1.jpg?size=400x498" alt="路遥" />
    </template>
    <template #content>
      <p>
        人活一生，风雨雷电和寒霜黑雪，有时候会在同一个时辰向你的头上倾倒下来！
      </p>
    </template>
    <template #datetime>
      <a-tooltip :title="dayjs().format('YYYY-MM-DD HH:mm:ss')">
        <span>{{ dayjs().fromNow() }}</span>
      </a-tooltip>
    </template>
    <a-divider />
  </a-comment>
</template>
<script lang="ts" setup>
import dayjs from "dayjs";
import {
  LikeFilled,
  LikeOutlined,
  DislikeFilled,
  DislikeOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const likes = ref<number>(0);
const dislikes = ref<number>(0);
const action = ref<string>();

const like = () => {
  likes.value = 1;
  dislikes.value = 0;
  action.value = "liked";
};

const dislike = () => {
  likes.value = 0;
  dislikes.value = 1;
  action.value = "disliked";
};
</script>

<style scoped></style>
