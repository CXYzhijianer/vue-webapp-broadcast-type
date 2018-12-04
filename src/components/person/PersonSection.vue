<template>
  <section>
    <div class="login-box">
      <a href="" class="login-left">
        <img src="../../assets/images/p_h.png" width="100%" alt="">
      </a>
      <a href="" class="login-center"><span>点击登录</span><span id="span">登录后数据不丢失</span></a>
      <a href="" class="login-right">
        <img src="../../assets/images/p_h1.png" alt="" width=".22rem" height=".23rem">
        <span>登录领取</span>
        <span>积分会员</span>
      </a>
    </div>

    <div class="banner">
      <img src="../../assets/images/p_banner.png" alt="">
    </div>


    <div class="list_type">
      <div class="function_left">
        <list-type-a></list-type-a>
        <list-type-a></list-type-a>
        <list-type-a></list-type-a>
        <list-type-a></list-type-a>
        <list-type-a></list-type-a>

      </div>
    </div>


    <!--<list-type :typeInfo="typelist"></list-type>-->



    <div class="list_type">
      <div class="function_left">
        <a href="" class="focus-Img"><img src="" alt="" width="100%"><span id="record" >经典必听</span></a>
        <!--<a href=""><img src="../../assets/images/p_ico7.png" alt="" width="100%"><span>每日必听</span></a>-->
        <!--<a href=""><img src="../../assets/images/p_ico8.png" alt="" width="100%"><span>一键听</span></a>-->
        <!--<a href=""><img src="../../assets/images/p_ico9.png" alt="" width="100%"><span>付费精品</span></a>-->
        <list-type-a></list-type-a>
        <list-type-a></list-type-a>
        <list-type-a></list-type-a>


      </div>
    </div>

    <div class="type-nav-box">
      <ul class="type-nav">
        <!--<li>我的积分</li>-->
        <!--<li>我的收听偏好</li>-->
        <type-nav-li></type-nav-li>
        <type-nav-li></type-nav-li>
        <type-nav-li></type-nav-li>

        <li class="focus-li">我的积分<span class="focus-span">零几分会员</span></li>
      </ul>
    </div>


    <div class="type-nav-box">
      <ul class="type-nav">
        <type-nav-li></type-nav-li>
        <type-nav-li></type-nav-li>

        <!--<li>我的积分</li>-->
        <!--<li>我的收听偏好</li>-->
        <li class="focus-li night-parrent" id="night-parrent">我的积分零</li>
      </ul>
    </div>

    <div class="type-nav-box">
      <ul class="type-nav">
        <type-nav-li></type-nav-li>
        <type-nav-li></type-nav-li>
        <type-nav-li></type-nav-li>
        <type-nav-li></type-nav-li>

        <!--<li>我的积分</li>-->
        <!--<li>我的收听偏好</li>-->
        <!--<li>我的收听偏好</li>-->
        <!--<li>我的收听偏好</li>-->
        <li class="focus-li">我的积分</li>
      </ul>
    </div>

  </section>
</template>

<script>
    import ListType from "../index/ListType";
    import TypeNavLi from "./TypeNavLi";
    import ListTypeA from "./ListTypeA";
    export default {
        name: "PersonSection",
      components: {ListTypeA, TypeNavLi, ListType},
      props:["typelist"],
    }
</script>

<style scoped>
  section{
    width: 100%;

    -webkit-flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  section::-webkit-scrollbar{
    display: none;
  }



  .login-box{
    background: #ffffff;

    width: 100%;
    display: -webkit-flex;
    padding-left: .13rem;
    padding-top: .05rem;
    padding-bottom: .05rem;
  }
  .login-left img{
    width: .65rem;
    height: .65rem;

  }
  .login-center{
    margin-left: .1rem;
    color: #121212;
    font-size: .18rem;
    display: -webkit-flex;
    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;       /* TWEENER - IE 10 */
    display: -webkit-flex;      /* NEW - Chrome */
    display: flex;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;  }
  .login-center span:nth-of-type(1){
    margin-top: .11rem;
  }
  .login-right{
    display: -webkit-flex;
    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;       /* TWEENER - IE 10 */
    display: -webkit-flex;      /* NEW - Chrome */
    display: flex;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    height: .36rem;
    background: #ffece8;
    padding-top:.06rem;
    padding-bottom: .05rem;
    padding-left: .42rem;
    padding-right: .25rem;
    border-top-left-radius: .2rem;
    border-bottom-left-radius: .2rem;
    -webkit-justify-content: space-around;
    margin-top: .11rem;
    margin-left: .6rem;
    position: relative;
  }
  .login-right span{

    font-size: .14rem;
    color: #999999;
  }
  .login-right img{
    display: block;
    position: absolute;
    left: .08rem;
    top: .11rem;
    width: .21rem;
    height:.22rem;
  }
  .login-right span:nth-of-type(2){
    color: #ff7b5d;
  }
  #span{
    font-size: .12rem;
    color: #999999;
    margin-top: .02rem;
  }


  .banner{
    display: -webkit-flex;
    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;       /* TWEENER - IE 10 */
    display: -webkit-flex;      /* NEW - Chrome */
    display: flex;
    padding-left:.15rem ;

  }
  .banner img{
    width: 3.31rem;
    height: .5rem;
    display: inline-block;
    margin-top: .14rem;
    margin-bottom: .14rem;
  }



  .list_type {
    width: 100%;
    padding-left:.15rem ;
    padding-right:.15rem ;
  }

  .list_type::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: .0rem;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 2px;
    text-align: center; }

  .function_left{

    display: -webkit-flex;
    background: #ffffff url("../../assets/images/p_bg.png") no-repeat 2.6rem center;
    background-size: .14rem .52rem;
    margin-right: .3rem;
    padding-top: .1rem;
    margin-bottom: .14rem;

  }
  .function_left a{
    -webkit-flex-shrink: 0;
    -webkit-flex-direction: column;
    font-size: .12rem;
    color: #999999;
    -webkit-flex:1;
    text-align: center;
    padding-bottom: .1rem;

    /*display: -webkit-flex;*/
  }
  .function_left a img{
    margin-bottom: .07rem;
    width:.23rem;
    height: .21rem;
    margin-left: .23rem;
  }
  .focus-Img{
    width:.5rem!important;
    height: .5rem!important;
    background: url("../../assets/images/p_ico12.png") no-repeat center 0rem;
    background-size: .4rem .4rem;
  }
  .focus-Img span{
    padding-top: .6rem;
    margin-top: .6rem!important;
  }
#record{
  marn-top:.4rem;
}
  .type-nav{
    padding-left: .15rem;
    background: #ffffff;
    margin-bottom: .06rem;
  }

  .type-nav li{
    padding-left: .1rem;
    font-size: .14rem;
    color: #111111;
    line-height: .5rem;
    border-bottom: 1px solid #e3e3de;
    background: url("../../assets/images/p_ico10.png") no-repeat 3.2rem center;
    background-size: .08rem .1rem;

  }


  .focus-span{
    color: #f86442;
    padding-right: .36rem;
  }

  .focus-li{
    display: -webkit-flex;
    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;       /* TWEENER - IE 10 */
    display: -webkit-flex;      /* NEW - Chrome */
    display: flex;
    -webkit-justify-content: space-between;


  }



  #night-parrent{
    background: url("../../assets/images/p_ico11.png") no-repeat 2.8rem center!important;
    background-size: .45rem .28rem!important;

  }


</style>
