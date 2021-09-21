<template>
  <div>
    <h1>实例事件</h1>
    <hr />
    <span
      >实例事件就是在构造器外部写一个调用构造器内部的方法。这样写的好处是可以通过这种写法在构造器外部调用构造器内部的数据。</span
    >
    <div id="app">
      {{ num }}
      <p><button @click="add">add</button></p>
    </div>

    <p><button onclick="reduce()">add</button></p>
  </div>
</template>

<script>
// import Vue from "vue";
// var app = new Vue({
//   el: "app",
// });
// app.$on("reduce", function () {
//   console.log("执行了reduce()");
//   this.num--;
// });
// //外部调用内部事件
// function reduce() {
//   app.$emit("reduce");
// }
export default {
  data() {
    return {
      num: 10,
    };
  },
  methods: {
    add() {
      this.num++;
    },
  },
};
</script>
