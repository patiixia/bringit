const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const messagesSchema = new Schema({
  message: String,
  orderuserId: String,
  traveluserId: String,
  orderDate: { 
    type: Date,
    default: Date.now
  }
});

const Messages = mongoose.model('Messages', messagesSchema);
module.exports = Messages;