import request from '@/utils/request'

// 文章请求
export const getArticles1 = () => {
  return request({
    method: 'GET',
    url: '/top'
  })
}
// 文章请求
export const getArticles2 = () => {
  return request({
    method: 'GET',
    url: '/shehui'
  })
}
