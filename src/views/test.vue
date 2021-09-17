<template>
  <div>
    <h1>vue.实例</h1>
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
