<template>
  <el-container>
    <el-header height="50px"><m-head title="柱状图形"></m-head></el-header>
    <el-main id="chart-main-first"></el-main>
  </el-container>
</template>

<script>
import mHead from '../table/MHead.vue'

export default {
  name: 'first',
  data () {
    return {
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['利润', '支出', '收入']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value'
          }
        ],
        yAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        series: [
          {
            name: '利润',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'inside'
              }
            },
            data: [200, 170, 240, 244, 200, 220, 210]
          },
          {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true
              }
            },
            data: [320, 302, 341, 374, 390, 450, 420]
          },
          {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'left'
              }
            },
            data: [-120, -132, -101, -134, -190, -230, -210]
          }
        ]
      }
    }
  },
  mounted () {
    let first = this.$echart.init(document.getElementById('chart-main-first'))
    first.setOption(this.option)
  },
  components: {
    mHead
  }
}
</script>

<style scoped lang="less">
  .el-container{
    width: 100%;
    .el-header{
      border-radius: 7px 7px 0 0;
      border-bottom: 1px dotted #909399;
    }
    #chart-main-first{
      width: 100%;
      height: 700px;
      border-radius: 0 0 7px 7px;
      background: #ffffff;
    }
  }

</style>
