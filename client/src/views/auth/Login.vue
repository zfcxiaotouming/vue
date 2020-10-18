<template>
<div class="wrap">
  <div class="login">
    <h3 class="title">管理系统</h3>
    <div class="con">
       <p class="username-box">
         <span class="iconfont icon-mima"></span>
        <input type="text" name="" id="" placeholder="请输入账号" v-model="username">
      </p>
      <p class="password-box">
        <span class="iconfont icon-zhanghu"></span>
        <input type="text" name="" id="" placeholder="请输入登录密码" v-model="password">
      </p>
      <button @click="loginAction" class="btn">登录</button>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    loginAction(){
      axios.post('/api/user/login',{
        username: this.username,
        password: this.password
      })
      .then(data=>{
        // console.log(data)
        if(data.data.code === 0){
          //登录成功
          
          this.$store.dispatch('user/checkLogin');
          this.$store.dispatch('user/changeLoginAction',true)
          
          this.$router.push({name:'home'})
        }else {
          //登陆失败
          alert(data.data.message)
        }
      })
      .catch(error=>{
        console.log(error)
        alert('登录失败')
      })
    }
  }
}
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  background: #1ABC9C;
}
.login {
  width: 350px;
  height: 400px;
  background: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  box-shadow: 1px 1px 6px rgba(0,0,0,.5);
  .title {
    height: 140px;
    line-height: 140px;
    text-align: center;
    font-size: 20px;
    color: #1ABC9C;
    font-weight: bold;
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 10px;
      background: #1ABC9C;
    }
  }
  .con {
    padding: 0 20px;
    .username-box{
      width: 100%;
      height: 46px;
      border: 1px solid #ccc;
      margin-bottom: 20px;
      overflow: hidden;
      span {
        float: left;
        width: 50px;
        height: 100%;
        font-size: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      input {
        float: left;
        height: 44px;
        line-height: 44px;
      }
    }
    .password-box{
      width: 100%;
      height: 46px;
      border: 1px solid #ccc;
      margin-bottom: 20px;
      overflow: hidden;
      span {
        float: left;
        width: 50px;
        height: 100%;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      input {
        float: left;
        height: 44px;
        line-height: 44px;
      }
    }
    .btn {
      width: 100%;
      height: 50px;
      background:#1ABC9C;
      text-align: center;
      line-height: 50px;
      font-size: 16px;
      color: #fff;
    }
  }
}
</style>