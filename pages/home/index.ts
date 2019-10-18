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
 export default class about extends mixins(baseMixin) {
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