const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(express.json())

const productRouter = require('./router/product.router')
const categoryRouter = require("./router/category.router")

app.use("/products", productRouter)

app.use("/categories", categoryRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get("/cart", (req, res) => {
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



app.listen(3000, () => {
  console.log('server started');
});