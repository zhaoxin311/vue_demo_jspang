<template>
  <div>
    <h1>vue.extend 拓展实例构造器</h1>
    <hr />
    <author></author>
    <div id="mount-point"></div>
  </div>
</template>

<script>
import Vue from "vue";
// 创建构造器
var Profile = Vue.extend({
  template: "<p>{{firstName}} {{lastName}} aka {{alias}}</p>",
  data: function () {
    return {
      firstName: "Walter",
      lastName: "White",
      alias: "Heisenberg",
    };
  },
});
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount("author");
new Profile().$mount("#mount-point");
</script>
