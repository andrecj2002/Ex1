import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import Lista from "./TodoListFilter";
import "./App.css";

function App() {
  return (
    <div className="todoapp stack-large">
      <Todo />
      <TodoForm />
      <Lista />
    </div>
  );
}

export default App;
