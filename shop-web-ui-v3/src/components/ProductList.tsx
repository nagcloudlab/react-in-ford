import React, { useState } from "react";
import { withCard } from "../hoc";
import { useOnline } from "../hooks";
import Product from "./Product";

function ProductList(props: any) {
  const [products] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 1000.0,
      description: "Mac pro Laptop",
      imagePath: "images/laptop.png",
    },
    {
      id: 2,
      name: "Mobile",
      price: 500.0,
      description: "iphone pro Laptop",
      imagePath: "images/mobile.png",
    },
  ]);
  const online = useOnline();

  const renderProduct = (product: any) => {
    return (
      <div className="list-group-item m-2">
        <Product product={product} />
      </div>
    );
  };

  const renderProducts = () => {
    return products.map((product: any) => {
      return (
        <div key={product.id} className="list-group">
          {renderProduct(product)}
        </div>
      );
    });
  };

  return (
    <>
      {!online && <div className="alert alert-danger">You are offline</div>}
      {renderProducts()}
    </>
  );
}

export default withCard(ProductList);
