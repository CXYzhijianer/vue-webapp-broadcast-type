<template>
  <div class="content-box">
    <!--//轮播图-->
    <section-slider :slderImg="slider"></section-slider>
    <!--类型-->
    <list-type :typeInfo="typelist"></list-type>

    <div class="loveBox">
      <div class="loveBox_left">
        <span class="order">猜你喜欢</span>
        <span class="order special">点我猜更准</span>
      </div>
      <a href="#" id="linkA">更多<i class="iconfont icon-jiantou" id="icon-jiantou"></i></a>
    </div>

    <ul class="guess-list" >
      <guess-li :guessInfo="g" :key="index" v-for="(g,index) in guesslists"></guess-li>
    </ul>
    <div class="change-box">
      <p>
        换一批
      </p>
    </div>
      <ul class="book-list">
        <!--//需要给子组建定义一个输出调用方法的接口-->
        <book-list-li @del="deleteli" :bookListInfo="b" :idx="i" :key="i" v-for="(b,i) in booklists"></book-list-li>
      </ul>
    <div class="good-book-list">
      <div class="good-book-list-title">
        精品
      </div>
      <ul>
        <good-book-list-li :goodBookInfo="j" :key="index" v-for="(j,index) in goodbooklist"></good-book-list-li>

      </ul>
    </div>

    <div class="recommend-list">
      <ul class="book-list">
        <book-list-li  :bookListInfo="b" :key="index" v-for="(b,index) in booklists"></book-list-li>
      </ul>
    </div>
  </div>
</template>

<script>
    import SectionSlider from "./SectionSlider";
    import ListType from "./ListType";
    import GuessLi from "./GuessLi";
    import BookListLi from "./BookListLi";
    import GoodBookListLi from "./GoodBookListLi";
    import SwiperBox from "./SwiperBox";
    export default {
      name: "IndexSection",
      components: {SectionSlider, SwiperBox, GoodBookListLi, BookListLi, GuessLi, ListType},
      props: ["guesslists", "booklists", "goodbooklist", "typelist", 'slider'],
      mounted() {
        console.info(123 + this.guesslists)
      },
      methods: {
        deleteli(i) {//接受子组件i的方法
          this.$emit("del", i)
        }//传给页面级组件
      }
    }
</script>

<style scoped>
  .content-box{
    top:1rem;

    position:relative;

    width: 100%;
    -webkit-flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .content-box::-webkit-scrollbar {
    display: none;
  }

   .loveBox{
    display: -webkit-flex;
    padding-left: .08rem;
    padding-right: .06rem;
    line-height: .5rem;
    border-top:1px solid #f4f4f4;
    background: #ffffff;
    padding-bottom: .2rem;
  }
  .loveBox_left{
    display: -webkit-flex;
    color: #111111;
    font-size: .18rem;
    font-weight: 600;
    background: url("../../assets/images/ico_6.png") no-repeat .8rem center;
    background-size:.21rem .18rem;
    margin-left: .1rem;
  }

  #linkA {
    font-size: .16rem;
    color: #9c9c9c;
    margin-left:.9rem;
  }
  .special{
    font-size: .18rem;
    color:#f86847;
    margin-left: .30rem;

  }
  #icon-jiantou{
    font-size: .2rem;
    color: #666666;
  }


  .guess-list{
    display: -webkit-flex;
    overflow: hidden;
    background: #ffffff;
    padding-left: .1rem;
    padding-right: .07rem;
    -webkit-flex-wrap: wrap;

  }


  .change-box p {
    text-align: center;
    width: .91rem;
    height: .38rem;
    color: #f86442;
    font-size: .13rem;
    background: #ffece8;
    border-radius: .2rem;
    line-height: .38rem;

  }
  .change-box{
    padding: .11rem 1.3rem;
    overflow: hidden;
    text-align: center;
    line-height: .58rem;

  }

  .book-list{
    -webkit-flex-direction: column;
    -webkit-flex-wrap: wrap;
    display: -webkit-flex;
    padding-left: .15rem;
    padding-right: .2rem;

  }


  .good-book-list {
    margin-left: .1rem;
    margin-right: .1rem;
    background: #fff;
    padding-bottom: .08rem;
  }

  .good-book-list-title{
    color: #000000;
    font-weight: 600;
    font-size: .2rem;
    line-height: .7rem;
    border-top:1px solid #e8e8e8;
  }
  .good-book-list ul {
    display: -webkit-flex;
    -webkit-flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-flex-shrink: 0;
  }

  .good-book-list ul::-webkit-scrollbar {
    display: none;
  }

</style>
