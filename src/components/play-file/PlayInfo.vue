<template>
  <div class="play_file">
    <div class="playTitle">
      <span>{{i.title}}</span>
    </div>

    <div class="play_img">
      <img :src="i.pic" alt="">
    </div>
    <div class="play_process">
      <p>
        <img src="../../assets/images/w_ico4.png" alt="">
        <img src="../../assets/images/w_ico3.png" alt="">
      </p>
      <p>

      </p>
    </div>
    <div class="play_area">
      <img src="../../assets/images/w_ico5.png" alt="">
      <img src="../../assets/images/w_b.png" alt="">
      <img src="../../assets/images/w_ico6.png" alt="">
    </div>
  </div>
</template>

<script>
    export default {
      props:["i"],
        name: "PlayInfo"
    }
</script>

<style scoped>

  .playTitle{
    background:#ffffff;
    font-size: .14rem;
    color: #000000;
    font-weight: 600;
    height: .55rem;
    line-height: .55rem;
  }



  .play_file{
    background:#ffffff;
    padding-right: .1rem;
    padding-left: .1rem;
    display: -webkit-flex;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
    text-align: center;
    margin-bottom: .1rem;
  }
  .play_img{
    width: 2.12rem;
    height: 2.14rem;
  }
  .play_img img{
    margin-left: .8rem;
    display: inline-block;
    width: 2.12rem;
    height: 2.14rem;
  }
  .play_process{
    background:#ffffff;

    padding-top: .06rem;

    text-align: center;
    display: -webkit-flex;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
  }
  .play_process p:nth-of-type(1){
    display: -webkit-flex;
    -webkit-justify-content: space-between;
  }
  .play_process p:nth-of-type(1) img{
    width: .32rem;
    height: .27rem;
  }
  .play_process p:nth-of-type(2){
    width: .32rem;
    height: .27rem;
  }


  .play_area{
    background:#ffffff;

    text-align: center;
    padding-bottom: .23rem;
    padding-top: .16rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    vertical-align: middle;

  }
  .play_area img:nth-of-type(2){
    width: 1.78rem!important;
    height: .64rem!important;
    vertical-align: middle;
    text-align: center;

  }
  .play_area img{
    margin-top:.13rem;
    text-align: center;
    width: .32rem;
    height: .27rem;
    vertical-align: middle;
  }
  .play_area img:nth-of-type(1){
    margin-top: .3rem;
  }
  .play_area img:nth-of-type(3){
    margin-top: .3rem;
  }

</style>
