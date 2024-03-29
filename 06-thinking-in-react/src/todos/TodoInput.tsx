import React from "react";

function TodoInput(props: any) {
  let { onNewTodo } = props;
  const handleKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      const title = e.target.value;
      onNewTodo(title);
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
