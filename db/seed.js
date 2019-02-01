// const User = require("../models/User");
// const { Movie } = require("../models/Movie");
// const bcrypt = require("bcrypt-nodejs");

// const createPassword = password =>
//   bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

// User.find({}).remove(() => {
//   Movie.find({}).remove(() => {
//     let bugs = User.create({
//       local: {
//         email: "bugsbunny@gmail.com",
//         password: createPassword("bugsbunny")
//       }
//     }).then(user => {
//       Promise.all([
//         Movie.create({
//           content: "eh, what's up doc?",
//           author: user._id
//         }).then(movie => {
//           user.movies.push(movie);
//         }),
//         Movie.create({
//           content: "That's all, folks!",
//           author: user._id
//         }).then(movie => {
//           user.movies.push(movie);
//         })
//       ]).then(() => {
//         user.save(err => console.log(err));
//       });
//     });

//     let daffy = User.create({
//       local: {
//         email: "daffyduck@gmail.com",
//         password: createPassword("daffyduck")
//       }
//     }).then(user => {
//       Promise.all([
//         Movie.create({
//           content: "Who's this Duck Dodgers any how?",
//           author: user._id
//         }).then(movie => {
//           user.movies.push(movie);
//         }),
//         Movie.create({
//           content: "You're dethpicable.",
//           author: user._id
//         }).then(movie => {
//           user.movies.push(movie);
//         })
//       ]).then(() => {
//         user.save(err => console.log(err));
//       });
//     });

//     let elmer = User.create({
//       local: {
//         email: "elmerfudd@gmail.com",
//         password: createPassword("elmerfudd")
//       }
//     }).then(user => {
//       Promise.all([
//         Movie.create({
//           content:
//             "Shh. Be vewy vewy quiet. I'm hunting wabbits! Huh-huh-huh-huh!",
//           author: user._id
//         }).then(movie => {
//           user.movies.push(movie);
//         }),

//         Movie.create({
//           content: "Kiww da wabbit!",
//           author: user._id
//         }).then(movie => {
//           user.movies.push(movie);
//         })
//       ]).then(() => {
//         user.save(err => console.log(err));
//       });
//     });
//   });
// });


const mongoose = require('./connection')
const seeds = require('./seed.json')

// const Story = mongoose.model('Story')
const Movie = require("../models/Movie")
mongoose.Promise = Promise

Movie.remove({})
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

// Movie.remove({}).then(() => {
// //   console.log('Dropped the DB')
//   Movie.collection.insert(seeds).then(seededEntries => {
//     // console.log(seededEntries)
//     mongoose.connection.close()
//     // process.exit()
//   })
// })