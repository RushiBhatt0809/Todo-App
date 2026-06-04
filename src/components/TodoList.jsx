import { useState } from "react";
import Button from "./Button";


function TodoList(props) {

    const taskList = props.task;
    const del = props.del;
    const toggle = props.toggle;
    const reset = props.reset;
    const allTask = taskList.map(task => {
        return (

            <label key={task.id}
                className="">
                <input
                    type="checkbox"
                    value={task.text}
                    onChange={() => toggle(task.id)}

                />
                <span style={{
                    textDecoration: task.status ? 'line-through' : 'none'
                }}>{task.text}</span>
                <Button onClick={() => del(task.id)}>Delete</Button><br />
            </label>
        );
    })

    return (
        <div className="flex flex-col gap-4 items-center rounded-md">
            <h1 className="text-2xl border-b-2">Tasks:</h1>
            {allTask}
            <Button
                variant="outline"
                className=""
                onClick={() => reset()}>Reset</Button>
        </div>
    );
}

export default TodoList