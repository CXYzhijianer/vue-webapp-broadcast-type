<template>
<div>
  <h1>最新书籍</h1>
  <ul>
    <li :key="idx" v-for="(n,idx) in lists">
      <!--//方法一跳转-->
    <!--<router-link :to="{path:'Main/BookDetial',query:{id:idx}}">{{n.title}}</router-link>-->
    <router-link :to="{name:'detial',params:{id:idx}}">{{n.title}}</router-link>
    </li>
  </ul>
</div>
</template>

<script>
    export default {
        name: "Book",
      data(){
          return {
            lists:[
              {title:"【“菲”同寻常】"},
              {title:"【友好故事】"},
              {title:"【红楼梦】"}
            ]
          }
      }
    }
</script>

<style scoped>
  h1,li{
    font-size: .18rem;
  }
</style>
