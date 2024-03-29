import React, { useState } from "react";

/**
 *
 *  state management hooks
 *
 *  - useState()
 *  - useReducer()
 *
 */

/**
 *
 * useState()
 *
 * - useState() is a hook that allows you to have state variables in functional components.
 * - useState() returns an array with two elements.
 * - The first element is the current state value and the second element is a function that allows you to update the state.
 * - When you call the function, the component will re-render.
 * - useState() can be used multiple times to have multiple state variables.
 * - useState() can accept a function as an argument. The function will be called only once to initialize the state.
 * - useState() can accept an object as an argument.
 * - When you update the state, you need to pass a new object or a new value.
 * - You can use the spread operator to copy the existing state and then update the new value.
 *
 *
 * - use this hook if state is simple & has few actions to perform
 *
 */

function Counter_v1() {
  console.log("Counter_v1:render()");
  const [count1, setCount1] = useState(100);
  const [count2, setCount2] = useState(() => {
    // count2 is initialized with a function
    console.log("count2 state initialized with a function");
    return 100 + 100;
  });
  const [vote, setVote] = useState({ up: 0, down: 0 });

  const handleIncrementCount1 = () => {
    setCount1(count1 + 1);
  };
  const handleIncrementCount2 = () => {
    //setCount2(count2 + 1); // using value to update state
    setCount2((prevCount2) => prevCount2 + 1); // using function to update state
  };
  const handleUpVote = () => {
    setVote({ ...vote, up: vote.up + 1 });
  };
  const handleDownVote = () => {
    // setVote({ ...vote, down: vote.down + 1 });
    setVote((prevVote) => {
      return { ...prevVote, down: prevVote.down + 1 };
    });
  };

  return (
    <div className="card">
      <div className="card-header">Counter : useState()</div>
      <div className="card-body">
        <p>Count1: {count1}</p>
        <p>Count2: {count2}</p>
        <p>
          Up: {vote.up} , Down: {vote.down}
        </p>
        <button onClick={handleIncrementCount1}>Increment count-1</button>
        <button onClick={handleIncrementCount2}>Increment count-2</button>
        <button onClick={handleUpVote}>Up Vote</button>
        <button onClick={handleDownVote}>Down Vote</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <div className="display-1">react hooks</div>
      <hr />
      <Counter_v1 />
    </div>
  );
}

export default App;
