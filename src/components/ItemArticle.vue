<template>
  <div>
    <div class="item-info clearfix" v-for="item in articles" :key="item.id">
      <router-link :to="'/article/'+item.id" tag="a" target="_blank">
        <div class="item-l fl">
          <div class="row-type">
            <span class="type-icon"></span>
            <span class="type-tag">{{item.tag}}</span>
            <span class="type-date">{{item.date | dateFormat('yyyy-MM-dd')}}</span>
          </div>
          <div class="row-title">{{item.title}}</div>
          <!-- <div class="row-brief">{{item.pre_content}}</div> -->
          <div class="row-brief" v-html="item.pre_content"></div>
          <!-- <div class="row-brief" v-html="item.pre_content.length > 50 ? item.pre_content.slice(0,50)+'...' :item.pre_content"></div> -->
          <div class="row-info">
            <i class="iconfont icon-eye"></i>
            <span class="info-view">{{item.read_count}}</span>
            <!-- <i class="iconfont icon-icon"></i>
            <span class="info-agree">{{item.read_count}}</span>
            <i class="iconfont icon-shoucang"></i>
            <span class="info-collection">{{item.read_count}}</span> -->
            <!-- <span class="info-time">{{a}}</span> -->
          </div>
        </div>
        <!-- <div class="item-r fr">
          <img v-lazy="item.a_imgSrc" alt width="120" height="100" />
        </div> -->
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
  padding: 0 30px 8px 10px;
  border-bottom: 1px solid #eeeeee;
  :hover > .row-title {
    color: rgb(32, 127, 236);
  }
  //item左侧简介
  .item-l {
    width: 680px;
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
      .type-content {
        font-size: 14px;
      }
    }
    .row-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    .row-brief {
      height: 42px;
      font-size: 14px;
      color: #999999;
      margin-bottom: 5px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: block;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .row-info {
      font-size: 14px;
      color: #999999;
      i {
        margin-right: 6px;
      }
      span {
        margin-right: 30px;
      }
      .info-time {
        margin-right: 15px;
      }
    }
    .type-tag {
      font-size: 14px;
      margin-left: 8px;
      vertical-align: middle;
    }
    .type-date {
      font-size: 10px;
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
