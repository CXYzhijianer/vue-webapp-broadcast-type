<template>
  <li class="guess-li" >
    <img id="s-img1" :src="guessInfo.pic">
    <p>{{guessInfo.title}}</p>
  </li>
</template>


<script>
    export default {
        name: "GuessLi",
        props:["guessInfo"]
    }
</script>

<style scoped>
  .guess-li{
    overflow: hidden;
    /*-webkit-flex-direction: column;*/
    margin-right: .07rem;
    -webkit-flex-shrink: 0;
    padding-bottom: .19rem;
  }
  .guess-li img{
    display: inline-block;
    width: 1.04rem;
    height: 1.05rem;
  }
  .guess-li p{
    color: #111111;
    font-size: .13rem;
  }

</style>
