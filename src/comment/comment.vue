<template>
  <div>
      <h4>发表评论</h4>
      <hr>
      <textarea name="" v-model="content" id="" cols="30" rows="3"></textarea>
      <mt-button type="primary" size="large" @click="contentBtn">发表评论</mt-button>
<ul  class="mui-table-view">
    <li v-for="(v,i) in commentList" :key="i" class="mui-table-view-cell mui-media">
        <a  href="javascript:;">
            <p  class="comment-tilte">
                <span >第{{ i+1}}楼</span> 
                <span >发表时间：{{v.add_time | dataformat("YYYY-MM-DD hh:mm:ss")}}</span> 
                <span class="mui-pull-right">
            {{v.user_name}}
          </span></p> 
          <img src="../images/menu1.png" class="mui-media-object mui-pull-right">
           <div  class="mui-media-body">
               <span  class="mui-ellipsis comment-content" >{{v.content}}</span>
               </div>
        </a>
    </li>
  
</ul>
 <mt-button type="danger" v-show="isShow" size="large" :plain="true" @click="more">加载更多</mt-button>
  </div>
</template>
<script>
// 引入axios
import axios from "axios";
import dataformat from "@/filters/dataformat";

// 引入mint-ui
import {Toast} from "mint-ui"

export default {
  data() {
    return {
      commentList: [],
      currentIndex: 1,
      isShow:true,
      content:''

    };
  },
  // 因为评论组件会被在各个模块中进行复用
  // 所以，必须在使用该组件的时候，告诉该组件当前正在评论的是谁
  // 通过父组件想子组件传递值得方式，将正在评论的内容的id传入到评论组件中 去
  props: ["id"],

  created() {
    // 获取到当前评论组件所在的文章id之后
    // 将评论列表渲染到页面
    this.getData()
  },
  //   注册时间
  filters: {
    dataformat: dataformat
  },
  methods: {
        getData() {
    axios({
      url:
        "http://www.escook.cn:3000/api/getcomments/" +
        this.id +
        "?pageindex=" +
        this.currentIndex
    }).then(res => {
      if (res.data.status == 0) {
        // this.commentList.push(...res.data.message);
        this.commentList=this.commentList.concat(res.data.message);
        if(res.data.message.length==0){
            this.isShow=false;
            Toast("没有更多数据了")
            
        }



      }
    });
  },
    more() {
      this.currentIndex++;
      this.getData()
    },
    contentBtn(){

      if(this.content.trim()){
  // 发送ajax请求
     
      axios({
        url:"http://www.escook.cn:3000/api/postcomment/"+this.id,
        method:"post",
        data:"content="+this.content
      }).then(res=>{
        if(res.data.status==0){
          this.commentList.unshift({
            add_time:new Date(),
            content:this.content,
            user_name:'撒贝宁'

          })
          this.content='';
        }
      })
      }
    
    }
  }
};
</script>
<style scoped>
textarea {
  margin-top: 10px;
  margin-bottom:0;
}
</style>


