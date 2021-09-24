<template>
  <div class="input" style="display: flex">
    <div>
      <label class="view" :class="todoList.length>0?'':'complete-all'">
        <input type="checkbox">
        <span :class="statusForAll?'complete-all-click-active':'complete-all-click'" @click="onClickCompleteAll" />
      </label>
    </div>
    <div>
      <input class="new-todo" @keyup.enter="$emit('input', $event.target.value)" :value="value"
             autofocus="autofocus" autocomplete="off"
             placeholder="What needs to be done?" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: {
      type: String,
      default: '',
    },
    statusForAll: Boolean,
    todoList: Array,
  },
  methods: {
    onClickCompleteAll() {
      this.$emit('complete-all-button-clicked');
    }
  }
}
</script>

<style scoped>

.new-todo {
  padding: 16px 16px 16px 16px;
  border: 0;
  background: rgba(0,0,0,0.003);
  box-sizing: border-box;
  width: 100%;
  outline: none;
  font-size: 24px;
  font-family: inherit;
  font-weight: 100;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.new-todo::-webkit-input-placeholder {
  font-style: italic;
  font-weight: 100;
  color: #e6e6e6;
}
.new-todo::-moz-placeholder {
  font-style: italic;
  font-weight: 100;
  color: #e6e6e6;
}

.view input {
  position: absolute;
  height: 0;
  width: 0;
  cursor: pointer;
  opacity: 0;
}

/* show or not */
.complete-all {
  display: none;
}

/* clicked or not */
.complete-all-click {
  width: 40px;
  height: 40px;
  top: -52px;
  left: -13px;
}
.complete-all-click:after {
  content: '∨';
  font-size: 22px;
  color: #e6e6e6;
  padding: 10px 0px 10px 25px;
 }
.complete-all-click-active {
  width: 40px;
  height: 40px;
  top: -52px;
  left: -13px;
}
.complete-all-click-active:after {
  content: '∨';
  font-size: 22px;
  color: black;
  margin-top: 30px;
  padding: 10px 0px 10px 25px;
}

</style>