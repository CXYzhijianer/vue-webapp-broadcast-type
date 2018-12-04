<template>
  <header>
    <div class="topTitle">
      <router-link to="/"></router-link>
      <span>分类</span>
      <a href="#">编辑</a>
    </div>
  </header>
</template>

<script>
    export default {
        name: "SearctHeader"
    }
</script>

<style scoped>
  header {
    background: #f3f4f5;
    width: 100%;
    height: .40rem;
    line-height: .40rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    border-bottom: 1px solid #dadada;
  }

  .topTitle {
    width: 100%;
    height: .46rem;
    line-height: .46rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
  }

  .topTitle a:nth-child(1) {
    padding-left: .2rem;
    width: .28rem;
    height: .3rem;
    background: url("../../assets/images/s_jian.png") no-repeat 0.05rem 0.1rem;
    background-size: .2rem .16rem; }


  .topTitle a:nth-of-type(1) {
    text-align: center;
    margin-bottom: .5rem;
    padding-left: .12rem;
  }
  .topTitle a:nth-of-type(2) {
    color: #f86442;
    font-size: .16rem;
    padding-right: .12rem;
  }
  .topTitle span {
    font-size: .16rem;
    color: #3f3f3f;
  }

</style>
