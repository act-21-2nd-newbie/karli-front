<template>
  <div class="todo">
    <input @click="onClickComplete" type="checkbox" id="task" name="task" />
    <label for="task" v-show="true">{{ task }}</label>
    <button>x</button>
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
    }
  }
  ,
  computed: {
  }
}
</script>

<style scoped>
.todo {

}
</style>