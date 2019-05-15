<template>
    <div class="m-head">{{title}}
      <div class="m-add" v-if="show">
        <my-add></my-add>
      </div>
    </div>
</template>

<script>
import myAdd from './MyAdd'

export default {
  name: 'mHead',
  props: ['title', 'show'],
  components: {
    myAdd
  }
}
</script>

<style lang="less">
  .m-head{
    height: 100%;
    line-height: 50px;
    .m-add {
      float: right;
    }
  }
</style>
