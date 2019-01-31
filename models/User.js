const mongoose = require("../db/connection")
const Schema = mongoose.Schema


const UserSchema = new Schema({
    email: String,
    pasword: String,
})

 mongoose.model("User", UserSchema)
 
 module.exports = mongoose