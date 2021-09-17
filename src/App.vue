<template>
  <el-container>
    <el-aside>
      <el-col>
        <h5>跟着jspang学习vue2.0</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>第二季 全局API</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/directive" @click="goTo('/Directive')"
                >vue.directive 自定义指令</el-menu-item
              >
              <el-menu-item index="/extend" @click="goTo('/Extend')"
                >vue.extend 拓展实例构造器(no)</el-menu-item
              >
              <el-menu-item index="/set" @click="goTo('/Set')"
                >vue.set 全局操作(no)</el-menu-item
              >
              <el-menu-item index="/LifeCycle" @click="goTo('/LifeCycle')"
                >vue的生命周期</el-menu-item
              >
              <el-menu-item index="/template" @click="goTo('/template')"
                >template 制作模板</el-menu-item
              >
              <el-menu-item index="/component" @click="goTo('/component')"
                >component-1</el-menu-item
              >
              <el-menu-item index="/component2" @click="goTo('/component2')"
                >component-2</el-menu-item
              >
              <el-menu-item index="/component3" @click="goTo('/component3')"
                >component-3</el-menu-item
              >
              <el-menu-item index="/component4" @click="goTo('/component4')"
                >component-4</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/demo" @click="goTo('/Home')">
            <i class="el-icon-menu"></i>
            <span slot="title">第二季</span>
          </el-menu-item>
          <el-menu-item index="/index" @click="goTo('/About')">
            <i class="el-icon-setting"></i>
            <span slot="title">第三季</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goTo(path) {
      this.$router.replace(path);
    },
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 20px;
  height: 90vh;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center;
  line-height: 160px; */
}
</style>
