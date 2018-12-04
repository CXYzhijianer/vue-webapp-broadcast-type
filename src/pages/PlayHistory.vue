<template>
  <div class="play_body">

    <!--header-->
   <history-header></history-header>
    <!--section-->
   <history-section :playInfo="playListData" :todayInfo="todyData"></history-section>

    <!--footer-->
  <play-footer></play-footer>
  </div>
</template>

<script>
    import HistoryApis from "../apis/HistoryApis"
    import Common from "../assets/css/common.css";
    import HistoryHeader from "../components/play-history/HistoryHeader";
    import HistorySection from "../components/play-history/HistorySection";
    import PlayFooter from "../components/classcial/Play-footer";
    import SearctHeader from "../components/search-sort/SearctHeader";
    export default {
        name: "PlayHistory",
      components: {SearctHeader, PlayFooter, HistorySection, HistoryHeader,Common},
      data() {
        return {
          /*
          * ClasscialData数据
          * */
          playListData:[],
          todyData:[]
        }
      },
      methods:{
        /*
        * 加载页面数据的方法
        * */
        _initPageData(){
          HistoryApis.getHistoryData(data=>{
            this.playListData=data.historyData
            this.todyData=data.todyData
            // console.log(data.topicalData)
          })
        }
      },
      created(){
        this._initPageData();
      }
    }
</script>

<style scoped>

  .play_body{
    /*background: #f3f4f5;*/
    height: 100%;
    display: -webkit-flex;
    overflow-x: hidden;
    /*overflow: hidden;*/
    -webkit-flex-direction: column;

    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;

  }



</style>
