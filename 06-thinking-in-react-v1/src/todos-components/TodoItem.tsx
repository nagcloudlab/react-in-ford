import React from "react";

function TodoItem(props: any) {
  let { todo, onDeleteTodo, onToggleTodo } = props;
  return (
    <div className={todo.completed ? "bg-success" : ""}>
      <div className="d-flex justify-content-between">
        <input
          onChange={(e) => onToggleTodo(todo.id)}
          type="checkbox"
          checked={todo.completed}
        />
        <span>{todo.title}</span>
        <button
          onClick={(e) => onDeleteTodo(todo.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
