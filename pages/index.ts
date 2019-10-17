  // use TypeScript here
  //import { Vue, Component, Prop } from 'vue-property-decorator'
  import { Component, Inject, Model, Prop, Provide, Vue, Watch } from 'nuxt-property-decorator'
  //import Counter from '~/components/Counter.vue'
  import UserModule from '@/store/user'
  interface User {
    firstName: string
    lastName: string
  }
  
  @Component({
    components: {
      Counter: () => import('@/components/Counter.vue')
    }
  })
  export default class YourComponent extends Vue {
  //  @Prop({ type: Object})  user!: User
    firstName:string = this.$store.state.user.email
    lastName:string ='huang'+this.$store.state.totalPrice
    message: string = 'This is a message'
    user:User = {
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