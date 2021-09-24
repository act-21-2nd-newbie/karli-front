<template>
  <div id="app">
    <HelloWorld :todo-list="todoList" :status-to-show="statusToShow"
                @input="onInput"
                @complete-button-clicked="onClickComplete"
                @complete-all-button-clicked="onClickCompleteAll"
                @all-button-clicked="onClickAll"
                @active-button-clicked="onClickActive"
                @completed-button-clicked="onClickCompleted"
                @clear-completed-button-clicked="onClickClearCompleted"
                @clear-button-clicked="onClickClear"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      todoList: [
        {number: 1, task: "sample task", status: false},
        {number: 2, task: "sample task2", status: false},
      ],
      statusForAll: Boolean,
      statusToShow: 'All',
    }
  },
  methods: {
    onInput(value) {
      this.todoList.push({number:this.todoList.size+1, task:value, status:false});
    },
    onClickComplete(number) {
      this.todoList[number].status = this.todoList[number].status != true;
      //Vue.set(this.todoList[number], status, true);
    },
    onClickCompleteAll() {
      this.statusForAll = this.statusForAll !== true;
      this.todoList = this.todoList.map(s=>({
        number:s.number, task:s.task, status:this.statusForAll
      }));
    },
    onClickAll() {
      this.statusToShow='All';
      return this.todoList;
    },
    onClickActive() {
      this.statusToShow='Active';
    },
    onClickCompleted() {
      this.statusToShow='Completed';
    },
    onClickClearCompleted() {
      this.todoList = this.todoList.filter(function (todo) {
        return todo.status === false;
      });
    },
    onClickClear(number) {

/*
      console.log(number);
      let idx = this.todoList.findIndex(function (todo) {
        return todo.number === number;
      });
      console.log(idx);

      this.todoList.splice(idx, 1);
*/
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
