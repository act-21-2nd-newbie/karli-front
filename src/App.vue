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
import { get, post, patch, patchAll, clear, clearAll } from "./service/todo-service"

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
        task: value,
        status: false
      };
      this.todoList.push(tempTodo);
      await post(tempTodo);
    },

    async onClickComplete(id) {

      let idx = this.todoList.findIndex((element) => {
        return element.id === id;
      });
      let tempTodo = { id: id, task: this.todoList[idx].task, status: this.todoList[idx].status !== true};
      this.todoList.splice(idx, 1, tempTodo);
      await patch(id, {"status": tempTodo.status});
    },
    async updateTodo({id, value}) {
      let idx = this.todoList.findIndex((element) => {
        return element.id === id;
      });
      let tempTodo = { id: id, task: value, status: this.todoList[idx].status }
      this.todoList.splice(idx, 1, tempTodo);
      await patch(id, {"task": value.toString()});
    },

    async onClickCompleteAll() {
      this.statusForAll = this.statusForAll !== true;
      this.todoList = this.todoList.map(s=>({
        number:s.number, task:s.task, status:this.statusForAll
      }));
      await patchAll({"status": this.statusForAll});
    },

    async onClickClearCompleted() {
      this.todoList = this.todoList.filter((todo) => {
        return todo.status === false;
      });

      await clearAll(this.todoList);
    },
    async onClickClear(id) {
      let idx = this.todoList.findIndex((element) => {
        return element.id === id;
      });
      this.todoList.splice(idx, 1);
      await clear(id);
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
