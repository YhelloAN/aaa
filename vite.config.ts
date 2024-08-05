/*
 * @Author: YanHuan 13781204115@163.com
 * @Date: 2024-06-26 15:34:15
 * @LastEditors: YanHuan 13781204115@163.com
 * @LastEditTime: 2024-07-01 10:01:17
 * @FilePath: \wen-jie-maind:\编程项目\Login\vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import { fileURLToPath, URL } from 'node:url'
import { viteMockServe } from 'vite-plugin-mock'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
	    mockPath: './src/mock',
      
	  })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
