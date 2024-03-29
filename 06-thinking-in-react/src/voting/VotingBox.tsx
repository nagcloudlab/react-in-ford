import { useState } from "react";
import VotingItem from "./VotingItem";
import VotingTable from "./VotingTable";

function VotingBox() {
  const [votingItems] = useState(["React.js", "Angular", "Vue.js"]);
  const [votingLines, setVotingLines] = useState(() => {
    return votingItems.map((item) => ({ item, likes: 0, dislikes: 0 }));
  });
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

export default VotingBox;
