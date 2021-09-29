import axios from "axios";

async function get() {
    const response = await axios.get("api/tasks")
    // debugger;
    let tempTodo = {
        number: 0,
        task: '',
        status: false
    };

    return response.data.map((x) => {
        tempTodo.number = x.id;
        tempTodo.task = x.details;
        tempTodo.status = x.status === "done";
        return tempTodo;
    });
}

async function post(tempTodo) {
    let newTodo = {
        "id": tempTodo.number,
        "details": tempTodo.task,
        "status": tempTodo.status
    };
    await axios.post("api/tasks/", newTodo);
}

async function patch(tempTodo) {
    let newTodo = {
        "id": tempTodo.number,
        "details": tempTodo.task,
        "status": tempTodo.status
    };
    await axios.patch("api/tasks/${newTodo.id}", newTodo);
}

async function put(todoList) {
    //clear all, complete all

    todoList.map((x) => {
        return {
            "id": x.number,
            "details": x.task,
            "status": x.status
        }
    });

    await axios.put("api/tasks", todoList);
}

async function clear(number) {
    await axios.delete('api/tasks/', number);
}
export{ get, post, patch, put, clear }



