<template>
  <div class="register">
    <h1>注册</h1>
    <input type="text" name="" id="" placeholder="用户名" v-model="username">
    <input type="text" name="" id="" placeholder="密码" v-model="password">
    <button @click="registerAction">注册</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    //注册
    registerAction(){
      console.log(111)
      axios.post('/api/user/register',{
        username: this.username,
        password: this.password
      })
      .then(data=>{
        console.log(data)
        if(data.data.code === 0){
          console.log('注册成功')
          //注册成功
          this.$router.push('/login')
        }else {
          //注册失败
          alert(data.data.message)
        }
      })
      .catch(error=>{
        console.log(error)
        alert('注册失败')
      })
    }
  }
}
</script>

<style>

</style>