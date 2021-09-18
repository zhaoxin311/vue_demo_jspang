<template>
  <div>
    <h1>Extends Option 扩展选项</h1>
    <hr />
    <p>通过外部增加对象的形式，对构造器进行扩展。</p>
    <hr />
    <span>一、extends 我么来看一个扩展实例</span>
    <div id="app">
      <p>num:{{ num }}</p>
      <p>num: ${ num } delimiters没有起效果</p>
      <p><button @click="add">增加数量</button>注意观察打印台的变化</p>
    </div>
    <span
      >扩展和混入很像<br />
      <strong
        >注意：扩展出来的方法，如果方法名一样
        扩展出来的不会被执行，只执行原生的方法</strong
      ></span
    >
    <hr />
    <span>二、delimiters 选项</span>
    <p>
      delimiters的作用是改变我们插值的符号。<br />
      Vue默认的插值是双大括号{{}}。但有时我们会有需求更改这个插值的形式。<br />
      <strong>delimiters:['${','}'] </strong>
      <br />
      现在我们的插值形式就变成了${}。
    </p>
  </div>
</template>

<script>
var extendsObj = {
  updated() {
    console.log("我是扩展的update的" + ".");
  },
  methods: {
    add() {
      console.log("我是扩展的方法");
      this.num++;
    }, //扩展出来的方法，如果方法名一样 扩展出来的不会被执行，只执行原生的方法
  },
};
export default {
  data() {
    return {
      num: 10,
    };
  },
  methods: {
    add() {
      console.log("我是原生的方法");
      this.num++;
    },
  },
  updated() {
    console.log("我是原生的update的" + ".");
  },
  extends: extendsObj,
  delimiters: ["${", "}"], //修改插值符号 但不知道为啥 在这不起效果 有待商榷
};
</script>
