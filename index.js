const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./models')

const port = process.env.PORT || 3030

const app = express()
  .use(cors())
  .use(bodyParser.json())

const { Product } = db

app.get('/products', (req, res) => {
  const products = Product
    .findAll()
    .then((products) => {
      res.json(products)
    })
    .catch((err) => {
      console.error(err)
      res.status(500)
      res.json({ message: 'Oops! There was an error getting the products. Please try again' })
    })
})

app.get('/products/:id', (req, res) => {

  const products = Product
    .findById(req.params.id)

    .then((product) => {
      if (product) {
        res.json(product)
      } else {
        res.status(404)
        res.json({ message: 'product not found!' })
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(500)
      res.json({ message: 'Oops! There was an error getting the product. Please try again' })
    })
})

app.patch('/products/:id', (req, res) => {
  const products = Product
    .findById(req.params.id)
    .then((product) => {
      if (product) {
        product.score = req.body.score
        product
          .save()
          .then((updatedProduct) => {
            res.json(updatedProduct)
          })
          .catch((err) => {
            res.status(422)
            res.json({ message: err.message })
          })
      } else {
        res.status(404)
        res.json({ message: 'product not found!' })
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(500)
      res.json({ message: 'Oops! There was an error getting the product. Please try again' })
    })
})

app.listen(port, () => {
  console.log(`
Server is listening on ${port}.

Open http://localhost:${port}

to see the app in your browser.
    `)
})
