<template>
  <div class="home-practice">
    <practice-item></practice-item>
    <practice-item></practice-item>
    <practice-item></practice-item>
    <practice-item></practice-item>
    <practice-item></practice-item>
    <practice-item></practice-item>
  </div>
</template>
<script>
  import practiceItem from '@/components/practiceItem.vue'
  export default {
    name : 'homePractice',
    components:{
      practiceItem
    }
  }
</script>
<style lang="stylus" scoped="">
  .home-practice{
    overflow:hidden;
  }
</style>
