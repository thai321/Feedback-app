const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

// Create a new userSchema in User model
mongoose.model('users', userSchema);
