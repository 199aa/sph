import axios from 'axios'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
const request = axios.create({
    baseURL: '/mock',
    timeout: 5000
})
request.interceptors.request.use(
    nProgress.start(),
    function(config) {
        // 在发送请求之前做些什么
        return config
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

// 添加响应拦截器
request.interceptors.response.use(
    nProgress.done(),

    function(response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response
    },
    function(error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)
export default request