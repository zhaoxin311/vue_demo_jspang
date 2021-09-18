<template>
  <div>
    <h1>Methods Option方法选项</h1>
    <hr />
    <div id="app">
      {{ num }}
      <h4>一、methods中参数的传递</h4>
      <p><button @click="add(2, $event)">ADD</button></p>
      <br />
      <h4>二、methods中的$event参数</h4>
      <p>
        <btn @click.native="add(2, $event)"></btn
        >native是给组件绑定构造器里的原始事件(实际开发中常用)
      </p>
      <br />
      <h4>三、native给组件绑定构造器里的原生事件</h4>
      <p><btn @click.native="add(5, $event)"></btn></p>
      <br />
      <span
        >event是一个包含了大部分鼠标事件的属性对象，
        在交互性特别强的时候会用到</span
      >
    </div>
    <hr />
    <h4>四、作用域外部调用构造器里的方法</h4>
    <button @click="add(4, $event)">外部调用构造器里的方法</button>
  </div>
</template>

<script>
var btn = {
  template: `<button>组件ADD</button>`,
};
export default {
  data() {
    return {
      num: 10,
    };
  },
  components: {
    btn: btn,
  },
  methods: {
    add(date, event) {
      if (date != 0) {
        this.num += date;
      } else {
        this.num++;
      }
      console.log(event);
    },
  },
};
</script>
