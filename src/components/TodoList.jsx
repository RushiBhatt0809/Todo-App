import { useState } from "react";

function TodoList(props) {
    const listItems = props.taskList;
    const del = props.deleteTask;
    const toggle = props.toggle;

    const listTask = listItems.map(task =>
        <label key={task.id}>
            <input
                type="checkbox"
                value={task.text}
                onChange={() => toggle(task.id)}
            />
            <span style={{
                textDecoration: task.status ? 'line-through' : 'none'
            }}>
                {task.text}
            </span>
            <button
                onClick={() => del(task.id)}>
                Delete
            </button><br />
        </label >
    );

    return (
        <div>
            <h1>Tasks: </h1>
            {listTask}
        </div>
    );
}

export default TodoList