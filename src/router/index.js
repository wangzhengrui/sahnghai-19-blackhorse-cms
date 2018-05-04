import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


// 引入tabbar组件
import Home from "@/components/tabbar/home"
import Member from "@/components/tabbar/member"
import Cart from "@/components/tabbar/cart"
import Search from "@/components/tabbar/search"

// 引入goods组件
import GoodsList from "@/components/goods/list"
import GoodDetail from "@/components/goods/detail"
// 引入news组件
import NewsList from "@/components/news/list"
import NewsDetail from "@/components/news/detail"
// 引入pics组件
import PicsList from "@/components/pics/list"
import PicsDetail from "@/components/pics/detail"







export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    // tabbar中的路由
    {
      path:"/home",
      component:Home
    },
    {
      path:"/member",
      component:Member
    },
    {
      path:"/cart",
      component:Cart
    },
    {
      path:"/search",
      component:Search
    },
    // 商品路由
    {
      path:"/goods/list",
      component:GoodsList
    },
    {
      path:"/goods/detail",
      component:GoodDetail
    },
    // news路由
    {
      path:"/news/list",
      component:NewsList
    },
    {
      path:"/news/detail/:id",
      component:NewsDetail
    },
    // pics路由
    {
      path:"/pics/list",
      component:PicsList
    },
    {
      path:"/pics/detail",
      component:PicsDetail
    }
  ],
  linkActiveClass:"mui-active"
})
