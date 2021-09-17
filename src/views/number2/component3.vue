<template>
  <div>
    <h1>component父子组件关系</h1>
    <hr />
    <div id="app">
      <!-- 注册一个属性here -->
      <panda></panda>
    </div>
  </div>
</template>

<script>
var cityname = {
  template: `<div style="color:green;">sichuan of china</div>`,
};
//构造器外部定义一个局部的组件
var pandaComponent = {
  template: `
  <div>
  <p style="color:red;">panda from china</p>
  <city></city>
  </div>`,
  components: {
    city: cityname,
  },
};

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    panda: pandaComponent,
  },
};
</script>
