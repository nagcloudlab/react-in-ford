import React, { useContext } from "react";
import TodosContext from "../contexts/TodosContext";

function TodoInput(props: any) {
  const { dispatch } = useContext(TodosContext);
  const handleKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      const title = e.target.value;
      dispatch({ type: "ADD_TODO", payload: { title } });
      e.target.value = "";
    }
  };

  return (
    <div className="alert alert-info">
      <input onKeyUp={handleKeyUp} className="form-control" />
    </div>
  );
}

export default TodoInput;
