<template>
  <div>
    <h1>最新电影</h1>
    <a @click="goMain()">Main2</a>
  </div>
</template>

<script>
    export default {
        name: "Movie",
      methods:{
          goMain(){
// 编程导航方式进行router
            //vueRouter $router router
            this.$router.push("/Main2")

          }
      }
    }
</script>

<style scoped>
  h1,a{
    font-size: .18rem;
  }
</style>
