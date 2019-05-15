<template>
  <el-container>
    <el-header height="50px"><m-head title="主页"></m-head></el-header>
    <el-main>home page</el-main>
  </el-container>
</template>

<script>
import mHead from './MHead.vue'

export default {
  name: 'index',
  components: {
    mHead
  }
}
</script>

<style scoped lang="less">
  .el-header{
    border-bottom: 1px dotted #909399;
    border-radius: 7px 7px 0 0;
  }
  .el-main{
    background: #ffffff;
    border-radius: 0 0 7px 7px;
  }
</style>
