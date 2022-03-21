<template>
  <div class="header">
    <img
      src="../assets/logo.png"
      class="logo"
    >
    <router-link to="/News">news</router-link>
    <router-link to="/Ask">ask</router-link>
  </div>
</template>
<style scope>
.header a {
  color: #fff;
  margin: 0 10px;
}
.header {
  background: #000;
  display: flex;
  align-items: center;
}
.logo {
  width: 30px;
  height: 30px;
}
</style>