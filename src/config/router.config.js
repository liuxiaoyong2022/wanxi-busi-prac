import { UserLayout, TabLayout, RouteView, BlankLayout, PageView } from '../components/layouts'

/**
 * 走菜单，走权限控制
 * @type {[null,null]}
 */
export const asyncRouterMap = [

  {
    path: '/',
    name: 'dashboard',
    component: TabLayout,
    meta: { title: '首页' },
    redirect: '/dashboard/analysis',
    children: [


    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login2')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ 'wanxi-vue-component/src/components/register/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ 'wanxi-vue-component/src/components/register/RegisterResult')
      },
      {
        path: 'alteration',
        name: 'alteration',
        component: () => import(/* webpackChunkName: "user" */ 'wanxi-vue-component/src/components/alteration/Alteration')
      },
      {
        path: 'goto-hello-world',
        name: 'goto-hello-world',
        component: () => import(/* webpackChunkName: "user" */ '@/components/HelloWorld')
      }
    ]
  },

  // {
  //   path: '/',
  //   name: 'index',
  //   component: TabLayout,
  //   meta: {title: '首页'},
  //   redirect: '/dashboard/workplace',
  //   children: [
  //     {
  //       path: '/online',
  //       name: 'online',
  //       redirect: '/online',
  //       component: RouteView,
  //       meta: {title: '在线开发', icon: 'dashboard', permission: ['dashboard']},
  //       children: [
  //         {
  //           path: '/online/auto/:code',
  //           name: 'report',
  //           component: () => import('@/views/modules/online/cgreport/OnlCgreportAutoList')
  //         },
  //       ]
  //     },
  //   ]
  // },

  {
    // OAuth2 APP页面路由
    path: '/oauth2-app',
    component: BlankLayout,
    redirect: '/oauth2-app/login',
    children: [
      {
        // OAuth2 登录路由
        path: 'login',
        name: 'oauth2-app-login',
        component: () => import(/* webpackChunkName: "oauth2-app.login" */ '@/views/user/oauth2/OAuth2Login')
      },
    ]
  },

  {
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('@/views/Home')
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  },

]
