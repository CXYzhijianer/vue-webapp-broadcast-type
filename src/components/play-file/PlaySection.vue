<template>
  <section>
    <play-info :i="p" :key="ide" v-for="(p,ide) in play"></play-info>
     <play-scribute :sc="s" :key="id" v-for="(s,id) in scribute"></play-scribute>
    <play-sound :sd="s" :key="i" v-for="(s,i) in sound"></play-sound>

    <div class="loveBox">
      <div class="loveBox_left">
        <span class="order">听了本节目的人也在听</span>
      </div>
    </div>
    <ul class="guess-list" >
      <guess-li :guessInfo="g" :key="idx" v-for="(g,idx) in guess"></guess-li>
    </ul>  </section>
</template>

<script>
    import GuessLi from "../index/GuessLi";
    import PlayFile from "../../pages/PlayFile";
    import PlayInfo from "./PlayInfo";
    import PlayScribute from "./PlayScribute";
    import PlaySound from "./PlaySound";
    export default {
        name: "PlaySection",
        props:["guess","play","scribute","sound"],
        components: {PlaySound,PlayScribute, PlayInfo, GuessLi}
    }
</script>

<style scoped>
  section {
    background:#ffffff;
    display: -webkit-flex;

    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;       /* TWEENER - IE 10 */
    display: -webkit-flex;      /* NEW - Chrome */
    display: flex;

    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
  }

  .guess-list{
    display: -webkit-flex;
    overflow: hidden;
    background: #ffffff;
    padding-left: .1rem;
    padding-right: .07rem;
    -webkit-flex-wrap: wrap;

  }



  .loveBox{
    display: -webkit-flex;
    padding-left: .08rem;
    padding-right: .06rem;
    line-height: .5rem;
    border-top:1px solid #f4f4f4;
    background: #ffffff;
    padding-bottom: .2rem;
  }
  .loveBox_left{
    display: -webkit-flex;
    color: #111111;
    font-size: .18rem;
    font-weight: 600;
    background-size:.21rem .18rem;
    margin-left: .1rem;
  }








</style>
