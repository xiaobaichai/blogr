// 基于axios封装网络请求
import Axios from 'axios'

Axios.defaults.withCredentials = true

// 这里的axios即添加了自定义配置的axios()
const myAxios = Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 2000
})

// 对myAxios实例进一步封装
const axios = ({ url, method = 'GET', params = {}, data = {}, headers = {} }) => {
  return myAxios({
    url: url,
    method: method,
    params: params,
    data: data,
    headers: headers
  })
}

// 封装接口方法
// 每个方法负责请求一个url地址
// Nav导航条=========================================================
// export const getUserAcount = () => {
//   return axios({
//     url: '/api/get_user_acount',
//     method: 'get'
//   })
// }

// 首页==============================================================
// 获取轮播图
export const getCarousel = () => {
  return axios({
    url: '/api/carousel',
    method: 'get'
  })
}

// 获取文章总数做分页加载
export const getArticleCount = () => {
  return axios({
    url: '/api/article_count',
    method: 'get'
  })
}

// 按照分页获取最新文章（预览内容）
export const getNewArticle = (page, count) => {
  return axios({
    url: '/api/new_articles',
    method: 'get',
    params: {
      page: page,
      count: count
    }
  })
}

// 按照分页获取热门内容（预览内容）
export const getHotArticle = (count) => {
  return axios({
    url: '/api/hot_articles',
    method: 'get',
    params: {
      count: count
    }
  })
}

// 分类页==============================================================
// 根据分类获取文章总数做分页
export const getCategoryArticleCount = (type) => {
  return axios({
    url: '/api/category_articles_count',
    method: 'get',
    params: {
      tag: type
    }
  })
}

// 根据分类获取文章（预览内容）
export const getCategoryArticle = (type, count) => {
  return axios({
    url: '/api/category_articles',
    method: 'get',
    params: {
      tag: type,
      count: count
    }
  })
}

// 根据分类获取分页文章（预览内容）
export const getCategoryArticleByPage = (type, page, count) => {
  return axios({
    url: '/api/category_articles_by_page',
    method: 'get',
    params: {
      tag: type,
      page: page,
      count: count
    }
  })
}

// 留言页===========================================================
// 获取留言总数做分页加载
export const getMessageCount = () => {
  return axios({
    url: '/api/message_count',
    method: 'get'
  })
}

// 按照分页获取最新留言
export const getNewMessage = (page, count) => {
  return axios({
    url: '/api/new_messages',
    method: 'get',
    params: {
      page: page,
      count: count
    }
  })
}

// 按照分页获取热门留言
export const getHotMessage = () => {
  return axios({
    url: '/api/hot_message',
    method: 'get'
  })
}

// 回复某个留言
export const requestMessage = (data) => {
  return axios({
    url: '/api/article_count',
    method: 'post',
    data: {
      commnet: data.commnet
    }
  })
}

// 获取某个留言的所有评论
export const getMessageComment = () => {
  return axios({
    url: '/api/message_comment',
    method: 'get'
  })
}

// 写留言
export const leaveMessage = (data) => {
  return axios({
    url: '/api/leave_message',
    method: 'post',
    data: {
      nickname: data.nickname,
      userId: data.userId,
      content: data.content
    }
  })
}

// 写留言评论
export const leaveMessageComment = (data) => {
  return axios({
    url: '/api/leave_message_comment',
    method: 'post',
    data: {
      message_id: data.message_id,
      content: data.content
    }
  })
}

// 资源页===================================================================
// 获取所有分类的资源
export const getCategorySource = (item) => {
  return axios({
    url: '/api/category_source',
    method: 'get',
    params: {
      category: item
    }
  })
}

// 注册登录页===============================================================
// 注册
export const regist = (nickname, password) => {
  return axios({
    url: '/api/regist',
    method: 'post',
    data: {
      nickname: nickname,
      password: password
    }
  })
}

// 登录
export const login = (nickname, password) => {
  return axios({
    url: '/api/login',
    method: 'post',
    data: {
      nickname: nickname,
      password: password
    }
  })
}

// 登出
export const logout = () => {
  return axios({
    url: '/api/logout',
    method: 'get'
  })
}

// 个人中心页面=========================================================
// 登陆成功时获取个人信息(前端请求此接口)   或者   在cookie有效期类进入站点时获取个人信息（前端请求此接口）
export const getUserAcount = () => {
  return axios({
    url: '/api/get_user_acount',
    method: 'get'
  })
}

// 上传头像
export const uploadAvatar = (formdata) => {
  return axios({
    url: '/api/upload_avatar',
    method: 'post',
    data: formdata,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

// 文章详情页===========================================================
export const getArticleDetail = () => {
  return axios({
    url: '/api/article_detail',
    method: 'get'
  })
}

// 搜索结果页============================================================
export const searchKeyword = (keyword) => {
  return axios({
    url: '/api/search_keyword',
    method: 'get',
    params: {
      keyword: keyword
    }
  })
}
