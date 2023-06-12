import axios from 'axios'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
const request = axios.create({
    baseURL: '/api',
    timeout: 5000
})

request.interceptors.request.use(
    function(config) {
        // 在发送请求之前做些什么
        if (store.state.uuid_token) {
            //请求头添加一个字段(userTempId):和后台老师商量好了
            config.headers.userTempId = store.state.uuid_token
        }
        if (store.state.token) {
            config.headers.token = store.state.token
        }
        nProgress.start()
        return config
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

// 添加响应拦截器
request.interceptors.response.use(
    function(response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        nProgress.done()
        return response
    },
    function(error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)
export default request