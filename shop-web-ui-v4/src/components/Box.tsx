import React from "react";
import Veg from "./Veg";

function Box(props: any) {
  const { children } = props;
  return (
    <div className="card">
      <div className="card-body">
        <ul className="list-group">
          {children.map((child: any, index: any) => {
            return <li className="list-group-item">{child}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Box;
