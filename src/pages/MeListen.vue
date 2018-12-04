<template>
  <div class="me-listen-body">
    <!--header-->
      <listen-header></listen-header>
    <!--section-->
   <listen-section :subscribeListInfo="subscribeListData"></listen-section>
    <!--footer-->
    <!--<listen-footer></listen-footer>-->
    <index-footer></index-footer>
  </div>
</template>

<script>
  const AJAXURL="http://localhost:3000/listen"

  import Common from "../assets/css/common.css"
    import ListenHeader from "../components/me-listen/ListenHeader";
    import ListenFooter from "../components/me-listen/ListenFooter";
    import ListenSection from "../components/me-listen/ListenSection";
    import IndexFooter from "../components/index/IndexFooter";
    export default {
        name: "MeListen",
      components: {IndexFooter, ListenSection, ListenFooter, ListenHeader,Common},
      data(){
          return {
            subscribeListData:[]
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
              this.subscribeListData=data
              // console.log(this.subscribeListData)
            })
          })
        },
      },
      created(){
        //首页加载数据
        this._initPageData()
      },
    }
</script>

<style scoped>
  .me-listen-body{
    height: 100%;
    overflow-x: hidden;
    display: -webkit-flex;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
    -webkit-flex-direction: column;
  }

</style>
