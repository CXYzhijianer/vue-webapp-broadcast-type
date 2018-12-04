<template>
  <div class="nav-box">
    <div class="nav-box-title">
      <span class="subscribe focus">订阅</span>
      <span class="subscribe special">一件听</span>
      <span class="subscribe special">推荐</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "NavBox"
    }
</script>

<style scoped>
  .nav-box{
    display: -webkit-flex;
    padding-left: .18rem;
    padding-right: .1rem;
    line-height: .5rem;
    border-top:1px solid #f4f4f4;
    padding-bottom: .2rem;
  }
  .nav-box-title{
    display: -webkit-flex;
    color: #111111;
    font-size: .18rem;
    font-weight: 600;
  }
  .focus{
    background: url("../../assets/images/m_line.png") no-repeat center bottom;
    background-size: .21rem .042rem;
  }
  .special{
    font-size: .18rem;
    color:#999999;
    margin-left: .21rem;

  }

</style>
