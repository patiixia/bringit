const express = require("express");
const router = express.Router();

const passport = require('passport');
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// REVISADO con la learning, funciona. Guarda datos en Mongodb
router.post("/signup", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const lastName = req.body.lastName;
  
  if (email === "" || password === "" || name === "" || lastName === "") {
      res.status(400).json({ message: 'Provide username, password, name and last name' });
    return;
  }

  if(password.length < 1){
    res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' });
    return;
}

  User.findOne({ email }, "email", (err, foundUser) => {

    if(err){
        res.status(500).json({message: "Email check went bad."});
        return;
    }

    if (foundUser) {
      console.log("3")
        res.status(400).json({ message: 'Email taken. Please, log in.' });
        return;
    }


    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email: email,
      password: hashPass,
      name: name,
      lastName: lastName
    });

    newUser.save(err => {
    if (err) {
        res.status(400).json({ message: 'Saving user to database went wrong.' });
        return;
      }

    req.login(newUser, (err) => {

        if (err) {
            res.status(500).json({ message: 'Login after signup went bad.' });
            return;
        }
    console.log(newUser)    
    res.status(200).json(newUser);
      });
    });
  });
});

// REVISADO CON LA LEARNING, probado con MongoDB funciona.
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
          res.status(500).json({ message: 'Something went wrong authenticating user' });
          return;
      }
    if (!theUser) {
       
        res.status(401).json(failureDetails);
        return;
    }   
  req.login(theUser, (err) => {
    if (err) {
        res.status(500).json({ message: 'Session save went bad.' });
        return;
    }
    res.status(200).json(theUser);
  });
})(req, res, next);
});

// REVISADO CON LA LEARNING
router.post('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Log out success!' });
});

/////////////////////// REVISAR CON LA SESIÓN
router.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
      res.status(200).json(req.user);
      return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});


module.exports = router;
