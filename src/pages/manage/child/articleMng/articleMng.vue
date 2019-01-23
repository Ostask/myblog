<template>
  <div class="subplace">
    <el-menu router :default-active="$route.path" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="/manage/articleMng/allList">全部</el-menu-item>
      <el-menu-item index="/manage/articleMng/list/post">已发表</el-menu-item>
      <el-menu-item index="/manage/articleMng/list/saved">草稿箱</el-menu-item>
      <el-menu-item index="/manage/articleMng/list/secrit">私密</el-menu-item>
      <el-menu-item index="/manage/articleMng/list/delete">回收站</el-menu-item>
      <el-button class="submit-article" plain @click="linktoPublish">发布文章</el-button>
    </el-menu>
    <div class="listplace">
      <router-view/>
    </div>
  </div>
</template>
<script>
  export default {
    name:'articleMng',
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      linktoPublish() {
        this.$router.push({ path: '/manage/articlePublish' });
      }
    }
  }
</script>
<style lang="stylus" scoped="">
  .subplace{
    padding:0 10px;
    background :#fff;
    height:100%;
    position :relative;
    .submit-article{
      position:absolute;
      right:10px;
      top:10px;
      bottom:10px;
    }
    .listplace{
      position :absolute;
      top:62px;
      left:10px;
      right:10px;
      bottom:10px;
    }
  }
</style>
