<template>
  <div class="classcial-body">
    <!--header-->
    <header>
      <div class="topTitle">
        <router-link to="/">
          <a href=""></a>
        </router-link>

        <span>排行榜</span>
        <a href="#"></a>
      </div>
      <div class="nav_list">
        <a href="javascript:;" class="hover">免费榜</a>
        <a href="">飙升榜</a>
        <a href="">付费榜</a>
        <a href="">VIP热听榜</a>
      </div>
    </header>
    <!-- content -->

    <div class="content">
      <classcial-section :topic="topicalD" :type="typeD" :sound="soundbookData"></classcial-section>
    </div>
    <!--footer-->

   <play-footer></play-footer>
  </div>
</template>

<script>

    //导入ClasscialApis模块
    import $ from "jquery";
    import ClasscialApis from "../apis/ClasscialApis";
    import Common from "../assets/css/common.css";
    import ClasscialSection from "../components/classcial/ClasscialSection";
    import PlayFooter from "../components/classcial/Play-footer";
    export default {
        name: "Classcial",
        components: {PlayFooter, ClasscialSection,Common},
      data() {
        return {
          /*
          * ClasscialData数据
          * */
          topicalD:[],
          soundbookData:[],
          typeD:[],
              soundBookData:[
                {"title":"经典必听","img2":"static/images/ico_1.png"},
                {"title":"每日必听","img2":"static/images/ico_2.png"},
                {"title":"一键听","img2":"static/images/ico_3.png"},
                {"title":"付费精品","img2":"static/images/ico_4.png"},
                {"title":"听西安","img2":"static/images/ico_5.png"}
              ],
            }
      },
      methods:{
          /*
          * 加载页面数据的方法
          * */
          _initPageData(){
            ClasscialApis.getClasscialData(data=>{
              this.topicalD=data.topicalData
              this.typeD=data.typeData
              this.soundbookData=data.soundbookData
              // console.log(data.topicalData)
            })
          }
      },
      created(){
        this._initPageData();
      },
      mounted(){
          let navList=$('.nav_list a');
          for (let i=0;i<navList.length;i++){
            navList[i].onclick=function () {
            }
          }
      }
    }
</script>

<style scoped>
  .topTitle {
    width: 100%;
    height: .55rem;
    line-height: .55rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between; }

  .topTitle a:nth-child(1) {
    padding-left: .2rem;
    width: .28rem;
    height: .3rem;
    background: url(../assets/images/c_ico1.png) no-repeat 0.05rem 0.1rem;
    background-size: .21rem .22rem; }

  .topTitle a:nth-child(3) {
    padding-right: .2rem;
    width: .28rem;
    height: .3rem;
    background: url(../assets/images/c_ico2.png) no-repeat 0.08rem 0.1rem;
    background-size: .21rem .22rem; }

  .topTitle span {
    font-size: .18rem;
    color: #323232; }

  .nav_list {
    width: 100%;
    height: .37rem;
    display: -webkit-flex;
    display: -webkit-flex;
    display: -webkit-flex;
    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;       /* TWEENER - IE 10 */
    display: -webkit-flex;      /* NEW - Chrome */
    display: flex;
    -webkit-flex-wrap: nowrap;
    overflow-x: auto;
    border-bottom: 3px solid #f3f3f3;
  }

  .nav_list a {
    line-height: .37rem;
    height: .37rem;
    font-size: .15rem;
    color: #979798;
    -webkit-flex-shrink: 0;
    margin: 0 .18rem;
    -webkit-flex: 1;
    -webkit-flex: 1;
    -webkit-box-flex: 1;              /* OLD - iOS 6-, Safari 3.1-6 */
    -moz-box-flex: 1;                 /* OLD - Firefox 19- */
    -webkit-flex: 1;                     /* Chrome */
    -ms-flex: 1;                           /* IE 10 */
    flex: 1;

  }
  /*.hover:hover{*/
    /*color: #000000;*/
    /*font-size: .18rem;*/
    /*font-weight: 600;*/
    /*background-size: .01rem .043rem;*/
    /*background: url("../assets/images/c_ico3.png") no-repeat center bottom;*/

  /*}*/


  .classcial-body{
    height: 100%;
    display: -webkit-flex;
    display: -webkit-flex;
    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;       /* TWEENER - IE 10 */
    display: -webkit-flex;      /* NEW - Chrome */
    display: flex;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    background: #ffffff;
    overflow-x: hidden;
  }




  .content {
    -webkit-flex: 1;
    overflow-x: hidden;
    overflow-y: auto; }

  .content::-webkit-scrollbar {
    display: none; }










</style>
