const Movie = require("../models/Movie");

module.exports = {
    index: (req, res) => {
     Movie.find({})
        .sort({ createdAt: -1 })
        .limit(10)
        .then(movies => {
        res.render("app/index", { movies });
     });
    },
    // index: (req, res) => {
    //     Movie.find({})
    //     .sort({ createdAt: -1 })
    //     .then(movies => {
    //         res.render("app/index", { movies });
    //     });
    // }
};
 

 
 
