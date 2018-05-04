<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
body {
  margin: 0px;
  padding: 0px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
}
#app { 
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

.reng-container{
  margin-top: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
}
.fade-enter,
.fade-leave-active{
  opacity: 0;
}
</style>
