<template>
  <div class="input">
    <button @click="onClickCompleteAll">check all</button>
    <input @keyup.enter="$emit('input', $event.target.value)" :value="value"
           autofocus="autofocus" autocomplete="off"
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
input {
  padding: 16px 16px 16px 16px;
  border: none;
  background: rgba(0,0,0,0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.3);
}

input::-webkit-input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}
input::-moz-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}
button {
  background-color: transparent;
  border: none;
  right: 100%;
  bottom: 100%;
}

</style>