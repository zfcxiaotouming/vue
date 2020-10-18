<template>
    <div class="layout">
        <div class="pages">
            <van-nav-bar
                :title="title"
                :left-text="!userName?'登录':''"
                class="nav-bar"
                @click-left="onClickLeft"
            />
            <router-view class="child"></router-view>
        </div>
        <div class="tabbar-box" >
            <van-tabbar route >
                <van-tabbar-item replace  icon="home-o" to="/home">首页</van-tabbar-item>
                <van-tabbar-item replace  icon="search" to="/doing">分类</van-tabbar-item>
                <van-tabbar-item replace  icon="friends-o" to="/message">购物车</van-tabbar-item>
                <van-tabbar-item replace  icon="setting-o" to="/user">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'layout',
    data() {
        return {
            title: '首页',
            value: 0
        }
    },
    computed:{
        ...mapState({
            userName:state=>state.userName
        }),
        // showLogin() {
        //     // return this.title == '首页'
        // }
    },
    methods: {
        onClickLeft() {
            this.$router.push('/login')
        },
    }
}
</script>

<style lang="scss" scope>
.layout {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.pages {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .child {
        flex: 1;
        overflow: hidden;
    }
}
.tabbar-box {
    height: 50rem;
}
</style>