<script setup>

</script>
  
<template>
    这是首页
</template>
  
<style scoped>
.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: none;
  background-color: transparent;
}

.el-menu-item {
  font-size: 16px;
}

.el-menu-item:first-child {
  font-size: 22px;
  font-weight: 600;
  color: #fff !important;
}

.el-menu-item:first-child:hover {
  color: #fff !important;
}

.el-menu-item:hover {
  background-color: transparent !important;
  color: #ffd04b !important;
}

.toolbar-pc {
  position: fixed;
  width: 100%;
  z-index: 100;
}

.el-menu-demo {
  border: none;
}

.flex-grow {
  flex-grow: 1;
}

.toolbar-moblie-menu {
  margin: 10px 0 0 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.el-dropdown-link:hover {
  border: none;
}

.small-menu {
  color: #fff;
}
</style>
  