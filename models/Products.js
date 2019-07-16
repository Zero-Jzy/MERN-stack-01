const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProductsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  descreption: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  size: []
});

module.exports = Products = mongoose.model('products', ProductsSchema);
