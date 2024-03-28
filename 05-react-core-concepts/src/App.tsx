import React from "react";

import "./App.css";

function App() {
  console.log("App:render()");
  const user = {
    name: "John",
    age: 30,
  };
  const todos = [
    { id: 1, title: "Buy Milk" },
    { id: 2, title: "Meeting with Ali" },
  ];

  return (
    <div>
      <h1>React App</h1>
      <div>{"ford"}</div>
      <div>{6 + 6}</div>
      <div>{Math.random()}</div>
      <div>
        {user.name} {user.age}
      </div>
      <div>{undefined}</div>
      <div>{null}</div>
      <div>{1 < 2}</div>
      <div>
        {todos.map((todo, index) => {
          return <div key={index}>{todo.title}</div>;
        })}
      </div>
      <div
        style={{
          color: "red",
          fontSize: "20px",
          backgroundColor: "black",
        }}
      >
        ford
      </div>
      <div className="app">ford</div>
    </div>
  );
}

export default App;
