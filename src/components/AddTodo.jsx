import { useState } from "react";
import Button from "./Button";

function AddTodo({ addTask }) {
    const [text, setText] = useState('');

    return (
        <div className="flex items-center justify-center mb-6">
            <input
                className="bg-lime-50/70 border-2 rounded-md min-w-[50vw] py-1"
                id="Task name"
                type="text"
                placeholder="Add Task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button
                className="shadow-md shadow-gray-500 ml-20"
                onClick={() => {
                    if (text === '') return;
                    else
                        addTask(text); setText('');
                }}>Add</Button>
        </div>
    );
}

export default AddTodo