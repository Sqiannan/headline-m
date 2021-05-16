/**
 * 封装 axios 请求模块
 */
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://127.0.0.1:3001/' // 基础路径
})

export default request
