<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" :checked="isAllDone" @click="checkAll" />
    </label>
    <span>
      <span>已完成{{ done }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="deleteAllDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo",'clearAllDone'],
  computed: {
    total() {
      return this.todos.length;
    },
    done() {
      let x = 0;
      this.todos.forEach((element) => {
        if (element.done) x++;
      });
      return x;
    },
    isAllDone() {
      return this.done === this.total && this.total != 0;
    },
  },
  methods: {
    checkAll(e) {
      this.checkAllTodo(e.target.checked);
    },
    deleteAllDone(e){
      this.clearAllDone()
    }
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>