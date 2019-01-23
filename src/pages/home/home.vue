<template>
  <div class="content">
    <el-scrollbar class="page-content-scroll">
      <div class="container">
        <div class="left">
          <div class="main-title">练习页面<router-link to="/practice">查看更多>></router-link></div>
          <home-practice></home-practice>
          <div class="main-title">最新文章<router-link to="/articleList">查看更多>></router-link></div>
          <home-article></home-article>
        </div>
        <div class="right">
          <div class="main-title">勋章墙</div>
          <home-wall></home-wall>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
  import homePractice from './components/homePractice.vue'
  import homeArticle from './components/homeArticle.vue'
  import homeWall from './components/homeWall.vue'
  export default {
    name : 'home',
    components:{
      homePractice,
      homeArticle,
      homeWall
    }
  }
</script>
<style lang="stylus" scoped="">
  .container{
    width:1200px;
    margin:20px auto;
    display :flex;
    .left{
      flex:1;
    }
    .right{
      width:300px;
      box-sizing :border-box;
      padding-left:15px;
    }
  }
</style>
