import React, { useContext, useState } from "react";
import { ToDoContext } from "../Context/ToDoContext";
import './ToDoList.css';

const ToDoList = () => {
  const { state, dispatch } = useContext(ToDoContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); 

  const filterLabels = {
    all: "All Tasks",
    completed: "Completed",
    incomplete: "Incomplete",
  };

  const filteredTodos = state.todos.filter((todo) => {
    const matchesSearch =
      todo.name.toLowerCase().includes(search.toLowerCase()) ||
      todo.description.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "completed"
        ? todo.isComplete
        : !todo.isComplete;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="todo-container">
      <div className="todo-header d-flex justify-content-between flex-wrap">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control search-bar"
        />

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle filter-btn"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {filterLabels[filter]}
          </button>
          <ul className="dropdown-menu">
            {Object.keys(filterLabels).map((key) => (
              <li key={key}>
                <button
                  className="dropdown-item"
                  onClick={() => setFilter(key)}
                >
                  {filterLabels[key]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="text-center mt-4">{filterLabels[filter]}</h2>

      {filteredTodos.length === 0 ? (
        <p className="text-center mt-3">No tasks found! 🚀</p>
      ) : (
        <div className="row">
          {filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mt-3"
            >
              <div className={`card todo-card ${todo.isComplete ? 'complete' : 'incomplete'}`}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title">{todo.name}</h5>
                    <span className={`badge ${todo.isComplete ? 'bg-success' : 'bg-warning'}`}>
                      {todo.isComplete ? 'Completed ✅' : 'Pending ❌'}
                    </span>
                  </div>
                  <p className="card-text">{todo.description}</p>
                  {todo.priority && (
                    <span className={`priority-badge ${todo.priority.toLowerCase()}`}>
                      {todo.priority}
                    </span>
                  )}
                  <div className="mt-2 d-flex gap-2 flex-wrap">
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() =>
                        dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                      }
                    >
                      Toggle
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() =>
                        dispatch({ type: "DELETE_TODO", payload: todo.id })
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToDoList;
