const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/User');
const bcrypt        = require('bcrypt');

passport.use(new LocalStrategy({
    usernameField: 'email', //cambiamos el valor a "email" para que coja ese valor como loggin
    passwordField: 'password'
  }, 
  (email, password, done) => { //cambiamos el valor a "email" para que coja ese valor como loggin
    User.findOne({ email }) //cambiamos el valor a "email" para que coja ese valor como loggin
    .then(foundUser => {
      if (!foundUser) {
        done(null, false, { message: 'Incorrect email' });
        return;
      }

      if (!bcrypt.compareSync(password, foundUser.password)) {
        done(null, false, { message: 'Incorrect password' });
        return;
      }

      done(null, foundUser);
    })
    .catch(err => done(err));
  }
));
