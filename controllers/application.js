const Movie = require("../models/Movie");
 


module.exports = {
  index: (req, res) => {
    Movie.find({})
    .sort({ createdAt: -1 })
    .limit(10)
    .populate("author")
    .then(movies => {
        res.render("app/index", { movies });
        // console.log(Movie)
    });
  }
};
