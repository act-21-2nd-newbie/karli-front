<template>
  <div class="todo">
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
  }
}
</script>

<style scoped>
.todo {

}
</style>