var express = require("express");
var router = express.Router();

// GET /api/v1/products
// Accept: application/json

const products = [
  {
    id: 1,
    name: "laptop",
    price: 50000,
    imagePath: "images/laptop.png",
    description: "New Macbook Pro",
    specification: {
      brand: "Apple",
      model: "Macbook Pro",
      processor: "Intel Core i7",
      memory: "16GB",
      storage: "512GB SSD",
      screen: "13-inch Retina Display",
      graphics: "Intel Iris Plus Graphics 655",
      os: "macOS",
    },
    reviews: [
      {
        stars: 5,
        author: "John Doe",
        body: "Great laptop. I love it!",
      },
      {
        stars: 4,
        author: "Jane Doe",
        body: "It's a good laptop.",
      },
    ],
  },
  {
    id: 2,
    name: "mobile",
    price: 20000,
    imagePath: "images/mobile.png",
    description: "New iPhone 11",
    specification: {
      brand: "Apple",
      model: "iPhone 11",
      processor: "A13 Bionic",
      memory: "4GB",
      storage: "64GB",
      screen: "6.1-inch Liquid Retina Display",
      camera: "Dual 12MP Ultra Wide and Wide cameras",
      os: "iOS",
    },
    reviews: [
      {
        stars: 5,
        author: "John Doe",
        body: "Great phone. I love it!",
      },
    ],
  },
];

router.get("/", function (req, res, next) {
  res.status(200).json(products);
});

// GET /api/v1/products/1/reviews
// Accept: application/json

router.get("/:id/reviews", function (req, res, next) {
  const id = parseInt(req.params.id);
  const product = products.find((product) => product.id === id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json(product.reviews);
});

// POST /api/v1/products/1/reviews
// Content-Type: application/json

router.post("/:id/reviews", function (req, res, next) {
  const id = parseInt(req.params.id);
  const product = products.find((product) => product.id === id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  const review = req.body;
  product.reviews.push(review);
  res.status(201).json(review);
});

module.exports = router;
