<template>
  <div class="message">
    <div class="message_l">
      <div class="leave_msg">
        <p>留言</p>
        <el-row class="user_info" :gutter="20">
          <el-col :span="12">
            <el-input placeholder="昵称" v-model="nickname"></el-input>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="邮箱" v-model="email"></el-input>
          </el-col>
        </el-row>
        <el-input class="user_msg" placeholder="留言内容" type="textarea" :rows="6" v-model="content"></el-input>
        <el-button class="msg_button" type="primary" style="width:100%" @click="submit">提交留言</el-button>
      </div>
      <div class="new_msg">
        <p>最新留言</p>
        <div class="msg-item" v-for="item in msgs" :key="item.m_time">
          <div class="msg-time">{{ item.m_rTime }}</div>
          <div class="msg-content">
            <div class="user-content">
              <span class="nickname">{{ item.m_nickname + ": " }}</span>
              <span class="msg">{{ item.content }}</span>
            </div>
            <div class="admin-content">
              <span class="admin">管理员：</span>
              <span class="admin-content">{{ item.m_response }}</span>
            </div>
          </div>
        </div>
      </div>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="8"
        :total="total"
        @current-change="getPageMsg"
      ></el-pagination>
    </div>
    <div class="message_r">
      <div class="message_border">
        <p class="about">关于blogR</p>
        <div class="about_me">
          <p>邮箱</p>
          <p>1750596910@qq.com</p>
          <p>博客</p>
          <p>
            <a href="http://www.codecats.top">http://codecats.top</a>
          </p>
          <p>GitHub</p>
          <p>
            <a href="https://github.com/xiaobaichai" target="_blank">https://github.com/xiaobaichai</a>
          </p>
        </div>
        <div class="description_outer">
          <p class="description">欢迎来到我的博客，这是一个用于练习和记录前端知识的个人博客,目前还有部分内容尚待完善。。。</p>
          <p class="description"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入接口
import { leaveMessage, getNewMessage, getMessageCount } from '@/api/index.js'

export default {
  name: 'bMessage',
  data () {
    return {
      nickname: '',
      email: '',
      content: '',
      msgs: [],
      total: 0
    }
  },
  methods: {
    // 提交留言
    submit () {
      // 表单校验
      if (this.nickname === '') {
        this.$message('请输入昵称')
        return
      }
      if (
        !/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(
          this.email
        )
      ) {
        this.$message('请输入正确邮箱')
        return
      }
      if (this.content === '') {
        this.$message('请输入留言内容')
        return
      }
      leaveMessage(this.nickname, this.email, this.content)
        .then(response => {
          if (response.code === 1) {
            this.$message(response.message)
          }
          // 清空留言
          this.nickname = ''
          this.email = ''
          this.content = ''
          window.location.reload()
        })
        .catch(err => {
          throw err
        })
    },
    // 请求首页最新留言数据
    reqData () {
      getNewMessage(1)
        .then(response => {
          this.msgs = response.data.data
        })
        .catch(err => {
          throw err
        })
      getMessageCount()
        .then(response => {
          this.total = response.data.data[0].count
        })
        .catch(err => {
          throw err
        })
    },
    // 请求分页最新留言数据
    getPageMsg (page) {
      getNewMessage(page)
        .then(response => {
          this.msgs = response.data.data
        })
        .catch(err => {
          throw err
        })
    }
  },
  created () {
    this.reqData()
  }
}
</script>

<style lang='less' scoped>
.message {
  margin: 0 auto;
  width: 1200px;
  display: flex;
  justify-content: space-around;
  .message_l {
    width: 780px;
    .leave_msg {
      p {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      .user_info {
        margin-bottom: 20px;
      }
      .user_msg {
        margin-bottom: 20px;
      }
      .msg_button {
        margin-bottom: 35px;
      }
    }
    .new_msg {
      // 最近留言
      p {
        font-size: 19px;
        font-weight: 600;
        margin-bottom: 27px;
        // color: rgb(78, 61, 235);
      }
      .msg-item {
        margin-bottom: 22px;
        width: 780px;
        border-bottom: 1px dashed #cccccc;
        .msg-time {
          margin-bottom: 10px;
          font-size: 13px;
          color: #999999;
        }
        .msg-content {
          box-sizing: border-box;
          margin-bottom: 15px;
          width: 780px;
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
              // display: block;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
          }
          .admin-content {
            font-size: 14px;
            .admin {
              font-weight: 600;
              color: rgb(36, 139, 207);
            }
            .admin-content {
              word-break: normal;
              // display: block;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
          }
        }
      }
    }
    .el-pagination {
      text-align: center;
      margin-bottom: 20px;
    }
  }
  .message_r {
    width: 330px;
    background-color: #fff;
    border-radius: 5px;
    height: 100%;
    box-shadow: 0 5px 8px 0 rgba(7, 17, 27, 0.1);
    .message_border {
      // border: 1px solid #eeeeee;
      padding: 23px 29px;
      padding-bottom: 100px;
      border-radius: 4px;
      .about {
        font-size: 21px;
        font-weight: 700;
        margin-bottom: 40px;
      }
      .about_me {
        padding: 0 0 20px 20px;
      }
      .about_me :nth-child(odd) {
        font-size: 13px;
        font-weight: normal;
        margin-bottom: 6px;
      }
      .about_me :nth-child(even) {
        font-size: 13px;
        font-weight: 700;
        margin-bottom: 15px;
        a {
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 15px;
        }
      }
      .description_outer {
        padding-top: 20px;
        border-top: 1px solid #eeeeee;
        .description {
          font-size: 13px;
          color: #666666;
          text-indent: 2em;
          line-height: 25px;
        }
      }
    }
  }
}
</style>
