const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(express.json())

const productRouter = require('./router/product.router')
const categoryRouter = require("./router/category.router")
const cartRouter = require("./router/cart.router")

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use("/products", productRouter)

app.use("/categories", categoryRouter)


app.use("/cart", cartRouter)



app.listen(3000, () => {
  console.log('server started');
});