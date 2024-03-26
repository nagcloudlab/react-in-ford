// 1. addTodo
// 2. deleteTodo
// 3. editTodo
// 4. toggleTodo ( i.e. mark as completed or not)
// 5. toggleAllTodos ( i.e. mark all as completed or not)
// 6. clearAllCompletedTodos
// 7. displayTodos ( filter by all, active, completed)

todos = [
  { id: 1, title: "Learn JavaScript", completed: false },
  { id: 2, title: "Learn React", completed: false },
  { id: 3, title: "Learn Node", completed: false },
  { id: 4, title: "Learn Express", completed: false },
];

const service = {
  addTodo(title) {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
    };
    // mutable
    // todos.push(newTodo); // mutable
    // // immutable
    // todos = todos.concat(newTodo);
    todos = [...todos, newTodo];
  },
  deleteTodo(id) {
    // mutable
    // const index = todos.findIndex((todo) => todo.id === id);
    // todos.splice(index, 1);
    // immutable
    todos = todos.filter((todo) => todo.id !== id);
  },
  editTodo(id, title) {
    // mutable
    // const index = todos.findIndex((todo) => todo.id === id);
    // todos[index].title = title;

    // immutable
    todos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title };
      }
      return todo;
    });
  },
  toggleTodo(id) {
    // mutable
    // const index = todos.findIndex((todo) => todo.id === id);
    // todos[index].completed = !todos[index].completed;

    // immutable
    todos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
  },
  toggleAllTodos() {
    // mutable
    // const isAllCompleted = todos.every(todo => todo.completed);
    // todos.forEach(todo => todo.completed = !isAllCompleted);

    // immutable
    const areAllCompleted = todos.every((todo) => todo.completed);
    todos = todos.map((todo) => ({
      ...todo,
      completed: !areAllCompleted,
    }));
  },
  clearAllCompletedTodos() {
    // mutable
    // todos = todos.filter(todo => !todo.completed);
    // immutable
    todos = todos.filter((todo) => !todo.completed);
  },
  displayTodos(filter = "all") {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  },
};
