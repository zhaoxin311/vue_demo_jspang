<template>
  <div>
    <h1>实例入门--实例属性</h1>
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
