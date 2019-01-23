<template>
  <div class="header">
      <router-link to="/" class="logo"><h1>张舟的个人博客</h1></router-link>
      <ul>
        <router-link tag="li" to="/"><router-link class="up" to="/">首页</router-link><router-link class="down" to="/">首页</router-link></router-link>
        <router-link tag="li" to="/articleList"><router-link class="up" to="/articleList">文章</router-link><router-link class="down" to="/articleList">文章</router-link></router-link>
        <router-link tag="li" to="/practice"><router-link class="up" to="/practice">练习页面</router-link><router-link class="down" to="/practice">练习页面</router-link></router-link>
      </ul>
  </div>
</template>
<script>
  export default {
    name : 'pageHeader'
  }
</script>
<style lang="stylus" scoped="">
  @import '~@/assets/style/colorSet.styl'
  .header{
    background : $bgColor;
    height:50px;
    position :absolute;
    top:0;
    left:0;
    right:0;
    .logo{
      padding-left:20px;
      display :block;
      color :#fff;
      h1{
        font-size:26px;
        line-height:50px;
        font-weight :normal;
      }
    }
    ul{
      position:absolute;
      top:0;
      right:0;
      perspective: 800px;
      transform-style: preserve-3d;perspective-origin:50% 50%;
      transform-origin: 50% 50%;
      li{
        float:left;
        height:50px;
        width:100px;
        text-align :center;
        padding:0;
        line-height:50px;
        position:relative;
        font-size :16px;

        a{
          width:100px;
          color:#fff;
          position: absolute;
          transform-origin: 50% 0%;
          transition: all .5s;
          top:0;
          left:0;
          &.up{
            background:$bgColor;
            position: absolute;
            transform-origin: 50% 0%;
            top:0;
          }
          &.down{
            background: #4e8c85;
            position: absolute;
            bottom:0;
            transform:rotateX(-90deg)translateY(50px);
            transform-origin: 50% 100%;
          }
        }
        &:hover{
          .up{
            background : #4e8c85;
            transform:rotateX(90deg)translateY(-50px);
          }
          .down{
            transform:rotateX(0deg);
          }
        }
      }
    }
  }
</style>
