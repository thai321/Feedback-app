const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session'); // Enable cookie
const passport = require('passport'); // Tell passport to use the cookie

const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// ###### MIDDLEWARE ####### START
app.use(
  cookieSession({
    // How long it's going to exist before it can expires( convert to ms for 30 days)
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days, 24 hours, 60 mins, 60 seconds, 1000 ms
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
// ###### MIDDLEWARE ####### END

// routes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
