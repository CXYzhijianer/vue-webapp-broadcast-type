<template>
  <header>
    <div class="topTitle">
      <router-link to="/"> </router-link>
      <span></span>
      <a href="#"></a>
    </div>
  </header>
</template>

<script>
    export default {
        name: "PlayHeader"
    }
</script>

<style scoped>
  header{
    background:#ffffff url(../../assets/images/w_ico2.png) no-repeat right center;
    background-size: .21rem .22rem;
    padding-left:.05rem;
    padding-right: .05rem;
  }
  .topTitle {
    background:#ffffff;
    width: 100%;
    height: .55rem;
    line-height: .55rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;

  }

  .topTitle a:nth-child(1) {
    padding-left: .2rem;
    width: .28rem;
    height: .3rem;
    background: url(../../assets/images/w_ico1.png) no-repeat 0.05rem 0.1rem;
    background-size: .21rem .22rem; }

  .topTitle a:nth-child(3) {
    padding-right: .3rem;
    width: .28rem;
    height: .3rem;
    background: url(../../assets/images/c_ico2.png) no-repeat 0.08rem 0.1rem;
    background-size: .21rem .22rem; }

  .topTitle span {
    font-size: .18rem;
    color: #323232; }

</style>
