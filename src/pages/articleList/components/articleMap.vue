<template>
  <div class="map">
    <div class="place">
      全部文章
    </div>
    <div class="sort">
      排序:
      <a class="on" href="javascript:void(0)">默认</a>
      <a href="javascript:void(0)">更新时间</a>
      <a href="javascript:void(0)">按访问量</a>
    </div>
  </div>
</template>
<script>
  export default {
    name : 'articleMap',
  }
</script>
<style lang="stylus" scoped="">
  .map{
    font-size:14px;
    height:20px;
    position :relative;
    .sort{
      position :absolute;
      right:20px;
      top:0;
      a{
        margin:0 10px;
        &.on{
          color: #ff3538;
        }
      }
    }
  }
</style>
