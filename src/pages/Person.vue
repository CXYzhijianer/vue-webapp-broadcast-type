<template>
  <div class="person-body">
    <!--header-->
    <header>
      <div class="header-top">
        <a href="#"><img src="../assets/images/p_ico1.png" alt=""/></a>
        <a href="#"><img src="../assets/images/p_ico2.png" alt=""/></a>
      </div>
    </header>
    <!--section-->
    <person-section :typelist="typeListData"></person-section>
    <!--footer-->
    <index-footer></index-footer>
  </div>
</template>

<script>
    import Common from "../assets/css/common.css";
    import IndexFooter from "../components/index/IndexFooter";
    import PersonSection from "../components/person/PersonSection";
    export default {
        name: "Person",
      components: {PersonSection,IndexFooter,Common},
      data(){
        return {
          typeListData:[
            {"title":"已购","img2":"static/images/p_ico3.png"},
            {"title":"优惠券","img2":"static/images/p_ico4.png"},
            {"title":"喜点","img2":"static/images/p_ico5.png"},
            {"title":"直播喜钻","img2":"static/images/p_ico6.png"},
            {"title":"我的钱包","img2":"static/images/p_ico7.png"}
          ],
        }

      },
    }
</script>

<style scoped>
  header{
    padding-right: .24rem;
    padding-top:.19rem;
    padding-bottom:.19rem;
    background: #ffffff;
  }
  header img{
    width: .27rem;
    margin-left: .14rem;
    height: .26rem;
  }
  .header-top{
    background: #ffffff;

    float: right;
    display: -webkit-flex;

  }


  .person-body{
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
    background: #f5f5f5;
    overflow-x: hidden;
  }

</style>
