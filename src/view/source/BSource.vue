<template>
  <div class="source">
    <div class="category_outer">
      <ul class="source_category">
        <li :class="activeClass==index ? 'active':''" v-for="(item,index) in sourceCategory" :key="item" @click="getSource(index)">{{item}}</li>
      </ul>
    </div>
    <div class="source_list">
      <div class="source_item" v-for="item in sourceCategoryList" :key="item.title">
        <a
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
  </div>
</template>

<script>
// 引入接口
import { getCategorySource } from '@/api/index.js'

export default {
  data () {
    return {
      sourceCategory: ['相关资讯', '素材资源', '效率提升'],
      sourceCategoryItem: ['information', 'material', 'efficiency'],
      sourceCategoryList: [],
      activeClass: 0
    }
  },
  methods: {
    getSource (index) {
      const item = this.sourceCategoryItem[index]
      getCategorySource(item)
        .then(response => {
          this.sourceCategoryList = response.data.data
          // 点击目标切换样式
          this.activeClass = index
        })
        .catch(err => {
          throw err
        })
    }
  },
  mounted () {
    getCategorySource('information')
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
        color: #35363a;
        font-size: 15px;
        &:hover {
          cursor: pointer;
          color: #297ae6;
        }
      }
      .active {
        color: #297ae6;
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
