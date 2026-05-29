import { useState } from "react";

function AddTodo({ addTask }) {
    const [text, setText] = useState('');

    return (
        <div>
            <input
                id="Task name"
                type="text"
                placeholder="Add Task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => { addTask(text); setText(''); }}>Add</button>
        </div>
    );
}

export default AddTodo