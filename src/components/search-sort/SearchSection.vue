<template>
  <section>

    <div class="all-title-box">
      <div class="all-title">
        <span class="subscribe">我的分类</span>
        <span class="subscribe special">长按可拖动排序</span>
      </div>
    </div>

    <!--type-box子组件-->
    <type-box></type-box>


    <div class="all-title-box">
      <div class="all-title">
        <span class="subscribe">所有分类</span>
      </div>
    </div>

    <!--all-sort-nav子组件-->
    <all-sort-nav></all-sort-nav>


    <div class="type-box">
      <!--type子组件-->
      <type-list></type-list>
    </div>

    <!--single-type-box子组件-->
    <single-type-box></single-type-box>

    <div class="type-box">
      <!--<div class="type">-->
        <!--<a href="">IT科技</a>-->
        <!--<a href="">国学学院</a>-->
        <!--<a href="">小语种</a>-->
        <!--<a href="" class="type-special">各名校公共课</a>-->
      <!--</div>-->
      <type-list></type-list>
    </div>
    <!--single-type-box子组件-->
    <single-type-box></single-type-box>

    <div class="type-box">

      <!--<div class="type">-->
        <!--<a href="">IT科技</a>-->
        <!--<a href="">国学学院</a>-->
        <!--<a href="">小语种</a>-->
        <!--<a href="" class="type-special">各名校公共课</a>-->
      <!--</div>-->
      <type-list></type-list>
    </div>

    <!--single-type-box子组件-->
    <single-type-box></single-type-box>


    <div class="type-box">
      <!--<div class="type">-->
        <!--<a href="">IT科技</a>-->
        <!--<a href="">国学学院</a>-->
        <!--<a href="">小语种</a>-->
        <!--<a href="" class="type-special">各名校公共课</a>-->
      <!--</div>-->
      <type-list></type-list>
    </div>
  </section>

</template>

<script>
    import TypeBox from "./TypeBox";
    import AllSortNav from "./AllSortNav";
    import SingleTypeBox from "./SingleTypeBox";
    import TypeList from "./TypeList";
    export default {
        name: "SearchSection",
      components: {TypeList, SingleTypeBox, AllSortNav, TypeBox}
    }
</script>

<style scoped>


  section{
    width: 100%;

    -webkit-flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  section::-webkit-scrollbar {
    display: none;
  }


  .all-title-box{
    display: -webkit-flex;

    padding-left: .18rem;
    padding-right: .1rem;
    line-height: .5rem;
    border-top:1px solid #f4f4f4;
    padding-bottom: .2rem;
  }
  .all-title{
    display: -webkit-flex;

    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;       /* TWEENER - IE 10 */
    display: -webkit-flex;      /* NEW - Chrome */
    display: flex;
    color: #111111;
    font-size: .18rem;
    font-weight: 600;
  }
  .special{
    font-size: .16rem;
    color:#999999;
    margin-left: .21rem;

  }
  .type-box{
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

</style>
