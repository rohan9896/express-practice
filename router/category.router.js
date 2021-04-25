const express = require("express");
const router = express.Router();

const categories = [
  { name: "T-shirt", noOfProducts: 10, id: 1 },
  { name: "Shirt", noOfProducts: 100, id: 2 },
  { name: "Shoes", noOfProducts: 16, id: 3 },
  { name: "Jeans", noOfProducts: 50, id: 4 },
]


let newId = 5;

router.route("/")
  .get((req, res) => {
    res.json({ categories });
  })
  .post((req, res) => {
    const { name, noOfProducts } = req.body;
    console.log("name", name)
    console.log("noOfProducts", noOfProducts)
    const category = { id: ++newId, name, noOfProducts };
    categories.push(category);
    res.json({ success: true, category })
  })

router.route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    const categoryObj = categories.find(category => category.id === parseInt(id));
    res.json(categoryObj);
  })
  .post((req, res) => {
    const { id } = req.params;
    const updateCategory = req.body;

    categories.forEach(category => {
      console.log("line 68")
      if (category.id === parseInt(id)) {
        console.log("line 70")
        Object.keys(updateCategory).forEach(key => {
          console.log("line 72")
          if (key in category) {
            console.log("line 74")
            category[key] = updateCategory[key];
          }
        })
      }
    })
    res.json({ success: true, categories })
  })


module.exports = router;