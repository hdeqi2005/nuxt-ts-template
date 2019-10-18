<script>
export default {
    name:'index',
    data(){
        return {

        }
    },
    mounted(){
        //router.push({ name: 'user', params: { userId: 123 }})
        this.$router.push({
            path:'/home',
            query: {newsId: "2"}
        })
     // this.$router.push({
        //     name:'home',
        //     params: {newsId: "2"}
        // })
    }
}


// // 字符串
// router.push('home')

// // 对象
// this.$router.push({path: '/login?url=' + this.$route.path});

// // 命名的路由
// router.push({ name: 'user', params: { userId: 123 }})

// // 带查询参数，变成/backend/order?selected=2
// this.$router.push({path: '/backend/order', query: {selected: "2"}});

// // 设置查询参数
// this.$http.post('v1/user/select-stage', {stage: stage})
//       .then(({data: {code, content}}) => {
//             if (code === 0) {
//                 // 对象
//                 this.$router.push({path: '/home'});
//             }else if(code === 10){
//                 // 带查询参数，变成/login?stage=stage
//                 this.$router.push({path: '/login', query:{stage: stage}});
//            }
// });

// // 设计查询参数对象
// let queryData = {};
// if (this.$route.query.stage) {
//     queryData.stage = this.$route.query.stage;
// }
// if (this.$route.query.url) {
//     queryData.url = this.$route.query.url;
// }
// this.$router.push({path: '/my/profile', query: queryData});
</script>