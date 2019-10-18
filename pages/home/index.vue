<template>
<div>
        <el-row>
            <el-button>参数:{{$route.query.newsId}}</el-button>
            <el-button type="primary">主要按钮{{userForm.username}}</el-button>
            <el-button type="success">成功homeName按钮{{homeName}}</el-button>
            <el-button type="info">信息按钮{{extendsHomeName}}</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
      </el-row>
    <div>  
      <Counter props1='infer data form index' />
      <h1>Hello world!这是我的第一个成功NUXT APP</h1>
        Name: {{ fullName }}
        Message: {{ message }}
  </div>
   <div class="login-container">
          <p>
            用户名:
          <input v-model="loginForm.username" type="text" placeholder="请输入用户名" />
          </p>
           <p>
             密码:
          <input v-model="loginForm.password" type="text" placeholder="请输入密码" />
          </p>
        <button @click="getUUId()">登陆</button>
    </div>
</div>
  
</template>
<script lang="ts">
// import VueRouter, { Route, RawLocation, NavigationGuard } from "vue-router";

// declare module "vue/types/vue" {
//   interface Vue {
//     $router: VueRouter;
//     $route: Route;
//   }
// }

// declare module 'vue/types/vue' {
//   interface Vue {
//     $route: any,
//   }
// };

  // use TypeScript here
  //import { Vue, Component, Prop } from 'vue-property-decorator'
  import { Component, Inject, Model, Prop, Provide, Vue, Watch,mixins } from 'nuxt-property-decorator'
  //import Counter from '~/components/Counter.vue'
  import baseMixin from '@/mixins/baseMixin'
 
  interface User {
    firstName: string
    lastName: string
  }
  
  @Component({
    components: {
      Counter: () => import('@/components/Counter.vue')
    }
  })
 // export default class YourComponent extends Vue {
 export default class extends mixins(baseMixin) {
  //  @Prop({ type: Object})  user!: User
   public homeName:any =''//this.$route.query.newsId;//'home===='//this.config.username
   public extendsHomeName:string ='2222'//this.homeName;
   public firstName:string = this.$store.state.user.email
   public lastName:string ='huang'+this.$store.state.totalPrice
   public message: string = 'This is a message'
   public user:User = {
       firstName: this.firstName,
       lastName: this.lastName
    }
    public loginForm = {
        username: 'admin',
        password: '1234567',
      };
    
    get fullName (): string {
      return `${this.user.firstName} ${this.user.lastName}`
    }
   public mounted() {
     this.homeName = this.$config.homeName;//this.$route.query.newsId;
     debugger 
    }
    public getUUId() {
        try {
          //const resObj = await UserModule.(
        //     this.loginForm.username,
        //   );
        const resObj = this.$store.dispatch('user/getUserNameMd5_action', this.loginForm.username).then(res =>{
                    console.log(res)
        })
        } catch (error) {
          // tslint:disable-next-line: no-debugger
          debugger;
        }
      }
  }
</script>