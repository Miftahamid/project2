const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/movies");
mongoose.Promise = Promise;
module.exports = mongoose;
