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

function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  // const [toggle, setToggle] = useState(false);
  return (
    <div className="container">
      <CartContext.Provider value={{ cart, dispatch }}>
        <Navbar title="shop-IT" />
        {/* 
        <button onClick={(e) => setToggle(!toggle)}>toggle</button>
        <hr />
        <Foo />
        <Bar />
        <Box>
          <Veg />
          <Veg />
        </Box>
        <Box>
          <p>p1</p>
          <p>p2</p>
        </Box>
        <hr /> 
        */}
        <CartView title="CartView" />
        <ProductList title="ProductList" />
      </CartContext.Provider>
    </div>
  );
}

export default App;
