<template>
  <section class="section_content">
    <div class="date">
      <span>今天</span>
    </div>
    <ul>
      <play-list :play="p" :key="idx" v-for="(p,idx) in todayInfo"></play-list>
    </ul>
    <div class="date">
      <span>更早</span>
    </div>
    <ul>
      <play-list :play="p" :key="idx" v-for="(p,idx) in playInfo"></play-list>
    </ul>
  </section>
</template>

<script>
    import PlayHistory from "../../pages/PlayHistory";
    import PlayList from "./PlayList";
    export default {
        name: "HistorySection",
      props:["playInfo","todayInfo"],
     components: {PlayList, PlayHistory}
    }
</script>

<style scoped>
  /*section*/
  .section_content{
    width: 100%;
    background: #ffffff;
    -webkit-flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .section_content::-webkit-scrollbar {
    display: none;
  }


  .date{
    padding-left:.14rem;
    color: #000000;
    font-size: .18rem;
    width: 100%;
    height: .46rem;
    line-height: .46rem;
    background: #ffffff;

  }






</style>
