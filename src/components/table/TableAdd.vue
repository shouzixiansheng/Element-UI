<template>
  <div>
    <el-form ref="form" :rules="rules" label-position="right" :model="form" label-width="80px" size="small">
      <el-form-item label="姓名" prop="name" style="width: 20%;">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄" style="width: 20%;">
        <el-radio-group v-model="form.gender">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄" style="width: 20%;">
        <el-input v-model.number="form.age"></el-input>
      </el-form-item>
      <el-form-item label="生日" style="width: 10%;">
        <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择生日" v-model="form.date"
                        style="width: 325%;">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="邮编" style="width: 20%;">
        <el-input v-model="form.zip" :maxlength="6"></el-input>
      </el-form-item>
      <el-form-item size="large" style="width: 20%;">
        <el-button type="primary" @click="onSubmit">立即提交</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  name: 'TableAdd',
  data () {
    return {
      form: {
        id: Mock.Random.integer(1, 100),
        name: '',
        gender: '',
        age: '',
        date: '',
        zip: ''
      },
      rules: {
        name: [{ required: true, message: '姓名不能为空', trigger: 'blur' },
          { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      //, params: {obj: this.form}
      this.$router.push({ path: '/tablebase', name: 'tableBase' })
      this.$store.commit('tableAdd', this.form)
    },
    cancel () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">

</style>
