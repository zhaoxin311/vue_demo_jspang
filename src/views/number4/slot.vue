<template>
  <div>
    <h1>内置组件--slot讲解</h1>
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
