<template>
  <div class="todo-app">

    <div class="header">
      <h1>todos</h1>
      <BaseInput :value="value" @input="onInput"/>
    </div>

    <div class="body">
      <div class="todos">
        <div v-for="(todo, index) in todoList" :key="todo.task">
          <Todo :number="index" :task="todo.task" :status="todo.status"/>
        </div>
      </div>
    </div>

    <div class="footer">
      <span class="todo-count"><strong>0</strong> items left </span>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo"
import BaseInput from "@/components/BaseInput";

export default {
  name: 'HelloWorld',
  components: {
    BaseInput,
    Todo
  },
  props: {
    todoList: Array,
    value: {
      type: String,
      default: '',
    }
  },
  methods: {
    onInput(value) {
      this.$emit('input', value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
