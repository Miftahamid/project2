const mongoose = require('./../models/Movie')
 
  
module.exports = {
    index: (req, res) => {
        res.render(console.log("The index is rendering"))
    },
    new: (req, res) => {
        res.render("movie/new")
    },
    create: (req, res) => {
        User.create({
            name: req.body.name,
            length: req.body.length
        }).then(newMovie => {
            console.log(newMovie)
            res.send(console.log(newMovie))
        })
    },
    // show: function (req, res) {
	// 	// displaying the data for a single to do
	// },
	// edit: function (req, res) {
	// 	// rendering the form to update an existing to do
	// },
	// update: function (req, res) {
	// 	// updating a to do in the database
	// },
	// destroy: function (req, res) {
	// 	// deleting a to do
	// }
    
}
