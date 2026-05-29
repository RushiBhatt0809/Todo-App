import { useState } from "react";


function TodoList(props) {

    const taskList = props.task;
    const del = props.del;
    const toggle = props.toggle;
    const allTask = taskList.map(task => {
        return (
            <label key={task.id}>
                <input
                    type="checkbox"
                    value={task.text}
                    onChange={() => toggle(task.id)}

                />
                <span style={{
                    textDecoration: task.status ? 'line-through' : 'none'
                }}>{task.text}</span>
                <button onClick={() => del(task.id)}>Delete</button><br />
            </label>
        );
    })

    return (
        <div>
            <h1>Tasks:</h1>
            {allTask}
        </div>
    );
}

export default TodoList