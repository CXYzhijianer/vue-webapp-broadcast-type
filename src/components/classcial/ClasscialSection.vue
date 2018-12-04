<template>
  <section>
    <div class="nav-list" id="nav-list">

      <classcial-type-a :typeInfo="t" :key="i" :idx="i" v-for="(t,i) in type"></classcial-type-a>

    </div>
    <div class="show-book" >
      <div class="topical" id="topical">
        <hot-info-li :info="c"   :id="index" :key="index" v-for="(c,index) in topic"></hot-info-li>
      </div>
    </div>

  </section>
</template>

<script>
    import ClasscialTypeA from "./ClasscialTypeA";
    import HotInfoLi from "./HotInfoLi";
    export default {
        name: "ClasscialSection",
        props:["topic","type","sound"],
        components: {HotInfoLi, ClasscialTypeA}
        // data(){
        //   // return flag;
        // },
      // methods:{
      //   showInfo(i){
      //     this.flag=true;
      //   }
      // }

    }
</script>

<style scoped>
  section {
    height:100%;
    width: 100%;
    display: -webkit-flex;

    overflow-y: auto;

  }

  .nav-list {
    overflow-y: auto;
    display: -webkit-flex;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
    background: #f3f4f5;
    width: 25%;
  }



  .nav-list::-webkit-scrollbar {
    display: none; }

  .show-book::-webkit-scrollbar {
    display: none; }

  .show-book {
    width: 100%;
    overflow-y: auto;
    padding-top: .18rem;

  }
  .topical{
    display: -webkit-flex;

    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;       /* TWEENER - IE 10 */
    display: -webkit-flex;      /* NEW - Chrome */
    display: flex;
    text-align: center;
    padding-top: .1rem;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
  }







</style>
