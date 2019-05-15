<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    this.$store.dispatch('getdata')
  }
}
</script>

<style lang="less">
#app{
  width: 100%;
  position: relative;
}
</style>
