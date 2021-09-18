<template>
  <div>
    <h1>propsData Option 全局扩展的数据传递</h1>
    <hr />
    <div id="app">
      <title></title>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
var title_a = Vue.extend({
  template: `<p>{{message}}</p>`,
  data() {
    return {
      message: "zhaoxin",
    };
  },
});
export default {};
new title_a().$mount("title");
</script>
