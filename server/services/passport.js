const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// a collection of users in DB
const User = mongoose.model('users');

// Call serializeuser with the user to generate the identifying piece of info
// To turn into a cookie
passport.serializeUser((user, done) => {
  done(null, user.id); // user.id is the id given in the MongoDB
});

// Pass it back to the user from the given cookie
// id from the cookie
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // We already have a record with the given profile ID
          // (error, user)
          done(null, existingUser);
        } else {
          // We don't have a user record with this ID, make a new record
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
      // console.log('access token', accessToken);
      // console.log('refresh Token', refreshToken);
      // console.log('profile:', profile);
    }
  )
);
