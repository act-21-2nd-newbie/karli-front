<template>
  <div class="todo-app">

    <div class="header">
      <h1>todos</h1>
      <BaseInput :value="value" @input="onInput" @complete-all-button-clicked="onClickCompleteAll"/>
    </div>

    <div class="body">
      <div class="todos">
        <div v-if="showAll">
          <div v-for="(todo, index) in all" :key="todo.number">
            <Todo :number="index" :task="todo.task" :status="todo.status" @complete-button-clicked="onClickComplete" @clear-button-clicked="onClickClear"/>
          </div>
        </div>
        <div v-else-if="showActive">
          <div v-for="(todo, index) in active" :key="todo.number">
            <Todo :number="index" :task="todo.task" :status="todo.status" @complete-button-clicked="onClickComplete" @clear-button-clicked="onClickClear"/>
          </div>
        </div>
        <div v-else-if="showCompleted">
          <div v-for="(todo, index) in completed" :key="todo.number">
            <Todo :number="index" :task="todo.task" :status="todo.status" @complete-button-clicked="onClickComplete" @clear-button-clicked="onClickClear"/>
          </div>
        </div>
      </div>
    </div>

    <div v-bind:class="all.length > 0?'footer-active':'footer'">
      <span class="todo-count">{{ active.length }} items left </span>
      <div class="filters">
        <button v-bind:class="statusToShow==='All'?'filter-active':'filter'" @click="onClickAll">All</button>
        <button v-bind:class="statusToShow==='Active'?'filter-active':'filter'" @click="onClickActive">Active</button>
        <button v-bind:class="statusToShow==='Completed'?'filter-active':'filter'" @click="onClickCompleted">Completed</button>
      </div>
      <button v-bind:class="active.length < all.length?'clear-completed-active':'clear-completed'" @click="$emit('clear-completed-button-clicked')">Clear Completed</button>
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
    },
    onClickAll() {
      this.$emit('all-button-clicked');
    },
    onClickActive() {
      this.$emit('active-button-clicked');
    },
    onClickCompleted() {
      this.$emit('completed-button-clicked');
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-app {
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2),
              0 25px 50px 0 rgba(0,0,0,0.1);
}
h1 {
  position: absolute;
  top: -155px;
  width: 100%;
  font-weight: 100;
  font-size: 100px;
  text-align: center;
  color: olive;
  text-rendering: optimizeLegibility;
}
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

.body {
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
}

.footer-active {
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
}

.footer-active {
  right: 0;
  left: 0;
  bottom: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px rgba(0,0,0,0.2),
              0 8px 0 -3px #f6f6f6,
              0 9px 1px -3px rgba(0,0,0,0.2),
              0 16px 0 -6px #f6f6f6,
              0 17px 2px -6px rgba(0,0,0,0.2);
  text-align: center;
}

.footer {
  display: none;
}


.todo-count {
  float: left;
  text-align: left;
  margin: 3px;
  padding: 3px 7px;
}

.filters {
  margin: 0;
  padding: 0;
  right: 0;
  left: 0;
  display: inline;
}

.filter {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 3px;
}
.filter:hover {
  border-color: #808000;
}

.filter-active {
  margin: 3px;
  padding: 3px 7px;
  border: 1px solid #2c3e50;
  background-color: transparent;
  border-radius: 3px;
}

.filter-active:hover {
  border-color: #808000;
}

.clear-completed-active {
  float: right;
  margin: 3px;
  padding: 3px 7px;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 3px;
}
.clear-completed-active:hover {
  text-decoration: underline;
  margin: 3px;
  padding: 3px 7px;
}

.clear-completed {
  display: none;
  margin: 3px;
  padding: 3px 7px;
}

</style>
