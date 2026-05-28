import { useState } from "react";

function AddTodo(props) {
    const onAdd = props.AddTask;
    const [text, SetText] = useState('');
    return (
        <div>
            <input
                type="text"
                value={text}
                placeholder="Add Task"
                id="Task name"
                onChange={(e) => { SetText(e.target.value) }}></input>
            <button
                onClick={() => {
                    if (text === '') return;
                    else {
                        onAdd(text); SetText('');
                    }
                }}>Add</button>

        </div>
    );
}


export default AddTodo