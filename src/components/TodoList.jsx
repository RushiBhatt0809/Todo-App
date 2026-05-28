function TodoList(props) {
    const listItems = props.TaskList;

    const ListTask = listItems.map(task =>
        <label key={task.id}>
            <input
                type="checkbox"
                name={task.text} />
            {task.text}<br />
        </label>
    );

    return (
        <div>
            <h1>Tasks: </h1>
            {ListTask}
        </div>
    );
}

export default TodoList