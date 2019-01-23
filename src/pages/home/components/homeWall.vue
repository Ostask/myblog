<template>
  <div class="home-wall">
    <p class="text">刀刀每学会一个就来这里点亮一个图标~</p>
    <ul>
      <li v-for="n in 10">
        <img src="static/images/wall_h5.jpg" alt="">
        <span>html5</span>
      </li>
      <li class="un">
        <img src="static/images/wall_h5.jpg" alt="">
        <span>html5</span>
      </li>
      <li class="un">
        <img src="static/images/wall_h5.jpg" alt="">
        <span>html5</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name : 'homeWall',
  }
</script>
<style lang="stylus" scoped="">
  .home-wall{
    overflow :hidden;
    background :#fff;
    padding:10px;
    margin-top:20px;
    .text{
      color: #7d7d7d;
      font-size:14px;
    }
    li{
      width:25%;
      float:left;
      box-sizing :border-box;
      padding:10px;
      text-align :center;
      &.un{
        filter: grayscale(100%);
      }
      img{
        width:100%;
      }
    }
  }
</style>
