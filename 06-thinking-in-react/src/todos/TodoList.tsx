import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props: any) {
  let { todos, onDeleteTodo, onToggleTodo } = props;
  return (
    <div className="list-group">
      {todos.map((todo: any) => (
        <div key={todo.id} className="list-group-item">
          <TodoItem
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
