import request from './request.js'
import MockAjax from './MockAjax.js'
import Floor from './Floor.js'
import Address from './Address.js'
export const req = () => {
    return request({ url: '/product/getBaseCategoryList', method: 'get' })
}
export const mock = () => {
    return MockAjax({ url: '/banners', method: 'get' })
}
export const floor = () => {
    return Floor({ url: '/floors', method: 'get' })
}
export const search = (params) => {
    return request({ url: '/list', method: 'post', data: params })
}
export const detail = (skuId) => {
    return request({ url: `/item/${skuId}`, method: 'get' })
}
export const shopcar = (skuId, skuNum) => {
    return request({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })
}
export const cartlist = () => {
    return request({ url: '/cart/cartList', method: 'get' })
}
export const Deletes = (skuId) => {
    return request({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })
}
export const updatestate = (skuID, isChecked) => {
    return request({ url: `/cart/checkCart/${skuID}/${isChecked}`, method: 'get' })
}
export const verificationcode = (phone) => {
    return request({ url: `/user/passport/sendCode/${phone}`, method: 'get' })
}
export const RegisterUser = (data) => {
    return request({ url: '/user/passport/register', data, method: 'post' })
}
export const reqLogin = (data) => {
    return request({ url: '/user/passport/login', data, method: 'post' })
}
export const UserInfo = () => {
    return request({ url: '/user/passport/auth/getUserInfo', method: 'get' })
}
export const logout = () => {
    return request({ url: '/user/passport/logout', methods: 'get' })
}
export const AddressList = () => {
    return Address({ url: '/address', method: 'get' })
}