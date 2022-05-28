<template>
    <div class="category">
    <div class="category_l">
      <ul class="category_list" ref="category_outer" @click="getData($event)">
        <li class="choosen" data-type="all">全部</li>
        <li v-for="item in category" :key="item" :data-type="item">{{item}}</li>
      </ul>
      <div class="content"><item-article :articles="articles"></item-article></div>
      <el-pagination
        layout="prev, pager, next"
        background
        @current-change="handleCurrentChange"
        :hide-on-single-page="true"
        :page-size="8"
        :total="total"
      ></el-pagination>
    </div>
    <div class="category_r">
      推荐......
    </div>
  </div>
</template>

<script>
import ItemArticle from '@/components/ItemArticle.vue'
// 引入请求接口
import { getNewArticle, getCategoryArticle, getCategoryArticleByPage, getCategoryArticleCount } from '@/api/index.js'

export default {
  name: 'bCategory',
  data () {
    return {
      id: '1234',
      articles: [],
      total: 0,
      category: ['Css/Html', 'JavaScript', 'Vue', 'Node', '其他'],
      type: 'all'
    }
  },
  components: {
    ItemArticle
  },
  methods: {
    // 点击分类获取分类文章和文章总数
    getData ($event) {
      // 改变分类列表样式
      const oLi = $event.target
      const oUl = this.$refs.category_outer
      const aLi = oUl.children
      for (let i = 0; i < aLi.length; i++) {
        aLi[i].className = ''
      }
      oLi.className = 'choosen'
      // 请求分类数据
      this.type = oLi.dataset.type
      getCategoryArticle(this.type, 8)
        .then(response => {
          this.articles = response.data.data
        })
        .catch(err => {
          throw err
        })
      getCategoryArticleCount(this.type)
        .then((response) => {
          this.total = response.data.data[0].count
        })
        .catch(err => {
          throw err
        })
    },
    // 点击分页栏请求文章
    handleCurrentChange (page) {
      getCategoryArticleByPage(this.type, page, 8) // 按分类获取第page页文章8篇
        .then(response => {
          this.articles = response.data.data
        })
        .catch(err => {
          throw err
        })
    },
    // 进入组件获取最新文章和文章总数
    reqData () {
      getNewArticle(1, 8)
        .then((response) => {
          this.articles = response.data.data
        })
        .catch(err => {
          throw err
        })
      getCategoryArticleCount(this.type)
        .then((response) => {
          this.total = response.data.data[0].count
        })
        .catch(err => {
          throw err
        })
    }
  },
  created () {
    this.reqData()
  },
  mounted () {}
}
</script>

<style lang='less' scoped>
.category {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .category_l {
    width: 800px;
    height: 100%;
    // background-color: #fff;
    padding: 10px 0 0 10px;
    box-sizing: border-box;
    border-radius: 5px;
    .content {
      background-color: #fff;
      border-radius: 5px;
      padding: 15px 0 15px 10px;
      margin-bottom: 30px;
    }
    .category_list {
      width: 790px;
      display: inline-block;
      margin-bottom: 38px;
      height: 16px;
      line-height: 16px;
      .choosen {
        font-size: 16px;
        font-weight: 700;
        color: #409eff;
      }
      li {
        display: inline-block;
        padding: 0 19px;
        font-size: 13px;
        cursor: pointer;
      }
      // li:first-child {
      //   font-size: 16px;
      //   font-weight: 700;
      //   color: #409eff;
      // }
      li:hover {
        color: #409eff;
      }
    }
    .el-pagination {
      text-align: center;
      margin-bottom: 20px;
    }
  }
  .category_r {
    width: 380px;
    color: rgb(151, 149, 149);
    border-left: 1px solid #dddbdb;
    padding: 10px 0 0 10px;
    box-sizing: border-box;
    // border-radius: 5px;
    // .hot {
    //   margin-bottom: 40px;
    //   p {
    //     font-size: 19px;
    //     font-weight: 600;
    //     margin-bottom: 27px;
    //     color: rgb(78, 61, 235);
    //   }
    //   .hot-item {
    //     display: flex;
    //     justify-content: space-between;
    //     width: 380px;
    //     border-bottom: 1px solid #eeeeee;
    //     .hot_l {
    //       box-sizing: border-box;
    //       width: 95px;
    //       padding-left: 5px;
    //     }
    //     .hot_r {
    //       width: 245px;
    //       a {
    //         display: block;
    //         .title {
    //           font-size: 14px;
    //           font-weight: 600;
    //           margin-bottom: 13px;
    //         }
    //         .info {
    //           font-size: 13px;
    //           color: #999999;
    //           margin-bottom: 14px;
    //           .time {
    //             margin-right: 8px;
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  }
}
</style>
