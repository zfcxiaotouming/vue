import Router from 'vue-router'
import Vue from 'vue'
import store from '../store'
import auth from './authRoute'
import main from './mainRoute'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        auth,
        {
            path: "/",
            component: () => import("../layout/Index"),
            name: 'app',
            children: [
              // 系统首页
              {
                path: "",
                name: "home",
                component: () => import("../views/home/Home"),
                meta: {
                  //路由的数据
                  icon: "home",
                  title: "系统首页",
                },
              },
            ],
        },
        {
            path: '/',
            component: () => import("../layout/Index"),
            children: [
              {
                path: '404',
                name: '404',
                component: () => import("../views/common/NotFind"),
              }
            ]
        },
        {
        path: '*',
        redirect: '/404'
        }
    ]
})

//路由守护
//登录了才可以进入，没有登陆只可以进入登录注册页面
//每一次进入路由地址都会先执行
router.beforeEach((to,from,next)=>{
    //to 去哪里
    // from 从哪里来
    // console.log('beforeEach....')

    //next() 进入
    //next(false) 阻止路由进入
    if(to.name === 'login' || to.name === 'register'){
        //登录注册页面
        next()
    }else {
        //进入项目，判断是否有权限
        if(store.state.user.isLogin){
            next()
        }else {
            next('/auth')
        }
    }

})

export default router