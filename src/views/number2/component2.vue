<template>
  <div>
    <h1>component组件 props属性设置</h1>
    <hr />
    <div id="app">
      <!-- 注册一个属性here -->
      <panda v-bind:here="country" :from-here="city"></panda>
      <span>自定义的属性名 如若中间有- 在components中要用驼峰形式</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      country: "china",
      city: "sichuan",
    };
  },
  components: {
    panda: {
      //在组件的模板里读出属性值只需要用插值的形式
      template: `<div style="color:green">panda from {{here}}-{{fromHere}}</div>`,
      props: ["here", "fromHere"], //props是一个选项,props选项就是设置和获取标签上的属性值的
    },
  },
};
</script>
