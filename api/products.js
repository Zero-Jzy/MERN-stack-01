const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Products = require('../models/Products');

router.get('/', (req, res) => {
  Products.find().then(products => {
    res.json(products)

  })
})

// router.post('/', (req, res) => {
//   var products = req.body.products
//   var a = products.map(p => {
//     return new Products(p).save()
//   })

//   Promise.all(a).then(values => {
//     console.log(values)
//   })
// })

module.exports = router;