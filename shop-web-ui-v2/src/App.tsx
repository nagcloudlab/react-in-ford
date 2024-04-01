import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="container">
      <Navbar title="shop-IT" />
      <ProductList />
    </div>
  );
}

export default App;
