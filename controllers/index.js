const Movie = require('../models/Movie')

module.exports = {
    redirect: (req, res) => {
        res.redirect('/')
        console.log("I was redirected here")
    },
    index: (req, res) => {
        Movie.find({})
        .sort({ createdAt: -1 })
        .then(movies => {
            res.render('index', movies)
        })
    },
    // show: (req, res) => {
    //     Note.findOne({_id: req.params.id })
    //     .then(movies => {
    //         res.render('show', movies)
    //     })
    // }
}