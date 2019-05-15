<template>
    <el-col>
      <el-menu
        class="el-menu-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#6dc5a3"
        @open="open">
        <el-menu-item class="el-menu-logo" @click="to">
          <el-image :src="src"></el-image>
        </el-menu-item>
        <el-menu-item index="1" @click="to">
          <template slot="title">
            <i class="el-icon-s-home"></i>
            <span>主页</span>
          </template>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-grid"></i>
            <span>表格管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="basic">基本表格</el-menu-item>
            <el-menu-item index="1-2" @click="rank">排序表格</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-data"></i>
            <span>图表管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="charts">柱状图表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
</template>

<script>
export default {
  name: 'mNav',
  data () {
    return {
      src: require('@/assets/logo.png')
    }
  },
  methods: {
    open (index) {
      // console.log(index)
    },
    to () {
      this.$router.push('/home')
      this.$emit('fun', true)
    },
    basic () {
      this.$router.push('/home/tablebase')
      this.$emit('fun', false)
    },
    rank () {
      this.$router.push('/home/tablesort')
      this.$emit('fun', false)
    },
    charts () {
      this.$router.push('/home/charts')
      this.$emit('fun', false)
    }
  }
}
</script>

<style lang="less">
  .el-col{
    height: 100%;

  .el-menu-demo {
    border-right: none;
    height: 100%;
    min-height: 100vh;

    .el-menu-logo{
      height: 70px;

      .el-image {
        line-height: 0;
      }
    }

    .el-col .el-menu {
      border-right: none;
    }

    .is-active {
      background: rgb(67, 74, 80) !important;
    }
  }
  }
</style>
