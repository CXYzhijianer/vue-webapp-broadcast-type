<template>

  <div>
    <h1>首页一</h1>
    <h1>欢迎：{{username}}登录</h1>

    <hr>
    <!--子路由的配置-->

    <!--占位符-->
    <section>
      <router-view></router-view>
    </section>
    <hr>

    <!--tab切换-->
    <ul>
        <router-link exact tag="li" to="/main">书籍</router-link>
        <router-link exact tag="li" to="/main/Movie">电影</router-link>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Main",
      data(){
          return {
            username:""
          }
      },
      created(){
          this.username=window.localStorage.getItem("name")
      }
    }
</script>

<style scoped>
h1,li{
  font-size: .20rem;
}
  .link{
    color: red;
  }
</style>
