<template>
   <div class="carLisr">
       <div class="title">购物车</div>
       <div class="content">
           <div class="item">
               <div class="pic"><img src="../assets/images/banner.jpg" alt=""></div>
               <div class="text">
                   <p class="name">5453535</p>
                   <div class="price">￥278 </div>
                   <p class="cot">
                       <button>-</button>
                       <span>1</span>
                       <button>+</button>
                   </p>
               </div>
           </div>
       </div>
       <div class="footer">
            
       </div>
   </div>
</template>

<script>
export default {

}
</script>

<style>
.carLisr {
    width: 100%;
    height: 100%;
}
.title{
    width: 100%;
    height: 40px;
    font-weight: bold;
    font-size: 18px;
    line-height: 40px;
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

.cot{
    position: absolute;
    right: 10px;
    bottom: 10px;
}
.cot button{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 0;
    outline: none;
}
</style>