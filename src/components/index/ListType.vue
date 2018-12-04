<template>
  <div class="list_type">
    <div class="function_left">
      <a href="" class="ico-type" @click="handleRouter"><img :src="typeInfo[0].pic" alt="" width="100%"><span>{{typeInfo[0].title}}</span></a>
      <a href="" class="ico-type"><img :src="typeInfo[1].pic" alt="" width="100%"><span>{{typeInfo[1].title}}</span></a>
      <a href="" class="ico-type"><img :src="typeInfo[2].pic" alt="" width="100%"><span>{{typeInfo[2].title}}</span></a>
      <a href="" class="ico-type"><img :src="typeInfo[3].pic" alt="" width="100%"><span>{{typeInfo[3].title}}</span></a>
      <a href="" class="ico-type"><img :src="typeInfo[4].pic" alt="" width="100%"><span>{{typeInfo[4].title}}</span></a>
    </div>
  </div>
</template>

<script>
    import TypeIco from "./TypeIco";
    export default {
        name: "ListType",
      components: {TypeIco},
      props:["typeInfo"],
      methods:{
        handleRouter(){
          this.$router.push("/Classcial");
        }
      }
    }
</script>

<style scoped>
  .list_type {
    width: 100%;
  }

  .list_type::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: .0rem;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 2px;
    text-align: center; }

  .function_left{
    width: 100%;
    display: -webkit-flex;
  }
  .ico-type{
    -webkit-flex-shrink: 0;
    width: .51rem;
    height: .6rem;
    font-size: .12rem;
    color: #666666;
    margin: .15rem .1rem;
    text-align: center;
    padding-bottom: .2rem;
  }
  .ico-type img{
    margin-bottom: .07rem;
  }

</style>
