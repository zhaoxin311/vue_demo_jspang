<template>
  <div>
    <h1>computed Option 计算选项</h1>
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
