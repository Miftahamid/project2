const User = require('../models/user');
const { Photo } = require('../models/photo');
const bcrypt = require('bcrypt-nodejs');

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

//find everything and remove it so that we can start from scrach 
  User.find({}).remove(() => {
    Photo.find({}).remove(() => {
      //Now lets create a user with an emai and password 
      User.create({
        local: {
          email: "Hey@gmail.com",
          password: createPassword("bunny")
        }
        //.then is a Promise so it doesn't render right away 
    }).then(user => {
      Promise.all([
        //this part i am createing the an id for the photo and and pushing it to the model photo
        Photo.create({
          path: "TestPic.jpeg",
          author: user._id,
        }).then(photo => {
          user.photos.push(photo)
        })
      ])
    })
    

    })
  })
  
