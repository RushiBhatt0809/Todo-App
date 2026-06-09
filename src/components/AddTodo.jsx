import { useState, useEffect, useRef } from "react";
import Button from "./Button";

function AddTodo({ addTask }) {
    const [text, setText] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();           // ✅ input is guaranteed to exist here
    }, []);

    function handleAdd() {
        if (text.trim() === '') return;

        addTask(text);
        setText('');
        inputRef.current.focus();
    }

    return (
        <div className="flex items-center justify-center mb-6">
            <input
                className="bg-gray-50/90 border-2 border-gray-300 rounded-md min-w-[50vw] py-1 focus:border-gray-50"
                id="Task name"
                type="text"
                placeholder="Add Task..."
                value={text}
                ref={inputRef}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            />
            <Button
                className="shadow-md shadow-gray-500 ml-20"
                onClick={() => handleAdd()}>Add</Button>
        </div>
    );
}

export default AddTodo