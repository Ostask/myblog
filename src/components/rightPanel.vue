<template>
  <div class="wrapper">
    <div class="title">
      {{title}}
    </div>
    <div class="body short" ref="body">
      <slot></slot>
    </div>
    <div class="foot" @mouseenter = "toggle">
      <a href="javascript:void(0)">{{btnname}}</a>
    </div>
  </div>
</template>
<script>
  export default {
    name : 'rightPanel',
    props:['title'],
    data (){
        return {
           btnname : '展开'
        }
    },
    methods:{
        toggle (){
            if(this.btnname == '展开'){
                this.btnname = '收起';
                this.$refs.body.classList.remove('short');
                this.$refs.body.classList.add('long');
            }else{
                this.btnname = '展开';
                this.$refs.body.classList.remove('long');
                this.$refs.body.classList.add('short');
            }
        }
    }
  }
</script>
<style lang="stylus" scoped="">
  @import "~@/assets/style/colorSet.styl"
  .wrapper{
    border:1px solid $borderCl;
    background :#fff;
    .title{
      height:40px;
      line-height :40px;
      background :#f1f1f1;
      text-indent:15px;
      box-sizing :border-box;
    }
    .body{
      padding:0 15px;
      overflow :hidden;
      transition:all 0.5s ease-out;
      &.short{
        max-height:186px;
      }
      &.long{
        max-height:2000px;
      }
    }
    .foot{
      height:40px;
      line-height :40px;
      text-align :center;
    }
  }
</style>
