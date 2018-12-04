// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入vue-loader


//引入字体或
import "swiper/dist/css/swiper.css"
import "jquery/dist/jquery.js"
import "./assets/css/iconfont.css"


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render(h){
    return h(App)
  }

})
