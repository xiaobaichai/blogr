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
          <p>{{item.info}}</p>
        </div>
      </a>
      </div>
    </div>
  </div>
</template>

<script>
// 引入接口
// import { getCategorySource } from '@/api/index.js'

export default {
  data () {
    return {
      sourceCategory: ['相关资讯', '素材资源', '效率提升'],
      sourceCategoryItem: ['information', 'material', 'efficiency'],
      sourceCategoryList: [],
      informationList: [{
        title: '极客公园',
        link: 'http://www.geekpark.net/',
        imgSrc: 'http://localhost:3000/source/e9457e3850387af4a4a6df3fc16c4895.jpeg',
        info: '极客公园聚焦互联网领域，跟踪新鲜的科技新闻动态，关注极具创新精神的科技产品。'
      }, {
        title: '36kr',
        link: 'https://36kr.com/',
        imgSrc: 'http://localhost:3000/source/9dd3a2a9730555c61d04387a81008b59.jpeg',
        info: '36氪通过全面，独家的视角为用户深度剖析最前沿的资讯，致力于让一部分人先看到未来，内容涵盖快讯，科技，金融，投资，房产，汽车，互联网，股市，教育，生活，职场等，秉承着新商业媒体人的使命砥砺前行'
      }, {
        title: '简书',
        link: 'https://www.jianshu.com/',
        imgSrc: 'http://localhost:3000/source/7e22ecd73ac541740dce688d9ed6ab5d.jpeg',
        info: '简书是一个优质的创作社区，在这里，你可以任性地创作，一篇短文、一张照片、一首诗、一幅画……我们相信，每个人都是生活中的艺术家，有着无穷的创造力。'
      }, {
        title: '思否',
        link: 'https://segmentfault.com/',
        imgSrc: 'http://localhost:3000/source/5621545b1898a45d8356cee7904a9eed.jpeg',
        info: 'SegmentFault 思否是中国领先的开发者技术社区。我们以技术问答、技术专栏、技术课程、技术资讯为核心的产品形态，为开发者提供纯粹、高质的技术交流平台。'
      }, {
        title: '博客园',
        link: 'https://www.cnblogs.com/',
        imgSrc: 'http://localhost:3000/source/a2d40676f0b18481b96f94e344f314b7.jpg',
        info: '博客园是一个面向开发者的知识分享社区。自创建以来，博客园一直致力并专注于为开发者打造一个纯净的技术交流社区，推动并帮助开发者通过互联网分享知识，从而让更多开发者从中受益。博客园的使命是帮助开发者用代码改变世界。'
      }, {
        title: 'CSDN',
        link: 'https://www.csdn.net/',
        imgSrc: 'http://localhost:3000/source/6ffad4e7f077104a7b908e2ed276bf13.jpeg',
        info: 'CSDN是全球知名中文IT技术交流平台,创建于1999年,包含原创博客、精品问答、职业培训、技术论坛、资源下载等产品服务,提供原创、优质、完整内容的专业IT技术开发社区.'
      }, {
        title: '掘金',
        link: 'https://juejin.cn/',
        imgSrc: 'http://localhost:3000/source/8cc7963f8ca1a37065ceda5df3a6e8e4.jpeg',
        info: '掘金是面向全球中文开发者的技术内容分享与交流平台。我们通过技术文章、沸点、课程、直播等产品和服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。'
      }],
      materialList: [{
        title: 'iconfont',
        link: 'https://www.iconfont.cn/',
        imgSrc: 'http://localhost:3000/source/9e4baec697c6b64f24a89dcbe29ab2c4.jpeg',
        info: 'iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。阿里巴巴体验团队倾力打造，设计和前端开发的便捷工具'
      }, {
        title: '摄图网',
        link: 'https://699pic.com/',
        imgSrc: 'http://localhost:3000/source/5621545b1898a45d8356cee7904a9eed.jpeg',
        info: 'SegmentFault 摄图网是一家专注于正版摄影高清图片素材免费下载的图库作品网站,提供手绘插画,海报,ppt模板,科技,城市,商务,建筑,风景,美食,家居,外景,背景等好看的图片设计素材大全可供下载。'
      }, {
        title: '懒人图库',
        link: 'https://www.lanrentuku.com/',
        imgSrc: 'http://localhost:3000/source/logo2.png',
        info: '懒人图库专注于提供网页素材下载，其内容涵盖网页素材，矢量图素材，JS代码，psd素材，导航菜单，PNG图标等，让任何一个网页设计师都能轻松找到自己想要的素材！'
      }, {
        title: '花瓣',
        link: 'https://huaban.com/',
        imgSrc: 'http://localhost:3000/source/e213948f6a0e3f9cd47270e27159807b.jpeg',
        info: '花瓣网, 设计师寻找灵感的天堂！图片素材领导者，帮你采集、发现网络上你喜欢的事物。你可以用它收集灵感,保存有用的素材,计划旅行,晒晒自己想要的东西'
      }, {
        title: 'UI中国',
        link: 'https://www.ui.cn/',
        imgSrc: 'http://localhost:3000/source/yearlogo.png',
        info: 'UI中国用户体验平台,中国用户体验联盟理事单位。国内极具影响力的设计平台之一。十多年来,携手会员150万+,共同致力于为设计师与企业搭建健康的设计生态！'
      }],
      efficiencyList: [{
        title: '亿图',
        link: 'https://www.edrawmax.cn/',
        imgSrc: 'http://localhost:3000/source/8fae3736e4e67d3142d1a2a402024fa3.jpeg',
        info: '亿图图示在线版可以创作200余种办公绘图，包括流程图、UML、时间线、甘特图、信息图、户型图、思维导图等，提高作图效率！'
      }, {
        title: 'osChina',
        link: 'https://tool.oschina.net/',
        imgSrc: 'http://localhost:3000/source/11739b6a5f972d45822675b117b32841.jpeg',
        info: 'OSCHINA.NET在线工具,ostools为开发设计人员提供在线工具，提供jsbin在线 CSS、JS 调试，在线 Java API文档,在线 PHP API文档,在线 Node.js API文档,Less CSS编译器，MarkDown编译器等其他在线工具'
      }, {
        title: 'loading动画库',
        link: 'https://loading.io/',
        imgSrc: 'http://localhost:3000/source/thumb.png',
        info: 'Build Your Ajax Loading Icons, Animated Text and More with SVG / CSS / GIF / PNG !'
      }, {
        title: '草料二维码',
        link: 'https://cli.im/',
        imgSrc: 'http://localhost:3000/source/cli_logo_new.png',
        info: '草料二维码把二维码技术变成简单实用的产品，让每个人都可以快速复用成功案例经验，自由组合内容展示、表单、批量、数据统计、美化和标签排版等功能，免费制作出能高效解决业务问题的二维码'
      }, {
        title: '动画速度曲线',
        link: 'https://cubic-bezier.com/#.17,.67,.83,.67',
        imgSrc: 'http://localhost:3000/source/bshaier.png',
        info: '贝塞尔曲线'
      }, {
        title: '又拍云webp转换',
        link: 'https://www.upyun.com/webp',
        imgSrc: 'http://localhost:3000/source/c3d36d1ae29d9b6306e2ea5bd09a39d5.jpeg',
        info: '网页、APP 图片加载缓慢？图片太多，流量太大？WebP（动态 WebP），在同等质量下，让您的图片大小平均减少 70%'
      }],
      activeClass: 0
    }
  },
  methods: {
    getSource (index) {
      this.activeClass = index
      if (index === 0) this.sourceCategoryList = this.informationList
      if (index === 1) this.sourceCategoryList = this.materialList
      if (index === 2) this.sourceCategoryList = this.efficiencyList
    }
  },
  mounted () {
    this.sourceCategoryList = this.informationList
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
