<template>
  <div class="todo" @click="onClickTodo">
    <input type="checkbox" id="t" name="t">
    <label for="t" v-show="true">{{ task }}</label>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    number: Number,
    task: String,
    status: Boolean,
  },
  computed: {
    showTask() {
      return this.task;
    }
  },
  methods: {
    onClickTodo() {
      this.$emit('todo-clicked', this.number, this.status);
    }
  }
}
</script>

<style scoped>
.todo {

}
</style>