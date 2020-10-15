import { createRouter, createWebHistory } from 'vue-router';
// createWebHashHistory 路径带# 如：http://localhost:8080/#/about
// createWebHistory路径不带# 如：http://localhost:8081/about
import Main from '../views/Main.vue';
import Home from '../views/Home.vue';

const routes = [
  //主页
  {
    path: '/',// /根路径
    name: 'Main',
    component: Main, // 该路径访问那个组件 （home）
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'about', // 根路径/lmp/about 如：http://localhost:8080/lmp/about
        name: 'About',
        // 访问about组件
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
    ],
  },
  //调整页
  {
    path: '/movie',
    name: 'Movie',
    component: () => import(/* webpackChunkName: "about" */ '../views/Movie.vue'),
  },
];

// // 重定向
// const routes = [
//   {
//     path: '/',
//     // 写死为路径
//     redirect: '/lmp',//把主页重定向到/lmp下，如 http://localhost:8080/ 变为 http://localhost:8080/lmp
//     // 路径通过name获取
//     //  redirect: {name: 'Home'},
//   },
//   {
//     path: '/lmp',// 根路径
//     name: 'Home',
//     component: Home, // 该路径访问那个组件 （home）
//   },
//   {
//     path: '/lmp/about', // 根路径/lmp/about 如：http://localhost:8080/lmp/about
//     name: 'About',
//     // 访问about组件
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
//   },
//   {
//     path: '/lmp/child',
//     name: 'Child',
//     // 该路由下可以有很多子路由
//     // TODO 该view需要包含一个<router-view/>来加载子路由
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
//     children: [
//       {
//         path: '', // 根路径/lmp/about 如：http://localhost:8080/lmp/about
//         name: 'ChildHome',
//         // 访问about组件
//         component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
//       },
//       {
//         path: 'child1', // 根路径/lmp/about 如：http://localhost:8080/lmp/about
//         name: 'Child1',
//         // 访问about组件
//         component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
//       },
//     ],
//   },
// ];

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes, // routes: routes的简写
});

// 导出
export default router;
