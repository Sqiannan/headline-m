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
export const getArticles3 = () => {
  return request({
    method: 'GET',
    url: '/guonei'
  })
}
export const getArticles4 = () => {
  return request({
    method: 'GET',
    url: '/guoji'
  })
}
export const getArticles5 = () => {
  return request({
    method: 'GET',
    url: '/yule'
  })
}
export const getArticles6 = () => {
  return request({
    method: 'GET',
    url: '/tiyu'
  })
}
export const getArticles7 = () => {
  return request({
    method: 'GET',
    url: '/keji'
  })
}
