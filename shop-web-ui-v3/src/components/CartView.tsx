import React, { useContext, useMemo, useState } from "react";
import CartContext from "../contexts/CartContext";
import { withCard } from "../hoc";
import { useOnline } from "../hooks/index";

function CartView(props: any) {
  // console.log("CartView render");
  let { cart = [], dispatch } = useContext(CartContext);
  const online = useOnline();

  const handleDeleteCartLine = (id: any) => {
    let index = cart.findIndex((item: any) => item.id === id);
    dispatch({ type: "REMOVE_FROM_CART", payload: { item: cart[index] } });
  };

  const handleQty = (item: any, qty: number) => {
    dispatch({ type: "UPDATE_QTY", payload: { item, qty } });
  };

  const totalAmountOfCartLines = useMemo(() => {
    // console.log("calculating total amount");
    return cart.reduce((acc: any, cartLine: any) => {
      return acc + cartLine.item.price * cartLine.qty;
    }, 0);
  }, [cart]);

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
    <>
      {!online && <div className="alert alert-danger">You are offline</div>}
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
        <tfoot>
          <tr>
            <td colSpan={4}>Total Amount</td>
            <td>&#8377; {totalAmountOfCartLines}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default withCard(CartView);
