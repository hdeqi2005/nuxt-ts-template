import { Component, Vue, Watch } from 'vue-property-decorator';
import config from '@/config'
// 声明合并

// declare module 'vue/types/vue' {
//     interface Vue {
//       $config: any;
//     }
//   }
const WIDTH = 992; // refer to Bootstrap's responsive design
@Component({
  components: {
    // 这里不管你用不用，都要写@Component。不然就会出现奇怪问题
  },
})
export default class BaseMixin extends Vue {
    public $config=config //修复 this.$config 无法找到的问题 实际来自插件
    public userForm = {
        username: 'admin-dk',
        password: '111111',
      };
//   get device() {
//     return AppModule.device
//   }

//   get sidebar() {
//     return AppModule.sidebar
//   }

//   @Watch('$route')
//   private onRouteChange() {
//     if (this.device === DeviceType.Mobile && this.sidebar.opened) {
//       AppModule.CloseSideBar(false)
//     }
//   }

public beforeMount() {
   console.log('===baseMixin====beforeMount========')
   // window.addEventListener('resize', this.resizeHandler);
  }

  public mounted(){
      this.$nextTick(()=>{
       
      })
      
  };

  public beforeDestroy() {
   // window.removeEventListener('resize', this.resizeHandler);
  }

  public isMobile() {
    const rect = document.body.getBoundingClientRect();
    return rect.width - 1 < WIDTH;
  }

}
