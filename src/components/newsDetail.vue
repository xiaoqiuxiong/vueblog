<template>
  <div class="hello">
    <header id="header">
      <div id="head" class="parallax" parallax-speed="2">
        <h1 id="logo" class="text-center">
          <img class="img-circle" :src="userInfo.img" alt="">
          <span class="title" style="font-size: 1.2rem">{{userInfo.nickname}}</span>
          <span class="tagline">QQ：563995050 <br> wechat：563995050LOVE <br>email：{{userInfo.email}}<br><br>{{userInfo.introduction}}</span>
        </h1>
      </div>
      <nav class="navbar navbar-default navbar-sticky">
        <div class="container-fluid">
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li class="active navbar-nav-item"><a href="index.html">HOME</a></li>
              <li class="navbar-nav-item" v-for="(item, index) in classData" :key="index"><a href="index.html">{{item.name}}</a></li>
              <li class="active navbar-nav-item"><a href="index.html">Me</a></li>
            </ul>
          </div>   
        </div>  
      </nav>
    </header>
    <main id="main">
      <div class="container container-m">
        <div class="row topspace">
          <div class="">
            <article class="post">
              <header class="entry-header">
                <div class="entry-meta"> 
                  <span class="posted-on"><time class="entry-date published news-time-m">{{newsData.addTime | dateformat}}</time></span>      
                </div> 
                <h1 class="entry-title news-title-m">{{newsData.title}}</h1>
                <p>摘要：{{newsData.key}}</p>
              </header> 
              <div class="entry-content" style="margin-bottom: 0;padding-bottom: 14px"> 
                <p style="text-align: center"><img alt="" :src="newsData.img" style="width: 30%;display: inline-block"></p>
                <div v-html="newsData.content"></div>
                <nav id="comment-nav-below" class="comment-navigation clearfix" role="navigation"></nav>
                <div class="clearfix"></div>
                <div class="entry-bottom" style="padding-top: 14px;color: #999">
                  <div class="entry-meta clearfix"> 
                    <span class="posted-on item-m block" style="padding-left: 10px">
                      <time class="entry-date published" style="font-size: .6rem"><i class="fa fa-clock-o" aria-hidden="true"></i> 发布时间：{{newsData.addTime | dateformat}}</time>
                    </span> 
                    <span class="posted-o item-m block" style="padding-left: 10px">
                      <time class="entry-date published" style="font-size: .6rem"><i class="fa fa-eye" aria-hidden="true"></i> 阅读人数：<span style="color: #e32d40">{{newsData.views}}</span></time></span> 
                      <span class="posted-on item-m block" style="padding-left: 10px"><time class="entry-date published" date="2013-09-27" style="font-size: .6rem"><i class="fa fa-comment-o" aria-hidden="true"></i> 评论数量：<span style="color: #e32d40">{{newsData.commentsNum}}</span></time></span> 
                      <span class="item-m block">
                        <span class="label-item" v-for="(item1,index1) in newsData.label" :key="index1"><router-link to="/foo">#{{item1.name}}</router-link></span>
                      </span>
                    </div>
                  </div>
                </div> 
                <nav id="comment-nav-below" class="comment-navigation clearfix" role="navigation"></nav>
              </article><!-- #post-## -->
            </div> 
          </div> <!-- /row post  -->
          <div class="row">
            <div>
              <div id="comments"> 
                <h3 class="comments-title" style="font-size: 18px;padding-top: 20px;padding-bottom: 20px;">留言区</h3>
                <nav id="comment-nav-below" class="comment-navigation clearfix" role="navigation"></nav>
                <ol class="comments-list" style="padding-top: ">
                  <li class="comment" v-for="(item, index) in newsData.comments" :key="index" style="padding: 15px 0">
                    <div>
                      <img :src="userInfo.img" alt="Avatar" class="avatar" style="margin-bottom: 0">
                      <div class="comment-meta">
                        <span class="author">{{item.nickname}}</span>
                        <span class="date">{{item.addtime | dateformat}}</span>
                      </div>
                      <div class="comment-body">
                        {{item.content}}
                      </div>
                    </div>
                  </li>
                </ol>
                <div class="clearfix"></div>
                <!-- <div id="respond">
                  <p v-if="$store.state.reader">欢迎{{$store.state.reader.nickname}}登录，你现在可以留言咯！</p>
                  <p v-if="!unregistered" style="color: red;margin-bottom: 10px">你还没有登录呢？请先登录再留言！</p>
                  <div class="form-group" v-if="!$store.state.reader && unregistered">
                    <label for="inputName">用户名</label>
                    <input type="text" class="form-control" v-model="username" placeholder="">
                  </div>
                  <div class="form-group" v-if="!$store.state.reader && unregistered">
                    <label for="inputWeb">密码</label>
                    <input type="nane" class="form-control" v-model="password" placeholder="">
                  </div>
                  <div class="form-group" v-if="$store.state.reader">
                    <label for="inputComment">留言</label>
                    <textarea v-model="content" class="form-control" rows="6" placeholder="留下点什么再走..."></textarea>
                  </div>
                  <div class="form-group" v-if="!unregistered">
                    <label for="inputWeb">昵称</label>
                    <input type="nane" class="form-control" v-model="nickname" placeholder="">
                  </div>
                  <div class="form-group" v-if="!unregistered">
                    <label for="inputWeb">用户名</label>
                    <input type="nane" class="form-control" v-model="username" placeholder="">
                  </div>
                  <div class="form-group" v-if="!unregistered">
                    <label for="inputWeb">密码</label>
                    <input type="nane" class="form-control" v-model="password" placeholder="">
                  </div>
                  <div class="form-group" v-if="!unregistered"> 
                    <label for="inputWeb">重复密码</label>
                    <input type="nane" class="form-control" v-model="passwordAgain" placeholder="">
                  </div>
                  <p v-show="beNullErr" class="text-right" style="color: red">选项不能为空</p>
                  <p v-show="passwordAgainErr" class="text-right" style="color: red">两次输入的密码不一致</p>
                  <div class="row">
                    <div class="col-md-8 text-right">
                    </div>
                    <div class="col-md-4 text-right">
                      <button type="button" class="btn btn-action" v-if="!$store.state.reader && unregistered" @click="login">登 录</button>
                      <button type="button" class="btn btn-action" v-if="!unregistered" @click="registered">注 册</button>
                      <button type="button" class="btn btn-action" v-if="$store.state.reader" @click="registered">留 言</button>
                    </div>
                  </div>
                  <p v-if="!$store.state.reader && unregistered" class="text-right" style="margin-bottom: 10px;margin-top: 10px">没有注册的话，<span @click="unregisteredFn" style="color: blue;cursor: pointer">请点击这里去注册！</span></p>
                </div> -->

                <div id="respond">
                  <div class="form-group">
                    <label for="inputName">昵称</label>
                    <input type="text" class="form-control" v-model="nickname" placeholder="">
                  </div>
                  <div class="form-group">
                    <label for="inputComment">留言</label>
                    <textarea v-model="content" class="form-control" rows="6" placeholder="留下点什么再走..."></textarea>
                  </div>
                  <div class="row">
                    <div class="col-md-8 text-right">
                    </div>
                    <div class="col-md-4 text-right">
                      <button type="button" class="btn btn-action" @click="leaveWord">留 言</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> <!-- /row comments -->
            <div class="clearfix"></div>
          </div>  <!-- /container -->
        </div>
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
  export default {
    name: 'newsDetail',
    data () {
      return {
        userInfo:'',
        classData:'',
        newsData:'',
        unregistered: true,
        nickname:'',
        username:'',
        password:'',
        passwordAgain:'',
        content:'',
        passwordAgainErr:false,
        beNullErr:false,
      }
    },
    mounted: function () {
      this.axios.get('/api_main/index/all').then((response) => {
        const res = response.data
        if(res.code === 0 ){
          this.userInfo = res.data[1]
          this.classData = res.data[0]
        }else{
        }
      })
      this.axios.get('/api_main/index/watch',{params:{
        id: this.$route.query.id
      }}).then((response) => {
        this.axios.get('/api_main/index/detail',{params:{
          id: this.$route.query.id
        }}).then((response) => {
          const res = response.data
          if(res.code === 0 ){
            this.newsData = res.data
            document.title = res.data.title + ' | 肖秋雄前端博客'
          }else{
          }
        })
      })
    },
    methods:{
      // 留言
      leaveWord:function(){
        if(this.content === ''){
          alert('请输入留言内容')
          return false
        }
        if(this.nickname === ''){
          this.nickname = '火箭号游客'
        }
        this.axios.get('/api_main/index/leave_word',{params:{
          nickname: this.nickname,
          content: this.content,
          newsId: this.$route.query.id
        }}).then((response) => {
          const res = response.data
          if(res.code === 0 ){
            this.newsData.comments = res.data.comments
            this.newsData.commentsNum = res.data.commentsNum
            this.content = ''
          }else{
            alert('评论失败')
          }
        })
      },
      // 切换到注册
      unregisteredFn:function(){
        this.unregistered = false;
      },
      // 注册
      registered:function(){
        // 判断是否为空
        console.log(this.nickname,this.username,this.password,this.passwordAgain)
        if(this.nickname === '' || this.username === '' || this.password === '' || this.passwordAgain === ' '){
          this.beNullErr = true
          return false
        }else{
          this.beNullErr = false
        }
        // 先判断两次输入的密码是否一致
        if(this.password != this.passwordAgain){
          this.passwordAgainErr = true
          return false
        }else{
          this.passwordAgainErr = false
        }
        this.axios.get('/api_main/index/register',{params:{
          nickname: this.nickname,
          username: this.username,
          password: this.password
        }}).then((response) => {
          const res = response.data
          if(res.success === true ){
            this.$store.state.reader = res.data
            this.unregistered = true;
          }else{

          }
        })
      },
      // 登录
      login:function(){
        this.axios.get('/api_main/index/login',{params:{
          username: this.username,
          password: this.password
        }}).then((response) => {
        })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-nav-item:active,.navbar-nav-item:hover{
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-top: 0;
  border-bottom: 0;
}
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
  float: right;
}
.watchAll{
  padding: 2px 10px;
  border-radius: 14px;
  border: 1px solid #bd1550;
  box-sizing: border-box;
}
.img-circle:hover{
  transform: rotateZ(30deg);
  transition: .6s all;
}
/* 小屏 */
@media (max-width: 768px) {
  .container-m{
    padding: 0 10px;
  }
  .container-m .row{
    margin-left: 0;
    margin-right: 0;
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
  .news-time-m{
    font-size: 14px;
  }
  .news-title-m{
    font-size: 18px;
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
#respond{
  padding-bottom: 20px;
}
</style>