<template>
  <div id="app">
    <h1>component 标签</h1>
    <div>
      <component v-bind:is="who"></component>
      <button @click="changecomponent">changecomponent</button><br />
      <span
        >标签是Vue框架自定义的标签，它的用途就是可以动态绑定我们的组件，<br />
        根据数据的不同更换不同的组件。<br />
        component 标签的作用是 可以动态的根据data值
        来展示声明的不同组件的属性</span
      >

      <componentA></componentA>
      <componentB></componentB>
      <componentC></componentC>
    </div>
  </div>
</template>

<script>
var componentA = {
  template: `<div style="color:red">我是A</div>`,
};
var componentB = {
  template: `<div style="color:green">我是B</div>`,
};
var componentC = {
  template: `<div style="color:pink">我是C</div>`,
};

export default {
  name: "app",
  data() {
    return {
      who: "componentB",
    };
  },
  //将三个组件进行挂载到component，相当于声明组件
  components: {
    componentA: componentA,
    componentB: componentB,
    componentC: componentC,
  },
  methods: {
    changecomponent() {
      if (this.who == "componentA") {
        this.who = "componentB";
      } else if (this.who == "componentB") {
        this.who = "componentC";
      } else {
        this.who = "componentA";
      }
    },
  },
};
</script>
