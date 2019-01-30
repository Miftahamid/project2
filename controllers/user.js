const mongoose = require('./../models/User')

// const bookmark = mongoose.model('')
 
  
module.exports = {
    index: (req, res) => {
        res.render(console.log("The index is rendering"))
    },
    new: (req, res) => {
        res.render(console.log("the new is render"))
    },
    create: (req, res) => {
        User.create({
            name: req.body.name,
            eamil: req.body.eamil,
            password: req.body.password
        }).then(newUser => {
            console.log(newUser)
            res.send(console.log(newUser))
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
