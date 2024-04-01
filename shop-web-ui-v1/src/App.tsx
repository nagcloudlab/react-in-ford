import React, { useState } from "react";

function App() {
  const [product] = useState({
    id: 1,
    name: "Laptop",
    price: 1000.0,
    description: "Mac pro Laptop",
    imagePath: "images/laptop.png",
  });

  const renderProduct = (product: any) => {
    return (
      <div>
        <div className="row">
          <div className="col-4">
            <img src={product.imagePath} alt="product" className="img-fluid" />
          </div>
          <div className="col-8">
            <div>{product.name}</div>
            <div>${product.price}</div>
            <button className="btn btn-primary">Buy</button>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Specification
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Reviews</a>
              </li>
            </ul>
            <p>{product.description}</p>
            <p>Not Yet</p>
            <p>None Yet</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="display-1">shop-IT</div>
      <hr />
      {renderProduct(product)}
    </div>
  );
}

export default App;
