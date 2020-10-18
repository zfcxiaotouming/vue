<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      isLogin: state=>state.user.isLogin,
      // isAdmin: state=>state.user.info.isAdmin
    })
  },
  watch: {
    isLogin: {
      handler(newVal){
        if(!newVal){
          //登录状态过期了，需要重新登录
          this.$router.replace('/auth')
        }
      },
      immediate: true
    },
    // isAdmin: {
    //   handler(newVal){
    //     console.log(newVal)
    //     if(newVal){
    //       //是管理员，需要添加权限管理的路由
    //       this.$router.addRoutes([
    //         {
    //           path: '/',
    //           component: () => import("./layout/Index"),
    //           children: [
    //             {
    //               path: "rights-manage",
    //               name: "rights-manage",
    //               component: () => import("./views/rights/Manage"),
    //             },
    //             {
    //               path: 'add-acount',
    //               name: 'add-acount',
    //               component: () => import("./views/rights/AddAcount"),
    //             }
    //           ]
    //         }
    //       ])
    //     }
    //   },
    //   immediate: true
    // }
  },
  created(){
    //检查登录是否过期了
    if(this.isLogin){
      this.$store.dispatch('user/checkLogin');
    }
  }
}
</script>

<style scoped lang="scss">
.app {
  width: 100%;
  height: 100%;
}
</style>