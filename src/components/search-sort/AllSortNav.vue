<template>
  <div class="all-sort-nav sell-good-book">
    <a href="">推荐</a>
    <a href="">VIP</a>
    <a href="">小说</a>
    <a href="">直播</a>
    <a href="">广播</a>
    <a href="">其它</a>
    <a href="">VIP</a>
    <a href="">小说</a>
    <a href="">直播</a>
    <a href="">广播</a>
    <a href="">直播</a>
  </div>
</template>

<script>
    export default {
        name: "AllSortNav"
    }
</script>

<style scoped>
  .all-sort-nav {
    /*width: 100%;*/
    height: .37rem;
    display: -webkit-flex;
    -webkit-flex-wrap: nowrap;
    overflow-x: auto;
    margin-left: .16rem;
    border-bottom: 1px solid #dbdcdd;
  }

  .all-sort-nav a {
    line-height: .28rem;
    height: .28rem;
    width: .62rem;
    font-size: .14rem;
    color: #999999;
    -webkit-flex-shrink: 0;
    text-align: center;
  }

  .all-sort-nav a:nth-of-type(1) {
    color: #f86442;
    margin-left: 0px;
    background: url("../../assets/images/s_nav.png") no-repeat center left;
    background-size: .112rem .14rem;
  }

  .all-sort-nav::-webkit-scrollbar {
    display: none; }

  .sell-good-book{
    margin-bottom: .1rem;
  }

</style>
