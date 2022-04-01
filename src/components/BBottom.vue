<template>
  <div class="footer">
    <!-- <div class="footer-nav">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>技术分类</li>
        <li>留言板</li>
        <li>资源推荐</li>
      </ul>
    </div>-->
    <div class="footer-copyright">
      Copyright © codecats.top . All Rights Reserved. Designed by Randy.
      <a
        href="http://beian.miit.gov.cn/"
      >鄂ICP备20009012号</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
.footer {
  box-sizing: border-box;
  margin-top: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: rgba(236, 236, 236, 0.685);
  .footer-copyright {
    padding: 20px 0 30px 0;
    text-align: center;
    font-size: 13px;
    color: #bdcee0;
    a {
      font-size: 12px;
      color: #bbbbbb;
    }
  }
}
</style>
