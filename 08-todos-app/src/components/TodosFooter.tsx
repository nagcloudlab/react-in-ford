import React, { useContext, useEffect, useState } from "react";
import TodosContext from "../contexts/TodosContext";

function TodosFooter(props: any) {
  const { onFilterChange } = props;
  const { todos, filter, dispatch } = useContext(TodosContext);
  const [todosLeftCount, setTodosLeftCount] = useState(0);
  useEffect(() => {
    const activeTodos = todos.filter((todo: any) => !todo.completed);
    setTodosLeftCount(activeTodos.length);
  }, [todos]);
  return (
    <div className="card">
      <div className="card-body">
        <div className="mt-3 d-flex justify-content-between">
          <div className="">
            <span>{todosLeftCount} items left</span>
          </div>
          <div className="d-flex justify-content-between">
            <button
              className={`btn btn-warning ${filter === "all" ? "active" : ""}`}
              style={{ color: filter === "all" ? "red" : "black" }}
              onClick={(e) => onFilterChange("all")}
            >
              All
            </button>
            <button
              onClick={(e) => onFilterChange("active")}
              className={`btn btn-warning ${
                filter === "active" ? "active" : ""
              }`}
              style={{ color: filter === "active" ? "red" : "black" }}
            >
              Active
            </button>
            <button
              onClick={(e) => onFilterChange("completed")}
              className={`btn btn-warning ${
                filter === "completed" ? "active" : ""
              }`}
              style={{ color: filter === "completed" ? "red" : "black" }}
            >
              Completed
            </button>
            <button
              className="btn btn-danger"
              onClick={(e) => dispatch({ type: "CLEAR_COMPLETED" })}
            >
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodosFooter;
