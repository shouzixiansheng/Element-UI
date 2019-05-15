<template>
  <div class="finds">
    <first class="find"></first>
    <second class="find"></second>
    <third class="find"></third>
  </div>
</template>

<script>
import First from './First.vue'
import Second from './Second.vue'
import Third from './Third.vue'

export default {
  name: 'finds',
  components: {
    First,
    Second,
    Third
  }
}
</script>

<style scoped lang="less">
.finds{
  display: flex;
  flex-wrap: wrap;
  .find{
    padding: 10px;
  }
}
</style>
