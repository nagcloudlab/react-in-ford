import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

function Counter(props: any) {
  // useState() // way-1
  // useReducer() // way-2
  const count = useSelector((state: any) => state.counter.value); // way-3
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={(e) => dispatch(increment())}>+1</button>
      <button onClick={(e) => dispatch(incrementByAmount(10))}>+10</button>
      <button onClick={(e) => dispatch(incrementByAmount(-10))}>-10</button>
      <hr />
      {count}
    </div>
  );
}

export default Counter;
