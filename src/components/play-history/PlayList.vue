<template>
  <li class="play_list">
    <div class="left_img">
      <img :src="play.pic" width="100%" alt="">
    </div>
    <div class="right_info">
      <h1>{{play.title}}</h1>
      <p>{{play.h1}}</p>
      <p>
        <span>{{play.date}}</span>
        <span>{{play.h2}}</span>
        <span>找相似</span>
        <span><img src="../../assets/images/b_ico1.png" alt="" class="del"></span>
      </p>
    </div>
  </li>
</template>

<script>

    export default {
        name: "PlayList",
        props:["play"]
    }
</script>

<style scoped>
  .play_list{
    padding-left:.14rem;
    display: -webkit-flex;
    display: -webkit-flex;
    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;       /* TWEENER - IE 10 */
    display: -webkit-flex;      /* NEW - Chrome */
    display: flex;
  }

  .left_img img{
    display: inline-block;
    width: .66rem;
    height: .66rem;
    margin-bottom: .35rem;
    margin-right: .1rem;
  }
  .right_info{
    border-bottom: 1px solid #eaeaea;
    /*display: -webkit-flex;*/
    /*-webkit-flex-direction: column;*/
    color: #999999;
    font-size: .15rem;
  }
  .right_info p:nth-of-type(1){
    margin-top: .11rem;
    margin-bottom: .11rem;
    vertical-align: middle;

  }

  .right_info p:nth-of-type(2){
    vertical-align: middle;

    background: url("../../assets/images/b_ico2.png") no-repeat left center;
    background-size:.13rem .13rem;
  }
  .right_info p:nth-of-type(2) span:nth-of-type(1){
    margin-left: .16rem;
    margin-right: .18rem;
    vertical-align: middle;

  }
  .right_info p:nth-of-type(2) span:nth-of-type(3){
    margin-left: .16rem;
    margin-right: .18rem;
    padding: .03rem;
    padding-left: .06rem;
    padding-right: .06rem;
    border: 1px solid #999999;
    border-radius: .1rem;
    vertical-align: middle;

  }

  .right_info h1{
    margin-top: .1rem;
    font-size: .18rem!important;
    color: #1e1e1e!important;
  }
  .del{
    vertical-align: middle;

    display: inline-block;
    width: .18rem;
    height: .19rem;
  }
</style>
