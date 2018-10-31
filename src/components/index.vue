<template>
  <div class="hello">
    <header id="header">
      <header-view :userInfo="$store.state.userInfo"></header-view>
      <nav-view :classData="$store.state.classData" @changeClassFn="changeClass"></nav-view>
    </header>
    <main id="main">
      <div class="container">
        <div class="row section topspace">
          <div class="col-md-12">
            <p class="lead text-center text-muted" style="font-size: 1rem">  疯狂的程序员决不是靠狂妄和拼命的程序员，而是能够脚踏实地，持续努力的程序员，一个程序员真正做到这两点，技术上去后，唯一能限制他的只有想象力，到那个时候才算“疯狂的程序员”，这种程序员，才能令对手无比恐惧。</p>
          </div>
        </div>
        <div class="row section featured topspace">
          <h2 class="section-title"><span>HOT NEWS</span></h2>
        </div>
        <div class="row topspace">
          <div class="topspace-box">
            <div v-show="news == ''" style="text-align: center">该分类暂无相关数据</div>
            <article v-for="(item, index) in news" :key="index" class="post news-item">
              <header class="entry-header">
                <h1 class="entry-title"><a href="single.html" rel="bookmark" style="font-size: 1.2rem">{{item.title}}</a></h1>
              </header>
              <div class="entry-content text-cont">
                <p v-if="item.key">{{item.key}}</p>
              </div>
              <div class="entry-bottom" style="padding-top: 14px;color: #999">
                <div class="entry-meta clearfix"> 
                  <span class="posted-on item-m block" style="padding-left: 10px">
                    <time class="entry-date published" style="font-size: .6rem"><i class="fa fa-clock-o" aria-hidden="true"></i> 发布时间：{{item.addTime | dateformat}}</time>
                  </span> 
                  <span class="posted-o item-m block" style="padding-left: 10px">
                    <time class="entry-date published" style="font-size: .6rem"><i class="fa fa-eye" aria-hidden="true"></i> 阅读人数：<span style="color: #e32d40">{{item.views}}</span></time></span> 
                    <span class="posted-on item-m block" style="padding-left: 10px"><time class="entry-date published" date="2013-09-27" style="font-size: .6rem"><i class="fa fa-comment-o" aria-hidden="true"></i> 评论数量：<span style="color: #e32d40">{{item.commentsNum}}</span></time></span> 
                    <span class="item-m block">
                      <span class="label-item" v-for="(item1,index1) in item.label" :key="index1"><router-link to="/foo">#{{item1.name}}</router-link></span>
                    </span>
                    <router-link :to="{ name: 'newsDetail', query: { id:  item._id}}" class="watchAll">查看全文</router-link>
                  </div>
                </div>
              </article>
            </div> 
          </div>
          <center>
            <pagination v-model="page" :per-page="10" :options="paginationOptions" :records="count" @paginate="myCallback"></pagination>
          </center>
          <div class="row section featured topspace">
            <h2 class="section-title"><span>WELCOME TO MY BLOG</span></h2>
          </div>
          <div class="row section topspace checkme">
            <div class="panel panel-cta"><div class="panel-body">
              <div class="col-lg-8">
                <p> 想更多了解me，请点击 点 点 我 ...<br>人生在于更多了解</p>
              </div>
              <div class="col-lg-4 text-right">
                <a @click="changeNun" href="javascript:;" class="btn btn-primary btn-lg">点 点 我 ...</a>
              </div>
            </div></div>
          </div>
        </div>
      </main>
      <footer id="footer">
        <div class="container footer-cont">
          <div class="row">
            <div class="col-md-3 widget">
              <h3 class="widget-title">Contact</h3>
              <div class="widget-body">
                <p>Wechat: 563995050LOVE<br>
                  QQ： 563995050<br>
                  Github： <a target="_blank" href="https://github.com/xiaoqiuxiong">https://github.com/xiaoqiuxiong</a><br>
                  Now city： 中国 广东 深圳
                </p>  
              </div>
            </div>
            <div class="col-md-3 widget">
              <h3 class="widget-title">Follow me</h3>
              <div class="widget-body">
                <p class="follow-me-icons">
                  <a target="_blank" href="https://weibo.com/u/6516552398/home?wvr=5&sudaref=www.baidu.com&display=0&retcode=6102"><i class="fa fa-weibo fa-2"></i></a>
                  <a target="_blank" href="https://github.com/xiaoqiuxiong"><i class="fa fa-github fa-2"></i></a>
                </p>
              </div>
            </div>
          </div> <!-- /row of widgets -->
        </div>
      </footer>
      <footer id="underfooter">
        <div class="container">
          <div class="row">
            <div class="col-md-6 widget">
              <div class="widget-body">
               <p class="text-left">
                © 2018 www.xiaoqiuxiong.cn 雄意间 版权所有 <a target="_blank" href="http://www.beianbeian.com/"> 粤ICP备18096140号 </a><br> 
              </p>
            </div>
          </div>
        </div> <!-- /row of widgets -->
      </div>
    </footer>
  </div>
</template>
<script>
  import headerView from './header'
  import navView from './navbar'
  export default {
    name: 'HelloWorld',
    components: {
      headerView,
      navView
    },
    data () {
      return {
        news:'',
        count: 0,
        page:1,
        paginationOptions:{
          texts:{
            count:''
          }
        }
      }
    },
    mounted: function () {
      this.newsList_fn();
    } ,
    methods:{
      changeClass:function(id){
        this.page = 1;
        this.axios.get('/api_main/index/list?newsClassId='+id).then((response) => {
          const res = response.data
          if(res.code === 0 ){
            this.news = res.data.newsList
            this.count = res.data.count
          }else{
          }
        })
      },
      changeNun:function(){
        this.$store.state.activeNav = 5;
        this.$router.push({ name: 'me'})
      },
      myCallback:function(){
        this.newsList_fn();
      },
      newsList_fn:function(){
        this.axios.get('/api_main/index/list', {
          params: {
            newsClassId: this.$store.state.activeNavId,
            page:this.page
          }
        }).then((response) => {
          const res = response.data
          if(res.code === 0 ){
            this.news = res.data.newsList
            this.count = res.data.count
          }else{
          }
        })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-cont{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 0;
}
.news-item{
  border: 1px solid #ddd;
  padding: 14px;
  margin-top: 20px;
  background-color: #fbfafa;
  border-radius: 6px;
  box-shadow: 0 4px 4px #eee;
}
.news-item:hover{
  border-color: #bd1550;
  box-shadow: 0 4px 4px #ec759f;
}
.label-item{
  padding-left: 10px;
}
.label-item a{
  color: #bd6415;
}
.label-item a:hover,.label-item a:active{
  color: #bd1550;
  cursor: pointer;
}
.labelItems{
  /* float: right; */
}
.watchAll{
  padding: 2px 10px;
  border-radius: 14px;
  border: 1px solid #bd1550;
  box-sizing: border-box;
}
/* 小屏 */
@media (max-width: 768px) {
  #main{
    padding-top: 15px;
  }
  .item-m{
    display: block;
  }
  .watchAll{
    display: block;
    text-align: center;
    margin-top: 10px;
  }
  .topspace-box{
    padding: 0 10px;
  }
  .section-title{
    font-size: 20px;
  }
  .topspace{
    margin-top: 0;
  }
  .footer-cont{
    padding-bottom: 20px;
  }
  .checkme{
    display: none
  }
}
/* 大屏 */
@media (min-width: 768px) {
  .item-m{
    display: inline;
    float: left;
  }
  .watchAll{
    float: right;
  }
}
</style>