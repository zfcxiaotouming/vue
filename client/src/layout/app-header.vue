<template>
   <a-layout-header class="header">
      <div class="info">
        <span>你好，{{username}}</span>
      </div>
      <div class="eixt" @click="eixtAction">退出</div>
    </a-layout-header>
</template>

<script>
import {Layout,Menu} from 'ant-design-vue'
import {mapState} from 'vuex'
export default {
    components: {
        [Layout.Header.name] : Layout.Header,
        [Menu.name] : Menu,
        [Menu.Item.name] : Menu.Item
    },
    computed: {
      ...mapState({
        username: state=>state.user.info.username
      })
    },
    methods: {
      eixtAction(){
        window.localStorage.removeItem('isLogin')
        this.$store.commit('user/removeUserInfo')
      }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: flex-end;
}
.info {
  color: #fff;
}
.eixt {
  color: #fff;
  margin-left: 30px;
  cursor: pointer;
}
</style>