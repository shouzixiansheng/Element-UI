<template>
  <el-container>
    <el-aside width="200px">
      <m-nav @fun="fun"></m-nav>
    </el-aside>
    <el-container class="el-container-demo">
      <el-header height="50px">
        <m-header></m-header>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer height="40px">Copyright © 2019 zzmhot All Rights Reserved</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import mNav from './home/Nav.vue'
import mHeader from './home/Header.vue'

export default {
  name: 'home',
  data () {
    return {
      show: true
    }
  },
  methods: {
    fun (e) {
      this.show = e
    }
  },
  components: {
    mNav,
    mHeader
  }
}
</script>

<style lang="less">
  .el-container {
    background: #eff0f4;

    .el-container-demo {
      display: block;
      min-width: 1200px;

      .el-header, .el-footer {
        background: #ffffff;
      }

      .el-footer {
        color: #909399;
        font-size: 14px;
        line-height: 40px;
      }
    }
  }
</style>
