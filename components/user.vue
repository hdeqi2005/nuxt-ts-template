<template>
  <div class="user">
    <div v-if="$store.state.user.userName">
      <p>
        欢迎您：
        <span class="user-name">{{$store.state.user.userName}}</span>
        <el-tooltip class="item" effect="light" content="退出登录" placement="bottom-start">
          <i class="el-icon-circle-close" @click="loginout()"></i>
        </el-tooltip>
      </p>
    </div>
    <div v-else class="login">
      <span>
        <nuxt-link to="/register">注册</nuxt-link>
      </span>
      <span>
        <nuxt-link to="/login">登录</nuxt-link>
      </span>
    </div>
    <div class="cart">
      <el-tooltip class="item" effect="light" content="购物车" placement="bottom-start">
        <nuxt-link :to="$store.state.user.userName?'/cartLists':'/login'"><i class="el-icon-shopping-cart-full"></i></nuxt-link>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: { userName: "" }
    };
  },
  async mounted() {
    const data = await this.$axios.get("/users/getUser");
    this.userlogin(data);
  },

  /**
   * 这个fetch 在组件中是不可以用的，
   */
  // async fetch({ app, store, params }) {
  //   let data = await app.$axios.get("/users/getUser");
  //   store.commit("USERLOGIN", data);
  // },
  methods: {
    ...mapActions(["userexit","userlogin"]),
    loginout() {
      this.$axios.get("/users/exit").then(res => {
        if (res.status == 200) {
          this.$message.success("再来玩呀！");
          this.userexit();
          this.$router.push({path: '/'});
        }
      });
    }
  }
};
</script>

