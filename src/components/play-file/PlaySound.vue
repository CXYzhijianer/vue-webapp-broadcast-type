<template>
  <div class="play_sound_info">
    <h1>{{sd.title}}</h1>
    <p>
      <span>{{sd.h1}}</span>
      <span>{{sd.date}}</span>
    </p>
    <p>{{sd.h2}}</p>
  </div>
</template>

<script>
    export default {
        name: "PlaySound",
      props:['sd']
    }
</script>

<style scoped>
  .play_sound_info{
    display: -webkit-flex!important;
    -webkit-flex-direction: column!important;

    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
    padding-top: .49rem;
    padding-bottom: .49rem;
    padding-left: .16rem;
    padding-right: .16rem;
  }
  .play_sound_info h1{
    font-size: .18rem;
    color: #000000;
  }
  .play_sound_info span{
    font-size: .12rem;
    color: #999999;
    line-height: .46rem;

  }
  .play_sound_info span:nth-of-type(1){
    margin-right: .1rem;

  }

  .play_sound_info p {
    font-size: .16rem;
    color: #3c3c3c;
    line-height: .26rem;
  }
</style>
