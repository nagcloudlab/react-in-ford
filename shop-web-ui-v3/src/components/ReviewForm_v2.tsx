import React, { useState, useRef } from "react";

function ReviewForm(props: any) {
  const { onNewReview } = props;
  const [isOpened, setIsOpened] = useState(false);
  const [review, setReview] = useState({ stars: 1, author: "", body: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setReview({ ...review, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onNewReview) {
      console.log(review);
      onNewReview({ review });
      setIsOpened(false);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Stars</label>
              <select
                className="form-control"
                id="stars"
                onChange={handleChange}
                value={review.stars}
              >
                {[1, 2, 3, 4, 5].map((value: number) => {
                  return (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
              {review.stars < 3 ? "Poor" : "Good"}
            </div>
            <div className="form-group">
              <label>Author</label>
              <input
                id="author"
                type="text"
                className="form-control"
                onChange={handleChange}
                value={review.author}
              />
            </div>
            <div className="form-group">
              <label>Body</label>
              <textarea
                id="body"
                className="form-control"
                onChange={handleChange}
                value={review.body}
              ></textarea>
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
