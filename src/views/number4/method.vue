<template>
  <div>
    <h1>实例方法</h1>
    <hr />
    <div id="app">
      <!-- {{ message }} -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
var zhaoxin = Vue.extend({
  template: `<p>{{message}}</p>`,
  data() {
    return {
      message: "zhhddddhhhh",
    };
  },
});
new zhaoxin().$mount("#app");
export default {
  mounted() {
    console.log("mounted被创建");
  },
};
</script>
