import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


// 引入页面级组件
import Index from "../pages/Index"
import MeListen from "../pages/MeListen"
import SearchSort from "../pages/SearchSort"
import Person from "../pages/Person"
import Classcial from "../pages/Classcial"
import PlayHistory from "../pages/PlayHistory"
import PlayFile from "../pages/PlayFile"

//路由配置
import Main from "../pages/Main"
import Main2 from "../pages/Main2"

//引入子组件(钱套路有配置)
import Book from "../pages/main-tab/Book"
import Movie from "../pages/main-tab/Movie"
import BookDetial from "../pages/main-tab/BookDetial"

//全局导航
import Login from "../pages/Login"


// @指向components
Vue.use(Router)

// 原
// export default new Router({


let router=new Router({
  routes: [
    // {path:"/",component:Index},
    // {path:"/Index",component:Index}

    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/Login',
      name: 'Login',
      component:Login
    },
    {
      path: '/',
      name: 'Index',
      component:Index
    },
    {
      path: '/MeListen',
      name: 'MeListen',
      component:MeListen
    },
    {
      path: '/SearchSort',
      name: 'SearchSort',
      component:SearchSort
    },
    {
      path: '/Person',
      name: 'Person',
      component:Person
    },
    {
      path: '/Classcial',
      name: 'Classcial',
      component:Classcial
    },
    {
      path: '/PlayHistory',
      name: 'PlayHistory',
      component:PlayHistory
    },
    {
      path: '/PlayFile',
      name: 'PlayFile',
      component:PlayFile
    },
    {
      path: '/Main',
      name: 'Main',//name代表路由规则
      component:Main,
      children:[
        {path:"",component:Book},
        {path:"Movie",component:Movie},
        //方法一：跳转
        {path:"bookDetial",component:BookDetial},
        {path:"bookDetial/:id",name:'detial',component:BookDetial}
      ]
    },
    // 配置子路由 url:/main/Movie
    {
      path: '/Main',
      redirect:'/Main'//配置首页与组件无关

    }
    ,
    {
      path: '/Main2',
      name: 'Main2',
      component:Main2
    }
  ],
  // 设置显示的样式属性
  linkActiveClass: 'focus',
  //去掉地址栏的#
  mode:"history"
})



//设置全局导航守卫(拦截所有的url地址)

router.beforeEach((to,from,next)=>{
  console.log(to)
  console.log(from)
  //做用户登录

  //防止递归
  next()

 let islogin=window.localStorage.getItem("name")
console.log(islogin)

  if (!islogin){
    //无
    next({path:"/Login"})
  }
  next()

})

//后置
// router.afterEach((to,from)=>{
//    window.confirm("您真的要走吗，不玩一下吗？")
// })

//页面切换时过度效果


export default router


