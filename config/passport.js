const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

module.exports = function(passport) {
  passport.serializeUser(function(user, callback) {
    callback(null, user.id);
  });

  passport.deserializeUser(function(id, callback) {
    User.findById(id, function(err, user) {
      callback(err, user);
    });
  });
// got this from passport lab
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, callback) {
        // check to see if this email is taken
        User.findOne({ "local.email": email }, function(err, user) {
          if (err) return callback(err);
          // if the user is already taken, send them a flash message
          if (user) {
            return callback(
              null,
              false,
              req.flash("signupMessage", "This email is already taken")
            );
          }
          // if the email is not taken, create a new user
          else {
            const newUser = new User();
            newUser.local.email = email;
            newUser.local.password = newUser.encrypt(password);

            newUser.save(function(err) {
              if (err) throw err;
              return callback(null, newUser);
            });
          }
        });
      }
    )
  );

  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, callback) {
        // search for a user with this email
        User.findOne({ "local.email": email }, function(err, user) {
          if (err) {
            return callback(err);
          }
          // if the user does not exist in DB, return an error
          if (!user) {
            return callback(
              null,
              false,
              req.flash("loginMessage", "No user found")
            );
          }
          // check password against saved password
          if (!user.validPassword(password)) {
            return callback(
              null,
              false,
              req.flash("loginMessage", "Incorrect password")
            );
          }
          // pass user into callback
          return callback(null, user);
        });
      }
    )
  );
};