<template>
  <li class="book-list-li">
    <div class="book-info">
      <p>{{bookListInfo.title}}</p>
      <p>{{bookListInfo.h1}}</p>
      <p>{{bookListInfo.h2}}</p>
      <p>
        <span></span>
        <span>{{bookListInfo.num}}</span>
        <span></span>
        <span>{{bookListInfo.jishu}}</span>
      </p>
    </div>
    <div class="book-img">
      <p></p>
      <p @click="del(idx)"><img :src="bookListInfo.pic" alt=""></p>
    </div>
  </li>
</template>

<script>
    export default {
        name: "BookListLi",
      //设置接口
        props:["bookListInfo","idx"],
        methods:{
          delt(i){
            this.$emit("del",i)
          }//输出接口
        }

    }
</script>

<style scoped>
  .book-list-li{
    width: 100%;
    -webkit-flex-shrink: 0;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    -ms-justify-content: space-between;
    -ms-justify-content: space-between;
    -webkit-justify-content:space-between;
    justify-content:space-between;
    border-top:1px solid #e8e8e8;
    padding-bottom: .11rem;
  }
  .book-info p:nth-of-type(1){
    color: #6e6e6e;
    font-size: .12rem;
    line-height: .47rem;

  }
  .book-info p:nth-of-type(2){
    color: #000000;
    font-weight: 600;
    font-size: .16rem;
    margin-bottom: .12rem;
  }
  .book-info p:nth-of-type(3){
    color: #6e6e6e;
    font-size: .14rem;
    margin-bottom: .36rem;
    width: 2rem;

  }
  .book-info p:nth-of-type(4){
    color: #6e6e6e;
    font-size: .12rem;
    display: -webkit-flex;
    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;       /* TWEENER - IE 10 */
    display: -webkit-flex;      /* NEW - Chrome */
    display: flex;
  }
  .book-info p:nth-of-type(4) span:nth-of-type(1){
    width: .14rem;
    height: .14rem;
    margin-right: .02rem;
    background: url("../../assets/images/ico_8.png") no-repeat left center;
    background-size: .14rem .14rem;

  }
  .book-info p:nth-of-type(4) span:nth-of-type(3){
    width: .14rem;
    height: .14rem;
    margin-right: .02rem;
    margin-left: .1rem;
    background: url("../../assets/images/ico_9.png") no-repeat left center;
    background-size: .14rem .14rem;

  }

  .book-img p:nth-of-type(1){
    float: right;
    width: .19rem ;
    height: .14rem;
    background: url("../../assets/images/cha.png") no-repeat right center;
    background-size: .19rem .14rem;


  }
  .book-img p:nth-of-type(2){

  }
  .book-img p:nth-of-type(2) img {
    display: inline-block;
    width: .91rem;
    height: .97rem;
    color: #66e6e;
    font-size: .12rem;
    /*margin-left: .6rem;*/
    margin-top: .3rem;
  }
</style>
