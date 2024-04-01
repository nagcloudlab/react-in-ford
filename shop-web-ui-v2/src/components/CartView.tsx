import React from "react";

function CartView(props: any) {
  let { cart = [] } = props;

  const renderCartLines = () => {
    return cart.map((cartLine: any, index: number) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{cartLine.name}</td>
          <td></td>
          <td>{cartLine.price}</td>
          <td></td>
        </tr>
      );
    });
  };

  return (
    <div className="card">
      <div className="card-header">Item(s) in cart</div>
      <div className="card-body">
        <table className="table">
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
