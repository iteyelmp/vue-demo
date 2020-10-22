<template>
  <div class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <!--重定向路由-->
    <!--<router-link to="/lmp/about">About</router-link>-->
    <!-- 路由的容器 -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

.nav a:hover {
  text-decoration: none;
  color: rebeccapurple;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
