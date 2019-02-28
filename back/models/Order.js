const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const orderSchema = new Schema({
  userId: String,
  orderId: String,
  productLink: String,
  productImage: String,
  productName: String,
  productDetails: String,
  price: Number,
  amount: Number,
  deliveryFrom: String,
  deliveryTo: String,
  orderDate: { 
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;