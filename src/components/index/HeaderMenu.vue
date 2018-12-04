<template>
  <header>
    <div class="s_img" @click="handleRouter">
      <img src="../../assets/images/h.png" alt="" id="img1">
    </div>
    <a href="">推荐</a>
    <a href=""><img src="../../assets/images/h_ico1.png" alt="" class="h_img"></a>
    <a href="">小说</a>
    <a href="">直播</a>
    <a href="">儿童</a>
    <a href="">广播</a>
    <a href="">段子</a>
    <a href="">学习</a>
    <a href="">经典</a>
    <a href="">广播</a>
    <a href="">每日必听</a>
    <a href="">电脑</a>
  </header>
</template>

<script>
    export default {
        name: "HeaderMenu",
      methods:{
        handleRouter(){
          this.$router.push("/SearchSort");
        }
      }
    }
</script>

<style scoped>
  header {
    position: relative;
    width: 100%;
    height: .51rem;
    display: -webkit-flex;
    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;       /* TWEENER - IE 10 */
    display: -webkit-flex;      /* NEW - Chrome */
    display: flex;
    -webkit-flex-wrap: nowrap;
    overflow-x: auto;
    background: #65768d;
  }
  header a {
    line-height: .51rem;

    height: .51rem;
    font-size: .15rem;
    color: #f6f7f9;
    -webkit-flex-shrink: 0;
    margin: 0 .18rem; }
  header a:nth-child(1) {
    color: #f6f7f9;
    font-size: .18rem;
    background: url(../../assets/images/h_line.png) no-repeat center bottom;
    background-size: 100%; }

  header::-webkit-scrollbar {
    display: none; }
  .h_img{
    width:.37rem ;
    height: .24rem;
    margin-top: .15rem;
  }

  .s_img{
    position: fixed;
    right:0;
    top: .1rem;
    width:.23rem ;
    height: .22rem;

  }
  .s_img #img1{
    width:.23rem ;
    height: .22rem;

  }

</style>
