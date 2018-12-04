<template>
  <section>

   <menu-box></menu-box>

   <nav-box></nav-box>

    <div class="login-box">
      <p>今日登陆</p>
    </div>

    <ul class="subscribe-list">
      <subscribe-list-li :subscribeInfo="s" :key="index" v-for="(s,index) in subscribeListInfo"></subscribe-list-li>

    </ul>
  </section>
</template>

<script>
    import NavBox from "./NavBox";
    import SubscribeListLi from "./SubscribeListLi";
    import MenuBox from "./MenuBox";
    export default {
        name: "ListenSection",
      components: {MenuBox, SubscribeListLi, NavBox},
      props:["subscribeListInfo"]
    }
</script>

<style scoped>
  section{
    width: 100%;
    -webkit-flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
  }
  section::-webkit-scrollbar {
    display: none; }

  .login-box{
    height: .712rem;

    background: url("../../assets/images/m_bg.png") center center;
    background-size:3.6rem .88rem;
    text-align: center;
    padding: .2rem;
  }
  .login-box p{
    width: 1.2rem;
    opacity: .5;
    border-radius: .2rem;
    font-size: .18rem;
    color: #ffffff;
    padding: .16rem;
    background: #f45b21;
    margin-left: .9rem;
  }
  .subscribe-list {
    border-top: 1px solid #e8e8e8;
    display: -webkit-flex;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: space-between;
    padding: .1rem;
    padding-left: .14rem;
    padding-right: .62rem;
    margin-left: .1rem;
  }
</style>
