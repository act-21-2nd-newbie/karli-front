<template>
  <div class="todo">
    <div class="view">
      <input class="toggle" @click="onClickComplete" type="checkbox" id="task" name="task" />
      <label for="task" v-show="true">{{ task }}</label>
    </div>
    <button class="clear" @click="onClickClear">x</button>
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
/*

.toggle {
  text-align: center;
  width: 40px;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  -webkit-appearance: none;
  appearance: none;
}

.toggle + label {
  background-color: #2c3e50;
  background-repeat: no-repeat;
  background-position: center left;
}
.toggle:checked + label {
  background-color: #42b983;
  background-repeat: no-repeat;
  background-position: center left;
}
*/
.view {
  display: flex;
  align-content: center;
}

label {
  word-break: break-all;
  padding: 15px 15px 15px 60px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
}

.clear {
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: olive;
  margin-bottom: 11px;
  background-color: transparent;
  border-color: transparent;
  transition: color 0.2s ease-out;
}

.view:hover + .clear {
  display: block;
}

.clear:hover {
  color: darkolivegreen;
}


</style>