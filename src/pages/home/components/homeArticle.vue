<template>
  <div class="home-article">
    <article-item></article-item>
    <article-item></article-item>
    <article-item></article-item>
    <article-item></article-item>
    <article-item></article-item>
  </div>
</template>
<script>
  import articleItem from '@/components/articleItem.vue'
  export default {
    name : 'homeArticle',
    components:{
      articleItem
    }
  }
</script>
<style lang="stylus" scoped="">
  .home-article{
    width:100%;
  }
</style>
