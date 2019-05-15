<template>
  <el-container>
    <el-header height="50px"><m-head title="柱状图"></m-head></el-header>
    <el-main id="chart-main-second"></el-main>
  </el-container>
</template>

<script>
import mHead from '../table/MHead.vue'

export default {
  name: 'second',
  components: {
    mHead
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let second = this.$echart.init(document.getElementById('chart-main-second'))
      // 基于准本好的DOM，初始化 echarts 实例
      let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放']
      let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220]
      let yMax = 500
      let dataShadow = []

      for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax)
      }

      let zoomSize = 6
      second.on('click', function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)])
        second.dispatchAction({
          type: 'dataZoom',
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        })
      })
      second.setOption({
        xAxis: {
          data: dataAxis,
          axisLabel: {
            inside: true,
            textStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#999'
            }
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          { // For shadow
            type: 'bar',
            itemStyle: {
              normal: { color: 'rgba(0,0,0,0.05)' }
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataShadow,
            animation: false
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: new this.$echart.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#FF0000' },
                    { offset: 0.5, color: '#FF0000' },
                    { offset: 1, color: '#FF0000' }
                  ]
                )
              },
              emphasis: {
                color: new this.$echart.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#FF0000' },
                    { offset: 0.7, color: '#FF0000' },
                    { offset: 1, color: '#FF0000' }
                  ]
                )
              }
            },
            data: data
          }
        ]
      })
    }
  }
}
</script>

<style scoped lang="less">
  .el-container {
    width: 50%;
    .el-header{
      border-radius: 7px 7px 0 0;
      border-bottom: 1px dotted #909399;
    }
  #chart-main-second {
    width: 100%;
    height: 700px;
    border-radius: 0 0 7px 7px;
    background: #ffffff;
  }
  }
</style>
