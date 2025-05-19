import { useState } from "react";

function ToDoList() {
    const [tasksList, setTasksList] = useState(["Wake up", "Take a bath"]);
    const [task, setTask] = useState("");
    
    function handleSetTask(event) {
        setTask(t => event.target.value);
    }

    function addTask() {
        if (task.trim() !== "") {
            // we can add task now
            setTasksList(tl => [...tl, task])
        }
        setTask(t => "");
    }

    function removeTask(index) {
        const newTaskList = tasksList.filter((_, i) => i !== index);
        setTasksList(tl => tl = newTaskList)
    }

    function moveTaskUp(index) {
        if (index === 0) return;
        const updatedTasksList = [...tasksList];
        [updatedTasksList[index], updatedTasksList[index-1]] = [updatedTasksList[index-1], updatedTasksList[index]]
        setTasksList(tl => tl = updatedTasksList);
    }

    function moveTaskDown(index) {
        if (index === tasksList.length-1) return;
        const updatedTasksList = [...tasksList];
        [updatedTasksList[index], updatedTasksList[index+1]] = [updatedTasksList[index+1], updatedTasksList[index]]
        setTasksList(tl => tl = updatedTasksList);
    }

    return (
        <div className="to-do-list">
            <h1 className="heading">To Do List</h1>
            <input type="text" value={task} placeholder="Enter task..." className="task-input" onChange={handleSetTask}/>
            <button className="add-task-button" onClick={addTask}>Add Task</button>

            <ul className="tasks-list">
                {tasksList.map((curr_task, index) => 
                            <li key={index} className="task-item">
                                <span className="task-text">{curr_task}</span>
                                <button className="delete-task-button" onClick={() => removeTask(index)}>Delete</button>
                                <button className="move-up-button" onClick={() => moveTaskUp(index)}>⬆️</button>
                                <button className="move-down-button" onClick={() => moveTaskDown(index)}>⬇️</button>
                            </li>)}
            </ul>
        </div>
        
    )
}

export default ToDoList;