const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const orderSchema = new Schema({
  userId: String,
  productLink: String,
  productImage: String,
  productName: String,
  productDetails: String,
  price: Number,
  quantity: Number,
  amount: Number,
  deliveryFrom: String,
  deliveryTo: String,
  deliveryDate: String
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;