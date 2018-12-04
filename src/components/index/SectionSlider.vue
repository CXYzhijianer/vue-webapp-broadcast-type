<template>
  <div class="solider" id="sliderBox">
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <!--<div class="swiper-slide"><img :src="slderImg[0].img" width="100%"></div>-->
              <!--<div class="swiper-slide"><img :src="slderImg[1].img" width="100%"></div>-->
              <!--<div class="swiper-slide"><img :src="slderImg[2].img" width="100%"></div>-->
              <div class="swiper-slide"><img src="../../assets/images/slider1.png" width="100%"></div>
              <div class="swiper-slide"><img src="../../assets/images/slider2.png" width="100%"></div>
              <div class="swiper-slide"><img src="../../assets/images/slider3.png" width="100%"></div>
          </div>
      </div>
  </div>
</template>

<script>
  //引入轮播图
    import Swiper from  "swiper"
    export default {
        name: "SectionSlider",
        props:["slderImg"],
        mounted() {
          new Swiper(".swiper-container", {
            autoplay: true,//等同于以下设置
            autoplay:{
              delay:2000,
              stopOnLastSlide: false,
              disableOnInteraction: true,
            },
            // effect:"cube",
            loop: true, // 循环模式选项
          })
        }
      }
</script>

<style scoped>

</style>
