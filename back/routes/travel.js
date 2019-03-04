const express = require("express");
const router = express.Router();

const Travel = require("../models/Travel");

router.post('/', (req, res, next) => {
  const travel = {
    userId: req.user._id,
    travelFrom: req.body.travelFrom,
    travelTo: req.body.travelTo,
    travelDate: req.body.travelDate
  }
  
  if (travel.travelFrom === "" || travel.travelTo === "" || travel.travelDate === "") {
    
    res.status("500").json({message: "Campos no completados"});
    return;
  }


  Travel.create(travel)
  .then(response => {
    res.status("200").json(response)
  
  })
  .catch(err => {
    res.status("403").json({"Mensaje":"No ha podido ser creado"})
  })


});

router.get('/', (req, res, next) => {

  Travel.find({userId: req.user._id})
  .then (response => {
    res.status("200").json(response)
  
  })
  .catch(err => {
    res.status("403").json({"Mensaje":"La petición no ha podido ser realizada"})
  })

})


  
module.exports = router;