<template>
  <div class="input">
  <button @click="onClickCompleteAll">check all</button>
  <input @keyup.enter="$emit('input', $event.target.value)" :value="value"
         placeholder="What needs to be done?" />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: {
      type: String,
      default: '',
    }
  },
  methods: {
    onClickCompleteAll() {
      this.$emit('complete-all-button-clicked');
    }
  }
}
</script>

<style scoped>

</style>