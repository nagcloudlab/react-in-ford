import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodosFooter from "./TodosFooter";

function TodosBox(props: any) {
  const [todos, setTodos] = useState([
    { id: 1, title: "Todo 1", completed: true },
    { id: 2, title: "Todo 2", completed: false },
    { id: 3, title: "Todo 3", completed: false },
  ]);
  const handleNewTodo = (title: string) => {
    const newTodo = { id: todos.length + 1, title, completed: false };
    setTodos([...todos, newTodo]);
  };
  const handleDeleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const handleToggleTodo = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <div className="card">
      <div className="card-header">todos box</div>
      <div className="card-body">
        <TodoInput onNewTodo={handleNewTodo} />
        <TodoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleTodo}
        />
        <TodosFooter />
      </div>
    </div>
  );
}

export default TodosBox;
