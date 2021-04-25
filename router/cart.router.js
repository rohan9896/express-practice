const express = require("express");
const router = express.Router();

const products = [
  {name: "japani juta", price: 2000, inCart: true, id: 1},
  {name: "jalebi", price: 500, inCart: false , id: 2},
  {name: "kala chasma", price: 500, inCart: true , id: 3},
  {name: "laal chaddi", price: 500, inCart: true , id: 4},
]

router.get("/", (req, res) => {
  const cartPage = `
  <h1>CArt</h1>
  ${products.filter(product => product.inCart === true).map(product => `<h3>${product.name}- price: ${product.price}</h3>`)
  }
  <h1>Total Price - 
  ${products.reduce((accumulator, currVal) => {
    return accumulator + currVal.price;
  }, 0) }</h1>
  `
  res.send(cartPage)
})

module.exports = router;