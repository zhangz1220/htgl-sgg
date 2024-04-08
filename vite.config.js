import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  //获取各个环境 .env文件配置的字段
  let env = loadEnv(mode, process.cwd())

  return {
    server: {
      port: 3001, // 指定dev sever的端口号，默认为5173
      //代理跨域
      proxy: {
        // '/api': {
        [env.VITE_APP_BASE_API]: {
          // target: 'http://jsonplaceholder.typicode.com',
          target: env.VITE_SERVE, //服务器地址
          changeOrigin: true, //是否需要代理
          rewrite: (path) => path.replace(/^\/api/, ''), //路径重写
        },
      }
    },
    plugins: [
      vue(),
      viteMockServe({
        mockPath: "mock", // 设置模拟数据的存储文件夹
        localEnabled: command === 'serve', //开发环境下设置是否启用本地mock文件
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src") //相对路径别名配置，使用 @ 代替 src
      }
    },
    //scss全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";' //scss全局变量配置文件
        }
      }
    }
  }
})
