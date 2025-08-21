import React, { useContext, useState } from "react";
import { ToDoContext } from "../Context/ToDoContext";

const ToDoList = () => {
  const { state, dispatch } = useContext(ToDoContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); // NEW state for filter

  // Label mapping for dropdown button
  const filterLabels = {
    all: "All Tasks",
    completed: "Completed",
    incomplete: "Incomplete",
  };

  // Apply search + filter
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
    <div style={{ padding: "20px" }}>
      <div className="d-flex justify-content-between">
        {/* Search */}
        <input
          type="text"
          placeholder="Search tasks..."
          onChange={(e) => setSearch(e.target.value)}
          className="form-control mb-3 w-25"
        />

        {/* Dropdown for filter */}
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {filterLabels[filter]} {/* Dynamic text */}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <button
                className="dropdown-item"
                onClick={() => setFilter("all")}
              >
                All Tasks
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => setFilter("incomplete")}
              >
                Incomplete
              </button>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-center">{filterLabels[filter]}</h2>

      {filteredTodos.length === 0 ? (
        <p className="text-center">NO TASK YET!!!</p>
      ) : (
        <div className="row">
          {filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center vw-100 mt-3"
            >
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{todo.name}</strong>
                  </h5>
                  <p className="card-text">{todo.description}</p>
                  <span style={{ marginLeft: "10px" }}>
                    {todo.isComplete ? "✅" : "❌"}
                  </span>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() =>
                      dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                    }
                    className="btn btn-warning"
                  >
                    Toggle
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() =>
                      dispatch({ type: "DELETE_TODO", payload: todo.id })
                    }
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
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
