import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function VotingTable(props: any) {
  const { votingLines = [] } = props;
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
            {votingLines.map((line: any, index: number) => (
              <tr key={index}>
                <td>{line.item}</td>
                <td>{line.likes}</td>
                <td>{line.dislikes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function VotingItem(props: any) {
  const { item = "Unknown", onVote } = props;
  const handleLike = () => {
    const event = { item, type: "like" };
    onVote(event);
  };
  const handleDislike = () => {
    const event = { item, type: "dislike" };
    onVote(event);
  };
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
            <button onClick={handleLike} className="btn btn-primary">
              Vote
            </button>
            <button onClick={handleDislike} className="btn btn-danger">
              Unvote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function VotingBox() {
  const votingItems = ["React.js", "Angular"];
  const [votingLines, setVotingLines] = useState([
    {
      item: "React.js",
      likes: 0,
      dislikes: 0,
    },
    {
      item: "Angular",
      likes: 0,
      dislikes: 0,
    },
  ]);
  const handleVote = (e: any) => {
    const { item, type } = e;
    const newVotingLines = votingLines.map((line: any) => {
      if (line.item === item) {
        if (type === "like") {
          line.likes++;
        } else {
          line.dislikes++;
        }
      }
      return line;
    });
    setVotingLines(newVotingLines); // trigger re-render
  };
  return (
    <div className="card">
      <div className="card-header">Voting Box</div>
      <div className="card-body">
        <div className="d-flex flex-wrap">
          {votingItems.map((item, index) => (
            <VotingItem key={index} item={item} onVote={handleVote} />
          ))}
        </div>
        <VotingTable votingLines={votingLines} />
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
