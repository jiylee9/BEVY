const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String, 
    required: true, 
    unique: false, 
    trim: false, 
    minlength: 3
  }, 

  major: {
    type: String, 
    required: false
  }, 

  school: {
    type: String, 
    required: false
  }, 

  age: {
    type: Number, 
    required: false
  }, 

  bio: {
    type: String, 
    required: false
  },
  
  contact: {
    type: String, 
    required: false
  }

  


}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;