 

const mongoose = require('./connection')
const seeds = require('./seed.json')

// const Story = mongoose.model('Story')
const Movie = require("../models/Movie")
mongoose.Promise = Promise

Movie.find({}).remove({})
 .then(_ => {
   Movie.collection.insert(seeds)
     .then(movies => {
       console.log(seeds)
       process.exit()
     })
     .catch(err => {
       console.log(err)
     })
 })


 User.find({}).remove(() => {
  Photo.find({}).remove(() => {
    User.create({
      local: {
        email: "bugsbunny@gmail.com",
        password: createPassword("bugsbunny")
      }
  }).then(user => {
    Promise.all([
      Photo.create({
        path: "TestPhoto.jpeg",
        author: user._id,
      }).then(photo => {
        user.photos.push(photo)
      })
    ])
  })
  

  })
})