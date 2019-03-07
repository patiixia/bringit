const express = require('express');
const router  = express.Router();
const User = require("../models/User")
// include CLOUDINARY:
const uploader = require('../configs/cloudinary-setup');

router.post('/auth/upload', uploader.single("imageUrl"), (req, res, next) => {
  console.log('ruta del servidor')
    if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
    }
    // get secure_url from the file object and save it in the 
    // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
    User.findByIdAndUpdate(req.session.passport.user, {imageUrl: req.file.secure_url}, function(err, data){
      res.status(200).json({ imageUrl: req.file.secure_url });
    })
    
})

module.exports = router;