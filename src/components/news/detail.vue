<template>
  <div class="page news">

      <div class="news-detail" >
        <div class="news-title">
          <h4>{{newsInfo.title}}</h4>
          <p class="news-info">
            <span>发表时间: {{newsInfo.add_time}}</span>
            <span class="mui-pull-right">点击:{{newsInfo.click}}次</span>
            </p>   
        </div>
        <hr>
        <div class="news-content" v-html="newsInfo.content"></div>
        
      </div>
      <div class="news-comment"></div>
      
  </div>
</template>
<script>
// 引入axios
import axios from "axios"
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
</style>


