import Vue from 'vue'
import Vuex from 'vuex'
import { req, mock, floor, search, detail, shopcar, cartlist, Deletes, updatestate, verificationcode, RegisterUser, reqLogin, UserInfo, logout, AddressList } from '@/api'
import { getUUID } from '@/utils/uuid_token.js'
import { setToken, getToken, RemoveToken } from '@/utils/setToken.js'
import {} from '@/utils/setToken.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    BannersList: [],
    FloorsData: [],
    SearchData: {},
    DetailData: {},
    uuid_token: getUUID(),
    CartListData: [],
    token: getToken(),
    UserInfo: '',
    address: []
  },
  mutations: {
    catagrory(state, catagrory) {
      state.list = catagrory.data
    },
    BannerList(state, BannerLists) {
      state.BannersList = BannerLists
    },
    getFloors(state, Floors) {
      state.FloorsData = Floors
    },
    getSearch(state, Search) {
      state.SearchData = Search
    },
    getDetail(state, Details) {
      state.DetailData = Details
    },
    getCartList(state, CartList) {
      state.CartListData = CartList
    },
    USERTOKEN(state, token) {
      state.token = token
    },
    USERINFO(state, loginName) {
      state.UserInfo = loginName
    },
    LOGOUT(state) {
      state.token = ''
      state.UserInfo = {}
      RemoveToken()
    },
    getAddress(state, Address) {
      state.address = Address
    }
  },
  actions: {
    async getlist({ commit }) {
      let result = await req()
      commit('catagrory', result.data)
    },
    async getBannersList({ commit }) {
      let results = await mock()
      if (results.data.code == 200) {
        commit('BannerList', results.data.data)
      }
      // console.log(results.data.data)
    },
    async getFloors({ commit }) {
      let result = await floor()
      // console.log(result.data.data)
      commit('getFloors', result.data.data)
    },
    async getSearch({ commit }, params = {}) {
      let result = await search(params)
      commit('getSearch', result.data.data)
    },
    async getDetail({ commit }, skuId) {
      let result = await detail(skuId)
      if (result.status == 200) {
        commit('getDetail', result.data.data)
      }
      // console.log(result.data.data)
    },
    async getShopCar({ commit }, { skuId, skuNum }) {
      let result = await shopcar(skuId, skuNum)
      console.log(result)
      if (result.status == 200) {
        //返回的是成功的标记
        return 'ok'
      } else {
        //返回的是失败的标记
        return Promise.reject(new Error('faile'))
      }
    },
    async getCartList({ commit }) {
      let result = await cartlist()
      // console.log(...result.data.data.cartInfoList)
      if (result.status == 200) {
        commit('getCartList', result.data.data)
      }
    },
    async DeleteData({ commit }, skuId) {
      let result = await Deletes(skuId)
      console.log(result)
      if (result.status == 200) {
        return 'ok'
      } else {
        return Promise.reject(new Error('faile'))
      }
    },
    async getUpdateState({ commit }, { skuID, isChecked }) {
      let result = await updatestate(skuID, isChecked)
    },
    async getVerificationCode({ commit }, phone) {
      let result = await verificationcode(phone)
      if (result.status == 200) {
        return result.data.data
      } else {
        Promise.reject(new Error('faile'))
      }
    },
    async RegisterUser({ commit }, user) {
      let result = await RegisterUser(user)
      if (result.status == 200) {
        return 'ok'
      } else {
        Promise.reject(new Error('faile'))
      }
    },
    async reqLogin({ commit }, data) {
      let result = await reqLogin(data)
      if (result.status == 200) {
        commit('USERTOKEN', result.data.data.token)
        setToken(result.data.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error('faile'))
      }
    },
    async UserInfo({ commit }) {
      let result = await UserInfo()
      if (result.status == 200) {
        commit('USERINFO', result.data.data)
        return 'ok'
      } else {
        Promise.reject(new Error('faile'))
      }
      // console.log(result)
    },
    async logout({ commit }) {
      let result = await logout()
      if (result.status == 200) {
        commit('LOGOUT')
        return 'ok'
      } else {
        Promise.reject(new Error('faile'))
      }
    },
    async getAddressList({ commit }) {
      let result = await AddressList()
      console.log(result.data.data)
      if (result.status == 200) {
        commit('getAddress', result.data.data)
      }
    }
  },
  getters: {
    goodsList(state) {
      return state.SearchData.goodsList || []
    },
    attrsList(state) {
      return state.SearchData.attrsList || []
    },
    // attrValueList(state) {
    //     return state.SearchData.attrsList.attrValueList || []
    // },
    trademarkList(state) {
      return state.SearchData.trademarkList || []
    },
    skuInfo(state) {
      return state.DetailData.skuInfo || {}
    },
    categoryView(state) {
      return state.DetailData.categoryView || {}
    },
    spuSaleAttrList(state) {
      return state.DetailData.spuSaleAttrList || {}
    },
    goodsCartList(state) {
      return state.CartListData[0] || {}
    },

    UserAddress(state) {
      return state.address.userAddressList || {}
    },
    detailList(state) {
      return state.address.detailArrayList || {}
    }
  }
})
