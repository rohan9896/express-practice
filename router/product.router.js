const express = require('express');
const router = express.Router();

const products = [
  {name: "japani juta", price: 2000, inCart: true, id: 1},
  {name: "jalebi", price: 500, inCart: false , id: 2},
  {name: "kala chasma", price: 500, inCart: true , id: 3},
  {name: "laal chaddi", price: 500, inCart: true , id: 4},
]

router.get('/', function (req, res) {
  res.json({products})
})

module.exports = router