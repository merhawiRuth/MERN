const mongoose = require('mongoose');

const UserSchema = new mangoose.Schema({
  name: {},
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  avatar: {
    type: String
  }
});
