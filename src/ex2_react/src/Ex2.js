// Ex2.js
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import Lista from "./TodoListFilter";
import "./App.css";
import Navbar from "../../Navbar";
import Ex1 from "../../ex1_react/src/Ex1";

function Ex2() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: "todo-0", name: "Eat", completed: true, isEditing: false },
      { id: "todo-1", name: "Sleep", completed: false, isEditing: false },
      { id: "todo-2", name: "Repeat", completed: false, isEditing: false },
    ];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) => {
    const newTask = { id: `todo-${tasks.length}`, name, completed: false, isEditing: false };
    setTasks([...tasks, newTask]);
  };

  const activateTask = (name) => {
    const newTask = { id: `todo-${tasks.length}`, name, completed: false, isEditing: false };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (name) => {
    const newTask = { id: `todo-${tasks.length}`, name, completed: true, isEditing: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks(remainingTasks);
  };

  const editTask = (id, newName) => {
    const editedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, name: newName, isEditing: false };
      }
      return task;
    });
    setTasks(editedTasks);
  };

  const toggleEditing = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isEditing: !task.isEditing };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <div className="todoapp stack-large">
            <Todo />
            <TodoForm addTask={addTask} activateTask={activateTask} completeTask={completeTask} />
            <Lista
              tasks={tasks}
              toggleTaskCompleted={toggleTaskCompleted}
              deleteTask={deleteTask}
              editTask={editTask}
              toggleEditing={toggleEditing}
            />
          </div>
        } />
        <Route path="/ex1" element={<Ex1 />} />
      </Routes>
    </div>
  );
}

export default Ex2;
