import { useState } from "react";
import Button from "./Button";
import TodoItem from "./TodoItem";


// TodoList.jsx — give the list a grid header + consistent rows
function TodoList({ task, del, toggle, reset }) {

    const taskList = task.map(t => (
        <TodoItem
            key={t.id}
            task={t}
            onToggle={toggle}
            onDelete={del}
        />
    ));

    return (
        <div className="flex flex-col gap-3 rounded-xl bg-gray-50 p-4">
            <h1 className="text-2xl border-b-2 text-center pb-2 mb-2">Tasks:</h1>

            <div className="grid grid-cols-[auto_1fr_auto_auto] gap-x-4 gap-y-2 items-center">


                <span className="text-xs font-semibold text-gray-400 text-center">Done</span>
                <span className="text-xs font-semibold text-gray-400">Task</span>
                <span className="text-xs font-semibold text-gray-400 text-center">Action</span>
                <span className="text-xs font-semibold text-gray-400 text-center">Action</span>

                {taskList}
            </div>

            <Button variant="outline" onClick={reset} className="mt-2 self-center">
                Reset
            </Button>
        </div>
    );
}

export default TodoList