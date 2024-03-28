import React, { useState } from "react";

import "./App.css";

function App(props: any) {
  console.log("App:render()");

  //props.title = "New Title"; // Error: Cannot assign to read only property 'title' of object '#<Object>'

  // let title = props.title;
  // let version = props.version;
  // or
  const { title, version } = props;

  const user = {
    name: "John",
    age: 30,
  };
  const todos = [{ id: 1, title: "Buy Milk" }];

  const [count, setCount] = useState(0);
  const handleIncrement = (e: any) => {
    setCount(count + 1); // trigger re-render
  };

  return (
    <div>
      <h1>
        {title || "Unknown"} - <small>{version}</small>
      </h1>
      <button onClick={handleIncrement}>increment - ({count})</button>
      <div>{"ford"}</div>
      <div>{6 + 6}</div>
      <div>{Math.random()}</div>
      <div>
        {user.name} {user.age}
      </div>
      <div>
        {todos.map((todo, index) => {
          return <div key={index}>{todo.title}</div>;
        })}
      </div>
      <div
        style={{
          color: "blue",
          fontSize: "20px",
          backgroundColor: "grey",
        }}
      >
        ford
      </div>
      <div className="app">ford</div>
    </div>
  );
}

export default App;
