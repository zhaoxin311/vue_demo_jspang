<template>
  <div>
    <h1>vue.实例</h1>
    <hr />
    <div id="app">
      登录页 dev 分支下添加的文本文字
      {{ num }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 10,
    };
  },
};
</script>
