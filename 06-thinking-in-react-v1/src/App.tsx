import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function VotingTable() {
  return (
    <div className="card">
      <div className="card-header">Voting Table</div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Likes</th>
              <th>Dislikes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item 1</td>
              <td>10</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Item 2</td>
              <td>15</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function VotingItem(props: any) {
  const { item = "Unknown" } = props;
  return (
    <div
      style={{
        width: "300px",
      }}
    >
      <div className="card m-2">
        <div className="card-header">Voting Item</div>
        <div className="card-body">
          <div className="display-4">{item}</div>
          <hr />
          <div className="d-flex justify-content-around">
            <button className="btn btn-primary">Vote</button>
            <button className="btn btn-danger">Unvote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function VotingBox() {
  return (
    <div className="card">
      <div className="card-header">Voting Box</div>
      <div className="card-body">
        <div className="d-flex">
          <VotingItem item="React.js" />
          <VotingItem item="Angular" />
        </div>
        <VotingTable />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="card card-body">
      <div className="container">
        <div className="display-1">thinking in react</div>
        <hr />
        <VotingBox />
      </div>
    </div>
  );
}

export default App;
