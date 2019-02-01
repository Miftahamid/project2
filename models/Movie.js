const mongoose = require("../db/connection");
const Schema = mongoose.Schema;



const Movie = new Schema({
  movie: String,
  content: String,
  length: Number,
  createdAt: {
    type: Date,
    default: Date.now()
  }
  
});


// mongoose.model("Movie", Movie)
module.exports = mongoose.model("Movie", Movie)

