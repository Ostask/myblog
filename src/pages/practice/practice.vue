<template>
  <div class="content">
    <el-scrollbar class="page-content-scroll">
      <div class="container">
        <div class="left">
          <article-map></article-map>
          <home-article></home-article>
          <div class="block">
            <el-pagination
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
        </div>
        <div class="right">
          <right-panel style="margin-top:30px;" title="页面分类">
            <li class="type-item" i v-for="n in 10">分类1<span>(7篇)</span></li>
          </right-panel>
          <right-panel style="margin-top:20px;" title="归档">
            <li class="type-item" i v-for="n in 10">2018年7月<span>(7篇)</span></li>
          </right-panel>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
  import articleMap from '@/pages/articleList/components/articleMap.vue'
  import homeArticle from '../home/components/homePractice.vue'
  import rightPanel from '@/components/rightPanel.vue'
  export default {
    name : 'practice',
    components :{
      articleMap,
      homeArticle,
      rightPanel
    }
  }
</script>
<style lang="stylus" scoped>
  .container{
    width:1200px;
    margin:20px auto;
    display :flex;
    .left{
      flex:1;
      .block{
        text-align :center;
      }
    }
    .right{
      width:300px;
      box-sizing :border-box;
      padding-left:15px;
      .type-item{
        height:30px;
        line-height :30px;
        span{
          margin-left:6px;
        }
      }
    }
  }
</style>
