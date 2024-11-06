import React from "react";

function TodoListFilter({ tasks, toggleTaskCompleted, deleteTask, editTask, toggleEditing }) {
  return (
    <>
      <h2 id="list-heading" tabIndex="-1">
        {tasks.filter(task => !task.completed).length} tasks remaining
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

export default TodoListFilter;
