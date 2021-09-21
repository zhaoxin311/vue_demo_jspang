<template>
  <div>
    <h1>实例入门--实例属性</h1>
    <hr />
    <div id="app">
      <p>{{ num }}</p>
      <!-- <p><button @click="add">ADD</button></p> -->
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      num: 10,
    };
  },
  //实例被挂载后调用
  mounted() {
    $("#app").html("我是jQuery");
  },
  methods: {
    add() {
      console.log("调用了构造器内部的add方法");
    },
  },
};
//app.add();  //实例调用  但是在这里会报错
</script>
