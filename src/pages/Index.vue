<template>

  <div class="all">
      <index-header></index-header>
      <index-section  @del="delone" :guesslists="guessD" :booklists="bookListData" :goodbooklist="goodBookList" :typelist="typeListData" :slider="sliderData"></index-section>
      <index-footer></index-footer>
  </div>
</template>

<script>
    import Common from "../assets/css/common.css";
    import IndexHeader from "../components/index/IndexHeader";
    import IndexSection from "../components/index/IndexSection";
    import IndexFooter from "../components/index/IndexFooter";

    const AJAXURL="http://localhost:3000/guesslist"

    export default {
        name: "Index",
      components:{IndexFooter,IndexSection, IndexHeader,Common},
      data(){
        return {
          guessD:[],
          bookListData:[],
          goodBookList:[],
          typeListData:[],
          sliderData:[]
        }

      },
      methods: {
        /**
         * 加载页面数据
         * @private
         */
        _initPageData(){
          //获取数据
          fetch(AJAXURL).then((res)=>{
            // console.log(res)
            res.json().then(data=>{
              this.guessD=data.guessdata
              this.bookListData=data.bookListData
              this.goodBookList=data.goodBookList
              this.typeListData=data.typeListData
              this.sliderData=data.sliderData

              // console.log(this.guessD)
            })
          })
        },
        delone(i) {
          this.bookListData[i].splice(i,1)
        },
      },
      mounted(){
        // console.info(this.guessD)
      },
      created(){
        //首页加载数据
        this._initPageData()
      },
      // watch:{
      //
      //   //监听product中的数量发生变化，重新计算
      //   guessdata:{
      //     handler:function (n,o) {
      //       this._countCarts(this.guessdata)
      //     },
      //     deep:true
      //   },
      // },
    }
</script>

<style scoped>
  .all{
    height: 100%;
    overflow-x: hidden;
  }

</style>
