import { useState } from "react";

function AddTodo({ addTask }) {
    const [text, setText] = useState('');

    return (
        <div className="">
            <input
                className=" border-amber-50 border-2 rounded-md mr-25"
                id="Task name"
                type="text"
                placeholder="Add Task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className=" bg-blue-400 px-4 py-1 font-medium text-gray-50 rounded-xl border-2 shadow-md shadow-gray-500"
                onClick={() => {
                    if (text === '') return;
                    else
                        addTask(text); setText('');
                }}>Add</button>
        </div>
    );
}

export default AddTodo