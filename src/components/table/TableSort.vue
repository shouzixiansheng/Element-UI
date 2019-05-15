<template>
  <el-container>
    <el-header height="50px">
      <m-head title="排序表格" show="true"></m-head>
    </el-header>
    <el-main v-if="tableData">
      <el-table
        v-loading="load_data"
        element-loading-text="拼命加载中"
        :data="tableData.slice((currentPage-1)*pageSize, currentPage*pageSize)"
        tooltip-effect="dark"
        border
        style="width: 100%"
        :header-cell-style="{background:'#EEF1F6'}"
        @selection-change="Change">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          fixed
          prop="id"
          label="id"
          sortable
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          sortable
          width="120">
        </el-table-column>
        <el-table-column
          prop="gender"
          label="性别"
          sortable
          width="100">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          sortable
          width="100">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="120">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          sortable
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          sortable
          width="auto">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button @click="updateClick(scope.row, scope.$index)" type="primary" size="mini">
              <i class="el-icon-edit">修改</i>
            </el-button>
            <el-button @click="deleteClick(scope.row)" type="danger" size="mini">
              <i class="el-icon-delete">删除</i>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="clearfix v-table-footer">
        <div class="fl">
          <el-row>
            <el-button @click="deleteAll" type="danger" class="el-button--small"><i
              class="el-icon-delete"></i>批量删除
            </el-button>
          </el-row>
        </div>

        <div class="fr">
          <el-pagination
            small
            background
            layout="total, prev, pager, next"
            :total="total"
            @current-change="current_change">
          </el-pagination>
        </div>

      </div>
    </el-main>
    <el-main v-else
             v-loading="load_data"
             element-loading-text="拼命加载中" style="height: 690px"></el-main>
  </el-container>
</template>

<script>
import mHead from './MHead.vue'

export default {
  name: 'TableSort',
  methods: {
    // 复选框勾选内容
    Change (val) {
      this.selection = val
    },

    // 修改记录
    updateClick (row, index) {
      this.$router.push({ path: '/home/tableupdate/*' + row.id })
      this.$store.commit('incrment', {
        id: row.id,
        name: row.name,
        gender: row.gender,
        age: row.age,
        date: row.date,
        zip: row.zip,
        address: row.address,
        index: index
      })
    },
    // 删除记录
    deleteClick (row) {
      this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.forEach((el, index) => {
          // 找到数组里的这个对象,然后删除
          if (el.id === row.id) {
            this.tableData.splice(index, 1)
          }
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 批量删除
    deleteAll () {
      if (this.selection.length) {
        let arr = this.selection
        let tableArr = this.tableData
        this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData = tableArr.filter((el, index) => {
            return arr.indexOf(el) < 0
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      } else {
        this.$alert('您没有勾选内容', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        })
      }
    },

    // 刷新
    on_refresh () {
      this.get_table_data()
    },

    // 定时器
    time (f) {
      setTimeout(() => {
        this.load_data = false
        if (f) {
          f()
        }
      }, 1000)
    },

    // 获取数据
    get_table_data () {
      this.load_data = true
      this.tableData = this.$store.state.mok
      this.total = this.tableData.length
      this.time()
    },
    current_change (currentPage) {
      this.load_data = true
      this.time()
      this.currentPage = currentPage
    }
  },
  created () {
    this.time(this.get_table_data)
  },
  // 获取修改后记录
  watch: {
    tableData () {
      if (this.$route.params.obj) {
        this.obj = this.$route.params.obj
        this.tableData[this.$store.state.obj.index] = this.obj
      }
      this.$route.params.obj = null
    }
  },
  data () {
    return {
      // 请求时的loading效果
      load_data: true,
      // 勾选的记录
      selection: [],
      total: 0, // 默认数据总数
      pageSize: 10, // 默认每页条数
      currentPage: 1, // 默认开始页面
      tableData: null
    }
  },
  components: {
    mHead
  }
}
</script>

<style scoped lang="less">
  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .el-header {
    border-bottom: 1px dotted #909399;
    border-radius: 7px 7px 0 0;
  }

  .el-main {
    background: #ffffff;
    border-radius: 0 0 7px 7px;
  }

  .clearfix:after {
    content: '';
    height: 0;
    clear: both;
    display: block;
    visibility: hidden;
  }

  .cell {
    .el-button {
      padding: 7px 14px;
    }
  }

  .v-table-footer {
    margin-top: 20px;
  }
</style>
