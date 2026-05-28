import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {

  const [todos, SetTodos] = useState([]);

  function AddTask(text) {
    const newTask = {
      id: Date.now(),
      text: text,
      status: false
    }
    SetTodos([...todos, newTask]);


  }
  console.log(todos);
  return (
    <div >
      <Header />
      <AddTodo AddTask={AddTask} />
      <TodoList TaskList={todos} />
    </div>
  );

}

export default App