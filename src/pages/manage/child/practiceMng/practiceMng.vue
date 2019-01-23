<template>
  <div class="subplace">
    <el-menu router :default-active="$route.path" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="/manage/practiceMng/allpraList">全部</el-menu-item>
      <el-menu-item index="/manage/practiceMng/pralist/post">已发表</el-menu-item>
      <el-menu-item index="/manage/practiceMng/pralist/secrit">私密</el-menu-item>
      <el-menu-item index="/manage/practiceMng/pralist/delete">回收站</el-menu-item>
      <el-button class="submit-article" plain @click="linktoPublish">新增页面</el-button>
    </el-menu>
    <div class="listplace">
      <router-view/>
    </div>
  </div>
</template>
<script>
  export default {
    name:'practiceMng',
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
        this.$router.push({ path: '/manage/practicePublish' });
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
