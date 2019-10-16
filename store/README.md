# nuxt框架中对vuex进行模块化设置

**https://segmentfault.com/a/1190000020299352**

**This directory is not required, you can delete it if you don't want to use it.**
# 1.Nuxt里怎么使用vuex?

Nuxt.js 内置引用了 vuex 模块，**所以不需要额外安装**。

Nuxt.js 会尝试找到应用根目录下的 store 目录，如果该目录存在，它将做以下的事情：
1.1> 引用 vuex 模块
1.2> 将 vuex 模块 加到 vendors 构建配置中去
1.3> 设置 Vue 根实例的 store 配置项

# Nuxt.js 支持两种使用 store 的方式：
普通方式： store/index.js 返回一个 Vuex.Store 实例
模块方式： store 目录下的每个.js 文件会被转换成为状态树指定命名的子模块 （当然，index 是根模块）

# 2.Nuxt中怎么对vuex进行模块化设置?

2.1> 例如 -- 设置index.js为根模块,child1.js与child2.js两个子模块
2.2> 在store/index.js 中不需要返回 Vuex.Store 实例，可以直接将 state、mutations 和 actions 暴露出来：
(以下为例:index中存储商品总价,child1中存储单价,child2中存放数量)

export const state = () =>({
    totalPrice:0,
});
export const mutations = {
    totalPrice (state) { //总价
        // state.totalPrice = state.num*state.price 错误方式:使用子模块的state,应该在变量名前加上文件名,如下
        state.totalPrice = state.child1.price*state.child2.num  //正确方式
    }
};
子模块中同样直接将 state、mutations 和 actions 暴露出来：

child1.js1
export const state = () =>({
    price:10,   //单价
});
export const mutations = {
    getPrice(state,price) {  
        state.price= price
    }
};
child2.js2
export const state = () =>({
    num:5,
});
export const mutations = {
    getNum(state,num) {  //数量
        state.num= num
    }
};
3.在vue文件中获取vuex的数据,调用mutation中的方法修改数据
<script>
export default {
  name : 'test',
  data() {
    return {
      totalPrice:this.$store.state.totalPrice,  //取index.js(根模块)中的值
      num:this.$store.state.child2.num,           //取子模块中的值
      price:this.$store.state.child1.price,       //取子模块中的值
    }
  },
}
</script>
  methods: {
    setTotalPrice(){
      this.$store.commit('totalPrice')
    },
    setNum(){
      this.$store.commit('child2/getNum',参数)    //使用子模块的mutation中的方法 this.$store.commit(‘文件名/方法名’,参数)
    },
    setPrice(){
      this.$store.commit('child1/getPrice',参数)  //使用子模块的mutation中的方法
    },
  },
补充: 使用子模块的action： this.$store.dispatch(‘文件名/变量名’)