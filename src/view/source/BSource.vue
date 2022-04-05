<template>
  <div class="source">
    <div class="category_outer">
      <ul class="source_category">
        <li v-for="item in sourceCategory" :key="item" @click="getSource(item)">{{item}}</li>
      </ul>
    </div>
    <div class="source_list">
      <a
        class="source_item"
        v-for="item in sourceCategoryList"
        :key="item.title"
        :href="item.link"
        target="_blank"
      >
        <div class="item_top">
          <img :src="item.imgSrc" alt width="60" height="60" />
          <span class="item_info">{{item.title}}</span>
        </div>
        <div class="item_bottom">
          <p>{{item.description}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
// 引入接口
import { getCategorySource } from '@/api/index.js'

export default {
  data () {
    return {
      sourceCategory: ['information', 'material', 'efficiency'],
      sourceCategoryList: []
    }
  },
  methods: {
    getSource (item) {
      getCategorySource(item)
        .then(response => {
          this.sourceCategoryList = response.data.data
        })
        .catch(err => {
          throw err
        })
    }
  },
  mounted () {
    getCategorySource(this.sourceCategory[0])
      .then(response => {
        this.sourceCategoryList = response.data.data
      })
      .catch(err => {
        throw err
      })
  }
}
</script>

<style lang='less' scoped>
.source {
  .category_outer {
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eeeeee;
    border-top: 1px solid #eeeeee;
    background: url("http://www.codecats.top/public/img/recommend/bg.webp")
      no-repeat center center;
    .source_category {
      display: flex;
      justify-content: center;
      li {
        height: 60px;
        line-height: 60px;
        padding: 0 22px;
        color: #3d5deb;
      }
    }
  }
  .source_list {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    margin: 0 auto;
    .source_item {
      display: block;
      margin-bottom: 18px;
      margin-right: 18px;
      width: 380px;
      height: 180px;
      border: 1px solid #eeeeee;
      cursor: pointer;
      background-color: #fff;
      border-radius: 5px;
      .item_top {
        box-sizing: border-box;
        height: 110px;
        padding: 25px 0 25px 20px;
        border-bottom: 1px solid #eeeeee;
        img {
          display: inline-block;
          border-radius: 30px;
          vertical-align: middle;
        }
        .item_info {
          padding-left: 10px;
          font-size: 15px;
          font-weight: 700;
          vertical-align: middle;
        }
      }
      .item_bottom {
        box-sizing: border-box;
        height: 70px;
        padding: 18px 20px 20px 15px;
        font-size: 12px;
        line-height: 18px;
        color: #666666;
        p {
          //超出隐藏
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2; //需要显示时文本行数
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .source_item:hover {
      box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
    }
  }
}
</style>
