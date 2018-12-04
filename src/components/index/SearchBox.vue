<template>
  <div class="searchBox">
    <input type="text" value="双语英语">
    <a href=""><img src="../../assets/images/h_ico4.png" alt=""></a>
    <a href=""><img src="../../assets/images/h_ico5.png" alt=""></a>
  </div>
</template>

<script>
    export default {
        name: "SearchBox"
    }
</script>

<style scoped>
  .searchBox{
    width: 3.5rem;
    background: #6f819b;
     display: -webkit-flex;
    padding-left: .1rem;
    padding-top: .1rem;
    padding-bottom: .16rem;
  }
  .searchBox input {
    width: 2.5rem;
    background: #95a3b4 url(../../assets/images/sou.png) no-repeat 0.1rem center;
    background-size: .18rem .18rem;
    border-radius: .2rem;
    border: none;
    outline: none;
    text-indent: .3rem;
    line-height: .3rem;
    z-index: 10;
    font-size: .14rem;
    color: #ffffff;
  }
  .searchBox a{
    overflow: hidden;
    padding: 0;
  }
  .searchBox a:nth-of-type(1){
    margin-left: .3rem;
  }
  .searchBox a:nth-of-type(2){
    margin-left: .1rem;
  }
   .searchBox a img{
    margin-top: .07rem;
    width:.23rem;
    height: .2rem;

  }


</style>
