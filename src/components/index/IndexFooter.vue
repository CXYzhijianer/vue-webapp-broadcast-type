<template>
  <!-- foooter -->
  <footer>
    <router-link to="/" linkActiveClass="focus" exact >
      <i class="iconfont icon-denglu-copy" ></i><span>首页</span>
    </router-link>


      <a href="" @click="handleRouter">
        <i class="iconfont icon-xin2"></i>
        <span>我听</span>
      </a>


    <!--:to="{name:'detial',params:{id:idx}}"-->

      <router-link linkActiveClass="focus" exact to="/PlayFile" >
      <img src="../../assets/images/f_ico1.png" alt="" class="f_img">
      </router-link>

      <router-link to="/" exact linkActiveClass="focus">
      <i class="iconfont icon-faxianguanli"></i><span>发现</span>
      </router-link>

    <router-link to="/person" exact linkActiveClass="focus">
        <i class="iconfont icon-denglu-copy"></i><span>未登录</span>
    </router-link>


  </footer>
</template>

<script>
    import $ from "jquery"
    export default {
      name: "IndexFooter",
      methods:{
        handleRouter(){
            this.$router.push("/MeListen");
        }
      },
      mounted(){

        let ilist=$("i");
        for (let i=0;i<ilist.length;i++){
          ilist[i].onclick=function () {
              this.style.color="red"
              // spanList[i].style.color="red"
            }
        }
      }
    }
</script>

<style scoped>

  .focus{
    color: red;
  }
  footer {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;

    padding-bottom: .1rem;
    background: #ffffff;
    display: -webkit-flex;
    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;       /* TWEENER - IE 10 */
    display: -webkit-flex;      /* NEW - Chrome */
    display: flex;

  }
  footer a {
    text-align: center;
    width:20%;
    display: -webkit-flex;
    text-align: center;
    padding-top: .1rem;
    -webkit-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;

  }
  footer a span {
    color: #666666;
    font-size: .1rem;
    line-height: .2rem; }

  .icon-denglu-copy,.icon-denglu-copy, .icon-faxianguanli,.icon-xin2{
    color: #d2d2d2;
    font-size: .2rem;
   margin-bottom: .03rem;
  }

  .f_img{
    margin-left: .2rem;
    width:.44rem ;
    height: .38rem;
  }

.link{
  color: #000000;
}
</style>
