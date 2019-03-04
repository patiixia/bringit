const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

router.post('/', (req, res, next) => {
    const order = {
      userId: req.user._id,
      productLink: req.body.productLink,
      productImage: req.body.product,
      productName: req.body.productName,
      productDetails: req.body.productDetails,
      price: req.body.price,
      quantity: req.body.quantity,
      amount: req.body.price*req.body.quantity,
      deliveryFrom: req.body.deliveryFrom,
      deliveryTo: req.body.deliveryTo,
      deliveryDate: req.body.deliveryDate
    }
    // if (order.productLink === "" || order.productImage === "" || order.productName === "" || order.productDetails === "" || order.price === "" || order.quantity === "" || order.deliveryFrom === "" || order.deliveryTo === "" ||order.deliveryDate === "") {
    
    //     res.status("500").json({message: "Campos no completados"});
    //     return;
    //   }

    Order.create(order)
    .then(response => {
    res.status("200").json(response)
  
    })
    .catch(err => {
    res.status("403").json({"Mensaje":"No ha podido ser creado"})
     })

});

router.get('/', (req, res, next) => {

    Order.find({userId: req.user._id})
    .then (response => {
      res.status("200").json(response)
    
    })
    .catch(err => {
      res.status("403").json({"Mensaje":"La petición no ha podido ser realizada"})
    })
  
  });

  module.exports = router;







