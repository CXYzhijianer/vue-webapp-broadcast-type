<template>
  <footer>
    <a href=""><i class="iconfont icon-denglu-copy"></i><span>首页</span></a>
    <a href=""><i class="iconfont icon-xin2"></i><span>我听</span></a>
    <a href=""><img src="../../assets/images/f_ico1.png" alt="" class="f_img"></a>
    <a href="">
      <i class="iconfont icon-faxianguanli"></i><span>发现</span></a>
    <a href=""><i class="iconfont icon-denglu-copy"></i><span>未登录</span></a>
  </footer>
</template>

<script>
  export default {
    name: "ListenFooter"
  }
</script>

<style scoped>

  footer {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: .53rem;
    background: #ffffff;
    display: -webkit-flex;
    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;       /* TWEENER - IE 10 */
    display: -webkit-flex;      /* NEW - Chrome */
    display: flex;

  }
  footer a {
    text-align: center;
    width:20%;
    display: -webkit-flex;
    text-align: center;
    padding-top: .1rem;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;

  }
  footer a span {
    color: #666666;
    font-size: .1rem;
    line-height: .2rem; }

  .icon-denglu-copy,.icon-denglu-copy, .icon-faxianguanli,.icon-xin2{
    color: #d2d2d2;
    margin-bottom: .03rem;
  }

  .f_img{
    margin-left: .2rem;
    width:.44rem ;
    height: .38rem;
  }

</style>
