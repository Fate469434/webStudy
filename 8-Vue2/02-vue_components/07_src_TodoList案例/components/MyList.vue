<template>
  <ul class="todo-main">
    <MyItem
      v-for="todoItem in todos"
      :key="todoItem.id"
      :todo="todoItem"
      :checkTodo="checkTodo"
      :deleteItem='deleteItem'
    />
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";

export default {
  name: "MyList",
  components: { MyItem },
  //声明接收App传递过来的数据，其中todos是自己用的，checkTodo和deleteTodo是给子组件MyItem用的
  props: ["todos", "checkTodo",'deleteItem'],
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