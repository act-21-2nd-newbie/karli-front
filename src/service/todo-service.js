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
/*
async function get(id) {
    const response = await axios.get("api/tasks"+id.toString());

}*/

export{ get }



