import React from "react";

import { notFound } from "next/navigation";

function ProductDetail({ params }: { params: { productId: string } }) {
  if (parseInt(params.productId) <= 0) {
    notFound();
  }
  return (
    <div>
      <h1>Product Detail page</h1>
      <p>Product ID: {params.productId}</p>
    </div>
  );
}

export default ProductDetail;
