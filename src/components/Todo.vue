<template>
  <div class="todo">
    <input @click="onClickComplete" type="checkbox" id="task" name="task" />
    <label for="task" v-show="true">{{ task }}</label>
    <button @click="onClickClear">x</button>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    number: Number,
    task: String,
    status: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    onClickComplete() {
      this.$emit('complete-button-clicked', this.number);
    },
    onClickClear() {
      this.$emit('clear-button-clicked', this.number);
    },
  }
  ,
  computed: {
  }
}
</script>

<style scoped>
.todo {
  margin: 0;
  padding: 0;
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}
</style>