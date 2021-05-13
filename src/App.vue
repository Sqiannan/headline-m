<template>
  <div id="app">
    <router-view/>
    <h1>123</h1>
    <div class="box"></div>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box{
  width: 100px;
  height: 3.125;
  background: pink;
}
</style>
