<template>
  <div class="verify-code">
    <div class="white-note">
      请用鼠标书写验证码
      <canvas id="mycanvas1">
        您的浏览器不支持canvas
      </canvas>
      <canvas id="mycanvas2"
              @mousedown.prevent="handelMousedown($event)"
              @mouseup.prevent="handelMouseup($event)"
              @mouseout.prevent="handelMouseout($event)"
              @mousemove.prevent="handelMousemove($event)">
        您的浏览器不支持canvas
      </canvas>
      <div class="btn-place">
        <el-button type="primary" plain @click="drawBg">换一个</el-button>
        <el-button type="info" plain @click="rewrite">重写</el-button>
        <el-button type="success" plain @click="checkText">写好了</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'verifyCode',
    data(){
      return {
        canvas : '',
        canvas2 : '',
        canvasWidth : 300,
        canvasHeight : 300,
        ctx : '',
        ctx2 : '',
        ismousedown : false,
        lastPosition : {x:0,y:0},
        errornum : 0,
        orignRightCodenum : 0,

        pointMap : []
      }
    },
    methods: {
      init() {
        this.canvas = document.getElementById('mycanvas1');
        this.canvas.height = this.canvasHeight;
        this.canvas.width = this.canvasWidth;
        this.canvas2 = document.getElementById('mycanvas2');
        this.canvas2.height = this.canvasHeight;
        this.canvas2.width = this.canvasWidth;

        this.ctx = this.canvas.getContext("2d");
        this.ctx2 = this.canvas2.getContext("2d");
        for(var i=0;i<30;i++){
          this.pointMap[i] = [];
          for(var j=0;j<30;j++){
            this.pointMap[i][j] = {x:0,y:0,value:false};
          }
        }
      },
      drawBg(){
        this.ctx.clearRect(0,0,300,300);
        this.ctx2.clearRect(0,0,300,300);
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.font="200px Verdana";
        this.ctx.textAlign="center";
        this.ctx.textBaseline="middle";
        this.ctx.fillStyle='#bfbfbf';

        var text= String.fromCodePoint(Math.round(Math.random() * 20901) + 19968);
        this.ctx.fillText(text,150,150);
        //ctx.fillText("一",200,200);
        this.ctx.restore();
        this.orignRightCodenum = 0;
        //重新判断数组的值
        for(var i=0;i<30;i++){
          for(var j=0;j<30;j++){
            this.pointMap[i][j].x = this.canvasWidth/30*i;
            this.pointMap[i][j].y = this.canvasHeight/30*j;
            this.pointMap[i][j].value = this.isInText(this.pointMap[i][j].x,this.pointMap[i][j].y,this.ctx);
            if(this.pointMap[i][j].value){
              this.orignRightCodenum++;
            }
          }
        }
      },

      isInText (x,y,context){
        var c = context.getImageData(x, y, 1, 1).data;
        if(c[0]||c[1]||c[2]){
          return true;
        }else{
          return false;
        }
      },
      checkText(){
        this.errornum = 0;
        for(var i=0;i<30;i++){
          for(var j=0;j<30;j++){
            var value = this.isInText(this.pointMap[i][j].x,this.pointMap[i][j].y,this.ctx2);
            if(this.pointMap[i][j].value!==value){
              this.errornum++
            }
          }
        }
        console.log(this.orignRightCodenum,this.errornum);
        if((this.orignRightCodenum-this.errornum)/this.orignRightCodenum > 0.4){
          this.$emit('rightcode');
        }else{
          this.$message('验证失败，要不您再写写？');
        }
      },

      rewrite (){
        this.ctx2.clearRect(0,0,300,300);
      },

      handelMousedown (e) {
        this.ismousedown = true;
        this.lastPosition.x = e.offsetX;
        this.lastPosition.y = e.offsetY;
      },
      handelMouseup (e) {
        this.ismousedown = false;
      },
      handelMouseout(e) {
        this.ismousedown = false;
      },
      handelMousemove(e) {
        var curPosition = {x: e.offsetX, y: e.offsetY};
        if (this.ismousedown) {
          this.ctx2.save();
          this.ctx2.beginPath();
          this.ctx2.moveTo(this.lastPosition.x, this.lastPosition.y);
          this.ctx2.lineTo(curPosition.x, curPosition.y);
          this.ctx2.lineCap = "round";
          this.ctx2.lineWidth = 15;
          this.ctx2.strokeStyle = "#2f2b2f";
          this.ctx2.stroke();
          this.ctx2.restore();
          this.lastPosition.x = curPosition.x;
          this.lastPosition.y = curPosition.y;
        }
      }
    },
    mounted (){
      this.init();
      this.drawBg();
    }
  }
</script>
<style lang="stylus" scoped>
  .white-note{
    padding-top:10px;
    text-align :center;
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-300px;
    margin-left:-150px;
    width:300px;
    height:600px;
    background :#fff;
    box-shadow :0 0 20px 1px rgba(100,100,100,0.5);
    #mycanvas1,#mycanvas2{
      position:absolute;
      top:0;
      left:0;
    }
    .btn-place{
      position :absolute;
      bottom:10px;
      left:15px;
      text-align:center;
    }
  }

</style>
