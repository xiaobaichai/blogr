<template>
  <div class="container">
    <b-nav></b-nav>
    <div class="article">
      <div class="article_l">
        <div class="article_title">
          {{article.title}}
          <span>{{'/'+article.tag}}</span>
        </div>
        <div class="article_info">
          <span class="time">{{article.date | dateFormat('yyyy-MM-dd')}}</span>
          <span class="views">{{'阅读/'+article.readCount}}</span>
          <!-- <span class="src">{{article.a_original | isOriginal}}</span> -->
          <!-- <span class="writer">{{'文/'+article.a_author}}</span> -->
        </div>
        <!-- <div class="article_desc">{{article.a_desc}}</div> -->
        <div class="article_content" v-html="article.content"></div>
      </div>
      <div class="article_r">
        <!-- 特别推荐 -->
        相关推荐
        ......
      </div>
    </div>
    <b-bottom></b-bottom>
  </div>
</template>

<script>
import BNav from '@/components/BNav.vue'
import BBottom from '@/components/BBottom.vue'

// 引入接口
import { getArticle, updateReadCount } from '@/api/index.js'

export default {
  data () {
    return {
      article: {
        title: '',
        tag: '',
        date: '',
        readCount: 0,
        content: ''
      }
    }
  },
  components: { BNav, BBottom },
  methods: {
    reqData () {
      const id = this.$route.params.id
      getArticle(id)
        .then(response => {
          if (response.data.code !== 0) {
            this.$message('服务端错误')
            return
          }
          this.article = response.data.data[0]
        })
        // 文章阅读次数+1
        .then(() => {
          updateReadCount(id, this.article.readCount)
        })
        .catch(err => {
          throw err
        })
    },
    getDate () {
      return 0
    }
  },
  mounted () {
    this.reqData()
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  .article {
    box-sizing: border-box;
    min-height: 100%;
    // padding-top: 110px;
    padding-bottom: 140px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1200px;
    .article_l {
      width: 800px;
      background-color: #fff;
      padding: 15px 4px 15px 10px;
      border-radius: 5px;
      overflow-wrap: normal;
      .article_title {
        margin-bottom: 6px;
        font-size: 23px;
        font-weight: 700;
        span {
          padding-left: 22px;
          font-size: 12px;
          color: #a8acb3;
        }
      }
      .article_info {
        margin-bottom: 26px;
        font-size: 12px;
        color: #999999;
        span {
          padding-right: 11px;
        }
      }
      .article_desc {
        margin-bottom: 42px;
        padding: 19px 20px 19px 15px;
        background-color: #fafafa;
        color: #666666;
        font-size: 14px;
        line-height: 24px;
      }
      .article_content {
        overflow-wrap: normal;
        padding: 0 10px;
        box-sizing: border-box;
        text-align: justify;
        font-size: 14px;
        p {
          font-size: 14px;
          line-height: 30px;
        }
      }
      .article_content ::v-deep pre {
        margin: 10px 0;
        border-radius: 5px;
      }
    }
    .article_r {
      color: #929191;
      padding-left: 20px;
      width: 350px;
      border-left: 1px solid #dddcdc;
      // .recommend {
      //   margin-bottom: 40px;
      //   p {
      //     font-size: 19px;
      //     font-weight: 600;
      //     margin-bottom: 27px;
      //     // color: rgb(78, 61, 235);
      //   }
      //   .recommend-item {
      //     width: 380px;
      //     border-bottom: 1px solid #eeeeee;
      //     a {
      //       display: block;
      //       .title {
      //         font-size: 14px;
      //         font-weight: 600;
      //         margin-bottom: 13px;
      //       }
      //       .info {
      //         font-size: 13px;
      //         color: #999999;
      //         margin-bottom: 14px;
      //         .time {
      //           margin-right: 8px;
      //         }
      //       }
      //     }
      //   }
      // }
    }
  }
}
</style>
