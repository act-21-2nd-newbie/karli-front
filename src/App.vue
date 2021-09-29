<template>
  <div id="app">
    <HelloWorld :todo-list="todoList" :status-to-show="statusToShow" :status-for-all="statusForAll"
                @input="onInput"
                @update="updateTodo"
                @complete-button-clicked="onClickComplete"
                @complete-all-button-clicked="onClickCompleteAll"
                @all-button-clicked="onClickAll"
                @active-button-clicked="onClickActive"
                @completed-button-clicked="onClickCompleted"
                @clear-completed-button-clicked="onClickClearCompleted"
                @clear-button-clicked="onClickClear"
                @update-todo="updateTodo"

    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { get, post, patch, put, clear } from "./service/todo-service"

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      todoList: [
      ],
      statusForAll: false,
      statusToShow: 'All',
    }
  },
  async mounted() {
    this.todoList = await get();
    //console.log(a)
  },
  methods: {
    async onInput(value) {
      let tempTodo = {
        number: this.todoList.length+1,
        task: value,
        status: false
      };
      this.todoList.push(tempTodo);
      await post(tempTodo);
    },

    async onClickComplete(number) {
      let tempTodo = { number: number, task: this.todoList[number].task, status:this.todoList[number].status !== true};
      this.todoList.splice(number, 1, tempTodo);
      await patch(tempTodo);
    },
    async onClickCompleteAll() {
      this.statusForAll = this.statusForAll !== true;
      this.todoList = this.todoList.map(s=>({
        number:s.number, task:s.task, status:this.statusForAll
      }));
      //complete all by put
      await put(this.todoList);
    },

    onClickAll() {
      this.statusToShow='All';
    },
    onClickActive() {
      this.statusToShow='Active';
    },
    onClickCompleted() {
      this.statusToShow='Completed';
    },

    async onClickClearCompleted() {
      this.todoList = this.todoList.filter(function (todo) {
        return todo.status === false;
      });
      //clear completed by put
      await put(this.todoList);
    },
    async onClickClear(number) {
      this.todoList.splice(number, 1);
      await clear(number);
    },

    async updateTodo({number, value}) {
      let updateTask = {number: number, task: value, status:this.todoList[number].status}
      this.todoList.splice(number, 1, updateTask);
      await patch(updateTask);
    },
  }
}
</script>

<style>
#app {
  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
  text-align: center;
}

</style>
