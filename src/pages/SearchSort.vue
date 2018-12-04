<template>
  <div class="search-sort-body">

    <!--header-->
      <searct-header></searct-header>
    <!--section-->
    <search-section></search-section>
  </div>
</template>

<script>
    import Common from "../assets/css/common.css"
    import SearctHeader from "../components/search-sort/SearctHeader";
    import SearchSection from "../components/search-sort/SearchSection";
    export default {
        name: "SearchSort",
      components: {SearchSection, SearctHeader,Common},
      data(){
          return {

          }
      }
    }
</script>

<style scoped>
  .search-sort-body{
    overflow-x: hidden;
    background: #f3f4f5;
    height: 100%;

    display: -webkit-flex;
    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;       /* TWEENER - IE 10 */
    display: -webkit-flex;      /* NEW - Chrome */
    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;

  }
</style>
