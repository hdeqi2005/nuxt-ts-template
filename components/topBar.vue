<template>
  <div class="top-bar">
    <div class="logo">
      <nuxt-link to="/">logo</nuxt-link>
    </div>
    <div>
      <User/>
    </div>
  </div>
</template>

<script>
import User from '~/components/user'
  export default {
    data() {
      return {
        // logo: require('../assets/logo.png')
      }
    },
    components: {
      User
    }
  }
</script>

<style scoped>

</style>