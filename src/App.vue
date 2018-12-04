<template>
  <!--//路由插槽-->
  <transition name="fade" mode="out-in">
    <router-view ></router-view>
  </transition>

</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
/*//内置样式*/

.fade-enter {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
  transform:rotate(360deg);
}

.fade-enter-active {
  transition: all 1s ease;
}

.fade-leave {

}

.fade-leave-to{
  transform:translate3d(-500px,0,0);
}

.fade-leave-active {
  transition: all 1s ease;
}

.focus {
  color:red
}
</style>
