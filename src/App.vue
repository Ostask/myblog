<template>
  <div id="app">
    <page-header></page-header>
    <router-view/>
  </div>
</template>

<script>
  import pageHeader from '@/components/header.vue'
  export default {
    name: 'App',
    components:{
      pageHeader
    }
  }
</script>

<style lang="stylus" scoped="">

</style>
