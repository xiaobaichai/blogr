<template>
  <div class="home-content">
    <!-- 轮播图 -->
    <div class="carousel">
      <div class="carousel-l">
        <el-carousel :interval="2000" type="card" height="330px">
          <el-carousel-item v-for="item in carousel" :key="item.id">
            <router-link :to="'/article/' + item.c_link" target="_blank">
              <img :src="item.c_imgSrc" alt width="790" height="330" />
            </router-link>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="carousel-r">
        <div class="search">
          <div class="search-tag">
            <!-- <span>热门标签</span> -->
            <router-link
              v-for="item in tags"
              tag="a"
              :to="'/searchTag/' + item"
              target="_blank"
              :key="item"
            >{{ item }}</router-link>
          </div>
          <div class="search-input">
            <i class="el-icon-search"></i>
            <input type="text" v-model="keyword" placeholder="搜索文章" @keypress="search($event)" />
          </div>
        </div>
        <div class="search-img">
          <img src="../../assets/img/search.webp" alt />
        </div>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="content">
      <div class="content-l">
        <p>#最新内容</p>
        <item-article :articles="articles"></item-article>
        <el-pagination
        layout="prev, pager, next"
        background
        @current-change="handleCurrentChange"
        :page-size="8"
        :total="total"
      ></el-pagination>
      </div>
      <div class="content-r">
        <!-- 热门板块 -->
        <div class="hot">
          <p>#热门板块</p>
          <div class="hot-item" v-for="item in hotArticles" :key="item.id">
            <router-link :to="'/article/' + item.id" tag="a" target="_blank">
              <div class="title">{{ item.title }}</div>
              <div class="info">
                <span class="time">{{ item.a_time | getDate }}</span>
                <span class="view">{{ "浏览" + item.a_views }}</span>
              </div>
            </router-link>
          </div>
        </div>
        <!-- 热门标签 -->
        <!-- <div class="tags">
          <p>#热门标签</p>
          <div class="tag_item">
            <router-link
              v-for="item in tags"
              tag="a"
              :to="'/searchTag/' + item"
              target="_blank"
              :key="item"
            >{{ item }}</router-link>
          </div>
        </div> -->
        <!-- 最新留言 -->
        <div class="msg">
          <p>#最新留言</p>
          <div class="msg-item" v-for="item in msgs" :key="item.m_time">
            <div class="msg-time">{{ item.m_rTime }}</div>
            <div class="msg-content">
              <div class="user-content">
                <span class="nickname">{{ item.nickname + ": " }}</span>
                <span class="msg">{{ item.content }}</span>
              </div>
              <div class="admin-content">
                <span class="admin">管理员：</span>
                <span class="response">{{ item.response }}</span>
              </div>
            </div>
          </div>
          <!-- <a class="leave_msg" href="http://localhost:8080/dashboard/message" target="_blank">我要留言</a> -->
          <router-link class="leave_msg" to="/message" target="_blank">我要留言</router-link>
        </div>
        <!-- 博客推荐 -->
        <!-- <div class="blog">
          <p>#友链推荐</p>
          <ul>
            <li>blog</li>
            <li>博客</li>
            <li>博客博客</li>
            <li>博客析</li>
            <li>源博客码</li>
            <li>源码分博客析</li>
            <li>博客分</li>
          </ul>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
// 引入组件
import ItemArticle from '@/components/ItemArticle.vue'

// 引入首页接口
import {
  getArticleCount,
  getNewArticle,
  getHotArticle,
  getNewMessage,
  getCarousel
} from '@/api/index.js'

export default {
  name: 'bHome',
  data () {
    return {
      articleCount: 0,
      articles: [],
      newArticles: [],
      hotArticles: [],
      tags: [],
      keyword: '',
      msgs: [],
      carousel: [],
      total: 9
    }
  },
  components: {
    ItemArticle
  },
  methods: {
    // 点击分页栏请求文章
    handleCurrentChange (page) {
      getNewArticle(page, 8) // 请求第page页 8篇
        .then(response => {
          this.articles = response.data.data
        })
        .catch(err => {
          throw err
        })
    },
    // 页面加载请求数据
    reqDate () {
      getArticleCount() // 获取首页文章总数
        .then(response => {
          this.articleCount = response.data.data[0].count
        })
        .catch(err => {
          throw err
        })
      getNewArticle(1, 8) // 获取首页最新文章第一页 8篇
        .then(response => {
          this.articles = response.data.data
        })
        .catch(err => {
          throw err
        })
      getHotArticle(4) // 获取首页热门文章 4篇
        .then(response => {
          this.hotArticles = response.data.data
        })
        .catch(err => {
          throw err
        })
      getNewMessage(1, 4) // 获取首页留言 第1页 4条
        .then(response => {
          this.msgs = response.data.data
        })
        .catch(err => {
          throw err
        })
      getCarousel().then(response => {
        this.carousel = response.data
      }) // 获取首页轮播图
    },
    // 搜索
    search ($event) {
      const keyword = this.keyword
      if (event.keyCode === '13') {
        const routeUrl = this.$router.resolve({
          path: '/searchKeyword/' + keyword
          // params: { keyword }
        })
        window.open(routeUrl.href, '_blank')
      }
    }
  },
  created () {
    this.reqDate()
  }
}
</script>

<style lang='less' scoped>
.home-content {
  width: 1200px;
  margin: 0 auto;
  //轮播图板块
  .carousel {
    margin-bottom: 20px;
    display: flex;
    .carousel-l {
      width: 790px;
      height: 330px;
      margin-right: 10px;
      border-radius: 5px;
      box-shadow: 0 5px 8px 0 rgba(7, 17, 27, 0.3);
      background-color: #fff;
      img {
        border-radius: 5px;
      }
    }
    .carousel-r {
      width: 400px;
      height: 330px;
      border-radius: 5px;
      box-shadow: 0 5px 8px 0 rgba(7, 17, 27, 0.3);
      background-color: #fff;
      .search {
        box-sizing: border-box;
        width: 100%;
        height: 100px;
        padding-top: 12px;
        .search-tag {
          margin-bottom: 12px;
          padding-left: 30px;
          // span {
          //   margin: 0 10px 0 20px;
          //   font-size: 16px;
          //   font-weight: 600;
          //   color: rgb(125, 94, 240);
          // }
          a {
            margin-right: 9px;
            font-size: 12px;
            color: #999999;
            cursor: pointer;
          }
        }
        .search-input {
          position: relative;
          width: 350px;
          height: 40px;
          padding-left: 15px;
          i {
            position: absolute;
            left: 30px;
            top: 12px;
            color: #7f8285;
            font-size: 16px;
          }
          input {
            width: 330px;
            height: 40px;
            padding-left: 35px;
            border-radius: 20px;
            background: #f1f1f1;
            outline: none;
            border: none;
            font-size: 14px;
            color: rgb(146, 145, 145);
          }
        }
      }
      .search-img {
        width: 100%;
        height: 230px;
        img {
          border-radius: 0 0 4px 4px;
        }
      }
    }
  }
  .content {
    width: 100%;
    margin: 0 auto;
    display: flex;
    .content-l {
      box-sizing: border-box;
      padding: 10px 0 0 10px;
      width: 790px;
      height: 100%;
      margin-right: 10px;
      background-color: #fff;
      border-radius: 5px;
      overflow: hidden;

      p {
        font-size: 19px;
        font-weight: 700;
        margin-bottom: 24px;
      }
      .el-pagination {
      text-align: center;
      margin-bottom: 20px;
    }
    }
    .content-r {
      box-sizing: border-box;
      width: 400px;
      height: 100%;
      padding: 10px 10px 0 10px;
      background-color: #fff;
      border-radius: 5px;
      //热门板块
      .hot {
        margin-bottom: 40px;
        p {
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 27px;
          // color: rgb(78, 61, 235);
        }
        .hot-item {
          width: 380px;
          border-bottom: 1px solid #eeeeee;
          margin-bottom: 20px;
          :hover {
            color: rgb(32, 127, 236);
            }
          a {
            display: block;
            .title {
              font-size: 14px;
              font-weight: 600;
              margin-bottom: 13px;
            }
            .info {
              font-size: 13px;
              color: #999999;
              margin-bottom: 14px;
              .time {
                margin-right: 8px;
              }
            }
          }
        }
      }
      //热门标签
      .tags {
        margin-bottom: 27px;
        p {
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 27px;
          // color: rgb(78, 61, 235);
        }
        .tag_item {
          display: flex;
          flex-wrap: wrap;
          a {
            display: block;
            padding: 10px 22px;
            margin: 0 15px 15px 0;
            border-radius: 10px;
            border: 1px solid transparent;
            text-align: center;
            font-size: 13px;
            color: rgb(102, 105, 105);
            background-color: #fafafa;
          }
          a:hover {
            border-color: #00a8ff;
            color: #00a8ff;
            cursor: pointer;
          }
        }
      }
      // 最近留言
      .msg {
        p {
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 27px;
          // color: rgb(78, 61, 235);
        }
        .msg-item {
          margin-bottom: 22px;
          width: 380px;
          border-bottom: 1px dashed #cccccc;
          .msg-time {
            margin-bottom: 10px;
            font-size: 13px;
            color: #999999;
          }
          .msg-content {
            box-sizing: border-box;
            margin-bottom: 15px;
            width: 380px;
            padding: 16px 18px 16px 11px;
            border-left: 3px solid #cccccc;
            background-color: #fafafa;
            .user-content {
              font-size: 14px;
              margin-bottom: 12px;
              .nickname {
                font-weight: 600;
                color: rgb(36, 139, 207);
              }
              .msg {
                word-break: normal;
                width: auto;
                // display: block;
                white-space: pre-wrap;
                word-wrap: break-word;
                overflow: hidden;
              }
            }
            .admin-content {
              font-size: 14px;
              .admin {
                font-weight: 600;
                color: rgb(36, 139, 207);
              }
              .response {
                word-break: normal;
                width: auto;
                // display: block;
                white-space: pre-wrap;
                word-wrap: break-word;
                overflow: hidden;
              }
            }
          }
        }
        .leave_msg {
          display: block;
          box-sizing: border-box;
          padding: 12px 120px;
          margin: 0 auto;
          margin-bottom: 30px;
          width: 340px;
          border: 1px solid #00a8ff;
          border-radius: 8px;
          font-size: 16px;
          text-align: center;
          color: #00a8ff;
          cursor: pointer;
        }
        .leave_msg:hover {
          color: #ffffff;
          background-color: #00a8ff;
        }
      }
      // 友链推荐
      .blog {
        margin-bottom: 27px;
        p {
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 27px;
          // color: rgb(78, 61, 235);
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            padding: 10px 22px;
            margin: 0 14px 10px 0;
            border-radius: 6px;
            border: 1px solid #eeeeee;
            box-shadow: 0 0 3px #eee;
            font-size: 12px;
            font-weight: 700;
          }
          li:hover {
            color: #00a8ff;
            cursor: pointer;
            background-color: #fafafa;
          }
        }
      }
    }
  }
}
</style>
