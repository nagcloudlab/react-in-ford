import React, { useContext } from "react";
import TodosContext from "../contexts/TodosContext";

function TodoItem(props: any) {
  const { todo } = props;
  const { dispatch } = useContext(TodosContext);
  return (
    <div className={todo.completed ? "bg-success" : ""}>
      <div className="d-flex justify-content-between">
        <input
          onChange={(e) =>
            dispatch({ type: "TOGGLE_TODO", payload: { id: todo.id } })
          }
          type="checkbox"
          checked={todo.completed}
        />
        <span>{todo.title}</span>
        <button
          onClick={(e) =>
            dispatch({ type: "DELETE_TODO", payload: { id: todo.id } })
          }
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
