<template>
  <a href="">
    <img src="../../assets/images/p_ico3.png" alt="" width="100%"><span>已购</span>
  </a>
</template>

<script>
    export default {
        name: "ListTypeA"
    }
</script>

<style scoped>
   a{
    -webkit-flex-shrink: 0;
    -webkit-flex-direction: column;
    font-size: .12rem;
    color: #999999;
    -webkit-flex:1;
    text-align: center;
    padding-bottom: .1rem;

    /*display: -webkit-flex;*/
  }
   a img{
    margin-bottom: .07rem;
    width:.23rem;
    height: .21rem;
    margin-left: .23rem;
  }

  a span{
    padding-top: .6rem;
    margin-top: .6rem!important;
  }

</style>
