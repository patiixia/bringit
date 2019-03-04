const express = require("express");
const router = express.Router();

const User = require("../models/User");


// para adquirir y mostrar el nombre y apellidos del usuario logueado?
router.get('/profile', (req, res, next) => {

    const user = req.user;
    res.render('profile', { title: 'profile', user: user });

  });

  



module.exports = router;
