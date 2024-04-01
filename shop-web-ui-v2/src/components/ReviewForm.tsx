import React, { useState } from "react";

function ReviewForm(props: any) {
  const [isOpened, setIsOpened] = useState(false);

  if (!isOpened) {
    return (
      <button onClick={(e) => setIsOpened(true)} className="btn btn-warning">
        <i className="fa fa-plus"></i>
      </button>
    );
  } else {
    return (
      <div className="card">
        <div className="card-header">Review Form</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Stars</label>
              <select className="form-control">
                {[1, 2, 3, 4, 5].map((value: number) => {
                  return (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label>Author</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Body</label>
              <textarea className="form-control"></textarea>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <button
                type="button"
                onClick={(e) => setIsOpened(false)}
                className="btn btn-danger"
              >
                cancel
              </button>
              <button className="btn btn-dark">submit</button>
            </div>
            <hr />
          </form>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
