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
                <td className={line.dislikes > line.likes ? "text-danger" : ""}>
                  {line.item}
                </td>
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

export default VotingTable;
