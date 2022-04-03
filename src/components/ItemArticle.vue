<template>
  <div>
    <div class="item-info clearfix" v-for="item in articles" :key="item.a_time">
      <router-link :to="'/article/'+item.a_id" tag="a" target="_blank">
        <div class="item-l fl">
          <div class="row-type">
            <span class="type-icon"></span>
            <span class="type-content">{{item.a_type}}</span>
          </div>
          <div class="row-title">{{item.title}}</div>
          <div class="row-brief">{{item.pre_content}}</div>
          <div class="row-info">
            <span class="info-time">{{item.a_time | getDate}}</span>
            <span class="info-view">{{'浏览' +item.a_views}}</span>
          </div>
        </div>
        <div class="item-r fr">
          <img v-lazy="item.a_imgSrc" alt width="132" height="132" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'itemArticle',
  props: {
    articles: Array
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.item-info {
  // display: block;
  margin-bottom: 15px;
  box-sizing: border-box;
  width: 790px;
  padding: 0 30px 29px 10px;
  border-bottom: 1px solid #eeeeee;
  //item左侧简介
  .item-l {
    width: 615px;
    .row-type {
      margin-bottom: 8px;
      .type-icon {
        display: inline-block;
        width: 22px;
        height: 22px;
        background-color: rgb(41, 170, 221);
        border-radius: 50%;
        vertical-align: middle;
      }
    }
    .row-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    .row-brief {
      height: 36px;
      font-size: 12px;
      color: #999999;
      margin-bottom: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .row-info {
      font-size: 12px;
      color: #999999;
      .info-time {
        margin-right: 15px;
      }
    }
    .type-content {
      font-size: 12px;
      margin-left: 8px;
      vertical-align: middle;
    }
  }
  //item右侧图片
  .item-r {
    width: 132px;
    height: 132px;
    img {
      margin-top: 17px;
      border-radius: 5px;
    }
  }
}
</style>
