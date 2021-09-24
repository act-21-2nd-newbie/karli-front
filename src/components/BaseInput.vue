<template>
  <div class="input">
    <div>
      <input class="new-todo" @keyup.enter="$emit('input', $event.target.value)" :value="value"
             autofocus="autofocus" autocomplete="off"
             placeholder="What needs to be done?" />
    </div>
    <div>
      <label class="view" :class="todoList.length>0?'':'complete-all'">
        <input type="checkbox">
        <span :class="statusForAll?'complete-all-click-active':'complete-all-click'" @click="onClickCompleteAll" />
      </label>
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
  padding: 16px 16px 16px 60px;
  border: 0;
  background: rgba(0,0,0,0.003);
  box-shadow: inset 0 -2px 1px 0 rgba(0,0,0,0.03);
  /*box-shadow: 0 4px 17px rgba(0,0,0,0.2);*/
  box-sizing: border-box;
  outline: none;
  float: right;
  font-size: 24px;
  font-family: inherit;
  font-weight: 100;
  width: 100%;
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
  position: absolute;
  width: 40px;
  height: 40px;
  top: -52px;
  left: -13px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.complete-all-click:after {
  content: '>';
  font-size: 22px;
  color: #e6e6e6;
  margin-top: 30px;
  padding: 10px 27px 10px 27px;
}
.complete-all-click-active {
  position: absolute;
  width: 40px;
  height: 40px;
  top: -52px;
  left: -13px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.complete-all-click-active:after {
  content: '>';
  font-size: 22px;
  color: black;
  margin-top: 30px;
  padding: 10px 27px 10px 27px;

}


</style>