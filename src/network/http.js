import axios from "axios";

export function http(config) {
    const instance = axios.create({
        baseURL:"http://localhost:3000",
        timeout:3000
    })
    //请求拦截器
    instance.interceptors.request.use(req => {
        return req
    }, (err) => {  return Promise.reject(err)})

    //响应拦截器
    instance.interceptors.response.use(res => {
        return res
    }, (err) => {  return Promise.reject(err)})

    return instance(config)   //返回的是promise对象
}