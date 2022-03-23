// 基于axios封装网络请求
import Axios from 'axios'

// 这里的axios即添加了自定义配置的axios()
const axios = Axios.create({
  baseURL: 'http://',
  timeout: 2000
})

export default ({ url, method = 'GET', params = {}, data = {}, headers = {} }) => {
  return axios({
    url,
    method,
    params,
    data,
    headers
  })
}
