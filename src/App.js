import "./App.css";
import TodoField from "./pages/TodoField";
import Todos from "./component/Todos";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "GYM",
      status: false,
    },
    {
      id: 1,
      name: "Alışveriş",
      status: true,
    },
  ]);

  const addTodo = (todo) => {
    if (todo.name) {
      setTodos([...todos, todo]);
    }
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const doneTodo = (id) => {
    let currentTodo = todos.filter((todo) => todo.id !== id);
    setTodos(...todos);
  };

  return (
    <div className="App">
      <h>Todos</h>
      <TodoField addTodo={addTodo} />
      <Todos doneTodo={doneTodo} deleteTodo={deleteTodo} todos={todos} />
    </div>
  );
}
export default App;
