<template>
  <div class="play_file_body">
    <!--header-->
    <play-header></play-header>
    <!-- content -->
    <div class="content">
     <play-section :guess="guessData" :play="playData" :scribute="scributeData" :sound="sounddata"></play-section>
    </div>
    <!--footer-->
    <play-footer></play-footer>
  </div>
</template>

<script>

    import Common from "../assets/css/common.css"
    import PlayHeader from "../components/play-file/PlayHeader";
    import PlayFooter from "../components/classcial/Play-footer";
    import PlaySection from "../components/play-file/PlaySection";
    import PlayFileApis from "../apis/PlayFileApis";
    export default {
        name: "PlayFile",
      components: {PlaySection, PlayFooter, PlayHeader,Common},
      data() {
        return {
          /*
          * ClasscialData数据
          * */
          playData:[],
          guessData:[],
          scributeData:[],
          sounddata:[]
        }
      },
      methods:{
        /*
        * 加载页面数据的方法
        * */
        _initPageData(){
          PlayFileApis.getPlayData(data=>{
            this.playData=data.playInfoData
            this.guessData=data.guessdata
            this.scributeData=data.scributeData
            this.sounddata=data.sounddata
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


  .play_file_body{
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
    -o-flex-direction: column;
    flex-direction: column;
    overflow-x: hidden;
  }



  .content {
    -webkit-flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    background: #f3f4f5;
  }

  .content::-webkit-scrollbar {
    display: none; }


</style>
