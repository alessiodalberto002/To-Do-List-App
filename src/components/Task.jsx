import { useState } from "react";

const Task = () => {

    const [inputValue, setInputValue] = useState("");
    const [compito, setNuovoCompito] = useState([]);

    const aggiungiTask = () => {
        if (inputValue.trim() !== "") {
            setNuovoCompito([...compito, inputValue]);
        }
        setInputValue("");
    }

    const removeTask = () => {
        
    }

    return (

        <>

            <h1>To Do List</h1>

            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={aggiungiTask}>Aggiungi</button>
            <p>{inputValue}</p>
            <ul>
                {compito.map((singoloCompito, index) => (
                    <li key={index}>{singoloCompito}</li>
                ))}
            </ul>

        </>


    )

};

export default Task;