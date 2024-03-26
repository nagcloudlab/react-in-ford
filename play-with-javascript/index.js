// e.g

async function fetchTodos() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const todos = await response.json();
  console.log(todos);
}

function renderTodos() {
  fetchTodos();
  console.log("loading todos");
}

renderTodos();
