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
            用户名{{ $t('home.title') }}:
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