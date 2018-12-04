<template>
  <div class="play_scribute">
    <div class="Info_box">
      <img :src="sc.pic" alt="">
      <div id="subscribe_title">
        <h1>{{sc.title}}</h1>
        <h2>{{sc.shu}}人阅读</h2>
      </div>
    </div>
    <p class="subscribe">免费订阅</p>
  </div>
</template>

<script>
    export default {
      props:["sc"],
        name: "PlayScribute"
    }
</script>

<style scoped>

  .play_scribute{
    padding-right: .2rem;
    /*padding-left: .1rem;*/
    padding-top: .1rem;
    padding-bottom: .1rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    height: .5rem;
  }
  .play_scribute img{
    width: .52rem;
    height: .57rem;
  }
  .play_scribute h1{
    margin-right: .52rem;
    font-size: .16rem;
    color:#000000;
    margin-top: .03rem;
  }
  #subscribe_title{
    display: -webkit-flex!important;
    -webkit-flex-direction: column!important;
    /*height: .4rem*/
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
  }
  .Info_box{
    display: -webkit-flex!important;
  }
  .play_scribute h2{
    font-size: .14rem;
    color:#999999;
    margin-top: .05rem;
  }
  .play_scribute .subscribe{
    font-size: .14rem!important;
    color:#f86442;
    margin-top: .1rem;
  }


</style>
