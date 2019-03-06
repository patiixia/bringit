const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const Travel = require("../models/Travel");



router.post('/', (req, res, next) => {
//id viaje

function tripsOrdersRelated() {
  document.querySelector(".myTrips")
}


    Travel.find({userId: req.user._id} || {travelId: req.travel._id} ) 
    .then (travelinfo => {
        Order.find({deliveryTo: travelinfo.travelTo})
        .then(orderInfo=>  {
            res.json({"infoTravel":travelinfo, "infoOrders": orderInfo })
        })  
    })
    .catch(err => {
      res.status("403").json({"Mensaje":"La petición no ha podido ser realizada"})
    })
  
  })

  module.exports = router;