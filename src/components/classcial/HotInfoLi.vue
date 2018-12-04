<template>
  <div :id="id" class="hot">
    <span class="noun"><img :src="info.pho" alt=""></span>
    <img :src="info.pic" alt="">
    <div>
      <p>{{info.title}}</p>
      <p>{{info.h1}}</p>
      <p>
        <span>{{info.n}}亿</span>
        <span>{{info.ji}}集</span>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HotInfoLi",
        props:["info","id"]
    }
</script>

<style scoped>
  .hot{
    display: -webkit-flex;

    font-size: .16rem;
    color: #979798;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: .16rem;
    padding-right: .15rem;
  }
  .hot img{
    width:.66rem;
    height:.66rem;
  }
  .noun{
    width:.22rem;
    height:.22rem;

    margin-left:.032rem;
    margin-right:.032rem;
    text-align: center;
  }
  .noun img{
    width:.22rem!important;
    height:.22rem!important;
  }
  .hot div p{
    margin-bottom:.03rem;
  }
  .hot div p{
    margin-left:.1rem;
  }

  .hot div p:nth-of-type(1){
    font-size: .17rem;
    color: #242424;
  }
  .hot div p:nth-of-type(2){
    width: 1.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .hot div p:nth-of-type(3){
    text-align: left;
  }

  .hot div p:nth-of-type(3) span:nth-child(1){
    background: url("../../assets/images/c_ico8.png") no-repeat left center;
    background-size:.13rem .13rem ;
    padding-left: .15rem;
    font-size: .14rem;
  }
  .hot div p:nth-of-type(3) span:nth-child(2){
    background: url("../../assets/images/c_ico7.png") no-repeat left center;
    background-size:.13rem .13rem ;
    padding-left: .15rem;
    font-size: .14rem;

  }

</style>
