<template>
  <div class="content">
    <div class="login">
      <div class="tomoe">
        <img src="static/images/tomoe.png" alt="">
      </div>
      <div class="table">
        <img src="static/images/login.png" alt="">
        <input type="text" class="username">
        <input type="password" class="password">
        <button class="button" @click="showCode"></button>
      </div>
    </div>
    <transition name="fade">
      <verify-code v-show="show" @rightcode="submit"></verify-code>
    </transition>

  </div>
</template>
<script>
  import verifyCode from './components/verifyCode.vue'
  export default {
      name:'login',
      components:{
        verifyCode
      },
      data(){
        return {
          show : false
        }
      },
      methods:{
        showCode (){
          this.show = true;
        },
        submit () {
          this.show = false;
          console.log('登录');
        }
      }
  }
</script>
<style lang="stylus" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .login{
    .tomoe{
      position:absolute;
      top:50%;
      left:50%;
      margin-left:-300px;
      margin-top:-300px;
      img{
        width:400px;
      }
    }
    .table{
      position:absolute;
      top:50%;
      left:50%;
      margin-left:-100px;
      margin-top:-300px;
      input{
        border:none;
        background :transparent;
        font-size:20px;
        border-bottom:4px solid #2d2d2d;
        outline :none;
        line-height :30px;
        transform:rotate(9deg);
      }
      .username{
        position :absolute;
        top:195px;
        font-size:20px;
        border-bottom:4px solid #2d2d2d;
        left:107px;
        height:30px;
        width:170px;
      }
      .password{
        position :absolute;
        top:295px;
        font-size:20px;
        border-bottom:4px solid #2d2d2d;
        left:87px;
        height:30px;
        width:170px;
      }
      .button{
        width:103px;
        height:65px;
        background :url('../../../static/images/button.png');
        position:absolute;
        top:345px;
        left:107px;
        border :none;
        outline :none;
        cursor :pointer;
      }
    }
  }
</style>
