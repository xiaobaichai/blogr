<template>
  <div class="container">
    <b-nav></b-nav>
    <div class="search">
      <div class="search_result">
        <div class="result_center">
          <!-- <p class="tag">{{$route.params.tag}}</p> -->
          <p class="result">{{'找到了'+articles.length+'条与‘'+keyword+'’相关的文章'}}</p>
        </div>
      </div>
      <div class="search_content">
        <div class="content_l">
          <p>#搜索结果</p>
          <item-article :articles="articles"></item-article>
        </div>
        <div class="content_r"></div>
      </div>
    </div>
    <b-bottom></b-bottom>
  </div>
</template>

<script>
// 引入组件
import BNav from '@/components/BNav.vue'
import BBottom from '@/components/BBottom.vue'
import ItemArticle from '@/components/ItemArticle.vue'

// 引入接口
import { searchKeyword } from '@/api/index.js'

export default {
  name: 'bSearch',
  data () {
    return {
      articles: []
    }
  },
  computed: {
    keyword: function () {
      return this.$route.query.keyword
    }
  },
  components: {
    BNav,
    BBottom,
    ItemArticle
  },
  methods: {
    reqDate () {
      searchKeyword(this.$route.query.keyword)
        .then(response => {
          this.articles = response.data.data
        })
        .catch(err => {
          throw err
        })
    }
  },
  created () {
    this.reqDate()
  }
}
</script>

<style lang='less' scoped>
.container {
  height: 100%;
  .search {
    box-sizing: border-box;
    // padding-top: 110px;
    padding-bottom: 120px;
    min-height: 100%;
    .search_result {
      margin-bottom: 26px;
      width: 100%;
      height: 90px;
      background-color: rgb(223, 223, 223);
      .result_center {
        box-sizing: border-box;
        width: 1200px;
        margin: 0 auto;
        padding: 18px 0 0 2px;
        .tag {
          margin-bottom: 14px;
          font-size: 18px;
          font-weight: 700;
        }
        .result {
          font-size: 14px;
        }
      }
    }
    .search_content {
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      .content_l {
        width: 790px;
        padding: 15px 0 15px 10px;
        background-color: #fff;
        border-radius: 5px;
        p {
          font-size: 19px;
          font-weight: 700;
          margin-bottom: 24px;
        }
      }
      .content_r {
        width: 380px;
        border-left: 1px solid #ebe9e9;
      }
    }
  }
}
</style>
