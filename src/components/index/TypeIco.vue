<template>
  <a href="" class="ico-type">
    <img :src="ico.pic" alt="" width="100%"><span>{{ico.title}}</span>
  </a>
</template>

<script>
    export default {
        name: "TypeIco",
        props:["ico"]
    }
</script>

<style scoped>
  .ico-type{
    -webkit-flex-shrink: 0;
    width: .51rem;
    height: .6rem;
    font-size: .12rem;
    color: #666666;
    margin: .15rem .1rem;
    text-align: center;
    padding-bottom: .2rem;
  }
  .ico-type img{
    margin-bottom: .07rem;
  }

</style>
