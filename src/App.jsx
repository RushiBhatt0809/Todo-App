import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [task, setTask] = useState([]);

  function clearAll() {
    setTask([]);
  }

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text: text,
      status: false
    }
    setTask([...task, newTask]);
  }

  function deleteTask(id) {
    setTask(task.filter(task => task.id !== id));
  }

  function toggleTask(id) {
    setTask(task.map(task =>
      task.id === id ? { ...task, status: !task.status } : task
    ));
  }


  console.log(task);

  return (
    <div>
      <Header />
      <AddTodo addTask={addTask} />
      <TodoList task={task} del={deleteTask} toggle={toggleTask} reset={clearAll} />
    </div>
  );
}

export default App