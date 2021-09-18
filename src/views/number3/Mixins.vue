<template>
  <div>
    <h1>Mixins 混入选项操作</h1>
    <hr />
    <div id="app">
      <span>1、Mixins一般有两种用途：</span><br />
      <p>
        1)
        在你已经写好了构造器后，需要增加方法或者临时的活动时使用的方法，这时用混入会减少源代码的污染。
      </p>
      <p>
        2)
        很多地方都会用到的公用方法，用混入的方法可以减少代码量，实现代码重用。
      </p>
      <hr />
      <span>2、mixins的调用顺序:</span>
      <p>
        从执行的先后顺序来说，都是混入的先执行，然后构造器里的再执行，<br />
        需要注意的是，这并不是方法的覆盖，而是被执行了两边。
      </p>
      <p>
        <strong
          >PS：当混入方法和构造器的方法重名时，混入的方法无法展现，也就是不起作用。</strong
        >
      </p>
      <hr />
      <span>3、全局api混入方式:</span>
      <p>
        可以定义全局的混入，这样在需要这段代码的地方直接引入js，就可以拥有这个功能
      </p>
      <p>
        <strong>PS：全局混入的执行顺序要前于混入和构造器里的方法。</strong>
      </p>
      <p>
        <strong>执行顺序：全局 > 混入 > 原生</strong>
      </p>
      <hr />
      <p>num:{{ num }}</p>
      <p><button @click="add">增加数量</button>注意观察打印台的变化</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
Vue.mixin({
  updated() {
    console.log("我是全局的update的" + ".");
  }, //全局的  注意：全局的是：mixin 混入的是：mixins
});
//声明一个对象，要求每次更新的时候打印，updated是生命周期 数据发生变化的时候 进行打印
//额外临时加入时，用于显示日志
var addLog = {
  updated() {
    console.log("数据发生变化，变化成" + this.num + ".");
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
      this.num++;
    },
  },
  updated() {
    console.log("我是原生的update的" + ".");
  }, //原生的
  mixins: [addLog], //混入的  两者执行顺序为：先混入后原生
};
</script>
