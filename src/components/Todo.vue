<template>
  <div class="view">
    <div :class="edit.number !== number?'todo':'edit'">
      <label :class="status === true?'complete-view':'active-view'"
             @dblclick="handleUpdate(number, '')" >
        {{ task }}
        <input type="checkbox" >
        <span v-bind:class="status === true?'complete':'active'" @click="onClickComplete"/>
      </label>
      <button class="clear" @click="onClickClear">&#215;</button>
    </div>
    <input :class="edit.number === number?'edit-task-active':'edit-task'"
           autofocus="autofocus" autocomplete="off"
           @keyup.enter="updateTodo($event.target.value)" :edit="edit">
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
    },
    clicked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      edit: {
        number: -1,
        value: " ",
      }
    };
  },
  methods: {
    onClickComplete() {
      this.$emit('complete-button-clicked', this.number);
    },
    onClickClear() {
      this.$emit('clear-button-clicked', this.number);
    },
    handleUpdate(number, value) {
      this.clicked = !this.clicked;
      this.edit = {
        number,
        value
      }
    },
    updateTodo(value) {
      this.edit.value = value;
      this.$emit('update', this.edit);
      this.edit.number = -1;
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.view {
}
.todo {
  margin: 0;
  position: relative;
  font-size: 24px;
  width: content-box;
  border-bottom: 1px solid #ededed;
  display: flex;
  word-break: break-all;
  padding: 15px 15px 15px 60px;
  line-height: 1.2;
  transition: color 0.4s;
}
.edit {
  display: none;
}

.edit-task-active {
  padding: 16px 16px 16px 16px;
  border: 0;
  background: white;
  box-sizing: border-box;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: 100;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.edit-task {
  display: none;
}

.todo input{
  position: absolute;
  height: 0;
  width: 0;
  cursor: pointer;
  opacity: 0;
}

/* set label */
.todo .active-view {
  text-decoration: none;
}

.todo .complete-view {
  text-decoration: line-through;
  font-weight: 300;
  color: #e6e6e6;
}

/* draw checkbox */
.todo .active {
  position: absolute;
  left: 20px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
  color: white;
}
.todo .complete {
  position: absolute;
  left: 20px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid olive;
}
.todo .complete:after {
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

.todo:hover .clear {
  display: block;
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
  font-size: 40px;

}

.clear {
  display:none;
}

.todo .clear:hover {
  color: darkolivegreen;
}

</style>