<template>
<div>
    <div>  <Counter props1='infer data form index' />
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
<script lang="ts" src='./index.ts'>
</script>