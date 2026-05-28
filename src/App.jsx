import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([]);

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text: text,
      status: false
    }
    setTodos([...todos, newTask]);
  }

  function deleteTask(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function toggleTask(id) {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    ));
  }

  console.log(todos);
  return (
    <div >
      <Header />
      <AddTodo addTask={addTask} />
      <TodoList taskList={todos} deleteTask={deleteTask} toggle={toggleTask} />
    </div>
  );
}

export default App