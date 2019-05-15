<template>
    <div class="land">
      <img src="@/assets/bjt.jpg" class="img"/>
      <div class="contbox">
        <div class="cont">
          <div class="contimg"><img src="@/assets/a5ceee8b.png" ></div>
          <form class="inpbox" @keyup.enter="open">
              <input type="text" placeholder="请输入账户名 ：" v-model="zhm" >
              <div class="tishibox">
                <div class="tishi">{{zhmcont}}</div>
              </div>
              <input type="password" placeholder="请输入密码 ：" v-model="mm">
              <div class="tishibox">
                <div class="tishi">{{zhmmm}}</div>
              </div>
          </form>
            <el-button :round='true' @click="open" class="bnt">
              <img src="@/assets/check.png" width="30.5px" height="20px">
            </el-button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'land',
  data () {
    return {
      zhm: 'admin',
      mm: 'admin',
      zhmcont: '',
      zhmmm: ''
    }
  },
  methods: {
    open () {
      if (this.zhm !== 'admin' || this.mm !== 'admin') {
        this.$message('请输入正确的账号密码')
      } else {
        this.$store.commit('loginSuccess', true)
        this.$router.push('/home')
        this.$message({
          type: 'success',
          message: '登陆成功!'
        })
      }
    }
  },
  watch: {
    zhm: function () {
      if (this.zhm !== '') {
        this.zhmcont = ''
      } else {
        this.zhmcont = '请输入账号名'
      }
    },
    mm: function () {
      if (this.mm !== '') {
        this.zhmmm = ''
      } else {
        this.zhmmm = '请输入密码'
      }
    }
  }
}
</script>

<style scoped lang="less">
  .land{
    width: 100%;
    height: 100vh;
  }
.img{
  width: 100%;
  height: 100%;
  font-size: 0;
  position: absolute;
  top: 0;
  z-index: -1;
}
.tishibox{
  width: 300px;
  height: 22px;
}
.tishi{
  height: 22px;
  color: red;
  font-size: 14px;
  line-height: 22px;
}
.contbox{
  padding-top: 100px;
}
  .cont{
    width: 300px;
    height: 324px;
    background-color: white;
    margin: auto;
    padding: 25px 15px;
    border-radius: 10px;

    .contimg{
     text-align: center;
      margin-bottom: 25px;
    }
  }
input{
  width: 288px;
  height: 36px;
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid #eaeaec;
  background-color: #eaeaec;
  padding-left: 10px;
  outline:none;
}
  .bnt{
    width: 300px;
    height: 40px;
    background-color: #6bc5a4;
    border: none;
    outline:none;
    border-radius: 5px;
    cursor:pointer
  }
</style>
