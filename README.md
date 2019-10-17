# nuxt-ts-demo1-dk

> My remarkable Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

Nuxt 生命周期
Nuxt扩展了Vue的生命周期，大概如下：
export default {
  middleware () {}, //服务端
  validate () {}, // 服务端
  asyncData () {}, //服务端
  fetch () {}, // store数据加载
  beforeCreate () {  // 服务端和客户端都会执行},
  created () { // 服务端和客户端都会执行 },
  beforeMount () {}, 
  mounted () {} // 客户端
}


Nuxt.js部署

本地build再上传，在.gitignore里把.nuxt去掉、并把dist改为/dist，然后本地执行yarn build，成功之后再上传到github上，检查一下.nuxt是否有上传上去。

之后在服务器上把代码拉下来、安装一下依赖，执行nuxt start就可以了。

这里还有个坑，就是为什么要把.gitignore里的dist改为/dist？

/dist这个文件夹是执行nuxt generate后生成的，用来做静态应用部署的，这部分就跟通常情况下的.nuxt一样是不应该加入到版本控制里的，但由于nuxt build之后，在.nuxt里也会生成一个dist文件夹，我们希望gitignore的只有/dist而不是/.nuxt/dist，因此猜需要做出这里的修改。