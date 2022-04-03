<template>
    <div class="login">
    <div class="login_title">
      <el-button type="primary" size="medium " style="width:49%" @click="dealFlag(true)">登录</el-button>
      <el-button type="primary" size="medium " style="width:49%" @click="dealFlag(false)">注册</el-button>
    </div>
    <form>
      <!-- 登录部分 -->
      <div :class="{current:flag}">
        <el-input v-model="login_user" placeholder="用户名(登录)"></el-input>
        <el-input v-model="login_pwd" placeholder="密码(登录)" show-password></el-input>
        <el-button type="primary" size="medium " style="width:100%" @click="userLogin">登录</el-button>
      </div>
      <!-- 注册部分 -->
      <div :class="{current:!flag}">
        <el-input v-model="register_user" placeholder="用户名(注册)"></el-input>
        <el-input v-model="register_pwd" placeholder="密码(注册)" show-password></el-input>
        <el-button type="primary" size="medium " style="width:100%" @click="userRegist">注册</el-button>
      </div>
    </form>
  </div>
</template>

<script>
// 引入接口
import { regist, login } from '@/api/index.js'

import { mapMutations } from 'vuex'

export default {
  name: 'bLogin',
  data () {
    return {
      flag: true,
      login_user: '',
      login_pwd: '',
      register_user: '',
      register_pwd: ''
    }
  },
  methods: {
    ...mapMutations(['INIT_USER_INFO']),
    dealFlag (flag) {
      this.flag = flag
    },
    // 登录
    userLogin () {
      if (this.login_user === '' || this.login_pwd === '') {
        this.$message('请填写完整信息')
        return
      }
      login(this.login_user, this.login_pwd)
        .then(response => {
          if (response.code === 1) {
            this.$message(response.message)
          }
          if (response.code === 2) {
            this.$message(response.message)
          }
          if (response.code === 0) {
            this.$message(response.message)
            this.login_pwd = ''
            this.login_user = ''
            this.INIT_USER_INFO(response)
          }
        })
        .catch(err => {
          throw err
        })
    },
    // 注册
    userRegist () {
      if (this.register_user === '' || this.register_pwd === '') {
        this.$message('请填写完整信息')
        return
      }
      regist(this.register_user, this.register_pwd)
        .then(response => {
          if (response.code === 1) {
            this.$message(response.message)
          }
          if (response.code === 2) {
            this.$message(response.message)
          }
          if (response.code === 0) {
            this.$message(response.message)
            this.register_user = ''
            this.register_pwd = ''
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
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: url("http://www.codecats.top/public/img/loginBg.webp") no-repeat
    center center;
  background-size: cover;
  .login_title {
    box-sizing: border-box;
    width: 700px;
    padding: 20px 0;
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translate(-50%, -50%);
    // border: 1px solid red;
  }
  form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -30%);
    // margin: 0 auto;
    width: 700px;
    height: 600px;
    // border: 1px solid greenyellow;
    > div {
      display: none;
    }
    div .el-input {
      margin-bottom: 30px;
      background-color: rgba(red,0.5);
    }
    .current {
      display: block;
    }
  }
}
</style>
