<template>
  <div id="app">
    <h1>component 初始组件(重要)</h1>
    <div id="components-demo">
      <button-counter></button-counter>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

// 定义一个名为 button-counter 的新组件
Vue.component("button-counter", {
  data: function () {
    return {
      count: 0,
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
});
new Vue({ el: "#components-demo" });
</script>
