import React from "react";

interface Props {
  params: {
    productId: string;
    reviewId: string;
  };
}

function Review({ params }: Props) {
  return (
    <div>
      <h1>Review Page</h1>
      <p>Product ID: {params.productId}</p>
      <p>Review ID: {params.reviewId}</p>
    </div>
  );
}

export default Review;
