<template>
  <div id="app">
    <h1>component-1 初始组件(重要)</h1>
    <div>
      <arm-info></arm-info>
      <panda></panda>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("arm-info", {
  template: `<div style="color:red">我是全局的arm-info组件</div>`,
});

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    panda: {
      template: `<div style="color:green">我是局部的panda组件</div>`,
    },
  },
};
</script>
