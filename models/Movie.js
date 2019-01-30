const mongoose = require("../db/connection")
const Schema = mongoose.Schema


const MovieSchema = new Schema({
    name: String,
    createdAt: {
        type: Date,
        default: Date.now()
      },
    length: Number,
})

 
 module.exports = mongoose.model("Movie", MovieSchema)