<template>
<div>
  <div class="nav-outer">
    <div class="nav-center clearfix">
      <a href="/">
        <div class="nav-logo fl"></div>
      </a>
      <div class="nav fr">
        <ul>
          <router-link to="/home" tag="li" active-class="active">首页</router-link>
          <router-link to="/category" tag="li" active-class="active">技术分类</router-link>
          <router-link to="/message" tag="li" active-class="active">留言板</router-link>
          <router-link to="/source" tag="li" active-class="active">资源推荐</router-link>
          <router-link to="/user" tag="li" active-class="active" v-if="token">
            <img class="avatar" :src="user_info.avatarSrc" alt width="50" height="50" />
          </router-link>
          <router-link to="/user" tag="li" active-class="active" v-else>登录/注册</router-link>
        </ul>
      </div>
    </div>
  </div>
  <div class="filling"></div>
</div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
  .active {
  color: rgb(23, 139, 216) !important;
  border-bottom: 3px solid rgb(23, 139, 216);
}
.nav-outer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
  .nav-center {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    //background-color: rgb(64, 219, 147);
    .nav-logo {
      width: 120px;
      height: 80px;
      background: url(../assets/img/logo.jpg) no-repeat center;
    }
    .nav {
      height: 100%;
      //background-color: rgb(156, 223, 31);
      ul {
        li {
          float: left;
          margin-left: 15px;
          box-sizing: border-box;
          width: 80px;
          height: 80px;
          display: block;
          line-height: 80px;
          text-align: center;
          color: #999999;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          .avatar {
            display: inline-block;
            margin-top: 15px;
            border-radius: 50%;
          }
        }
        li:hover {
          color: rgb(23, 139, 216);
        }
      }
    }
  }
}
.filling {
  height: 80px;
  margin-bottom: 30px;
}
</style>
