import React, { useContext, useState, useCallback, useEffect } from "react";
import CartContext from "../contexts/CartContext";
import Button from "./Button";
import Review from "./Review";
import ReviewForm from "./ReviewForm_v2";

import { getReviews, addReview } from "../api/products";

function Product(props: any) {
  let { product, onBuy } = props;
  const { dispatch, cart } = useContext(CartContext);
  const [currentTab, setCurrentTab] = useState(1);
  const [reviews, setReviews] = useState([] as any);

  const handleNewReview = useCallback((e: any) => {
    console.log(e);
    let { review } = e;
    console.log(review);
    const addNewReview = async () => {
      const response = await addReview(product.id, review);
      setReviews([response.data, ...reviews]);
    };
    addNewReview();
  }, []);

  const handleTabChange = useCallback((tabIndex: number) => {
    setCurrentTab(tabIndex);
  }, []);

  useEffect(() => {
    if (currentTab === 3) {
      const fetchReviews = async () => {
        const response = await getReviews(product.id);
        console.log(response.data);
        setReviews([...response.data]);
      };
      fetchReviews();
    }
  }, [currentTab]);

  const handleBuy = () => {
    const action = {
      type: "ADD_TO_CART",
      payload: { item: product, qty: 1 },
    };
    dispatch(action);
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
        panel = (
          <div>
            <pre>{JSON.stringify(product.specification, null, 4)}</pre>
          </div>
        );
        break;
      case 3:
        panel = (
          <>
            <ReviewForm onNewReview={handleNewReview} />
            <div>{renderReviews()}</div>
          </>
        );
        break;
      default:
        panel = null;
    }
    return panel;
  };

  const isItemInCart =
    cart.findIndex((cartLine: any) => cartLine.item.id === product.id) !== -1;

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <img src={product.imagePath} alt="product" className="img-fluid" />
        </div>
        <div className="col-8">
          <div>{product.name}</div>
          <div>&#8377;{product.price}</div>
          {/* <button
            disabled={isItemInCart}
            onClick={(e) => handleBuy()}
            className="btn btn-primary"
          >
            Buy
          </button> */}
          <Button disabled={isItemInCart} onClick={(e) => handleBuy()}>
            Buy
          </Button>
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
