<template>
  <div class="page news">

      <div class="news-detail" >
        <div class="news-title">
          <h4>{{newsInfo.title}}</h4>
          <p class="news-info">
            <span>发表时间: {{newsInfo.add_time | dataformat("YYYY-MM-DD hh:mm:ss")}}</span>
            <span class="mui-pull-right">点击:{{newsInfo.click}}次</span>
            </p>   
        </div>
        <hr>
        <div class="news-content" v-html="newsInfo.content"></div>
        
      </div>
      <div class="news-comment">
        <comment :id="$route.params.id"></comment>
      </div>
      
  </div>
</template>
<script>
// 引入axios
import axios from "axios"
// 引入事件过滤器
import dataformat from "@/filters/dataformat"
// 引入comment
import comment from "@/comment/comment"



export default {
    data(){
      return{
        newsInfo:{}
      }
    },
    created(){
      axios({
        url:"http://www.escook.cn:3000/api/getnew/"+this.$route.params.id
      }).then(res=>{
        if(res.data.status==0){
          this.newsInfo=res.data.message[0]
        }
      })
    },
    // 注册过滤器
    filters:{
      dataformat

    },
    // 注册评论
    components:{
      comment
    }

}
</script>
<style>
  .news{
    padding-left:10px;
    padding-right:10px
  }
  .news-content img{
    width:100%
  }
  .news-comment{
    padding-bottom:10px;
  }
</style>


