export function todosReducer(todos: Array<any> = [], action: any) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO": {
      const { title } = payload;
      return [
        ...todos,
        {
          id: todos.length + 1,
          title,
          completed: false,
        },
      ];
    }
    case "DELETE_TODO": {
      const { id } = payload;
      return todos.filter((todo) => todo.id !== id);
    }
    case "EDIT_TODO": {
      const { id, newTodo } = payload;
      return todos.map((todo) => {
        if (todo.id === id) {
          return newTodo;
        }
        return todo;
      });
    }
    case "TOGGLE_TODO": {
      const { id } = payload;
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    }
    case "TOGGLE_ALL": {
      const { completed } = payload;
      return todos.map((todo) => ({ ...todo, completed }));
    }
    case "CLEAR_COMPLETED": {
      return todos.filter((todo) => !todo.completed);
    }
    default:
      return todos;
  }
}
