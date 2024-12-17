import { useState } from "react";

function TodoList(){
    const [newTask,setTask]=useState('')
    const [tasks,setTasks]=useState([])
    const handleNewTask=(e)=>{
        setTask(e.target.value)
    }


return <>
<div >
    <h1>{newTask}</h1>
    <input type="text" onChange={handleNewTask} /><button>Add Task</button>
</div>
</>
}
export default TodoList