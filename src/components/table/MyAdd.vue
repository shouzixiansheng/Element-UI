<template>
  <div class="base-add">
    <el-button @click.stop="refresh" size="small">
      <i class="el-icon-refresh"></i>
    </el-button>
    <el-button type="primary" icon="plus" size="small" @click="skip">添加数据</el-button>
  </div>
</template>

<script>
export default {
  name: 'MyAdd',
  methods: {
    refresh () {
      this.$parent.$parent.$parent.$parent.get_table_data()
    },
    skip () {
      this.$router.push({ path: '/home/tableadd', name: 'tableAdd' })
    }
  }
}
</script>

<style scoped lang="less">
  .base-add {

  }
</style>
