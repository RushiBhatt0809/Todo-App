import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      const saveTask = JSON.parse(saved);
      setTask(saveTask);
    }
  }, []);

  useEffect(() => {
    if (task.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(task));
    }
  }, [task]);

  function clearAll() {
    setTask([]);
    localStorage.removeItem('tasks');
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
    // localStorage.removeItem('tasks', id);
  }

  function toggleTask(id) {
    setTask(task.map(task =>
      //   {
      //   if (task.id === id) {
      //     return { ...task, status: !task.status }
      //   }
      //   else return task
      // }
      task.id === id ? { ...task, status: !task.status } : task
    ));
  }

  console.log(task);

  return (
    <div className="bg-linear-to-b from-green-50 via-green-500 to-green-800 min-h-screen flex items-center justify-center">
      <div className="bg-linear-to-b from-white/50 to-blue-500/70 p-8 max-w-[80vw] rounded-2xl w-full shadow-2xl min-h-[40vw]">
        <Header />
        <AddTodo addTask={addTask} />
        <TodoList task={task} del={deleteTask} toggle={toggleTask} reset={clearAll} />
      </div>
    </div>
  );
}

export default App