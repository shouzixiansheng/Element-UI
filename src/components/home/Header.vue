<template>
  <el-row>
    <el-col :span="3">
      <el-input size="medium" v-model="input" v-on:keyup.enter.native="submit" placeholder="Search here..."></el-input>
    </el-col>
    <el-col :span="3" :offset="18">
      <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <img src="https://avatars0.githubusercontent.com/u/16893554?v=3&s=240" alt="">
            <span>{{user}}</span>
            <i class="el-icon-caret-bottom"></i>
          </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user">个人信息</el-dropdown-item>
          <el-dropdown-item icon="el-icon-setting">设置</el-dropdown-item>
          <el-dropdown-item icon="el-icon-warning">
            <el-button type="text" @click="open">安全退出</el-button>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'mHeader',
  data () {
    return {
      input: null,
      user: 'user'
    }
  },
  methods: {
    submit () {
      if (this.input) {
        this.$message({
          message: this.input,
          type: 'success'
        })
      }
    },
    open () {
      this.$confirm('此操作将退出登陆, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出登陆成功!'
        })
        this.$store.commit('loginSuccess', false)
        this.$router.push('/land')
      })
    }
  }
}
</script>

<style lang="less">
  .el-row {
    height: 100%;
    line-height: 50px;

    .el-col {
      vertical-align: middle;
      .el-dropdown{
        padding: 0 8px;
        transition: 0.5s;
        &:hover{
          color: #fff;
          background: #333333;
        }
        .el-dropdown-link{
          font-size: 18px;
          line-height: 18px;
          img{
            width: 24px;
            margin-right: 10px;
            vertical-align: middle;
          }
          span, i{
            vertical-align: middle;
          }
        }
      }
    }
  }

  .el-message {
    padding: 0 !important;

    .el-message__icon {
      padding: 10px 20px 10px 15px;
      background: #e1e1e1;
    }
  }
</style>
