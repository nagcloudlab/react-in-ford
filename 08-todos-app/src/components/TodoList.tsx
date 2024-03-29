import React, { useContext, useEffect, useState } from "react";
import TodosContext from "../contexts/TodosContext";
import TodoItem from "./TodoItem";

function TodoList(props: any) {
  const { filter } = props;
  const { todos } = useContext(TodosContext);
  const [filteredTodos, setFilteredTodos] = useState([] as any);

  console.log(filter);

  useEffect(() => {
    const result = todos.filter((todo: any) => {
      if (filter === "all") return true;
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
    });
    setFilteredTodos(result);
  }, [filter]);

  return (
    <div className="list-group">
      {filteredTodos.map((todo: any) => (
        <div key={todo.id} className="list-group-item">
          <TodoItem todo={todo} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
