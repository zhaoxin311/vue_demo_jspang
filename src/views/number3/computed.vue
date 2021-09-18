<template>
  <div>
    <h1>computed Option 计算选项</h1>
    <hr />
    <div id="app">
      <span
        >computed
        的作用主要是对原数据进行改造输出。改造输出：包括格式的编辑，大小写转换，顺序重排，添加符号……。</span
      ><br />
      <h4>格式化输出结果</h4>
      <p>{{ newPrice }}</p>
      <hr />
      <h4>用计算属性反转数组(revers 反转未实现)</h4>
      <ul>
        <li v-for="item in reversNews" :key="item">
          {{ item.title }}----{{ item.data }}
        </li>
      </ul>
      <hr />
    </div>
  </div>
</template>

<script>
var newList = [
  { title: "一、格式化输出结果", data: "2021/4/21" },
  { title: "二、格式化输出结果", data: "2021/4/22" },
  { title: "三、格式化输出结果", data: "2021/4/23" },
  { title: "四、格式化输出结果", data: "2021/4/24" },
  { title: "五、格式化输出结果", data: "2021/4/25" },
  { title: "六、格式化输出结果", data: "2021/4/26" },
];
export default {
  data() {
    return {
      price: 10,
      newList: newList,
    };
  },
  computed: {
    newPrice() {
      return "￥" + this.price + "元";
    },
    reversNews() {
      return this.newList;
      //return this.newList.reverse();
    },
  },
};
</script>
