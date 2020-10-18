<template>
  <div class="login">
        <van-nav-bar
            title="用户注册"
            class="nav-bar"
        />
        <div class="content">
            <div class="img">
                <img src="../../assets/logo.png" alt="">
            </div>
            <div class="input">
                <van-form @submit="onSubmit">
                    <van-field
                        v-model="username"
                        name="用户名"
                        label="用户名"
                        placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                        v-model="password"
                        type="password"
                        name="密码"
                        label="密码"
                        placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]"
                    />
                    <div style="margin: 16px;">
                        <van-button round block type="info" native-type="submit">
                        注册
                        </van-button>
                    </div>
                </van-form>
            </div>
            <div class="toggle">
                <router-link to="/login">登录</router-link>
            </div>
        </div>
  </div>
</template>

<script>
import { Dialog, Toast } from "vant";
export default {
    name: 'login',
    data(){
        return {
            username: '',
            password: '',
        }
    },
    destroyed() {
        if(this.timer) {
            clearTimeout(this.timer)
        }
    },
    methods: {
        onSubmit(values) {
            this.$api.post('/api/appUser/regist', {username:this.username, password:this.password}).then(res => {
                let data = res.data
                if(data.code == 0) {
                    Toast('注册成功');
                    this.timer = setTimeout(() => {
                        this.$router.replace('/login')
                    }, 1000);
                }
            })
        },
    }
}
</script>

<style lang="scss" scope>
.login {
    height: 100%;
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 60rem;
        .img {
            width: 50rem;
            height: 50rem;
            img {
                width: 50rem;
                height: 50rem;
            }
        }
        .input {
            margin-top: 50rem;
        }
        .toggle {
            width: 280rem;
            display: flex;
        }
    }
}

</style>