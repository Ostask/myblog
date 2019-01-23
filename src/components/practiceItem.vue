<template>
  <div class="item">
    <div class="wrapper">
      <div class="item-img">
        <img src="static/images/cssimg.jpg" alt="">
      </div>
      <div class="detail">
        <p class="title">标题</p>
        <p class="txt">介绍介绍介绍介绍，我是介绍</p>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name : 'practiceItem',

  }
</script>
<style lang="stylus" scoped="">
  @import "~@/assets/style/colorSet.styl"
  .item{
    width:33%;
    box-sizing:border-box;
    position :relative;
    padding:10px;
    float:left;
    .wrapper{
      position:relative;
      .item-img{
        width:100%;
        padding-bottom:60%;
        position :relative;
        overflow :hidden;
        img{
          position:absolute;
          width:100%;
          transition :all 0.5s;
        }
      }
      .detail{
        background:#fff;
        padding:10px;
        height:100px;
        .title{
          font-size:18px;
        }
        .txt{
          padding-top:10px;
          font-size:14px;
          color:$normalTextColor;
        }
      }
      &:after{
        position:absolute;
        top:0;
        left:0;
        content:'';
        width:100%;
        height:100%;
        border:1px solid #fff;
        opacity:0;
        transition: all 0.2s;
      }
      &:hover{
        img{
          transform :scale(1.3,1.3);
        }
        &:after{
          opacity:1;
          transform:scale(0.9,0.9);
        }
      }
    }
  }
</style>
