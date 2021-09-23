<template>
  <input class="input" @keyup.enter="$emit('input', $event.target.value)" :value="value"
         placeholder="What needs to be done?" />
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
  }
}
</script>

<style scoped>

</style>