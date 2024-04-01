import React, { useState } from "react";
import CartBadge from "./components/CartBadge";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  const [cart, setCart] = useState([] as Array<any>);
  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };
  return (
    <div className="container">
      <Navbar title="shop-IT" />
      <CartBadge cart={cart} />
      <ProductList onBuy={addToCart} />
    </div>
  );
}

export default App;
