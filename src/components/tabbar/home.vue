<template>
  <div class="page">
      <mt-swipe :auto="2000">
  <mt-swipe-item v-for="(v,i) in pics " :key="i"><img :src="v.img" ></mt-swipe-item>
 
</mt-swipe>
<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news">
		                    <img src="../../images/menu1.png" >
                        <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/pics">
                        <img src="../../images/menu2.png" >  
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/search">
		                    <img src="../../images/menu3.png" >
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
		                    <img src="../../images/menu4.png" >
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
		                    <img src="../../images/menu5.png" >
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
		                    <img src="../../images/menu6.png" >
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		        </ul>
  </div>
</template>
<script>
// 引入axios
import axios from "axios"
export default {
  data(){
    return{
      pics:[]
    }
  },
  created(){
    axios({
      url:"http://www.escook.cn:3000/api/getlunbo"
    }).then(res=>{
      // console.log(res)
      this.pics=res.data.message;

    })
  }
  

}
</script>
<style scoped >
  .mint-swipe{
    height:157px;  
  }
 .mint-swipe img{
   width:100%
   
 }
 .mui-table-view-cell img{
   width:60px;
 }
 .mui-table-view{
   background-color:#fff;
 }

</style>


