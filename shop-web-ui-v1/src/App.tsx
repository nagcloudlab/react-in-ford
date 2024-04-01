import React, { useState } from "react";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 1000.0,
      description: "Mac pro Laptop",
      imagePath: "images/laptop.png",
    },
    {
      id: 2,
      name: "Mobile",
      price: 500.0,
      description: "iphone pro Laptop",
      imagePath: "images/mobile.png",
    },
  ]);
  const [currentTab, setCurrentTab] = useState(1);
  const handleTabChange = (tabIndex: number) => {
    setCurrentTab(tabIndex);
  };

  const renderTabPanel = (product: any) => {
    let panel;
    switch (currentTab) {
      case 1:
        panel = <div>{product.description}</div>;
        break;
      case 2:
        panel = <div>Not Yet</div>;
        break;
      case 3:
        panel = <div>None Yet</div>;
        break;
      default:
        panel = null;
    }
    return panel;
  };

  const renderProduct = (product: any) => {
    return (
      <div className="list-group-item m-2">
        <div className="row">
          <div className="col-4">
            <img src={product.imagePath} alt="product" className="img-fluid" />
          </div>
          <div className="col-8">
            <div>{product.name}</div>
            <div>${product.price}</div>
            <button className="btn btn-primary">Buy</button>
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
  };

  const renderProducts = () => {
    return products.map((product) => {
      return (
        <div key={product.id} className="list-group">
          {renderProduct(product)}
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="display-1">shop-IT</div>
      <hr />
      {renderProducts()}
    </div>
  );
}

export default App;
