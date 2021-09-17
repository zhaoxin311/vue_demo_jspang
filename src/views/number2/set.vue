<template>
  <div>
    <h1>vue.set 全局操作</h1>
    <hr />
    <div id="app">
      <span
        >Vue.set
        的作用就是在构造器外部操作构造器内部的数据、属性或者方法。比如在vue构造器内部定义了一个count为1的数据，我们在构造器外部定义了一个方法，要每次点击按钮给值加1.就需要用到Vue.set。</span
      >
      <hr />
      {{ count }}
    </div>
  </div>
</template>

<script>
//import Vue from "vue";
var outData = {
  count: 1,
  goods: "car",
};

export default {
  data() {
    return {
      num: 10,
      data: outData,
    };
  },
};
</script>
