<template>
  <div class="content">
    <el-scrollbar class="page-content-scroll">
      <div class="container">
        <div class="left">
          <div class="title">
            <h1>文章标题</h1>
            <span class="time">发布时间:2017/7/15</span>
            <span class="num">浏览量:22</span>
          </div>
          <div class="article-content">
            <div v-for="n in 100">我是文章我是文章我是文章</div>
          </div>
          <div class="article-footer">
            <a href="#" class="prev">上一篇:xxxxx</a>
            <a href="#" class="next">下一篇:xxxxx</a>
          </div>
        </div>
        <div class="right">
          <right-panel style="margin-top:0px;" title="文章分类">
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
  import rightPanel from '@/components/rightPanel.vue'
  export default {
    name : 'article',
    components:{
      rightPanel
    }
  }
</script>
<style lang="stylus" scoped="">
  @import '~@/assets/style/colorSet.styl'
  .container{
    width:1200px;
    margin:20px auto;
    display :flex;
    .left{
      flex:1;
      padding:15px;
      background :#fff;
      border:1px solid $borderCl;
      .title{
        height:60px;
        border-bottom:1px solid $borderCl;
        h1{
          height:40px;
          font-size:20px;
          line-height:30px;
          color:$bgColor;
          text-align :center;
        }
        .time{
          float:left;
        }
        .num{
          float:right;
        }
      }
      .article-content{
        padding-top:15px;
      }
      .article-footer{
        padding-top:15px;
        font-size:14px;
        border-top:1px solid $borderCl;
        .prev{
          float:left;
        }
        .next{
          float:right;
        }
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
