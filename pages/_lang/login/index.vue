<template>
    <div class="form">
        <el-form label-width="80px">
        <el-form-item label="昵称" prop="userName">
            <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPwd">
            <el-input type="password" v-model="form.userPwd"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button class="sub-btn" type="primary" @click="onSubmit">{{ $t('login.loginBtn') }}</el-button>
        </el-form-item>
        </el-form>
  </div>
</template>
<script>
export default {
    name:'login',
    layout:'blank',
    data(){
        return {
            form:{
                userName:'',
                userPwd:''
            }
        }
    }
}
</script>