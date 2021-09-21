<template>
  <div>
    <h1>内置组件--slot讲解</h1>
    <hr />
    <div id="app">
      <zhaoxin>
        <!-- 第一步：在组件中用slot属性传递值 -->
        <span slot="zxURL">{{ zhaoxinData.zxURL }}</span>
        <span slot="name">{{ zhaoxinData.name }}</span>
        <span slot="skill">{{ zhaoxinData.skill }}</span>
      </zhaoxin>
    </div>
    <template id="tem">
      <!-- 第二部：在组件模板中用标签接收值 -->
      <p>博客地址：<slot name="zxURL"></slot></p>
      <p>网名：<slot name="name"></slot></p>
      <p>技术：<slot name="skill"></slot></p>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zhaoxinData: {
        zxURL: "www.baidu.com",
        name: "zhaoxin",
        skill: "qinadan",
      },
    };
  },
  components: {
    zhaoxin: zhaoxin, //组件名称：模板名称
  },
};
var zhaoxin = {
  template: "#tem",
};
</script>
