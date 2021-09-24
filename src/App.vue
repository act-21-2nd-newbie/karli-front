<template>
  <div id="app">
    <HelloWorld :todo-list="todoList" :status-to-show="statusToShow" :status-for-all="statusForAll"
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
      ],
      statusForAll: false,
      statusToShow: 'All',
    }
  },
  methods: {
    onInput(value) {
      this.todoList.push({number: this.todoList.length+1, task:value, status:false});
    },
    onClickComplete(number) {
      let clickComplete = {number: number, task: this.todoList[number].task, status:this.todoList[number].status !== true}
      this.todoList.splice(number, 1, clickComplete)
    },
    onClickCompleteAll() {
      this.statusForAll = this.statusForAll !== true;
      this.todoList = this.todoList.map(s=>({
        number:s.number, task:s.task, status:this.statusForAll
      }));
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
    onClickClearCompleted() {
      this.todoList = this.todoList.filter(function (todo) {
        return todo.status === false;
      });
    },
    onClickClear(number) {
      this.todoList.splice(number, 1);
    },
/*
    update({number, value}) {
      this.todoList.set()
    }
*/
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
