<template>
  <div class="menu">
    <a href="javascript:;" class="link-a"><img src="../../assets/images/m_ico1.png" alt=""/><span>下载</span></a>
    <a href="javascript:;" class="link-a"><img src="../../assets/images/m_ico2.png" alt=""/><span>历史</span></a>
    <a href="javascript:;" class="link-a"><img src="../../assets/images/m_ico3.png" alt=""/><span>已购</span></a>
    <a href="javascript:;" class="link-a"><img src="../../assets/images/m_ico4.png" alt=""/><span>喜欢</span></a>
  </div>
</template>

<script>
    export default {
        name: "MenuBox"
    }
</script>

<style scoped>
  .menu{
    display: -webkit-flex;
    padding-top: .16rem;
    padding:.1rem .2rem;
    margin:.18rem;
    box-shadow:0 0 3px 5px #f7f7f7;
  }
  .link-a{
    -webkit-flex:1;
    color: #000000;
    font-size: .14rem;
    text-align: center;
  }
  .link-a img{
    width: .48rem;
    height: .43rem;
    margin:0 auto .09rem;
  }

</style>
