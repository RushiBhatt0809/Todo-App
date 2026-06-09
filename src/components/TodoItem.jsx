import Button from "./Button";


function TodoItem({ task, onDelete, onToggle }) {
    return (
        <>
            <input
                type="checkbox"
                checked={task.status}
                onChange={() => onToggle(task.id)}
                className="size-5 accent-blue-500 justify-self-center cursor-pointer"
            />

            <span className={`text-2xl ${task.status
                ? 'line-through text-gray-400'
                : 'text-gray-800'
                }`}>
                {task.text}
            </span>

            <Button
                variant="edit"
                className="text-md px-3 py-1"
            >
                Edit
            </Button>
            <Button
                variant="danger"
                onClick={() => onDelete(task.id)}
                className="text-md px-3 py-1"
            >
                Delete
            </Button>
        </>
    );
}
export default TodoItem