<template>
  <li class="good-book-list-li">
    <img :src="goodBookInfo.pic" width="100%" class="img1">
    <p>{{goodBookInfo.title}}</p>
    <p>
      <span><img src="../../assets/images/ico_8.png" alt="" class="img2"></span>
      <span>{{goodBookInfo.num}}</span>
    </p>
  </li>
</template>

<script>
    export default {
        name: "GoodBookListLi",
        props:["goodBookInfo"]
 }
</script>

<style scoped>

  .good-book-list-li {
    -webkit-flex-direction: column;
  }
  .img1 {
    width: 1.15rem;
    height: 1.18rem;
    margin: .13rem;
    margin-left: .06rem;
  }
  .good-book-list-li p {
    line-height: .2rem;
  }
  .good-book-list-li p:nth-of-type(1) {

    color: #000000;
    font-weight: 600;
    font-size: .16rem;
  }
  .good-book-list-li p:nth-of-type(2) {
    display: -webkit-flex;
    color: #6e6e6e;
    font-size: .12rem;
  }
  .img2{
    margin-top: .12rem;margin-right: .1rem;

    width: .14rem;
    height: .14rem;
    background: url("../../assets/images/ico_8.png") no-repeat left center;
    background-size: .14rem .14rem;
  }
  .good-book-list-li p:nth-of-type(2) span:nth-child(2) {
    margin-top: .1rem;
    color: #9c9c9c;
    font-size: .14rem;
  }

</style>
