<template>
  <div class="content">
    <div class="wrapper" @mousemove="bgmove" @mouseout="bgout">
      <div class="background">

      </div>
      <div class="floor2">
        <div class="img4"></div>
      </div>
      <div class="floor1">
        <div class="img1"></div>
        <div class="img2"></div>
        <div class="img3"></div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
      name:'notfound',
      data (){
          return {

          }
      },
      methods : {
          bgmove (e){
            let x = e.offsetX-300;
            let y = -e.offsetY+200;
            let transX = y/10;
            let transY = x/10;
            $('.background').css(
                'transform','rotateX('+transX+'deg)rotateY('+transY+'deg)translateZ(-100px)'
            )
            $('.floor1').css(
              'transform','rotateX('+transX+'deg)rotateY('+transY+'deg)translateZ(100px)'
            )
            $('.floor2').css(
              'transform','rotateX('+transX+'deg)rotateY('+transY+'deg)'
            )
          },
          bgout (){
            $('.background').css(
              'transform','rotateX(0deg)rotateY(0deg)translateZ(-100px)'
            )
            $('.floor1').css(
              'transform','rotateX(0deg)rotateY(0deg)translateZ(100px)'
            )
            $('.floor2').css(
              'transform','rotateX(0deg)rotateY(0deg)'
            )
          }
      }
  }
</script>
<style lang="stylus" scoped="">
  .wrapper{
    perspective:800px;
    width:600px;
    height:400px;
    position :absolute;
    top:50%;
    left:50%;
    margin-top:-200px;
    margin-left:-300px;
    .background{
      background :url("../../../static/images/404bg1.png");
      transform:translateZ(-100px);
      width:100%;
      height:100%;
      opacity :0.5;
      position :absolute;
      top:0;
      left:0;
      transition:all 0.5s;
    }
    .floor1{
      width:100%;
      height:100%;
      position :absolute;
      top:0;
      left:0;
      transform:translateZ(100px);
      opacity:0.8;
      transition:all 0.5s;
      .img1{
        position:absolute;
        top:40px;
        left:0;
        width:150px;
        height:100px;
        background-image :url("../../../static/images/cloud1.png");
        background-size:150px auto;
        background-repeat :no-repeat;
      }
      .img2{
        position:absolute;
        top:200px;
        left:440px;
        width:200px;
        height:100px;
        background-image :url("../../../static/images/cloud2.png");
        background-size:200px auto;
        background-repeat :no-repeat;
      }
      .img3{
        position:absolute;
        top:300px;
        left:10px;
        width:250px;
        height:100px;
        background-image :url("../../../static/images/cloud3.png");
        background-size:250px auto;
        background-repeat :no-repeat;
      }
    }
    .floor2{
      width:100%;
      height:100%;
      position :absolute;
      top:0;
      left:0;
      transition:all 0.5s;
      .img4{
        width:400px;
        height:300px;
        background-image :url("../../../static/images/4041.png");
        background-size:400px auto;
        background-repeat :no-repeat;
        position:absolute;
        top:50%;
        left:50%;
        margin-top:-100px;
        margin-left:-200px;
      }
    }
  }
</style>
