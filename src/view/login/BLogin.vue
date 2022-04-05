<template>
<div class="login_outer">
  <div class="login">
      <!-- 登录部分 -->
      <div class="current" v-show="flag">
        <el-input v-model="login_user" placeholder="用户名(登录)"></el-input>
        <el-input v-model="login_pwd" placeholder="密码(登录)" show-password></el-input>
        <el-button type="primary" size="medium " style="width:100%" @click="userLogin">登录</el-button>
        <p><span>还未注册？</span><span class="hover" @click="dealFlag()">注册</span></p>
      </div>
      <!-- 注册部分 -->
      <div class="current" v-show="!flag">
        <el-input v-model="register_nickname" placeholder="用户名(注册)"></el-input>
        <el-input v-model="register_pwd" placeholder="密码(注册)" show-password></el-input>
        <el-input v-model="register_email" placeholder="邮箱"></el-input>
        <el-button type="primary" size="medium " style="width:100%" @click="userRegist">注册</el-button>
        <p><span>已注册？</span><span class="hover" @click="dealFlag()">登录</span></p>
      </div>
  </div>
</div>

</template>

<script>
// 引入接口
import { regist, login } from '@/api/index.js'

export default {
  name: 'bLogin',
  data () {
    return {
      flag: true,
      login_user: '',
      login_pwd: '',
      register_nickname: '',
      register_pwd: '',
      register_email: ''
    }
  },
  methods: {
    dealFlag () {
      this.flag = !this.flag
      console.log('hh')
    },
    // 登录
    userLogin () {
      if (this.login_user === '' || this.login_pwd === '') {
        this.$message('请填写完整信息')
        return
      }
      login(this.login_user, this.login_pwd)
        .then(response => {
          if (response.data.code === 1) {
            this.$message(response.data.message)
            return
          }
          if (response.data.code === 2) {
            this.$message(response.data.message)
            return
          }
          if (response.data.code === 0) {
            this.$message(response.data.message)
            this.login_pwd = ''
            this.login_user = ''
            this.$store.dispatch('getUserAcountAsync')
          }
        })
        .catch(err => {
          throw err
        })
    },
    // 注册
    userRegist () {
      if (this.register_nickname === '' || this.register_pwd === '' || this.register_email === '') {
        this.$message('请填写完整信息')
        this.register_user = ''
        this.register_pwd = ''
        this.register_email = ''
        return
      }
      if (!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.register_email))) {
        this.$message('请填写正确邮箱')
        this.register_email = ''
        return
      }
      regist(this.register_nickname, this.register_pwd)
        .then(response => {
          if (response.data.code === 1) {
            this.$message(response.data.message)
            this.register_user = ''
            this.register_pwd = ''
            this.register_email = ''
          }
          if (response.data.code === 0) {
            this.$message(response.data.message)
            this.register_user = ''
            this.register_pwd = ''
            this.register_email = ''
            this.flag = !this.flag
          }
        })
        .catch(err => {
          throw err
        })
    }
  }
}
</script>

<style lang='less' scoped>
.login_outer{
  .login{
    width: 500px;
    margin: 12% auto 50px;
    .current{
      .hover{
        color: rgb(28, 132, 230);
      }
      .hover:hover{
        cursor: pointer;
      }
    }
    .el-input{
      margin-bottom: 30px;
    }
    .el-button{
      margin-bottom: 15px;
    }
  }
}
</style>
