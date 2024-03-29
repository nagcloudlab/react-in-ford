import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VotingBox from "./voting/VotingBox";
import TodosBox from "./todos/TodosBox";

function App() {
  return (
    <div className="card card-body">
      <div className="container">
        <div className="display-1">thinking in react</div>
        <hr />
        {/* <VotingBox /> */}
        <TodosBox />
      </div>
    </div>
  );
}

export default App;
