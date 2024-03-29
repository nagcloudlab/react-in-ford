import React, { useState, useReducer, useContext, useEffect } from "react";

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
 * - useState() is used to manage simple state variables.
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

//--------------------------------------------------------------

/**
 *
 *
 * useReducer()
 *
 * - useReducer() is a hook that is used for complex state management.
 * - useReducer() is similar to the reducer function in Redux.
 * - useReducer() accepts two arguments: a reducer function and an initial state.
 * - The reducer function takes two arguments: the current state and an action.
 * - The reducer function returns a new state.
 * - useReducer() returns an array with two elements: the current state and a dispatch function.
 * - The dispatch function is used to dispatch an action.
 * - When you dispatch an action, the reducer function will be called with the current state and the action.
 * - The reducer function will return a new state.
 * - The component will re-render with the new state.
 * - useReducer() is used to manage complex state variables.
 *
 */

function myReducer(state: any = {}, action: any) {
  console.log("myReducer()");
  let { type, payload } = action;
  switch (type) {
    case "INCREMENT_COUNT1":
      return { ...state, count1: state.count1 + 1 };
    case "INCREMENT_COUNT2":
      return { ...state, count2: state.count2 + payload };
    case "UP_VOTE":
      return { ...state, vote: { ...state.vote, up: state.vote.up + 1 } };
    case "DOWN_VOTE":
      return { ...state, vote: { ...state.vote, down: state.vote.down + 1 } };
    default:
      return state;
  }
}

function Counter_v2() {
  console.log("Counter_v2:render()");
  const [state, dispatch] = useReducer(myReducer, {
    count1: 100,
    count2: 200,
    vote: { up: 0, down: 0 },
  });
  const { count1, count2, vote } = state;

  const handleIncrementCount1 = () => {
    dispatch({ type: "INCREMENT_COUNT1" });
  };
  const handleIncrementCount2 = () => {
    dispatch({ type: "INCREMENT_COUNT2", payload: 20 });
  };
  const handleUpVote = () => {
    dispatch({ type: "UP_VOTE" });
  };
  const handleDownVote = () => {
    dispatch({ type: "DOWN_VOTE" });
  };

  return (
    <div className="card">
      <div className="card-header">Counter : useReducer</div>
      <div className="card-body">
        <p>Count1: {count1}</p>
        <p>Count2: {count2}</p>
        <p>
          Up: {vote.up} , Down: {vote.down}
        </p>
        <button onClick={handleIncrementCount1}>Increment count-1</button>
        <button onClick={handleIncrementCount2}>
          Increment count-2 with +20
        </button>
        <button onClick={handleUpVote}>Up Vote</button>
        <button onClick={handleDownVote}>Down Vote</button>
      </div>
    </div>
  );
}

//--------------------------------------------------------------

/**
 *
 * useContext()
 *
 * - useContext() is a hook that allows you to use the context in functional components.
 * - useContext() accepts a context object as an argument.
 * - useContext() returns the current context value for the context.
 * - The context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
 * - When the context value changes, the component will re-render.
 * - useContext() is used to consume the context value.
 *
 *
 */

const UserContext = React.createContext({} as any);

function C(props: any) {
  console.log("C:render()");
  const currentUser = useContext(UserContext);
  return (
    <div className="card">
      <div className="card-header">Component C</div>
      <div className="card-body">
        <p>
          {currentUser.name} is a {currentUser.role}
        </p>
      </div>
    </div>
  );
}
function B(props: any) {
  console.log("B:render()");
  return (
    <div className="card">
      <div className="card-header">Component B</div>
      <div className="card-body">
        <C />
      </div>
    </div>
  );
}
function A() {
  console.log("A:render()");
  const currentUser = useContext(UserContext);
  return (
    <div className="card">
      <div className="card-header">Component A</div>
      <div className="card-body">
        <p>
          {currentUser.name} is a {currentUser.role}
        </p>
        <B />
      </div>
    </div>
  );
}
function Z() {
  console.log("Z:render()");
  const currentUser = useContext(UserContext);
  return (
    <div className="card">
      <div className="card-header">Component Z</div>
      <div className="card-body">
        <p>
          {currentUser.name} is a {currentUser.role}
        </p>
      </div>
    </div>
  );
}
function Y() {
  console.log("Y:render()");
  return (
    <div className="card">
      <div className="card-header">Component Y</div>
      <div className="card-body">
        <Z />
      </div>
    </div>
  );
}
function X() {
  console.log("X:render()");
  return (
    <div className="card">
      <div className="card-header">Component X</div>
      <div className="card-body">
        <Y />
      </div>
    </div>
  );
}

//--------------------------------------------------------------

// side-effects in react component

// e.g side effects

// 1. DOM manipulation
// 2. Network calls
// 3. Timer functions
// 4. Add/Remove event listeners
// 5. Subscription
// 6. LocalStorage, SessionStorage
//..

function Counter_v3() {
  console.log("Counter_v3:render()");
  const [count1, setCount1] = useState(100);
  const [count2, setCount2] = useState(() => {
    // count2 is initialized with a function
    console.log("count2 state initialized with a function");
    return 100 + 100;
  });
  const [vote, setVote] = useState({ up: 0, down: 0 });

  useEffect(() => {
    console.log("effect-1");
  }, []);
  useEffect(() => {
    console.log("effect-2");
  }, [count1]);
  useEffect(() => {
    console.log("effect-3");
  }, [count1, count2]);
  useEffect(() => {
    console.log("effect-4");
    document.title = `Votes : up - ${vote.up} , down - ${vote.down}`;
  }, [vote]);

  const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("tik");
      setTimeNow(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      console.log("clean-up");
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    // init effect..
    return () => {
      // clean effect
    };
  }, []);

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
      <div className="card-header">Counter : useEffect() : {timeNow}</div>
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

function DataGrid() {
  const [resource, setResource] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (e: any) => {
    setResource(e.target.value);
  };
  const fetchData = async () => {
    console.log("fetching data from server..");
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    console.log("resource changed..");
    if (resource) {
      fetchData();
    }
  }, [resource]);

  return (
    <div className="card">
      <div className="card-header">DataGrid - {resource}</div>
      <div className="card-body">
        <select className="" onChange={handleChange}>
          <option value={""}>-select-</option>
          <option value={"users"}>users</option>
          <option value={"posts"}>posts</option>
          <option value={"comments"}>comments</option>
        </select>
        <hr />
        {JSON.stringify(data)}
      </div>
    </div>
  );
}

function App() {
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: "Nag",
    role: "Trainer",
  });
  const [show, setShow] = useState(true);
  return (
    <div className="container">
      <div className="display-1">react hooks</div>
      <hr />
      {/* <UserContext.Provider value={currentUser}>
        <div className="row">
          <div className="col">
            <A />
          </div>
          <div className="col">
            <X />
          </div>
        </div>
      </UserContext.Provider> */}

      {/* <button onClick={(e) => setShow(!show)}>toggle</button>
      {show && <Counter_v3 />} */}

      <DataGrid />
    </div>
  );
}

export default App;
