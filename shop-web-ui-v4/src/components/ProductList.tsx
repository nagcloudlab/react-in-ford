import React, { useEffect, useState } from "react";
import { withCard } from "../hoc";
import { useOnline } from "../hooks";
import Product from "./Product";

import { getProducts } from "../api/products";

function ProductList(props: any) {
  const [products, setProducts] = useState([]);
  const online = useOnline();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

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
