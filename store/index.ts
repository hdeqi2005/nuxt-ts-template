import Vuex from 'vuex';

// import Vue from 'vue';
// import Vuex from 'vuex';
// import { IUserState } from './modules/user'
// Vue.use(Vuex);

// // export interface IRootState {
// //   user: IUserState
// // }

// // // 动态注入模块 Declare empty store first, dynamically register all modules later.
// // export default new Vuex.Store<IRootState>({})


// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules:{   
//   }
// });
export const state = () => ({
  count: 15,
  totalPrice:100,
  locales: ['en', 'cn'],
  locale: 'cn'
})

export const mutations = {
  SET_LANG(state:any, locale:any) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  add (state: any, increment: Number) {
    state.count += increment
  },
  totalPrice (state:any) { //总价
    // state.totalPrice = state.num*state.price 错误方式:使用子模块的state,应该在变量名前加上文件名,如下
    state.totalPrice = +1  //正确方式
}
}

export const getters = {
  getCount (state: any) {
    return state.count
  }
}

export const actions = {
  add (context: any, increment: Number) {
    context.commit('add', increment)
  }
}
