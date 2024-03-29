import React from "react";

function TodosFooter(props: any) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="mt-3 d-flex justify-content-between">
          <div className="">
            <span>0 items left</span>
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">All</button>
            <button className="btn btn-primary">Active</button>
            <button className="btn btn-primary">Completed</button>
            <button className="btn btn-danger">Clear Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodosFooter;
