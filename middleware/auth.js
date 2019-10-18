// export default function ({ store, redirect }) {
//     if (!store.state.user.userName) {
//       return redirect('/login')
//     }
//   }

// export default async function ({ app , req , redirect , route }){
//     let token = app.$cookies.cookies && app.$cookies.cookies.token ? app.$cookies.cookies.token : null
//     let path = process.server ? req.path : route.path
//     if ( path ) {
//       redirect({ path: '//m.xxx.com/account/register' })
//     }
//   }

// export default function ({ store, redirect }) {
//     // If the user is not authenticated
//     if (!store.state.authenticated) {
//       return redirect('/login')
//     }
//   }

// 如果从服务端走这段代码，很顺利。但是走客户端时，会闪过一个500报错页面，再重定向到指定页面。
// 经调查好像也是nuxt的一个bug，如果跳转nuxt项目中的页面path没事，但是跳外站点则会出现这个现象。
// 考虑临时解决方案是在上一个页面时就判断token值，如果有使用路由跳转，没有则使用window.location.href进入下一个页面。