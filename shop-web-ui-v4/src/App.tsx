import React, { useReducer, useState } from "react";
import Bar from "./components/Bar";
import Box from "./components/Box";
import CartBadge from "./components/CartBadge";
import CartView from "./components/CartView";
import Foo from "./components/Foo";
import Navbar from "./components/Navbar";
import NonVeg from "./components/NonVeg";
import ProductList from "./components/ProductList";
import Veg from "./components/Veg";
import CartContext from "./contexts/CartContext";
import cartReducer from "./reducers/cart";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div className="container">
      <BrowserRouter>
        <CartContext.Provider value={{ cart, dispatch }}>
          <Navbar title="shop-IT" />
          <hr />
          <CartBadge />
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<ProductList title="products" />}
            />
            <Route path="/cart-view" element={<CartView title="cart view" />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
