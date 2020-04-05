const passport = require('passport');
const User = require('../models/user');

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({usernameField: 'email',},
    function(email, password, done) {
      // console.log('email', email);
      // console.log('password', password);
      User.findOne({ email }, function (err, user) {
        if (err) { 
          return done(err); 
        }
        if (!user) { 
          return done(null, false);
         }
         // console.log('user', user);
        if (user.password != password) { 
          return done(null, false); 
        }
        return done(null, user);
      });
    }
  ));

  passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });
  
  passport.deserializeUser(function(id, cb) {
    User.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });