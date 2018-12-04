<template>
  <div class="type-box">
    <div class="type">
      <a href="">推荐</a>
      <a href="">VIP</a>
      <a href="">小说</a>
      <a href="">直播</a>
      <a href="">广播</a>
      <a href="">推荐</a>
      <a href="">VIP</a>
      <a href="">小说</a>
      <a href="">直播</a>
      <a href="">广播</a>
      <a href="">直播</a>
      <a href="">广播</a>
      <a href="">情感生活</a>
      <a href="">教育培训</a>
      <a href="">直播</a>
      <a href="">商业英语</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TypeBox"
    }
</script>

<style scoped>
  .type-box{
    width: 100%;
    padding-left: .14rem;
    padding-right: .01rem;
    overflow: hidden;
    display: -webkit-flex;
    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;       /* TWEENER - IE 10 */
    display: -webkit-flex;      /* NEW - Chrome */
    display: flex;

  }
  .type{
    display: -webkit-flex;
    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;       /* TWEENER - IE 10 */
    display: -webkit-flex;      /* NEW - Chrome */
    display: flex;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -o-flex-wrap: wrap;
    flex-wrap: wrap;
    /*border: 0;*/
  }
  .type a{
    -webkit-flex-shrink: 0;
    -webkit-box-shrink: 0;              /* OLD - iOS 6-, Safari 3.1-6 */
    -moz-box-flex-shrink: 0;                 /* OLD - Firefox 19- */
    -webkit-flex-shrink: 0;                     /* Chrome */
    -ms-flex-shrink: 0;                           /* IE 10 */
    -webkit-flex-shrink: 0;

    margin-right: .07rem;
    margin-bottom: .07rem;
    text-align: center;
    width: .77rem;
    height: .43rem;
    line-height: .43rem;
    background: #ffffff;
    font-size: .16rem;
    color: #000;
    border-radius: .06rem;
  }


</style>
