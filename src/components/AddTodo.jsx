import { useState } from "react";

function AddTodo(props) {
    const onAdd = props.addTask;
    const [text, setText] = useState('');
    return (
        <div>
            <input
                type="text"
                value={text}
                placeholder="Add Task"
                id="Task name"
                onChange={(e) => { setText(e.target.value) }}></input>
            <button
                onClick={() => {
                    if (text === '') return;
                    else {
                        onAdd(text); setText('');
                    }
                }}>Add</button>

        </div>
    );
}


export default AddTodo