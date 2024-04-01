import React, { useState } from "react";
import Review from "./Review";

function Product(props: any) {
  let { product } = props;
  const [currentTab, setCurrentTab] = useState(1);
  const [reviews, setReviews] = useState([
    {
      stars: 5,
      body: "I love this product",
      author: "Who1",
    },
    {
      stars: 1,
      body: "I hate this product",
      author: "Who2",
    },
  ]);
  const handleTabChange = (tabIndex: number) => {
    setCurrentTab(tabIndex);
  };

  const renderReviews = () => {
    return reviews.map((review: any, index: number) => {
      return (
        <div key={index}>
          <Review review={review} />
        </div>
      );
    });
  };

  const renderTabPanel = (product: any) => {
    let panel;
    switch (currentTab) {
      case 1:
        panel = <div>{product.description}</div>;
        break;
      case 2:
        panel = <div>Not Yet</div>;
        break;
      case 3:
        panel = <div>{renderReviews()}</div>;
        break;
      default:
        panel = null;
    }
    return panel;
  };
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
              <a
                className={`nav-link ${currentTab === 1 ? "active" : ""}`}
                href="#"
                onClick={(e) => handleTabChange(1)}
              >
                Description
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentTab === 2 ? "active" : ""}`}
                href="#"
                onClick={(e) => handleTabChange(2)}
              >
                Specification
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentTab === 3 ? "active" : ""}`}
                href="#"
                onClick={(e) => handleTabChange(3)}
              >
                Reviews
              </a>
            </li>
          </ul>
          {renderTabPanel(product)}
        </div>
      </div>
    </div>
  );
}

export default Product;
