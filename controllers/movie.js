// const Movie = require("../models/Movie");

// module.exports = {
//   index: (req, res) => {   
//     Movie.find({})
//     .sort({ createdAt: -1 })
//     .then( movies => {
//         res.render("movie/index", { movies })
//     })
 
//    },
//   show: (req, res) => {
//      Movie.findOne({_id: req.params.id})
//       .populate("author comments.author")
//       .exec(function(err, movie) {
//        res.render("movie/show", movie);
//      })
//   },
//   addMovie: (req, res) => {
//     res.render("movie/newMovieForm")
//   },
//   create: (req, res) => {
//     Movie.create({
//       movie: req.body.movie,
//       content: req.body.content
//     }).then(movie => {
//         res.redirect("/movie/index")
//       });
//     },
  
//   update: (req, res) => {
//     let { content } = req.body;
//     Movie.findOneAndUpdate({ _id: req.params.id }).then(movie => {
//       movie.comments.push({
//         content,
//         author: req.body._id
//       });
//       movie.save(err => {
//         res.redirect(`/movie/${movie._id}`);
//       });
//     });
//   },
//   delete: (req, res) =>
//     Movie.findByIdAndDelete({_id: req.params.id})
//     .then( then => {
//         console.log('Deletion successful');
//         res.redirect("/")
//     }),

//     // router.get('/delete/:id', (req, res) => {
//     //   Employee.findByIdAndRemove(req.params.id, (err, doc) => {
//     //       if (!err) {
//     //           res.redirect('/employee/list');
//     //       }
//     //       else { console.log('Error in employee delete :' + err); }
//     //   });
//   requireAuth: function(req, res, next) {
//     if (req.isAuthenticated()) {
//       next();
//     } else {
//       res.redirect("/");
//     }
//   }
// };
