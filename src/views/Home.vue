<template>
    <div class="home">
      <div class="header">
            <img src="../assets/images/avatar.jpg" alt="">
            
      </div>
       <div class="title">
          <h3>爱时尚精品屋</h3>
          <p>公告：欢迎光临,流星爆款,库存有限请尽早下单,谢谢</p>
        </div>
       <nav><span  v-for="(item,index) in navList" :key="index" :class="{active: curIndex===index}" @click="clickIndex(index)">{{item}}</span></nav>
      <div class="content">
          <div class="item" v-for="(item,index) in data" :key="index" @click="detail(item.id)">
              <div class="pic" >
                <img :src="item.pic" alt="">
              </div>
              <div class="text">
                <p class="name">{{item.name}}</p>
                <p class="buyCount">已售：{{item.buyCount}}件</p>
                <p class="price">单价：¥{{item.price}}</p>
                <button class="btn" @click="add(item)">加入购物车</button>
              </div>
          </div>
      </div>

      <div class="box" @click="fun">
         
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      navList:['价格升序↑','价格降序↓','销量升序↑','销量降序↓'],
      data:[],
      curIndex:2
    }
  },
  mounted(){
    axios.get("/list").then(res=>{
      this.data=res.data.goodList
    })
  },
  methods:{
    fun(){
      this.$router.push('/carList')
    },
    clickIndex(index){
      this.curIndex=index
      if(index==0){
        this.data.sort(function(a,b){
          return a.price - b.price;
        });
      }
      else if(index == 1){
        this.data.sort(function(a,b){
          return b.price - a.price;
        });
      }
      else if(index == 2){
        this.data.sort(function(a,b){
          return a.buyCount - b.buyCount;
        });
      }
      else{
        this.data.sort(function(a,b){
          return b.buyCount - a.buyCount;
        });
      }
    },
    add(item){
      
    },
    detail(id){
      this.$router.push({
          path:'/detail',
          query:{
            id:id
          }
      })
    }
  }
}
</script>

<style scoped>
 .home{
   width: 100%;
   height: 100%;
 }
 .box{
   width: 30px;
   height: 30px;
   position: fixed;
   bottom: 20px;
   right: 10px;
   border-radius: 50%;
   background: skyblue;
 }
 .header{
   width: 100%;
   height: 200px;
   background-image: url("../assets/images/banner-2.png");
   background-size:cover;
   background-position-x: center;
   position: relative;
 }
 .header img{
   width: 80px;
   height: 80px;
   position: absolute;
   left: 50%;
   margin-left: -40px;
   bottom: -40px;
   border-radius: 50%;
   overflow: hidden;
 }

 
 .title{
   width: 100%;
   height: 60px;
   margin-top: 50px;
   text-align: center;
 }
  .title>p{
  font-size: 14px;
  color: #808080;
 }
 .content{
   width: 100%;
   padding: 0 10px;
 }
 nav{
   display: flex;
   justify-content: space-between;
   padding: 0 20px;
   height: 50px;
   line-height: 50px;
   border-bottom: 1px solid #808080;
 }
 nav span{
   font-size:  15px;
 }
nav span.active{
  color: red;
}
.content .item{
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
  margin: 10px 0;
}
 .item .pic{
   width: 30%;
   height: 80px;
   margin: 10px;
} 
.item .pic img{
  width: 100%;
  height: 100%;
}

.item .text{
  width: 70%;
  margin: 10px 0;
  line-height: 28px;
}
.item .text .name{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
}

.item .text button{
  position: absolute;
  bottom: 0;
  right: 0;
  padding:5px 10px;
  background: #f00;
  color: #fff;
  outline: none;
  border: 0;
}
.item .text button:active{
  opacity: 0.6;
}
</style>