import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";

function CartBadge(props: any) {
  const { cart } = useContext(CartContext);
  return (
    // <div className="card mt-1">
    // <div className="card-body">
    <h6 className="card-subtitle mb-2 text-muted">
      You have, <i className="fa fa-shopping-cart"></i> &nbsp;
      {cart.length} items in cart
    </h6>
    // </div>
    // </div>
  );
}

export default CartBadge;
