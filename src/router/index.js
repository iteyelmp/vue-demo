import { createRouter, createWebHistory } from 'vue-router'
// createWebHashHistory 路径带# 如：http://localhost:8080/#/about
// createWebHistory路径不带# 如：http://localhost:8081/about
import Home from '../views/Home.vue'

const routes = [
  //主页
  {
    path: '/',// /根路径
    name: 'Home',
    component: Home // 该路径访问那个组件 （home）
  },
  //调整页
  {
    path: '/about', // 根路径/about 如：http://localhost:8080/#/about
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 访问about组件
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes // routes: routes的简写
})

// 导出
export default router
