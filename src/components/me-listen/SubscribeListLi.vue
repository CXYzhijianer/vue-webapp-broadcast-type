<template>
  <li class="subscribe-list-li">
    <div>
      <img :src="subscribeInfo.pic" width="100%" alt="">
    </div>
    <div class="info-box">
      <p>{{subscribeInfo.title}}</p>
      <p>{{subscribeInfo.h2}}</p>
      <p>{{subscribeInfo.date}}</p>
    </div>
  </li>
</template>

<script>
    export default {
        name: "SubscribeListLi",
      props:["subscribeInfo"]
    }
</script>

<style scoped>
  .subscribe-list-li {
    display: -webkit-flex; }
  .subscribe-list-li img {
    width: .66rem;
    height: .66rem;
    margin-right: .13rem; }

  .info-box {
    display: -webkit-flex;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
  }
  .info-box p:nth-of-type(1) {
    display: -webkit-flex;
    color: #151516;
    font-size: .16rem; }
  .info-box p:nth-of-type(1) span:nth-of-type(1) {
    color: #e02e24;
    font-size: .13rem;
    width: .27rem;
    height: .16rem;
    border: 1px solid #e02e24;
    margin-left: .06rem;
    border-radius: .02rem;
    margin-top: .02rem;
    text-align: center;
    line-height: .16rem; }
  .info-box p:nth-of-type(2) {
    color: #9c9c9c;
    font-size: .13rem;
    line-height: .27rem; }
  .info-box p:nth-of-type(3) {
    color: #9c9c9c;
    font-size: .13rem;
    line-height: .27rem; }

</style>
