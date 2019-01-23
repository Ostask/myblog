<template>
  <div class="content">
    <div class="left">
      <el-menu
        router :default-active="$route.matched[1].path"
        class="el-menu-vertical-demo">
        <el-menu-item index="/manage/articleMng">
          <i class="el-icon-location"></i>
          <span>文章管理</span>
        </el-menu-item>
        <el-menu-item index="/manage/articleType">
          <i class="el-icon-menu"></i>
          <span>文章分类</span>
        </el-menu-item>
        <el-menu-item index="/manage/practiceMng">
          <i class="el-icon-document"></i>
          <span>练习页面管理</span>
        </el-menu-item>
        <el-menu-item index="/manage/practiceType">
          <i class="el-icon-setting"></i>
          <span>练习页面分类</span>
        </el-menu-item>
        <el-menu-item index="/manage/wallMng">
          <i class="el-icon-setting"></i>
          <span>勋章墙管理</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right">
      <router-view/>
    </div>
  </div>
</template>
<script>
  export default {
      name:'manage',
      mounted (){

      }
  }
</script>
<style lang="stylus" scoped="">
  .content{
    display :flex;
    .left{
      width:200px;
      background :#fff;
      .el-menu-vertical-demo{
        height:100%;
      }
    }
    .right{
      flex:1;
      position :relative;
    }
  }
</style>
