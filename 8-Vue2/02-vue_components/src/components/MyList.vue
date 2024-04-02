<template>
  <ul class="todo-main">
    <MyItem v-for="item in todos" :key="item.id" />
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";

export default {
  name: "MyList",
  components: {
    MyItem,
  },
  data() {
    return {
      todos: [
        { id: "001", title: "唱", done: true },
        { id: "002", title: "跳", done: true },
        { id: "003", title: "rap", done: false },
        { id: "004", title: "篮球", done: true },
      ],
    };
  },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>
