const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const travelSchema = new Schema({
  userId: String,
  travelFrom: String,
  travelTo: String,
  travelDate: String
});

const Travel = mongoose.model('Travel', travelSchema);
module.exports = Travel;