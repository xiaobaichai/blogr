<template>
  <div class="recommend">
    <div class="category_outer">
      <ul class="recommend_category">
        <li>实用工具</li>
      </ul>
    </div>
    <div class="recommend_list">
      <a
        class="recommend_item"
        v-for="item in items"
        :key="item.title"
        :href="item.target"
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
export default {
  data () {
    return {
      items: [
        {
          target: 'https://huaban.com/',
          imgSrc: 'http://www.codecats.top/public/img/recommend/1.webp',
          title: '花瓣网',
          description:
            '每天超过 100 万专业设计师和生活的设计师们使用花瓣浏览器采集工具从全球网站采集超过 200 万灵感图片，在花瓣上线以来，已有超过 20 亿的采集被数千万花瓣用户采集到花瓣上，他们是花瓣真正的创造者。'
        },
        {
          target: 'https://www.lanrentuku.com/',
          imgSrc: 'http://www.codecats.top/public/img/recommend/2.webp',
          title: '懒人图库',
          description:
            '懒人图库专注于提供网页素材下载,其内容涵盖网页素材,矢量图素材,JS代码,psd素材,导航菜单,PNG图标等,让任何一个网页设计师都能轻松找到自己想要的素材!'
        },
        {
          target: 'https://tinypng.com/',
          imgSrc: 'http://www.codecats.top/public/img/recommend/3.webp',
          title: 'TinyPNG',
          description:
            'TinyPNG使用智能有损压缩技术将您的PNG文件的文件大小降低。'
        },
        {
          target: 'https://www.color-ui.com/',
          imgSrc: 'http://www.codecats.top/public/img/recommend/4.webp',
          title: 'ColorUI',
          description:
            'ColorUI专注于视觉交互，拥有极其鲜亮的高饱和色彩，多种页面元素可供选择，高度自定义的组件，丰富的扩展引入。'
        },
        {
          target: 'https://codelin.site/',
          imgSrc: 'http://www.codecats.top/public/img/recommend/5.webp',
          title: '凹凸实验室',
          description:
            '凹凸实验室(Aotu.io，英文简称O2) 始建于2015年10月，是一个年轻基情的技术团队。'
        },
        {
          target: 'https://www.ui.cn/',
          imgSrc: 'http://www.codecats.top/public/img/recommend/6.webp',
          title: 'UI中国',
          description:
            'UI中国(ui.cn)(原iconfans.com)中国最具影响力的设计平台之一。中国最具权威的用户体验设计专业平台。'
        },
        {
          target: 'https://cli.im/',
          imgSrc: 'http://www.codecats.top/public/img/recommend/7.webp',
          title: '草料二维码',
          description:
            '草料二维码隶属于宁波邻家网络科技有限公司，是国内专业的二维码在线服务平台，专注于提供专业化的二维码管理SAAS服务，帮助企业用二维码快速实现价值。'
        },
        {
          target: 'https://tool.oschina.net/',
          imgSrc: 'http://www.codecats.top/public/img/recommend/8.webp',
          title: '开源中国在线工具',
          description:
            'ostools为开发设计人员提供在线工具,提供jsbin在线 CSS、JS 调试,在线 Java API文档,在线 PHP API文档,在线 Node.js API文档,Less CSS编译...'
        },
        {
          target: 'https://loading.io/',
          imgSrc: 'http://www.codecats.top/public/img/recommend/9.webp',
          title: 'loading',
          description:
            'Loading io 是一个可以在线制作加载GIF图标的网站,色值,尺寸都能直接通过数值调整,支持导出GIF、SVG、CSS 、PNG格式'
        },
        {
          target: 'https://cubic-bezier.com/#.17,.67,.83,.67',
          imgSrc: 'http://www.codecats.top/public/img/recommend/10.webp',
          title: '斯贝尔曲线（动画）',
          description:
            'cubic-bezier用于在animation和transition两个属性中控制速度变化曲线'
        },
        {
          target: 'https://www.upyun.com/webp',
          imgSrc: 'http://www.codecats.top/public/img/recommend/11.webp',
          title: 'webP',
          description: '将常见格式图片转换为webP格式'
        },
        {
          target: 'http://nec.netease.com/',
          imgSrc: 'http://www.codecats.top/public/img/recommend/12.webp',
          title: 'NEC规范',
          description:
            'NEC包括了规范、框架、代码库、插件等内容,致力于为前端开发人员提供高效率高质量的前端页面开发解决方案,提高多人协作效率,'
        },
        {
          target: 'https://www.easyicon.net/',
          imgSrc: 'http://www.codecats.top/public/img/recommend/13.webp',
          title: 'easyIcon图标库',
          description:
            'easyicon提供超过五十万个PNG、ICO、ICNS格式图标搜索、图标下载服务'
        },
        {
          target: 'https://www.uupoop.com/',
          imgSrc: 'http://www.codecats.top/public/img/recommend/14.webp',
          title: '在线PS',
          description:
            '稿定设计在线PS照片处理、在线PS照片合成、抠图、裁切、添加文字、添加特效、美化照片、调整大小工能,是一部深受广大网友青睐的在线ps图片处理软件'
        },
        {
          target: 'https://www.iconfont.cn/',
          imgSrc: 'http://www.codecats.top/public/img/recommend/15.webp',
          title: '阿里图标库',
          description:
            'Iconfont-国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能。'
        }
      ]
    }
  }
}
</script>

<style lang='less' scoped>
.recommend {
  .category_outer {
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eeeeee;
    border-top: 1px solid #eeeeee;
    background: url("http://www.codecats.top/public/img/recommend/bg.webp")
      no-repeat center center;
    .recommend_category {
      display: flex;
      justify-content: center;
      li {
        height: 60px;
        line-height: 60px;
        padding: 0 22px;
        color: #ffffff;
      }
    }
  }
  .recommend_list {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    margin: 0 auto;
    .recommend_item {
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
    .recommend_item:hover {
      box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
    }
  }
}
</style>
