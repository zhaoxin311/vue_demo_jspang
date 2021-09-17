<template>
  <div>
    <h1>propsData Option 全局扩展的数据传递</h1>
    <hr />
    <div id="app">
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
