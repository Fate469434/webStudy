<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodo="addTodo" />
      <MyList :todos="todos" :checkTodo="checkTodo" :deleteItem="deleteItem" />
      <MyFooter
        :todos="todos"
        :checkAllTodo="checkAllTodo"
        :clearAllDone="clearAllDone"
      />
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    addTodo(x) {
      this.todos.push(x);
    },
    // 勾选或取消勾选
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除Item
    deleteItem(id) {
      for (let key in this.todos) {
        if (this.todos[key].id === id) {
          this.todos.splice(key, 1);
        }
      }
    },
    // 全选或取消全选
    checkAllTodo(done) {
      this.todos.forEach((e) => (e.done = done));
    },
    // 删除已完成的任务
    clearAllDone() {
      let arr = new Array();
      this.todos.forEach((e) => {
        if (e.done === false) arr.push(e);
      });
      this.todos = arr;
    },
  },
  watch: {
    todos: {
      deep:true,//深度监视
      handler(newValue) {
        localStorage.setItem("todos", JSON.stringify(newValue));
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
