import React, { useState } from "react";

function Lista() {
  const [tasks, setTasks] = useState([
    { id: "todo-0", name: "Eat", completed: true, isEditing: false },
    { id: "todo-1", name: "Sleep", completed: false, isEditing: false },
    { id: "todo-2", name: "Repeat", completed: false, isEditing: false },
  ]);

  const [taskCount, setTaskCount] = useState(tasks.filter(task => !task.completed).length);

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    setTaskCount(updatedTasks.filter(task => !task.completed).length);
  };

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks(remainingTasks);
    setTaskCount(remainingTasks.filter(task => !task.completed).length);
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
    <>
      <h2 id="list-heading" tabIndex="-1">
        {taskCount} tasks remaining
      </h2>

      <ul
        aria-labelledby="list-heading"
        className="todo-list stack-large stack-exception"
        role="list"
      >
        {tasks.map(task => (
          <li key={task.id} className="todo">
            <div className="stack-small">
              <div className="c-cb">
                <input
                  id={task.id}
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompleted(task.id)}
                />
                {task.isEditing ? (
                  <input
                    type="text"
                    className="todo-label"
                    defaultValue={task.name}
                    onBlur={(e) => editTask(task.id, e.target.value)}
                  />
                ) : (
                  <label className="todo-label" htmlFor={task.id}>
                    {task.name}
                  </label>
                )}
              </div>
              <div className="btn-group">
                <button type="button" className="btn" onClick={() => toggleEditing(task.id)}>
                  {task.isEditing ? "Save" : "Edit"} <span className="visually-hidden">{task.name}</span>
                </button>
                <button type="button" className="btn btn__danger" onClick={() => deleteTask(task.id)}>
                  Delete <span className="visually-hidden">{task.name}</span>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Lista;
