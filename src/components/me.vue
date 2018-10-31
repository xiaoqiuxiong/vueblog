<template>
  <div class="hello">
    <header id="header">
      <header-view :userInfo="$store.state.userInfo"></header-view>
      <nav-view :classData="$store.state.classData"></nav-view>
    </header>
    <main id="main">
      <div class="container">
        <div class="row topspace">
          <!-- /Sidebar -->
          <!-- Article main content -->
          <article class="maincontent" style="padding-left: 10px;padding-right: 10px">
           <p>联系</p>
           <p>GitHub：https://github.com/xiaoqiuxiong</p>
           <p>QQ：563995050</p>
           <p>经历</p>
           <p>2015年9月，从还没毕业，受学校电子商务的小伙伴的感染，开始了接触了程序。</p>
           <p>2016年3月，开始进入杭州赛虎科技实习，并从此开始了自己的前端开发生涯。说实话，在实习期确实学到了很多东西，但是也确实辛苦，因为刚刚开始自己并不是程序科班出生的，入职之后需要慢慢开始从demo的角度转换过来，然后转战实战开发！从最开始的Html，Css，Javascript到一些框架性的Jquery，bootstrap，vuejs，还有犀牛书给了我很大的帮助。</p>
           <p>2016年6月，回校参加设计之类的事情，两个字，乐哉。</p>
           <p>2016年7月，继续到赛虎科技发展自己的前端潜能，很快就转正了。</p>
           <p>2017年5月，广东人，最终还是回来了。来到了深圳，加入了深圳莎贝电子商务有限公司，这是一家集珠宝与程序于一身的公司，线下引流，线上发展。</p>
           <p>至今，便有了本站。</p>
           <p>博客</p>
           <p>本博客使用的插件</p>
           <p>vue</p>
           <p>nodejs</p>
           <p>express</p>
           <p>mongodb</p>
           <p>七牛云</p>
          </article>
          <!-- /Article -->
        </div>
      </div>  <!-- /container -->
    </main>
    <footer id="footer">
      <div class="container">
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
      }
    },
    mounted: function () {
    } ,
    methods:{
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
  padding-right: 10px;
}
.label-item a{
  color: #bd6415;
}
.label-item a:hover,.label-item a:active{
  color: #bd1550;
  cursor: pointer;
}
.labelItems{
  float: right;
}
.watchAll{
  padding: 2px 10px;
  border-radius: 14px;
  border: 1px solid #bd1550;
  box-sizing: border-box;
}
.maincontent p{
  margin-bottom: 10px;
}
</style>