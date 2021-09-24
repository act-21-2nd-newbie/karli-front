<template>
  <div class="todo">
    <label class="view" v-bind:class="status === true?'complete-view':'active-view'"
          @dblclick="$emit('input', $event.target.value)"
    >{{ task }}
      <input type="checkbox" >
      <span v-bind:class="status === true?'complete':'active'" @click="onClickComplete"/>
    </label>
    <button class="clear" @click="onClickClear">&#215;</button>
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
  },
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

.view {
  display: flex;
  word-break: break-all;
  padding: 15px 15px 15px 60px;
  line-height: 1.2;
  transition: color 0.4s;
}

.view input {
  position: absolute;
  height: 0;
  width: 0;
  cursor: pointer;
  opacity: 0;
}

/* set label */
.active-view {
  text-decoration: none;
}

.complete-view {
  text-decoration: line-through;
  font-weight: 300;
  color: #e6e6e6;
}

/* draw checkbox */
.active {
  position: absolute;
  left: 20px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
  color: white;
}
.complete {
  position: absolute;
  left: 20px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid olive;
}
.complete:after {
  content: "\2713";
  font-size: 20px;
  font-weight: 200;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: olive;
  text-align: center;
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
  margin-bottom: 13px;
  color: olive;
  background-color: transparent;
  border-color: transparent;
  transition: color 0.2s ease-out;
}

.view:hover + .clear {
  display: block;
  font-size: 40px;
}

.clear:hover {
  color: darkolivegreen;
}

</style>