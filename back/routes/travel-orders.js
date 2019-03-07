const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const Travel = require("../models/Travel");


router.post('/', (req, res, next) => {

Travel.find({_id: req.body.id})
.then (travelinfo => {
 
  Order.find({deliveryTo: travelinfo[0].travelTo})
  .populate('userId')
  .then (orderinfo => {
    res.json({"infoTravel": travelinfo, "infoOrders": orderinfo })
  })
})

.catch(err => {
      res.status("403").json({"Mensaje":"La petición no ha podido ser realizada"})
  
})  
  
  })

  module.exports = router;