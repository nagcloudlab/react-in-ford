import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";

function CartView(props: any) {
  let { cart = [], dispatch } = useContext(CartContext);

  const handleDeleteCartLine = (id: any) => {
    let index = cart.findIndex((item: any) => item.id === id);
    dispatch({ type: "REMOVE_FROM_CART", payload: { item: cart[index] } });
  };

  const handleQty = (item: any, qty: number) => {
    dispatch({ type: "UPDATE_QTY", payload: { item, qty } });
  };

  const renderCartLines = () => {
    return cart.map((cartLine: any, index: number) => {
      let { item, qty } = cartLine;
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>
            <div className="d-flex justify-content-between">
              <button onClick={(e) => handleQty(item, -1)}>
                <i className="fa fa-minus"></i>
              </button>
              {qty}
              <button onClick={(e) => handleQty(item, 1)}>
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </td>
          <td>&#8377; {item.price}</td>
          <td>&#8377; {item.price * qty}</td>
          <td>
            <button
              onClick={(e) => handleDeleteCartLine(cartLine.id)}
              className="btn btn-sm btn-danger"
            >
              delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="card">
      <div className="card-header">Item(s) in cart</div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S-No</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{renderCartLines()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default CartView;
