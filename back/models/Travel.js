const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const travelSchema = new Schema({
  // travelTo y travelFrom hay que meterlos como si fuese un mismo key?
  userId: String,
  travelFrom: String,
  travelTo: String,
  travelDate: String
});

const Travel = mongoose.model('Travel', travelSchema);
module.exports = Travel;