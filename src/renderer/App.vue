<template>
  <div id="app">
    <header>
      <el-menu :default-active="$route.path" mode="horizontal" background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b" class="app-nav" router>
        <el-menu-item index="1">菜单</el-menu-item>
        <el-menu-item index="/bbs?testValue=123">论坛</el-menu-item>
        <el-menu-item index="/circle?textValue=token01">圈子</el-menu-item>
      </el-menu>
    </header>
    <div class="app-main">
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>
  export default {
    name: 'uce-bbs'
  }
</script>

<style>
  /* CSS */
  * {
    font-family: "微软雅黑";
  }

  body {
    background-color: #F1FAFA;
  }

  ul,
  li,
  a {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
  }

  .app-nav {
    padding-left: 115px !important;
  }

  .app-main{
    padding: 8px;
  }
</style>