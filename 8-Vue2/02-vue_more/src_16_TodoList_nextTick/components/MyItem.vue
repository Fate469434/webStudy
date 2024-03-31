<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck" />
      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span v-show="!todo.isEditing">{{ todo.title }}</span>
      <input
        type="text"
        v-show="todo.isEditing"
        :value="todo.title"
        @blur="handleBlur"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="deleteSelf">删除</button>
    <button class="btn btn-edit" @click="handleEdit" v-show="!todo.isEditing">
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  //   声明接收todo对象
  props: ["todo"],
  methods: {
    // 失去焦点回调
    handleBlur(e) {
      this.todo.isEditing = false;
      this.$bus.$emit("updateTodo", this.todo.id, e.target.value);
    },
    // 编辑
    handleEdit() {
      if (this.todo.hasOwnProperty("isEditing"))
        this.$set(this.todo, "isEditing", true);
      else {
        this.$set(this.todo, "isEditing", true);
        // 这样添加的属性不是响应式的，vue不会检测它的改变,因此必须使用$set()方法
        // this.todo.isEditing = true;
      }

      // 自动聚焦
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
      
    },
    // 勾选
    handleCheck() {
      // 通知App组件改变对应todo对象的done
      this.$bus.$emit("checkTodo", this.todo.id);
    },
    // 删除
    deleteSelf() {
      // 通知App组件删除item
      if (confirm("确认删除吗")) {
        // this.$bus.$emit("deleteItem", this.todo.id);
        pubsub.publish("deleteItem", this.todo.id);
      }
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: inline-block;
}
</style>