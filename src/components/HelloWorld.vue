<template>
  <div class="todo-app">

    <div class="header">
      <h1>todos</h1>
      <BaseInput :value="value" @input="onInput" @complete-all-button-clicked="onClickCompleteAll"/>
    </div>

    <div class="body">
      <div class="todos">
        <div v-if="showAll">
          <div v-for="(todo, index) in all" :key="todo.task">
            <Todo :number="index" :task="todo.task" :status="todo.status" @complete-button-clicked="onClickComplete" @clear-button-clicked="onClickClear"/>
          </div>
        </div>
        <div v-else-if="showActive">
          <div v-for="(todo, index) in active" :key="todo.task">
            <Todo :number="index" :task="todo.task" :status="todo.status" @complete-button-clicked="onClickComplete" @clear-button-clicked="onClickClear"/>
          </div>
        </div>
        <div v-else-if="showCompleted">
          <div v-for="(todo, index) in completed" :key="todo.task">
            <Todo :number="index" :task="todo.task" :status="todo.status" @complete-button-clicked="onClickComplete" @clear-button-clicked="onClickClear"/>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <span class="todo-count"><strong>{{ active.length }}</strong> items left </span>
      <button @click="$emit('all-button-clicked')">All</button>
      <button @click="$emit('active-button-clicked')">Active</button>
      <button @click="$emit('completed-button-clicked')">Completed</button>
      <button @click="$emit('clear-completed-button-clicked')">Clear Completed</button>
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
    statusToShow: String,
    value: String, //for input
  },
  computed: {
    showAll() {
      return this.statusToShow === 'All';
    },
    showActive() {
      return this.statusToShow === 'Active';
    },
    showCompleted() {
      return this.statusToShow === 'Completed';
    },
    all() {
      return this.todoList;
    },
    active() {
      return this.todoList.filter(function (todo) {
        return todo.status===false;
      });
    },
    completed() {
      return this.todoList.filter(function (todo) {
        return todo.status===true;
      });
    },
  },
  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
    onClickComplete(number) {
      this.$emit('complete-button-clicked', number);
    },
    onClickCompleteAll() {
      this.$emit('complete-all-button-clicked');
    },
    onClickClear(number) {
      this.$emit('clear-button-clicked', number);
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
