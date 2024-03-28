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

export default VotingItem;
