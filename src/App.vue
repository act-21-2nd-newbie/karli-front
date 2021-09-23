<template>
  <div id="app">
    <HelloWorld :todo-list="todoList" @input="onInput" @complete-button-clicked="onClickComplete"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vue from "vue";

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
    }
  },
  methods: {
    onInput(value) {
      this.todoList.push({number:this.todoList.size+1, task:value, status:false});
    },
    onClickComplete(number) {
      this.todoList[number].status = this.todoList[number].status == true? false:true;
      //Vue.set(this.todoList[number], status, true);
    },
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
