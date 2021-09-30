import axios from "axios";

async function get() {
    const response = await axios.get("api/todos")
    // debugger;
    return response.data;
}

async function getById(id) {
    const response = await axios.get("api/todos", id);
    return response.data;
}

async function post(tempTodo) {
    return await axios.post("api/todos/", tempTodo);
}

async function patch(tempTodo) {
    let todoId = tempTodo.id.toString();
    return await axios.patch("api/todos/"+todoId, tempTodo);
}

async function put(todoList) {
    //clear all, complete all
    return await axios.put("api/todos", todoList);
}

async function clear(number) {
    return await axios.delete('api/todos/', number);
}
export{ get, post, patch, put, clear, getById }



