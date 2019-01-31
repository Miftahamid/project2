const mongoose = require("../db/connection");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  local: {
    email: String,
    password: String
  },
  movies: [
    {
      type: Schema.Types.ObjectId,
      ref: "Movie"
    }
  ]
});

UserSchema.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model("User", UserSchema);
