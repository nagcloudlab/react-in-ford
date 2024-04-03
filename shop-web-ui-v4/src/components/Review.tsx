import React from "react";

const renderStars = (stars: number) => {
  let starsArray = [];
  for (let i = 0; i < stars; i++) {
    starsArray.push(<i key={i} className="fa fa-star"></i>);
  }
  return starsArray;
};

function Review(props: any) {
  let { review } = props;
  return (
    <div>
      <div className="alert alert-danger">
        <span
          style={{
            color: "tomato",
            fontWeight: "bold",
          }}
        >
          {renderStars(review.stars)}
        </span>{" "}
        &mdash;
        <span>{review.author}</span>
        <hr />
        <div>{review.body}</div>
      </div>
    </div>
  );
}

export default Review;
