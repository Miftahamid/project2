//getting mongoose conneted to mongodb server
const mongoose = require('../db/connection');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;
//outline for the user 
const User = new Schema({
  local: {
    email: String,
    password: String
  },
  //this is the outline for  the photo 
  photos: [{
    path: String,
    type: Schema.Types.ObjectId,
    ref: 'Photo'
  }]
});

//this part is for the password 
User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);


