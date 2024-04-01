import React, { useReducer } from "react";
import CartBadge from "./components/CartBadge";
import CartView from "./components/CartView";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartContext from "./contexts/CartContext";
import cartReducer from "./reducers/cart";

function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <div className="container">
      <CartContext.Provider value={{ cart, dispatch }}>
        <Navbar title="shop-IT" />
        <CartView />
        <ProductList />
      </CartContext.Provider>
    </div>
  );
}

export default App;
