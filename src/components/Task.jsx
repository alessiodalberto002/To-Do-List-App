import { useState } from "react";

const Task = () => {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);

    const addTask = () => {
        if (inputValue.trim() !== "") {
            setTask([...task, inputValue]);
        }
        setInputValue("");
    }

    const removeTask = (idRemove) => {
        const newTask = task.filter((_, index) => index !== idRemove);
        setTask(newTask);
    }

    const removeAllTask = () => {
        setTask([]);
        setInputValue("");
    }

    return (

        <>

            <div className="container py-5">
                <h1>To Do List</h1>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={addTask}>Aggiungi Task</button>
                <button onClick={removeAllTask}>Rimuovi Tutto</button>
                <div>
                    <ul>
                        {task.map((singleTask, index) => (
                            <li key={index}>{singleTask} <button onClick={() => removeTask(index)}>X</button></li>
                        ))}
                    </ul>
                </div>
            </div>

        </>


    )

}

export default Task