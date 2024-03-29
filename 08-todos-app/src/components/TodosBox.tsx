import React, { useReducer, useState } from "react";
import { todosReducer } from "../reducers/todos";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodosFooter from "./TodosFooter";

import TodosContext from "../contexts/TodosContext";

function TodosBox(props: any) {
  const [filter, setFilter] = useState("all"); // ["all", "active", "completed"
  const [todos, dispatch] = useReducer(todosReducer, [
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Learn Redux", completed: false },
    { id: 3, title: "Learn React Router", completed: false },
  ]);
  return (
    <div className="card">
      <div className="card-header">todos box</div>
      <div className="card-body">
        <TodosContext.Provider value={{ todos, dispatch, filter }}>
          <TodoInput />
          <TodoList filter={filter} />
          <TodosFooter onFilterChange={(filter: any) => setFilter(filter)} />
        </TodosContext.Provider>
      </div>
    </div>
  );
}

export default TodosBox;
