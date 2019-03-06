const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const orderSchema = new Schema({
  userId: String,
  productLink: String,
  productImage: {type:String, default: 'https://image.flaticon.com/icons/svg/679/679720.svg'},
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