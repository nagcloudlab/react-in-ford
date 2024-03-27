// function Clock(props) {
//    let { timeZone } = props;
//     const cardHeader = React.createElement('div', { className: 'card-header' }, timeZone);
//     const h5 = React.createElement('h5', { className: 'card-title' }, new Date().toLocaleTimeString("en-US", { timeZone }));
//     const cardBody = React.createElement('div', { className: 'card-body' }, h5);
//     const card = React.createElement('div', { className: 'card' }, cardHeader, cardBody);
//     return card;
// }

// jsx
function Clock(props) {
  let { timeZone } = props;
  return (
    <div class="card">
      <div class="card-header">{timeZone}</div>
      <div class="card-body">
        <h5 class="card-title">
          {new Date().toLocaleTimeString("en-US", { timeZone })}
        </h5>
      </div>
    </div>
  );
}

function Board() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Clock timeZone="Asia/Kolkata" />
        </div>
        <div className="col-md-4">
          <Clock timeZone="Asia/Dubai" />
        </div>
        <div className="col-md-4">
          <Clock timeZone="America/New_York" />
        </div>
      </div>
    </div>
  );
}

setInterval(() => {
  ReactDOM.render(<Board />, document.getElementById("root"));
}, 1000);
