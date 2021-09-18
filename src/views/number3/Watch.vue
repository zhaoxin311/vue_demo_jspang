<template>
  <div>
    <h1>Watch 选项 监控数据</h1>
    <hr />
    <div id="app">
      <p>今天的室外温度是：{{ Temperature }}</p>
      <p>今天适合着装类型：{{ clothing }}</p>
      <p>
        <button @click="add">升高温度</button>
        <button @click="cut">降低温度</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temperature: 10,
      clothing: "厚外套",
      clothingArr: ["羽绒服", "厚外套", "短袖"],
    };
  },
  computed: {
    Temperature() {
      return this.temperature + "℃";
    },
  },
  //在构造器内部写watch
  watch: {
    Temperature() {
      // if(newval>=26){
      //   this.clothing='短袖'
      // }else if(newval<26&&newval>0){
      //   this.clothing='厚外套'
      // }else{
      //   this.clothing='羽绒服'
      // }
      if (this.temperature < 10) {
        this.clothing = this.clothingArr[0];
      } else if (10 <= this.temperature && this.temperature < 30) {
        this.clothing = this.clothingArr[1];
      } else {
        this.clothing = this.clothingArr[2];
      }
      // console.log("温度发生了变化");
    },
  },
  methods: {
    add() {
      this.temperature += 5;
    },
    cut() {
      this.temperature -= 5;
    },
  },
};
//写在构造器外边 通过实例方法实现 效果等同
// app.$watch("temperature", function (newVal, oldVal) {
//   if (newVal >= 26) {
//     this.suggestion = suggestion[0];
//   } else if (newVal < 26 && newVal >= 0) {
//     this.suggestion = suggestion[1];
//   } else {
//     this.suggestion = suggestion[2];
//   }
// });
</script>
