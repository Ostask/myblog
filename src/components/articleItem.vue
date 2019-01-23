<template>
  <router-link to="/article" target="_blank" class="item">
    <div class="item-img">
      <img src="static/images/cssimg.jpg" alt="">
    </div>
    <div class="item-text">
      <h3>文章标题</h3>
      <p>文章摘要文章摘要文章摘要文章摘要文章摘要文章摘要文章摘要文章摘要文章摘要文章摘要文章摘要文章摘要</p>
      <span class="time">发布时间:2017-7-13 17:48:00</span>
    </div>
    <div class="top"></div>
    <div class="left"></div>
    <div class="right"></div>
    <div class="bottom"></div>
  </router-link>
</template>
<script>

  export default {
    name : 'articleItem',

  }
</script>
<style lang="stylus" scoped="">
  @import "~@/assets/style/colorSet.styl"
  .item{
    display :flex;
    position :relative;
    background :#fff;
    margin:15px 10px;
    transition : all 0.2s;
    /*border:1px solid $borderCl;*/
    top:0;
    .top{
      position:absolute;
      top:0;
      left:0;
      width:1px;
      height:1px;
      background :transparent;
      transition:width 0.1s,background 0s;
    }
    .right{
      position:absolute;
      top:0;
      right:0;
      width:1px;
      height:1px;
      background :transparent;
      transition:height 0.1s 0.1s,background 0s;
    }
    .bottom{
      position:absolute;
      bottom:0;
      right:0;
      width:1px;
      height:1px;
      background :transparent;
      transition:width 0.1s 0.2s,background 0s;
    }
    .left{
      position:absolute;
      bottom:0;
      left:0;
      width:1px;
      height:1px;
      background :transparent;
      transition:height 0.1s 0.3s,background 0s;
    }
    .item-img{
      width:280px;
      img{
        width:100%;
      }
    }
    .item-text{
      flex:1;
      padding-left:15px;
      h3{
        font-size:20px;
        margin:10px 0 15px 0;
        font-weight normal;
      }
      p{
        font-size:16px;
        line-height :24px;
      }
      .time{
        position : absolute;
        bottom:10px;
        font-size:14px;
      }
    }
    &:hover{
      .top{
        width:100%;
        background :$bgColor;
      }
      .right{
        height:100%;
        background :$bgColor;
      }
      .bottom{
        width:100%;
        background :$bgColor;
      }
      .left{
        height:100%;
        background :$bgColor;
      }
    }
  }
</style>
