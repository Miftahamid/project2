const Movie = require("../models/Movie");

module.exports = {
  index: (req, res) => {   
    Movie.find({})
    .sort({ createdAt: -1 })
    .then( movies => {
        res.render("movie/index", { movies })
    })
 
   },
  show: (req, res) => {
     Movie.findOne({_id: req.params.id})
      .populate("author comments.author")
      .exec(function(err, movie) {
       res.render("movie/show", movie);
     })
  },
  addMovie: (req, res) => {
    res.render("movie/newMovieForm")
  },
  create: (req, res) => {
    Movie.create({
      movie: req.body.movie.content,
      content: req.user._id
    }).then(movie => {
        res.redirect("/movie/index")
      });
    },
  
  update: (req, res) => {
    let { content } = req.body;
    Movie.findOneAndUpdate({ _id: req.params.id }).then(movie => {
      movie.comments.push({
        content,
        author: req.user._id
      });
      movie.save(err => {
        res.redirect(`/movie/${movie._id}`);
      });
    });
  },
  delete: (req, res) =>
    Movie.findOneAndDelete({_id: req.params.id})
    .then( then => {
        console.log('Deletion successful');
        res.redirect("/")
    }),

  requireAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/");
    }
  }
};
