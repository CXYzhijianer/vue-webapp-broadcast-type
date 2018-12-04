<template>
  <!--<a href="#hot">{{typeInfo.title}}</a>-->




  <a :href="ide(idx)">{{typeInfo.title}}</a>
<!--<div>-->
  <!--<a :href="idx(index)"  v-for="(t,index) in typeInfo">{{t.title}}</a>-->
<!--</div>-->
</template>

<script>
    export default {
        name: "ClasscialTypeA",
        props:["typeInfo",'idx'],
        methods:{
          show(i){
            this.$emit("show",i)
          }
        },
      computed:{
        ide(i){
          return function (i) {
            return `#${i}`
          }
        }
      }
    }
</script>

<style scoped>
   a{
    border-bottom: 2px solid #dadbdc;

    width:100%;
    height: .52rem;
    color: #666666;
    font-size: .14rem;
    text-align: center;
    line-height: .52rem;
    margin-right: .22rem; }

</style>
