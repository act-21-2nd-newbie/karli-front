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

export{ get, post }



